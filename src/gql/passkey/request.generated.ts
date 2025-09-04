import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type RequestPasskeyMutationVariables = Types.Exact<{ [key: string]: never }>

export type RequestPasskeyMutation = { __typename?: 'Mutation'; requestPasskey?: any | null }

export const RequestPasskeyDocument = gql`
  mutation requestPasskey {
    requestPasskey(input: {})
  }
`
export type RequestPasskeyMutationFn = Apollo.MutationFunction<RequestPasskeyMutation, RequestPasskeyMutationVariables>

/**
 * __useRequestPasskeyMutation__
 *
 * To run a mutation, you first call `useRequestPasskeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasskeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasskeyMutation, { data, loading, error }] = useRequestPasskeyMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestPasskeyMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestPasskeyMutation, RequestPasskeyMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RequestPasskeyMutation, RequestPasskeyMutationVariables>(RequestPasskeyDocument, options)
}
export type RequestPasskeyMutationHookResult = ReturnType<typeof useRequestPasskeyMutation>
export type RequestPasskeyMutationResult = Apollo.MutationResult<RequestPasskeyMutation>
export type RequestPasskeyMutationOptions = Apollo.BaseMutationOptions<RequestPasskeyMutation, RequestPasskeyMutationVariables>
