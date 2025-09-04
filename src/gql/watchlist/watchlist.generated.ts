import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type MyWatchListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>
  filter?: Types.InputMaybe<Types.WatchlistFilter>
  sort?: Types.InputMaybe<Types.SortFilter>
}>

export type MyWatchListQuery = {
  __typename?: 'Query'
  watchlist: {
    __typename?: 'WatchlistConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Watchlist'
      id: string
      ticker: {
        __typename?: 'Ticker'
        id: string
        currency: string
        key: string
        name?: string | null
        symbol: string
        netChange?: number | null
        pctChange?: number | null
        marketCap?: number | null
        lowPrice?: number | null
        highPrice?: number | null
        openPrice?: number | null
        closePrice?: number | null
        volume?: number | null
        tradeTime?: any | null
      }
    }>
  }
}

export const MyWatchListDocument = gql`
  query myWatchList($first: Int, $offset: Int, $filter: WatchlistFilter, $sort: SortFilter) {
    watchlist(first: $first, offset: $offset, filter: $filter, sort: $sort) {
      totalCount
      nodes {
        id
        ticker {
          id
          currency
          key
          name
          symbol
          netChange
          pctChange
          marketCap
          lowPrice
          highPrice
          openPrice
          closePrice
          volume
          tradeTime
        }
      }
    }
  }
`

/**
 * __useMyWatchListQuery__
 *
 * To run a query within a React component, call `useMyWatchListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyWatchListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyWatchListQuery({
 *   variables: {
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useMyWatchListQuery(baseOptions?: Apollo.QueryHookOptions<MyWatchListQuery, MyWatchListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyWatchListQuery, MyWatchListQueryVariables>(MyWatchListDocument, options)
}
export function useMyWatchListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyWatchListQuery, MyWatchListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyWatchListQuery, MyWatchListQueryVariables>(MyWatchListDocument, options)
}
export function useMyWatchListSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyWatchListQuery, MyWatchListQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MyWatchListQuery, MyWatchListQueryVariables>(MyWatchListDocument, options)
}
export type MyWatchListQueryHookResult = ReturnType<typeof useMyWatchListQuery>
export type MyWatchListLazyQueryHookResult = ReturnType<typeof useMyWatchListLazyQuery>
export type MyWatchListSuspenseQueryHookResult = ReturnType<typeof useMyWatchListSuspenseQuery>
export type MyWatchListQueryResult = Apollo.QueryResult<MyWatchListQuery, MyWatchListQueryVariables>
