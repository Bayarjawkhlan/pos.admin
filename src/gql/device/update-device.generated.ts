import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type UpdateDeviceMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
  active?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
  pin?: Types.InputMaybe<Types.Scalars['String']['input']>
  pushToken?: Types.InputMaybe<Types.Scalars['JSON']['input']>
}>

export type UpdateDeviceMutation = {
  __typename?: 'Mutation'
  updateDevice?: { __typename?: 'UserDevice'; id: string; name?: string | null; createdAt: any } | null
}

export const UpdateDeviceDocument = gql`
  mutation updateDevice($id: ID!, $active: Boolean, $pin: String, $pushToken: JSON) {
    updateDevice(input: { deviceId: $id, active: $active, pin: $pin, pushToken: $pushToken }) {
      id
      name
      createdAt
    }
  }
`
export type UpdateDeviceMutationFn = Apollo.MutationFunction<UpdateDeviceMutation, UpdateDeviceMutationVariables>

/**
 * __useUpdateDeviceMutation__
 *
 * To run a mutation, you first call `useUpdateDeviceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeviceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeviceMutation, { data, loading, error }] = useUpdateDeviceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      active: // value for 'active'
 *      pin: // value for 'pin'
 *      pushToken: // value for 'pushToken'
 *   },
 * });
 */
export function useUpdateDeviceMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateDeviceMutation, UpdateDeviceMutationVariables>(UpdateDeviceDocument, options)
}
export type UpdateDeviceMutationHookResult = ReturnType<typeof useUpdateDeviceMutation>
export type UpdateDeviceMutationResult = Apollo.MutationResult<UpdateDeviceMutation>
export type UpdateDeviceMutationOptions = Apollo.BaseMutationOptions<UpdateDeviceMutation, UpdateDeviceMutationVariables>
