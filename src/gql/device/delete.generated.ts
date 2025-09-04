import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DeleteDeviceMutationVariables = Types.Exact<{
  input: Types.DeleteDeviceInput
}>

export type DeleteDeviceMutation = { __typename?: 'Mutation'; deleteDevice?: boolean | null }

export const DeleteDeviceDocument = gql`
  mutation deleteDevice($input: deleteDeviceInput!) {
    deleteDevice(input: $input)
  }
`
export type DeleteDeviceMutationFn = Apollo.MutationFunction<DeleteDeviceMutation, DeleteDeviceMutationVariables>

/**
 * __useDeleteDeviceMutation__
 *
 * To run a mutation, you first call `useDeleteDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeviceMutation, { data, loading, error }] = useDeleteDeviceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteDeviceMutation, DeleteDeviceMutationVariables>(DeleteDeviceDocument, options)
}
export type DeleteDeviceMutationHookResult = ReturnType<typeof useDeleteDeviceMutation>
export type DeleteDeviceMutationResult = Apollo.MutationResult<DeleteDeviceMutation>
export type DeleteDeviceMutationOptions = Apollo.BaseMutationOptions<DeleteDeviceMutation, DeleteDeviceMutationVariables>
