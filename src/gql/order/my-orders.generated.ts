import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type MyOrdersQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>
  sort?: Types.InputMaybe<Types.SortFilter>
  filter?: Types.InputMaybe<Types.OrderFilter>
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type MyOrdersQuery = {
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
          accountNumber: string
          exchange: string
          symbol: string
          orderSide: Types.OrderSide
          orderQty?: number | null
          filledQty?: number | null
          price?: number | null
          averagePrice?: number | null
          commission?: number | null
          cumulativeCommission?: number | null
          cumulativeOrderNetSettle?: number | null
          cumulativeOrderNetValue?: number | null
          cumulativeOrderValue?: number | null
          cumulativeQty?: number | null
          cumulativeStampDutyAmount?: number | null
          cumulativeVatAmount?: number | null
          currency: string
          expiryDate?: any | null
          lastPrice?: number | null
          orderValue?: number | null
          orderReferenceId?: string | null
          orderRejectReason?: string | null
          tif?: Types.TifEnum | null
          createdAt: any
        }
      }>
    }
  } | null
}

export const MyOrdersDocument = gql`
  query myOrders($after: String, $sort: SortFilter, $filter: OrderFilter, $first: Int) {
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
            accountNumber
            exchange
            symbol
            orderSide
            orderQty
            filledQty
            price
            averagePrice
            commission
            cumulativeCommission
            cumulativeOrderNetSettle
            cumulativeOrderNetValue
            cumulativeOrderValue
            cumulativeQty
            cumulativeStampDutyAmount
            cumulativeVatAmount
            currency
            expiryDate
            lastPrice
            orderValue
            orderReferenceId
            orderRejectReason
            tif
            createdAt
          }
        }
      }
    }
  }
`

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      after: // value for 'after'
 *      sort: // value for 'sort'
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useMyOrdersQuery(baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options)
}
export function useMyOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options)
}
export function useMyOrdersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MyOrdersQuery, MyOrdersQueryVariables>(MyOrdersDocument, options)
}
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>
export type MyOrdersLazyQueryHookResult = ReturnType<typeof useMyOrdersLazyQuery>
export type MyOrdersSuspenseQueryHookResult = ReturnType<typeof useMyOrdersSuspenseQuery>
export type MyOrdersQueryResult = Apollo.QueryResult<MyOrdersQuery, MyOrdersQueryVariables>
