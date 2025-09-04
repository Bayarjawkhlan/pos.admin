import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ResendConfirmationMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type ResendConfirmationMutation = { __typename?: 'Mutation'; confirmableResend?: string | null }

export const ResendConfirmationDocument = gql`
  mutation resendConfirmation($id: ID!) {
    confirmableResend(input: { id: $id })
  }
`
export type ResendConfirmationMutationFn = Apollo.MutationFunction<
  ResendConfirmationMutation,
  ResendConfirmationMutationVariables
>

/**
 * __useResendConfirmationMutation__
 *
 * To run a mutation, you first call `useResendConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendConfirmationMutation, { data, loading, error }] = useResendConfirmationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResendConfirmationMutation(
  baseOptions?: Apollo.MutationHookOptions<ResendConfirmationMutation, ResendConfirmationMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ResendConfirmationMutation, ResendConfirmationMutationVariables>(ResendConfirmationDocument, options)
}
export type ResendConfirmationMutationHookResult = ReturnType<typeof useResendConfirmationMutation>
export type ResendConfirmationMutationResult = Apollo.MutationResult<ResendConfirmationMutation>
export type ResendConfirmationMutationOptions = Apollo.BaseMutationOptions<
  ResendConfirmationMutation,
  ResendConfirmationMutationVariables
>
