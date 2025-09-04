import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DeletePhoneMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type DeletePhoneMutation = { __typename?: 'Mutation'; deletePhone?: boolean | null }

export const DeletePhoneDocument = gql`
  mutation deletePhone($id: ID!) {
    deletePhone(input: { id: $id })
  }
`
export type DeletePhoneMutationFn = Apollo.MutationFunction<DeletePhoneMutation, DeletePhoneMutationVariables>

/**
 * __useDeletePhoneMutation__
 *
 * To run a mutation, you first call `useDeletePhoneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhoneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhoneMutation, { data, loading, error }] = useDeletePhoneMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePhoneMutation(
  baseOptions?: Apollo.MutationHookOptions<DeletePhoneMutation, DeletePhoneMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeletePhoneMutation, DeletePhoneMutationVariables>(DeletePhoneDocument, options)
}
export type DeletePhoneMutationHookResult = ReturnType<typeof useDeletePhoneMutation>
export type DeletePhoneMutationResult = Apollo.MutationResult<DeletePhoneMutation>
export type DeletePhoneMutationOptions = Apollo.BaseMutationOptions<DeletePhoneMutation, DeletePhoneMutationVariables>
