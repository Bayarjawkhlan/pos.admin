import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type RegisterByMobileMutationVariables = Types.Exact<{
  phone: Types.Scalars['Phone']['input']
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>
}>

export type RegisterByMobileMutation = { __typename?: 'Mutation'; registerByMobile?: string | null }

export const RegisterByMobileDocument = gql`
  mutation registerByMobile($phone: Phone!, $id: ID) {
    registerByMobile(input: { phone: $phone, id: $id })
  }
`
export type RegisterByMobileMutationFn = Apollo.MutationFunction<RegisterByMobileMutation, RegisterByMobileMutationVariables>

/**
 * __useRegisterByMobileMutation__
 *
 * To run a mutation, you first call `useRegisterByMobileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterByMobileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerByMobileMutation, { data, loading, error }] = useRegisterByMobileMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRegisterByMobileMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterByMobileMutation, RegisterByMobileMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterByMobileMutation, RegisterByMobileMutationVariables>(RegisterByMobileDocument, options)
}
export type RegisterByMobileMutationHookResult = ReturnType<typeof useRegisterByMobileMutation>
export type RegisterByMobileMutationResult = Apollo.MutationResult<RegisterByMobileMutation>
export type RegisterByMobileMutationOptions = Apollo.BaseMutationOptions<
  RegisterByMobileMutation,
  RegisterByMobileMutationVariables
>
