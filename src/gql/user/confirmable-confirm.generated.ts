import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ConfirmableConfirmMutationVariables = Types.Exact<{
  input: Types.ConfirmableConfirmInput
}>

export type ConfirmableConfirmMutation = { __typename?: 'Mutation'; confirmableConfirm?: string | null }

export const ConfirmableConfirmDocument = gql`
  mutation confirmableConfirm($input: confirmableConfirmInput!) {
    confirmableConfirm(input: $input)
  }
`
export type ConfirmableConfirmMutationFn = Apollo.MutationFunction<
  ConfirmableConfirmMutation,
  ConfirmableConfirmMutationVariables
>

/**
 * __useConfirmableConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmableConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmableConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmableConfirmMutation, { data, loading, error }] = useConfirmableConfirmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmableConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<ConfirmableConfirmMutation, ConfirmableConfirmMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ConfirmableConfirmMutation, ConfirmableConfirmMutationVariables>(ConfirmableConfirmDocument, options)
}
export type ConfirmableConfirmMutationHookResult = ReturnType<typeof useConfirmableConfirmMutation>
export type ConfirmableConfirmMutationResult = Apollo.MutationResult<ConfirmableConfirmMutation>
export type ConfirmableConfirmMutationOptions = Apollo.BaseMutationOptions<
  ConfirmableConfirmMutation,
  ConfirmableConfirmMutationVariables
>
