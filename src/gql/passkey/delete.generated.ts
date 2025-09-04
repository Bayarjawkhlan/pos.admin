import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DeletePasskeyMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type DeletePasskeyMutation = { __typename?: 'Mutation'; deletePasskey?: boolean | null }

export const DeletePasskeyDocument = gql`
  mutation deletePasskey($id: ID!) {
    deletePasskey(input: { id: $id })
  }
`
export type DeletePasskeyMutationFn = Apollo.MutationFunction<DeletePasskeyMutation, DeletePasskeyMutationVariables>

/**
 * __useDeletePasskeyMutation__
 *
 * To run a mutation, you first call `useDeletePasskeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePasskeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePasskeyMutation, { data, loading, error }] = useDeletePasskeyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePasskeyMutation(
  baseOptions?: Apollo.MutationHookOptions<DeletePasskeyMutation, DeletePasskeyMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePasskeyMutation, DeletePasskeyMutationVariables>(DeletePasskeyDocument, options)
}
export type DeletePasskeyMutationHookResult = ReturnType<typeof useDeletePasskeyMutation>
export type DeletePasskeyMutationResult = Apollo.MutationResult<DeletePasskeyMutation>
export type DeletePasskeyMutationOptions = Apollo.BaseMutationOptions<DeletePasskeyMutation, DeletePasskeyMutationVariables>
