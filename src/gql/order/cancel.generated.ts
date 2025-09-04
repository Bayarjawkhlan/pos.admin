import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type CancelOrderMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type CancelOrderMutation = {
  __typename?: 'Mutation'
  cancelOrder?: { __typename?: 'Order'; id: string; orderStatus: string } | null
}

export const CancelOrderDocument = gql`
  mutation cancelOrder($id: ID!) {
    cancelOrder(input: { id: $id }) {
      id
      orderStatus
    }
  }
`
export type CancelOrderMutationFn = Apollo.MutationFunction<CancelOrderMutation, CancelOrderMutationVariables>

/**
 * __useCancelOrderMutation__
 *
 * To run a mutation, you first call `useCancelOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelOrderMutation, { data, loading, error }] = useCancelOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CancelOrderMutation, CancelOrderMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CancelOrderMutation, CancelOrderMutationVariables>(CancelOrderDocument, options)
}
export type CancelOrderMutationHookResult = ReturnType<typeof useCancelOrderMutation>
export type CancelOrderMutationResult = Apollo.MutationResult<CancelOrderMutation>
export type CancelOrderMutationOptions = Apollo.BaseMutationOptions<CancelOrderMutation, CancelOrderMutationVariables>
