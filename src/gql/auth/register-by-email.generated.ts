import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type RegisterByEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['Email']['input']
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>
}>

export type RegisterByEmailMutation = { __typename?: 'Mutation'; registerByEmail?: string | null }

export const RegisterByEmailDocument = gql`
  mutation registerByEmail($email: Email!, $id: ID) {
    registerByEmail(input: { email: $email, id: $id })
  }
`
export type RegisterByEmailMutationFn = Apollo.MutationFunction<RegisterByEmailMutation, RegisterByEmailMutationVariables>

/**
 * __useRegisterByEmailMutation__
 *
 * To run a mutation, you first call `useRegisterByEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterByEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerByEmailMutation, { data, loading, error }] = useRegisterByEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRegisterByEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterByEmailMutation, RegisterByEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterByEmailMutation, RegisterByEmailMutationVariables>(RegisterByEmailDocument, options)
}
export type RegisterByEmailMutationHookResult = ReturnType<typeof useRegisterByEmailMutation>
export type RegisterByEmailMutationResult = Apollo.MutationResult<RegisterByEmailMutation>
export type RegisterByEmailMutationOptions = Apollo.BaseMutationOptions<RegisterByEmailMutation, RegisterByEmailMutationVariables>
