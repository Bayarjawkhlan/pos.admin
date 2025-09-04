import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type KycProgressQueryVariables = Types.Exact<{ [key: string]: never }>

export type KycProgressQuery = {
  __typename?: 'Query'
  kycProfile?: {
    __typename?: 'Profile'
    id: string
    progress: number
    rejectionReason?: string | null
    status: string
    financialStatus: string
    addressStatus: string
    identityStatus: string
  } | null
  me?: { __typename?: 'User'; id: string; fullName: string; number: string; status?: Types.Status | null } | null
}

export const KycProgressDocument = gql`
  query kycProgress {
    kycProfile {
      id
      progress
      rejectionReason
      status
      financialStatus
      addressStatus
      identityStatus
    }
    me {
      id
      fullName
      number
      status
    }
  }
`

/**
 * __useKycProgressQuery__
 *
 * To run a query within a React component, call `useKycProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useKycProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKycProgressQuery({
 *   variables: {
 *   },
 * });
 */
export function useKycProgressQuery(baseOptions?: Apollo.QueryHookOptions<KycProgressQuery, KycProgressQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<KycProgressQuery, KycProgressQueryVariables>(KycProgressDocument, options)
}
export function useKycProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KycProgressQuery, KycProgressQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<KycProgressQuery, KycProgressQueryVariables>(KycProgressDocument, options)
}
export function useKycProgressSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<KycProgressQuery, KycProgressQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<KycProgressQuery, KycProgressQueryVariables>(KycProgressDocument, options)
}
export type KycProgressQueryHookResult = ReturnType<typeof useKycProgressQuery>
export type KycProgressLazyQueryHookResult = ReturnType<typeof useKycProgressLazyQuery>
export type KycProgressSuspenseQueryHookResult = ReturnType<typeof useKycProgressSuspenseQuery>
export type KycProgressQueryResult = Apollo.QueryResult<KycProgressQuery, KycProgressQueryVariables>
