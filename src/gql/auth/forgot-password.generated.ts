import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ForgetPasswordMutationVariables = Types.Exact<{
  identity: Types.Scalars['String']['input']
}>

export type ForgetPasswordMutation = { __typename?: 'Mutation'; forgetPassword?: string | null }

export const ForgetPasswordDocument = gql`
  mutation forgetPassword($identity: String!) {
    forgetPassword(input: { identity: $identity })
  }
`
export type ForgetPasswordMutationFn = Apollo.MutationFunction<ForgetPasswordMutation, ForgetPasswordMutationVariables>

/**
 * __useForgetPasswordMutation__
 *
 * To run a mutation, you first call `useForgetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetPasswordMutation, { data, loading, error }] = useForgetPasswordMutation({
 *   variables: {
 *      identity: // value for 'identity'
 *   },
 * });
 */
export function useForgetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<ForgetPasswordMutation, ForgetPasswordMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ForgetPasswordMutation, ForgetPasswordMutationVariables>(ForgetPasswordDocument, options)
}
export type ForgetPasswordMutationHookResult = ReturnType<typeof useForgetPasswordMutation>
export type ForgetPasswordMutationResult = Apollo.MutationResult<ForgetPasswordMutation>
export type ForgetPasswordMutationOptions = Apollo.BaseMutationOptions<ForgetPasswordMutation, ForgetPasswordMutationVariables>
