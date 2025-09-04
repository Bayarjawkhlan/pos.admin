import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type OrdersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.OrderFilter>
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  offset?: Types.InputMaybe<Types.Scalars['Int']['input']>
}>

export type OrdersQuery = {
  __typename?: 'Query'
  orders: {
    __typename?: 'OrderConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Order'
      id: string
      number: string
      orderStatus: string
      orderType?: Types.OrderTypeEnum | null
      accountNumber: string
      exchange: string
      symbol: string
      orderQty?: number | null
      price?: number | null
      createdAt: any
      updatedAt: any
      orderRejectReason?: string | null
    }>
  }
}

export const OrdersDocument = gql`
  query orders($filter: OrderFilter, $first: Int, $offset: Int) {
    orders(filter: $filter, first: $first, offset: $offset) {
      nodes {
        id
        number
        orderStatus
        orderType
        accountNumber
        exchange
        symbol
        orderQty
        price
        createdAt
        updatedAt
        orderRejectReason
      }
      totalCount
    }
  }
`

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options)
}
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options)
}
export function useOrdersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options)
}
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>
