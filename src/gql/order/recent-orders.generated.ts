import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type RecentOrdersQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>
  sort?: Types.InputMaybe<Types.SortFilter>
  filter?: Types.InputMaybe<Types.OrderFilter>
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type RecentOrdersQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    orders: {
      __typename?: 'OrderConnection'
      pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null }
      edges: Array<{
        __typename?: 'OrderEdge'
        node: {
          __typename?: 'Order'
          id: string
          number: string
          orderStatus: string
          orderType?: Types.OrderTypeEnum | null
          exchange: string
          symbol: string
          orderSide: Types.OrderSide
          orderQty?: number | null
          filledQty?: number | null
          price?: number | null
          averagePrice?: number | null
          currency: string
          createdAt: any
        }
      }>
    }
  } | null
}

export const RecentOrdersDocument = gql`
  query recentOrders($after: String, $sort: SortFilter, $filter: OrderFilter, $first: Int) {
    me {
      id
      orders(after: $after, sort: $sort, filter: $filter, first: $first) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            number
            orderStatus
            orderType
            exchange
            symbol
            orderSide
            orderQty
            filledQty
            price
            averagePrice
            currency
            createdAt
          }
        }
      }
    }
  }
`

/**
 * __useRecentOrdersQuery__
 *
 * To run a query within a React component, call `useRecentOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentOrdersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useRecentOrdersQuery(baseOptions?: Apollo.QueryHookOptions<RecentOrdersQuery, RecentOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<RecentOrdersQuery, RecentOrdersQueryVariables>(RecentOrdersDocument, options)
}
export function useRecentOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<RecentOrdersQuery, RecentOrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<RecentOrdersQuery, RecentOrdersQueryVariables>(RecentOrdersDocument, options)
}
export function useRecentOrdersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<RecentOrdersQuery, RecentOrdersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<RecentOrdersQuery, RecentOrdersQueryVariables>(RecentOrdersDocument, options)
}
export type RecentOrdersQueryHookResult = ReturnType<typeof useRecentOrdersQuery>
export type RecentOrdersLazyQueryHookResult = ReturnType<typeof useRecentOrdersLazyQuery>
export type RecentOrdersSuspenseQueryHookResult = ReturnType<typeof useRecentOrdersSuspenseQuery>
export type RecentOrdersQueryResult = Apollo.QueryResult<RecentOrdersQuery, RecentOrdersQueryVariables>
