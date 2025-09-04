import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type MyPositionsQueryVariables = Types.Exact<{ [key: string]: never }>

export type MyPositionsQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    positions: Array<{
      __typename?: 'Position'
      accountNumber: string
      accruedInterest: number
      amount: number
      availableQuantity: number
      averageCost: number
      averagePrice: number
      baseExchange?: string | null
      baseSymbol?: string | null
      collectedCoupons: number
      createdAt: any
      currency?: string | null
      customerNumber?: string | null
      exchange: string
      fullyRedeem: number
      holdingType: number
      id: string
      investmentId?: string | null
      isin?: string | null
      lotSize?: number | null
      manualHoldingBlock: number
      netHolding: number
      pendingBuy: number
      pendingSell: number
      quantity: number
      redeemAmount: number
      securityType?: string | null
      sellPendingUnits: number
      startDate?: string | null
      symbol: string
      symbolDesc?: string | null
      totalCost: number
    }>
  } | null
}

export const MyPositionsDocument = gql`
  query myPositions {
    me {
      id
      positions {
        accountNumber
        accruedInterest
        amount
        availableQuantity
        averageCost
        averagePrice
        baseExchange
        baseSymbol
        collectedCoupons
        createdAt
        currency
        customerNumber
        exchange
        fullyRedeem
        holdingType
        id
        investmentId
        isin
        lotSize
        manualHoldingBlock
        netHolding
        pendingBuy
        pendingSell
        quantity
        redeemAmount
        securityType
        sellPendingUnits
        startDate
        symbol
        symbolDesc
        totalCost
      }
    }
  }
`

/**
 * __useMyPositionsQuery__
 *
 * To run a query within a React component, call `useMyPositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPositionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPositionsQuery(baseOptions?: Apollo.QueryHookOptions<MyPositionsQuery, MyPositionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyPositionsQuery, MyPositionsQueryVariables>(MyPositionsDocument, options)
}
export function useMyPositionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPositionsQuery, MyPositionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyPositionsQuery, MyPositionsQueryVariables>(MyPositionsDocument, options)
}
export function useMyPositionsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyPositionsQuery, MyPositionsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MyPositionsQuery, MyPositionsQueryVariables>(MyPositionsDocument, options)
}
export type MyPositionsQueryHookResult = ReturnType<typeof useMyPositionsQuery>
export type MyPositionsLazyQueryHookResult = ReturnType<typeof useMyPositionsLazyQuery>
export type MyPositionsSuspenseQueryHookResult = ReturnType<typeof useMyPositionsSuspenseQuery>
export type MyPositionsQueryResult = Apollo.QueryResult<MyPositionsQuery, MyPositionsQueryVariables>
