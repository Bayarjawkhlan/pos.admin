import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type MeContactQueryVariables = Types.Exact<{ [key: string]: never }>

export type MeContactQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    email?: any | null
    phone?: any | null
    emails: Array<{ __typename?: 'UserEmail'; id: string; email: any; confirmed: boolean; isDefault: boolean }>
    phones: Array<{ __typename?: 'UserPhone'; id: string; phone: any; confirmed: boolean; isDefault: boolean }>
  } | null
}

export const MeContactDocument = gql`
  query meContact {
    me {
      id
      email
      emails {
        id
        email
        confirmed
        isDefault
      }
      phone
      phones {
        id
        phone
        confirmed
        isDefault
      }
    }
  }
`

/**
 * __useMeContactQuery__
 *
 * To run a query within a React component, call `useMeContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeContactQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeContactQuery(baseOptions?: Apollo.QueryHookOptions<MeContactQuery, MeContactQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeContactQuery, MeContactQueryVariables>(MeContactDocument, options)
}
export function useMeContactLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeContactQuery, MeContactQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeContactQuery, MeContactQueryVariables>(MeContactDocument, options)
}
export function useMeContactSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeContactQuery, MeContactQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MeContactQuery, MeContactQueryVariables>(MeContactDocument, options)
}
export type MeContactQueryHookResult = ReturnType<typeof useMeContactQuery>
export type MeContactLazyQueryHookResult = ReturnType<typeof useMeContactLazyQuery>
export type MeContactSuspenseQueryHookResult = ReturnType<typeof useMeContactSuspenseQuery>
export type MeContactQueryResult = Apollo.QueryResult<MeContactQuery, MeContactQueryVariables>
