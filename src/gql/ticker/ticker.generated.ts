import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type TickerQueryVariables = Types.Exact<{
  key: Types.Scalars['String']['input']
}>

export type TickerQuery = {
  __typename?: 'Query'
  ticker: {
    __typename?: 'Ticker'
    id: string
    key: string
    name?: string | null
    symbol: string
    prevClose?: number | null
    closePrice?: number | null
    pctChange?: number | null
    netChange?: number | null
    exchange: string
    volume?: number | null
    top?: number | null
    lastPrice?: number | null
    marketCap?: number | null
    isDelayed: boolean
    isTradable: boolean
    currency: string
    highPrice?: number | null
    lowPrice?: number | null
  }
}

export const TickerDocument = gql`
  query ticker($key: String!) {
    ticker(key: $key) {
      id
      key
      name
      symbol
      prevClose
      closePrice
      pctChange
      netChange
      exchange
      volume
      top
      lastPrice
      marketCap
      isDelayed
      isTradable
      currency
      highPrice
      lowPrice
    }
  }
`

/**
 * __useTickerQuery__
 *
 * To run a query within a React component, call `useTickerQuery` and pass it any options that fit your needs.
 * When your component renders, `useTickerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTickerQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useTickerQuery(
  baseOptions: Apollo.QueryHookOptions<TickerQuery, TickerQueryVariables> &
    ({ variables: TickerQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TickerQuery, TickerQueryVariables>(TickerDocument, options)
}
export function useTickerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TickerQuery, TickerQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TickerQuery, TickerQueryVariables>(TickerDocument, options)
}
export function useTickerSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TickerQuery, TickerQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TickerQuery, TickerQueryVariables>(TickerDocument, options)
}
export type TickerQueryHookResult = ReturnType<typeof useTickerQuery>
export type TickerLazyQueryHookResult = ReturnType<typeof useTickerLazyQuery>
export type TickerSuspenseQueryHookResult = ReturnType<typeof useTickerSuspenseQuery>
export type TickerQueryResult = Apollo.QueryResult<TickerQuery, TickerQueryVariables>
