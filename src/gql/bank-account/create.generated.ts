import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type CreateBankAccountMutationVariables = Types.Exact<{
  input: Types.CreateBankAccountInput
}>

export type CreateBankAccountMutation = {
  __typename?: 'Mutation'
  createBankAccount?: {
    __typename?: 'BankAccount'
    id: string
    name: string
    number: string
    isVerified?: boolean | null
    isActive?: boolean | null
    currency?: string | null
    createdAt: any
    updatedAt: any
  } | null
}

export const CreateBankAccountDocument = gql`
  mutation createBankAccount($input: createBankAccountInput!) {
    createBankAccount(input: $input) {
      id
      name
      number
      isVerified
      isActive
      currency
      createdAt
      updatedAt
    }
  }
`
export type CreateBankAccountMutationFn = Apollo.MutationFunction<CreateBankAccountMutation, CreateBankAccountMutationVariables>

/**
 * __useCreateBankAccountMutation__
 *
 * To run a mutation, you first call `useCreateBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBankAccountMutation, { data, loading, error }] = useCreateBankAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBankAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateBankAccountMutation, CreateBankAccountMutationVariables>(CreateBankAccountDocument, options)
}
export type CreateBankAccountMutationHookResult = ReturnType<typeof useCreateBankAccountMutation>
export type CreateBankAccountMutationResult = Apollo.MutationResult<CreateBankAccountMutation>
export type CreateBankAccountMutationOptions = Apollo.BaseMutationOptions<
  CreateBankAccountMutation,
  CreateBankAccountMutationVariables
>
