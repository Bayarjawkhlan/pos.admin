import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { FinancialFragmentDoc } from './financial.fragment.generated'

const defaultOptions = {} as const
export type KycIdentityQueryVariables = Types.Exact<{ [key: string]: never }>

export type KycIdentityQuery = {
  __typename?: 'Query'
  kycProfile?: {
    __typename?: 'Profile'
    id: string
    progress: number
    firstName?: string | null
    lastName?: string | null
    rejectionReason?: string | null
    nationalityId?: string | null
    citizenshipId?: string | null
    status: string
    citizenIdNumber?: string | null
    identityStatus: string
    addressStatus: string
    financialStatus: string
    birthday?: any | null
    gender?: Types.Gender | null
    documents: Array<{
      __typename?: 'Document'
      id: string
      documentNumber?: string | null
      documentType: string
      status: string
    }>
    financials: Array<{
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
    }>
    address?: {
      __typename?: 'Address'
      id: string
      countryId?: string | null
      stateId?: string | null
      districtId?: string | null
      quarterId?: string | null
      address?: string | null
      state?: { __typename?: 'State'; id: string; name: string } | null
      district?: { __typename?: 'District'; id: string; name: string } | null
      quarter?: { __typename?: 'Quarter'; id: string; name: string } | null
    } | null
  } | null
}

export const KycIdentityDocument = gql`
  query kycIdentity {
    kycProfile {
      id
      progress
      firstName
      lastName
      rejectionReason
      nationalityId
      citizenshipId
      status
      citizenIdNumber
      identityStatus
      addressStatus
      financialStatus
      birthday
      gender
      documents {
        id
        documentNumber
        documentType
        status
      }
      financials {
        ...financial
      }
      address {
        id
        countryId
        stateId
        state {
          id
          name
        }
        districtId
        district {
          id
          name
        }
        quarterId
        quarter {
          id
          name
        }
        address
      }
    }
  }
  ${FinancialFragmentDoc}
`

/**
 * __useKycIdentityQuery__
 *
 * To run a query within a React component, call `useKycIdentityQuery` and pass it any options that fit your needs.
 * When your component renders, `useKycIdentityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKycIdentityQuery({
 *   variables: {
 *   },
 * });
 */
export function useKycIdentityQuery(baseOptions?: Apollo.QueryHookOptions<KycIdentityQuery, KycIdentityQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<KycIdentityQuery, KycIdentityQueryVariables>(KycIdentityDocument, options)
}
export function useKycIdentityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KycIdentityQuery, KycIdentityQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<KycIdentityQuery, KycIdentityQueryVariables>(KycIdentityDocument, options)
}
export function useKycIdentitySuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<KycIdentityQuery, KycIdentityQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<KycIdentityQuery, KycIdentityQueryVariables>(KycIdentityDocument, options)
}
export type KycIdentityQueryHookResult = ReturnType<typeof useKycIdentityQuery>
export type KycIdentityLazyQueryHookResult = ReturnType<typeof useKycIdentityLazyQuery>
export type KycIdentitySuspenseQueryHookResult = ReturnType<typeof useKycIdentitySuspenseQuery>
export type KycIdentityQueryResult = Apollo.QueryResult<KycIdentityQuery, KycIdentityQueryVariables>
