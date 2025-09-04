import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type RequestTotpMutationVariables = Types.Exact<{ [key: string]: never }>

export type RequestTotpMutation = {
  __typename?: 'Mutation'
  requestTotp?: {
    __typename?: 'requestTotpPayload'
    secret: string
    accountName: string
    issuer: string
    provisioningUri: string
  } | null
}

export const RequestTotpDocument = gql`
  mutation requestTotp {
    requestTotp(input: {}) {
      secret
      accountName
      issuer
      provisioningUri
    }
  }
`
export type RequestTotpMutationFn = Apollo.MutationFunction<RequestTotpMutation, RequestTotpMutationVariables>

/**
 * __useRequestTotpMutation__
 *
 * To run a mutation, you first call `useRequestTotpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestTotpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestTotpMutation, { data, loading, error }] = useRequestTotpMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestTotpMutation(
  baseOptions?: Apollo.MutationHookOptions<RequestTotpMutation, RequestTotpMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RequestTotpMutation, RequestTotpMutationVariables>(RequestTotpDocument, options)
}
export type RequestTotpMutationHookResult = ReturnType<typeof useRequestTotpMutation>
export type RequestTotpMutationResult = Apollo.MutationResult<RequestTotpMutation>
export type RequestTotpMutationOptions = Apollo.BaseMutationOptions<RequestTotpMutation, RequestTotpMutationVariables>
