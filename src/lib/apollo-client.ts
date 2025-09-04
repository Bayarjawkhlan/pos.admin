import { useAuthStore } from '@/modules/auth/store'
import { ApolloClient, ApolloLink, HttpLink, from as ApolloFrom, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { relayStylePagination, getMainDefinition } from '@apollo/client/utilities'
import { i18n } from '@lingui/core'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'
import { createClient } from 'graphql-ws'
import { toast } from 'sonner'
import { getDeviceId } from '@/lib/device-id'
import { clearToken, getPublicToken } from '@/lib/tokens/client-token-rotration'

const GTN_API_URL = import.meta.env.VITE_API_URL || ''

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (extensions?.code === 'UNAUTHENTICATED') {
        clearToken()
        useAuthStore.getState().logout()
        return
      }
      toast.error(message)
    })
  }

  if (networkError) {
    toast.error(networkError.message)
  }
})

const createWsLink = (): ApolloLink =>
  new GraphQLWsLink(
    createClient({
      lazy: true,
      retryAttempts: 1,
      url: `${GTN_API_URL}/graphql`,
      connectionParams: () => ({ accessToken: useAuthStore.getState().getAccessToken() })
    })
  )

const uri = `${GTN_API_URL}/graphql`

const createAuthLink = (): ApolloLink =>
  setContext(async (_, { headers, noAuth }) => {
    const accessToken = noAuth ? await getPublicToken() : await useAuthStore.getState().getAccessToken()
    if (!accessToken) throw new Error('No access token found. Please log in.')

    return {
      headers: {
        ...headers,
        'Accept-Language': i18n.locale || 'mn',
        authorization: `Bearer ${accessToken}`,
        'X-Device-ID': getDeviceId() || ''
      }
    }
  })

const createHttpLink = (): ApolloLink => {
  const uploadLink = createUploadLink({ uri })
  const standardLink = new HttpLink({ uri })

  return ApolloLink.split((operation) => operation.getContext().upload === true, uploadLink, standardLink)
}

const createSplitLink = (): ApolloLink => {
  const wsLink = createWsLink()
  const httpLink = createHttpLink()

  return ApolloLink.split(
    ({ query }) => {
      const def = getMainDefinition(query)
      return def.kind === 'OperationDefinition' && def.operation === 'subscription'
    },
    wsLink,
    httpLink
  )
}

const rsp = relayStylePagination(['filter', 'sort'])

const generateLinks = (): ApolloLink => {
  const splitLink = createSplitLink()
  const auth = createAuthLink()

  return ApolloFrom([errorLink, auth.concat(splitLink)])
}

export const apolloClient = new ApolloClient({
  link: generateLinks(),
  cache: new InMemoryCache({
    possibleTypes: {
      ZonableInterface: ['Country', 'State', 'District', 'Quarter'],
      Actor: ['User', 'Customer']
    },
    typePolicies: {
      Query: {
        fields: {
          jobLogs: rsp,
          countries: rsp,
          taxons: rsp,
          articles: rsp
        }
      },
      Attribute: {
        fields: {
          values: rsp
        }
      },
      Store: {
        fields: {
          socialComments: rsp
        }
      },
      Subscription: {
        fields: {
          jobUpdated: (rawVal: boolean) => rawVal ?? null
        }
      }
    }
  })
})
