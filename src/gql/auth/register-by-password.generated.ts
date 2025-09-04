import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { UserFragmentDoc } from '../user/fragment.generated'

const defaultOptions = {} as const
export type RegisterByPasswordMutationVariables = Types.Exact<{
  input: Types.RegisterByPasswordInput
}>

export type RegisterByPasswordMutation = {
  __typename?: 'Mutation'
  registerByPassword?: {
    __typename?: 'User'
    id: string
    fullName: string
    email?: any | null
    phone?: any | null
    username: string
    createdAt: any
    updatedAt: any
    lastSignInAt?: any | null
    lastSignInIp?: string | null
  } | null
}

export const RegisterByPasswordDocument = gql`
  mutation registerByPassword($input: registerByPasswordInput!) {
    registerByPassword(input: $input) {
      ...user
    }
  }
  ${UserFragmentDoc}
`
export type RegisterByPasswordMutationFn = Apollo.MutationFunction<
  RegisterByPasswordMutation,
  RegisterByPasswordMutationVariables
>

/**
 * __useRegisterByPasswordMutation__
 *
 * To run a mutation, you first call `useRegisterByPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterByPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerByPasswordMutation, { data, loading, error }] = useRegisterByPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterByPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterByPasswordMutation, RegisterByPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterByPasswordMutation, RegisterByPasswordMutationVariables>(RegisterByPasswordDocument, options)
}
export type RegisterByPasswordMutationHookResult = ReturnType<typeof useRegisterByPasswordMutation>
export type RegisterByPasswordMutationResult = Apollo.MutationResult<RegisterByPasswordMutation>
export type RegisterByPasswordMutationOptions = Apollo.BaseMutationOptions<
  RegisterByPasswordMutation,
  RegisterByPasswordMutationVariables
>
