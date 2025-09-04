import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { PasskeyFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type CreatePasskeyMutationVariables = Types.Exact<{
  credential: Types.Scalars['JSON']['input']
  label?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type CreatePasskeyMutation = {
  __typename?: 'Mutation'
  createPasskey?: {
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

export const CreatePasskeyDocument = gql`
  mutation createPasskey($credential: JSON!, $label: String) {
    createPasskey(input: { credential: $credential, label: $label }) {
      ...passkey
    }
  }
  ${PasskeyFragmentDoc}
`
export type CreatePasskeyMutationFn = Apollo.MutationFunction<CreatePasskeyMutation, CreatePasskeyMutationVariables>

/**
 * __useCreatePasskeyMutation__
 *
 * To run a mutation, you first call `useCreatePasskeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePasskeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPasskeyMutation, { data, loading, error }] = useCreatePasskeyMutation({
 *   variables: {
 *      credential: // value for 'credential'
 *      label: // value for 'label'
 *   },
 * });
 */
export function useCreatePasskeyMutation(
  baseOptions?: Apollo.MutationHookOptions<CreatePasskeyMutation, CreatePasskeyMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreatePasskeyMutation, CreatePasskeyMutationVariables>(CreatePasskeyDocument, options)
}
export type CreatePasskeyMutationHookResult = ReturnType<typeof useCreatePasskeyMutation>
export type CreatePasskeyMutationResult = Apollo.MutationResult<CreatePasskeyMutation>
export type CreatePasskeyMutationOptions = Apollo.BaseMutationOptions<CreatePasskeyMutation, CreatePasskeyMutationVariables>
