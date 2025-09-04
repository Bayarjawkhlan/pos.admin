import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ConfirmMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
  code: Types.Scalars['String']['input']
}>

export type ConfirmMutation = { __typename?: 'Mutation'; confirmableConfirm?: string | null }

export const ConfirmDocument = gql`
  mutation confirm($id: ID!, $code: String!) {
    confirmableConfirm(input: { id: $id, token: $code })
  }
`
export type ConfirmMutationFn = Apollo.MutationFunction<ConfirmMutation, ConfirmMutationVariables>

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options)
}
export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>
