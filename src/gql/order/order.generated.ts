import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type OrderQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type OrderQuery = {
  __typename?: 'Query'
  node?:
    | { __typename?: 'Address' }
    | { __typename?: 'Article' }
    | { __typename?: 'Bank' }
    | { __typename?: 'BankAccount' }
    | { __typename?: 'BankTransaction' }
    | { __typename?: 'BankTransfer' }
    | { __typename?: 'CGW' }
    | { __typename?: 'Card' }
    | { __typename?: 'CashAccount' }
    | { __typename?: 'Country' }
    | { __typename?: 'District' }
    | { __typename?: 'Document' }
    | { __typename?: 'ExchangeAccount' }
    | { __typename?: 'Financial' }
    | { __typename?: 'JobStatus' }
    | { __typename?: 'Market' }
    | { __typename?: 'Note' }
    | {
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
        vat?: number | null
        transactionTime?: any | null
        createdAt: any
        updatedAt: any
        executionList?: Array<{
          __typename?: 'OrderExecution'
          id: string
          status: string
          price: number
          commission: number
          quantity: number
          cumulativeQuantity: number
          executedAt: any
        }> | null
      }
    | { __typename?: 'Passkey' }
    | { __typename?: 'Position' }
    | { __typename?: 'Profile' }
    | { __typename?: 'Quarter' }
    | { __typename?: 'Reference' }
    | { __typename?: 'SecurityAccount' }
    | { __typename?: 'State' }
    | { __typename?: 'Ticker' }
    | { __typename?: 'Transaction' }
    | { __typename?: 'User' }
    | { __typename?: 'UserDevice' }
    | { __typename?: 'UserEmail' }
    | { __typename?: 'UserPhone' }
    | { __typename?: 'Wallet' }
    | { __typename?: 'Watchlist' }
    | null
}

export const OrderDocument = gql`
  query order($id: ID!) {
    node(id: $id) {
      ... on Order {
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
        executionList {
          id
          status
          price
          commission
          quantity
          cumulativeQuantity
          executedAt
        }
        vat
        transactionTime
        createdAt
        updatedAt
      }
    }
  }
`

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderQuery(
  baseOptions: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables> &
    ({ variables: OrderQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options)
}
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options)
}
export function useOrderSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options)
}
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>
