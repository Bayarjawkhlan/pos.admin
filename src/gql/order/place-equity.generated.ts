import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type PlaceEquityMutationVariables = Types.Exact<{
  input: Types.PlaceEquityInput
}>

export type PlaceEquityMutation = {
  __typename?: 'Mutation'
  placeEquity?: {
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
  } | null
}

export const PlaceEquityDocument = gql`
  mutation placeEquity($input: PlaceEquityInput!) {
    placeEquity(input: $input) {
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
    }
  }
`
export type PlaceEquityMutationFn = Apollo.MutationFunction<PlaceEquityMutation, PlaceEquityMutationVariables>

/**
 * __usePlaceEquityMutation__
 *
 * To run a mutation, you first call `usePlaceEquityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceEquityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeEquityMutation, { data, loading, error }] = usePlaceEquityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePlaceEquityMutation(
  baseOptions?: Apollo.MutationHookOptions<PlaceEquityMutation, PlaceEquityMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<PlaceEquityMutation, PlaceEquityMutationVariables>(PlaceEquityDocument, options)
}
export type PlaceEquityMutationHookResult = ReturnType<typeof usePlaceEquityMutation>
export type PlaceEquityMutationResult = Apollo.MutationResult<PlaceEquityMutation>
export type PlaceEquityMutationOptions = Apollo.BaseMutationOptions<PlaceEquityMutation, PlaceEquityMutationVariables>
