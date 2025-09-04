import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { PasskeyFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type PasskeysQueryVariables = Types.Exact<{ [key: string]: never }>

export type PasskeysQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    passkeys: Array<{
      __typename?: 'Passkey'
      id: string
      externalId?: string | null
      label?: string | null
      createdAt: any
      signCount?: number | null
      isActive: boolean
      lastUsedAt?: any | null
      userAgent?: string | null
    }>
  } | null
}

export const PasskeysDocument = gql`
  query passkeys {
    me {
      id
      passkeys {
        ...passkey
      }
    }
  }
  ${PasskeyFragmentDoc}
`

/**
 * __usePasskeysQuery__
 *
 * To run a query within a React component, call `usePasskeysQuery` and pass it any options that fit your needs.
 * When your component renders, `usePasskeysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePasskeysQuery({
 *   variables: {
 *   },
 * });
 */
export function usePasskeysQuery(baseOptions?: Apollo.QueryHookOptions<PasskeysQuery, PasskeysQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PasskeysQuery, PasskeysQueryVariables>(PasskeysDocument, options)
}
export function usePasskeysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PasskeysQuery, PasskeysQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PasskeysQuery, PasskeysQueryVariables>(PasskeysDocument, options)
}
export function usePasskeysSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PasskeysQuery, PasskeysQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<PasskeysQuery, PasskeysQueryVariables>(PasskeysDocument, options)
}
export type PasskeysQueryHookResult = ReturnType<typeof usePasskeysQuery>
export type PasskeysLazyQueryHookResult = ReturnType<typeof usePasskeysLazyQuery>
export type PasskeysSuspenseQueryHookResult = ReturnType<typeof usePasskeysSuspenseQuery>
export type PasskeysQueryResult = Apollo.QueryResult<PasskeysQuery, PasskeysQueryVariables>
