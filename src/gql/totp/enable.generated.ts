import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type EnableTotpMutationVariables = Types.Exact<{
  input: Types.EnableTotpInput
}>

export type EnableTotpMutation = {
  __typename?: 'Mutation'
  enableTotp?: {
    __typename?: 'enableTotpPayload'
    backupCodes: Array<string>
    user: { __typename?: 'User'; id: string; twoFactorEnabled: boolean }
  } | null
}

export const EnableTotpDocument = gql`
  mutation enableTotp($input: enableTotpInput!) {
    enableTotp(input: $input) {
      backupCodes
      user {
        id
        twoFactorEnabled
      }
    }
  }
`
export type EnableTotpMutationFn = Apollo.MutationFunction<EnableTotpMutation, EnableTotpMutationVariables>

/**
 * __useEnableTotpMutation__
 *
 * To run a mutation, you first call `useEnableTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableTotpMutation, { data, loading, error }] = useEnableTotpMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnableTotpMutation(baseOptions?: Apollo.MutationHookOptions<EnableTotpMutation, EnableTotpMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<EnableTotpMutation, EnableTotpMutationVariables>(EnableTotpDocument, options)
}
export type EnableTotpMutationHookResult = ReturnType<typeof useEnableTotpMutation>
export type EnableTotpMutationResult = Apollo.MutationResult<EnableTotpMutation>
export type EnableTotpMutationOptions = Apollo.BaseMutationOptions<EnableTotpMutation, EnableTotpMutationVariables>
