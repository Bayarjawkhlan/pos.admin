import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DeleteBankAccountMutationVariables = Types.Exact<{
  input: Types.DeleteBankAccountInput
}>

export type DeleteBankAccountMutation = { __typename?: 'Mutation'; deleteBankAccount?: boolean | null }

export const DeleteBankAccountDocument = gql`
  mutation deleteBankAccount($input: deleteBankAccountInput!) {
    deleteBankAccount(input: $input)
  }
`
export type DeleteBankAccountMutationFn = Apollo.MutationFunction<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>

/**
 * __useDeleteBankAccountMutation__
 *
 * To run a mutation, you first call `useDeleteBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBankAccountMutation, { data, loading, error }] = useDeleteBankAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBankAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>(DeleteBankAccountDocument, options)
}
export type DeleteBankAccountMutationHookResult = ReturnType<typeof useDeleteBankAccountMutation>
export type DeleteBankAccountMutationResult = Apollo.MutationResult<DeleteBankAccountMutation>
export type DeleteBankAccountMutationOptions = Apollo.BaseMutationOptions<
  DeleteBankAccountMutation,
  DeleteBankAccountMutationVariables
>
