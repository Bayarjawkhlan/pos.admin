import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type TickersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.TickerFilter>
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type TickersQuery = {
  __typename?: 'Query'
  tickers: {
    __typename?: 'TickerConnection'
    nodes: Array<{
      __typename?: 'Ticker'
      id: string
      key: string
      symbol: string
      name?: string | null
      exchange: string
      currency: string
      status?: number | null
    }>
  }
}

export const TickersDocument = gql`
  query tickers($filter: TickerFilter, $first: Int = 10) {
    tickers(first: $first, filter: $filter) {
      nodes {
        id
        key
        symbol
        name
        exchange
        currency
        status
      }
    }
  }
`

/**
 * __useTickersQuery__
 *
 * To run a query within a React component, call `useTickersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTickersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTickersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useTickersQuery(baseOptions?: Apollo.QueryHookOptions<TickersQuery, TickersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TickersQuery, TickersQueryVariables>(TickersDocument, options)
}
export function useTickersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TickersQuery, TickersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TickersQuery, TickersQueryVariables>(TickersDocument, options)
}
export function useTickersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TickersQuery, TickersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TickersQuery, TickersQueryVariables>(TickersDocument, options)
}
export type TickersQueryHookResult = ReturnType<typeof useTickersQuery>
export type TickersLazyQueryHookResult = ReturnType<typeof useTickersLazyQuery>
export type TickersSuspenseQueryHookResult = ReturnType<typeof useTickersSuspenseQuery>
export type TickersQueryResult = Apollo.QueryResult<TickersQuery, TickersQueryVariables>
