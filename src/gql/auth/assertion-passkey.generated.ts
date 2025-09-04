import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type AssertionPasskeyMutationVariables = Types.Exact<{
  username?: Types.InputMaybe<Types.Scalars['String']['input']>
}>

export type AssertionPasskeyMutation = { __typename?: 'Mutation'; assertionPasskey?: any | null }

export const AssertionPasskeyDocument = gql`
  mutation assertionPasskey($username: String) {
    assertionPasskey(input: { username: $username })
  }
`
export type AssertionPasskeyMutationFn = Apollo.MutationFunction<AssertionPasskeyMutation, AssertionPasskeyMutationVariables>

/**
 * __useAssertionPasskeyMutation__
 *
 * To run a mutation, you first call `useAssertionPasskeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssertionPasskeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assertionPasskeyMutation, { data, loading, error }] = useAssertionPasskeyMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAssertionPasskeyMutation(
  baseOptions?: Apollo.MutationHookOptions<AssertionPasskeyMutation, AssertionPasskeyMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AssertionPasskeyMutation, AssertionPasskeyMutationVariables>(AssertionPasskeyDocument, options)
}
export type AssertionPasskeyMutationHookResult = ReturnType<typeof useAssertionPasskeyMutation>
export type AssertionPasskeyMutationResult = Apollo.MutationResult<AssertionPasskeyMutation>
export type AssertionPasskeyMutationOptions = Apollo.BaseMutationOptions<
  AssertionPasskeyMutation,
  AssertionPasskeyMutationVariables
>
