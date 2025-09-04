import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DisableTotpMutationVariables = Types.Exact<{
  input: Types.DisableTotpInput
}>

export type DisableTotpMutation = {
  __typename?: 'Mutation'
  disableTotp?: { __typename?: 'User'; id: string; twoFactorEnabled: boolean } | null
}

export const DisableTotpDocument = gql`
  mutation disableTotp($input: disableTotpInput!) {
    disableTotp(input: $input) {
      id
      twoFactorEnabled
    }
  }
`
export type DisableTotpMutationFn = Apollo.MutationFunction<DisableTotpMutation, DisableTotpMutationVariables>

/**
 * __useDisableTotpMutation__
 *
 * To run a mutation, you first call `useDisableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableTotpMutation, { data, loading, error }] = useDisableTotpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisableTotpMutation(
  baseOptions?: Apollo.MutationHookOptions<DisableTotpMutation, DisableTotpMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DisableTotpMutation, DisableTotpMutationVariables>(DisableTotpDocument, options)
}
export type DisableTotpMutationHookResult = ReturnType<typeof useDisableTotpMutation>
export type DisableTotpMutationResult = Apollo.MutationResult<DisableTotpMutation>
export type DisableTotpMutationOptions = Apollo.BaseMutationOptions<DisableTotpMutation, DisableTotpMutationVariables>
