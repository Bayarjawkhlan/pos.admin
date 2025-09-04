import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { PasskeyFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type UpdatePasskeyMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
  label?: Types.InputMaybe<Types.Scalars['String']['input']>
  isActive?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
}>

export type UpdatePasskeyMutation = {
  __typename?: 'Mutation'
  updatePasskey?: {
    __typename?: 'Passkey'
    id: string
    externalId?: string | null
    label?: string | null
    createdAt: any
    signCount?: number | null
    isActive: boolean
    lastUsedAt?: any | null
    userAgent?: string | null
  } | null
}

export const UpdatePasskeyDocument = gql`
  mutation updatePasskey($id: ID!, $label: String, $isActive: Boolean) {
    updatePasskey(input: { id: $id, label: $label, isActive: $isActive }) {
      ...passkey
    }
  }
  ${PasskeyFragmentDoc}
`
export type UpdatePasskeyMutationFn = Apollo.MutationFunction<UpdatePasskeyMutation, UpdatePasskeyMutationVariables>

/**
 * __useUpdatePasskeyMutation__
 *
 * To run a mutation, you first call `useUpdatePasskeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasskeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasskeyMutation, { data, loading, error }] = useUpdatePasskeyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      label: // value for 'label'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useUpdatePasskeyMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdatePasskeyMutation, UpdatePasskeyMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdatePasskeyMutation, UpdatePasskeyMutationVariables>(UpdatePasskeyDocument, options)
}
export type UpdatePasskeyMutationHookResult = ReturnType<typeof useUpdatePasskeyMutation>
export type UpdatePasskeyMutationResult = Apollo.MutationResult<UpdatePasskeyMutation>
export type UpdatePasskeyMutationOptions = Apollo.BaseMutationOptions<UpdatePasskeyMutation, UpdatePasskeyMutationVariables>
