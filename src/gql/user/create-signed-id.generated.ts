import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type CreateSignedIdMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>
  expiresIn?: Types.InputMaybe<Types.Scalars['Int']['input']>
  purpose: Types.Scalars['String']['input']
}>

export type CreateSignedIdMutation = { __typename?: 'Mutation'; createSignedId?: string | null }

export const CreateSignedIdDocument = gql`
  mutation createSignedId($id: ID, $expiresIn: Int, $purpose: String!) {
    createSignedId(input: { id: $id, expiresIn: $expiresIn, purpose: $purpose })
  }
`
export type CreateSignedIdMutationFn = Apollo.MutationFunction<CreateSignedIdMutation, CreateSignedIdMutationVariables>

/**
 * __useCreateSignedIdMutation__
 *
 * To run a mutation, you first call `useCreateSignedIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSignedIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSignedIdMutation, { data, loading, error }] = useCreateSignedIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      expiresIn: // value for 'expiresIn'
 *      purpose: // value for 'purpose'
 *   },
 * });
 */
export function useCreateSignedIdMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateSignedIdMutation, CreateSignedIdMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateSignedIdMutation, CreateSignedIdMutationVariables>(CreateSignedIdDocument, options)
}
export type CreateSignedIdMutationHookResult = ReturnType<typeof useCreateSignedIdMutation>
export type CreateSignedIdMutationResult = Apollo.MutationResult<CreateSignedIdMutation>
export type CreateSignedIdMutationOptions = Apollo.BaseMutationOptions<CreateSignedIdMutation, CreateSignedIdMutationVariables>
