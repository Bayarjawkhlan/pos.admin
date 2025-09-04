import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type BanksQueryVariables = Types.Exact<{ [key: string]: never }>

export type BanksQuery = {
  __typename?: 'Query'
  banks: Array<{ __typename?: 'Bank'; id: string; name: string; code: string; swiftCode?: string | null }>
}

export const BanksDocument = gql`
  query banks {
    banks {
      id
      name
      code
      swiftCode
    }
  }
`

/**
 * __useBanksQuery__
 *
 * To run a query within a React component, call `useBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBanksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBanksQuery(baseOptions?: Apollo.QueryHookOptions<BanksQuery, BanksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BanksQuery, BanksQueryVariables>(BanksDocument, options)
}
export function useBanksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BanksQuery, BanksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BanksQuery, BanksQueryVariables>(BanksDocument, options)
}
export function useBanksSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BanksQuery, BanksQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<BanksQuery, BanksQueryVariables>(BanksDocument, options)
}
export type BanksQueryHookResult = ReturnType<typeof useBanksQuery>
export type BanksLazyQueryHookResult = ReturnType<typeof useBanksLazyQuery>
export type BanksSuspenseQueryHookResult = ReturnType<typeof useBanksSuspenseQuery>
export type BanksQueryResult = Apollo.QueryResult<BanksQuery, BanksQueryVariables>
