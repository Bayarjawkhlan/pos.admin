import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DeleteEmailMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type DeleteEmailMutation = { __typename?: 'Mutation'; deleteEmail?: boolean | null }

export const DeleteEmailDocument = gql`
  mutation deleteEmail($id: ID!) {
    deleteEmail(input: { id: $id })
  }
`
export type DeleteEmailMutationFn = Apollo.MutationFunction<DeleteEmailMutation, DeleteEmailMutationVariables>

/**
 * __useDeleteEmailMutation__
 *
 * To run a mutation, you first call `useDeleteEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEmailMutation, { data, loading, error }] = useDeleteEmailMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteEmailMutation, DeleteEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteEmailMutation, DeleteEmailMutationVariables>(DeleteEmailDocument, options)
}
export type DeleteEmailMutationHookResult = ReturnType<typeof useDeleteEmailMutation>
export type DeleteEmailMutationResult = Apollo.MutationResult<DeleteEmailMutation>
export type DeleteEmailMutationOptions = Apollo.BaseMutationOptions<DeleteEmailMutation, DeleteEmailMutationVariables>
