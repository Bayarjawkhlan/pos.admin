import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { FinancialFragmentDoc } from './financial.fragment.generated'

const defaultOptions = {} as const
export type CreateKycFinancialMutationVariables = Types.Exact<{
  input: Types.CreateKycFinancialInput
}>

export type CreateKycFinancialMutation = {
  __typename?: 'Mutation'
  createKycFinancial?: {
    __typename?: 'Financial'
    id: string
    annualIncomeBracket: string
    expectedTradingVolume: string
    investmentExperience: string
    investmentObjective: string
    liquidAssets?: string | null
    netWorthBracket: string
    primaryIncomeSource: string
    riskTolerance: string
    year: number
    updatedAt: any
    profile: { __typename?: 'Profile'; id: string; status: string; financialStatus: string; progress: number }
  } | null
}

export const CreateKycFinancialDocument = gql`
  mutation createKYCFinancial($input: createKYCFinancialInput!) {
    createKycFinancial(input: $input) {
      ...financial
      profile {
        id
        status
        financialStatus
        progress
      }
    }
  }
  ${FinancialFragmentDoc}
`
export type CreateKycFinancialMutationFn = Apollo.MutationFunction<
  CreateKycFinancialMutation,
  CreateKycFinancialMutationVariables
>

/**
 * __useCreateKycFinancialMutation__
 *
 * To run a mutation, you first call `useCreateKycFinancialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKycFinancialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKycFinancialMutation, { data, loading, error }] = useCreateKycFinancialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateKycFinancialMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateKycFinancialMutation, CreateKycFinancialMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateKycFinancialMutation, CreateKycFinancialMutationVariables>(CreateKycFinancialDocument, options)
}
export type CreateKycFinancialMutationHookResult = ReturnType<typeof useCreateKycFinancialMutation>
export type CreateKycFinancialMutationResult = Apollo.MutationResult<CreateKycFinancialMutation>
export type CreateKycFinancialMutationOptions = Apollo.BaseMutationOptions<
  CreateKycFinancialMutation,
  CreateKycFinancialMutationVariables
>
