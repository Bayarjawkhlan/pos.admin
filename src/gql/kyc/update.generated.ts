import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type UpdateKycProfileMutationVariables = Types.Exact<{
  input: Types.UpdateKycProfileInput
}>

export type UpdateKycProfileMutation = {
  __typename?: 'Mutation'
  updateKycProfile?: {
    __typename?: 'Profile'
    id: string
    firstName?: string | null
    lastName?: string | null
    citizenshipId?: string | null
    citizenIdNumber?: string | null
    progress: number
    status: string
    updatedAt: any
    identityStatus: string
    addressStatus: string
    financialStatus: string
    birthday?: any | null
    gender?: Types.Gender | null
  } | null
}

export const UpdateKycProfileDocument = gql`
  mutation updateKycProfile($input: updateKYCProfileInput!) {
    updateKycProfile(input: $input) {
      id
      firstName
      lastName
      citizenshipId
      citizenIdNumber
      progress
      status
      updatedAt
      identityStatus
      addressStatus
      financialStatus
      birthday
      gender
    }
  }
`
export type UpdateKycProfileMutationFn = Apollo.MutationFunction<UpdateKycProfileMutation, UpdateKycProfileMutationVariables>

/**
 * __useUpdateKycProfileMutation__
 *
 * To run a mutation, you first call `useUpdateKycProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateKycProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateKycProfileMutation, { data, loading, error }] = useUpdateKycProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateKycProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateKycProfileMutation, UpdateKycProfileMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateKycProfileMutation, UpdateKycProfileMutationVariables>(UpdateKycProfileDocument, options)
}
export type UpdateKycProfileMutationHookResult = ReturnType<typeof useUpdateKycProfileMutation>
export type UpdateKycProfileMutationResult = Apollo.MutationResult<UpdateKycProfileMutation>
export type UpdateKycProfileMutationOptions = Apollo.BaseMutationOptions<
  UpdateKycProfileMutation,
  UpdateKycProfileMutationVariables
>
