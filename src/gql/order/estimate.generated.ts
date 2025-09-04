import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type EstimateOrderChargesQueryVariables = Types.Exact<{
  exchange: Types.Scalars['String']['input']
  price: Types.Scalars['Float']['input']
  quantity: Types.Scalars['Float']['input']
  symbol: Types.Scalars['String']['input']
  accountNumber?: Types.InputMaybe<Types.Scalars['String']['input']>
  instrumentType?: Types.InputMaybe<Types.Scalars['String']['input']>
  amount?: Types.InputMaybe<Types.Scalars['Float']['input']>
  orderValue?: Types.InputMaybe<Types.Scalars['Float']['input']>
  securityType?: Types.InputMaybe<Types.Scalars['String']['input']>
  tradingSession?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type EstimateOrderChargesQuery = {
  __typename?: 'Query'
  orderEstimate: {
    __typename?: 'OrderEstimate'
    status?: string | null
    commission?: number | null
    reason: string
    salesTax?: number | null
    stampDuty?: number | null
  }
}

export const EstimateOrderChargesDocument = gql`
  query estimateOrderCharges(
    $exchange: String!
    $price: Float!
    $quantity: Float!
    $symbol: String!
    $accountNumber: String
    $instrumentType: String
    $amount: Float
    $orderValue: Float
    $securityType: String
    $tradingSession: String
  ) {
    orderEstimate(
      exchange: $exchange
      price: $price
      quantity: $quantity
      symbol: $symbol
      accountNumber: $accountNumber
      instrumentType: $instrumentType
      amount: $amount
      orderValue: $orderValue
      securityType: $securityType
      tradingSession: $tradingSession
    ) {
      status
      commission
      reason
      salesTax
      stampDuty
    }
  }
`

/**
 * __useEstimateOrderChargesQuery__
 *
 * To run a query within a React component, call `useEstimateOrderChargesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEstimateOrderChargesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEstimateOrderChargesQuery({
 *   variables: {
 *      exchange: // value for 'exchange'
 *      price: // value for 'price'
 *      quantity: // value for 'quantity'
 *      symbol: // value for 'symbol'
 *      accountNumber: // value for 'accountNumber'
 *      instrumentType: // value for 'instrumentType'
 *      amount: // value for 'amount'
 *      orderValue: // value for 'orderValue'
 *      securityType: // value for 'securityType'
 *      tradingSession: // value for 'tradingSession'
 *   },
 * });
 */
export function useEstimateOrderChargesQuery(
  baseOptions: Apollo.QueryHookOptions<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables> &
    ({ variables: EstimateOrderChargesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>(EstimateOrderChargesDocument, options)
}
export function useEstimateOrderChargesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>(EstimateOrderChargesDocument, options)
}
export function useEstimateOrderChargesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>(
    EstimateOrderChargesDocument,
    options
  )
}
export type EstimateOrderChargesQueryHookResult = ReturnType<typeof useEstimateOrderChargesQuery>
export type EstimateOrderChargesLazyQueryHookResult = ReturnType<typeof useEstimateOrderChargesLazyQuery>
export type EstimateOrderChargesSuspenseQueryHookResult = ReturnType<typeof useEstimateOrderChargesSuspenseQuery>
export type EstimateOrderChargesQueryResult = Apollo.QueryResult<EstimateOrderChargesQuery, EstimateOrderChargesQueryVariables>
