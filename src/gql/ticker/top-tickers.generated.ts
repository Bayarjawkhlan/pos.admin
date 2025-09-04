import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { TickerFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type TopTickersQueryVariables = Types.Exact<{
  exchange: Types.Scalars['String']['input']
}>

export type TopTickersQuery = {
  __typename?: 'Query'
  gainers: Array<{
    __typename?: 'Ticker'
    id: string
    key: string
    symbol: string
    name?: string | null
    volume?: number | null
    marketCap?: number | null
    lastPrice?: number | null
    netChange?: number | null
    pctChange?: number | null
    currency: string
  }>
  losers: Array<{
    __typename?: 'Ticker'
    id: string
    key: string
    symbol: string
    name?: string | null
    volume?: number | null
    marketCap?: number | null
    lastPrice?: number | null
    netChange?: number | null
    pctChange?: number | null
    currency: string
  }>
}

export const TopTickersDocument = gql`
  query topTickers($exchange: String!) {
    gainers: topTickers(exchange: $exchange, type: gainers) {
      ...ticker
    }
    losers: topTickers(exchange: $exchange, type: losers) {
      ...ticker
    }
  }
  ${TickerFragmentDoc}
`

/**
 * __useTopTickersQuery__
 *
 * To run a query within a React component, call `useTopTickersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopTickersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopTickersQuery({
 *   variables: {
 *      exchange: // value for 'exchange'
 *   },
 * });
 */
export function useTopTickersQuery(
  baseOptions: Apollo.QueryHookOptions<TopTickersQuery, TopTickersQueryVariables> &
    ({ variables: TopTickersQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TopTickersQuery, TopTickersQueryVariables>(TopTickersDocument, options)
}
export function useTopTickersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopTickersQuery, TopTickersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TopTickersQuery, TopTickersQueryVariables>(TopTickersDocument, options)
}
export function useTopTickersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TopTickersQuery, TopTickersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TopTickersQuery, TopTickersQueryVariables>(TopTickersDocument, options)
}
export type TopTickersQueryHookResult = ReturnType<typeof useTopTickersQuery>
export type TopTickersLazyQueryHookResult = ReturnType<typeof useTopTickersLazyQuery>
export type TopTickersSuspenseQueryHookResult = ReturnType<typeof useTopTickersSuspenseQuery>
export type TopTickersQueryResult = Apollo.QueryResult<TopTickersQuery, TopTickersQueryVariables>
