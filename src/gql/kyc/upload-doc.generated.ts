import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type UploadDocMutationVariables = Types.Exact<{
  input: Types.UploadKycDocumentInput
}>

export type UploadDocMutation = {
  __typename?: 'Mutation'
  uploadKycDocument?: {
    __typename?: 'Document'
    id: string
    status: string
    documentType: string
    documentNumber?: string | null
    profile: {
      __typename?: 'Profile'
      id: string
      progress: number
      status: string
      identityStatus: string
      addressStatus: string
      financialStatus: string
    }
    frontFile: { __typename?: 'Blob'; id: string; contentType?: string | null }
    backFile?: { __typename?: 'Blob'; id: string; contentType?: string | null } | null
  } | null
}

export const UploadDocDocument = gql`
  mutation uploadDoc($input: uploadKYCDocumentInput!) {
    uploadKycDocument(input: $input) {
      id
      status
      documentType
      documentNumber
      profile {
        id
        progress
        status
        identityStatus
        addressStatus
        financialStatus
      }
      frontFile {
        id
        contentType
      }
      backFile {
        id
        contentType
      }
    }
  }
`
export type UploadDocMutationFn = Apollo.MutationFunction<UploadDocMutation, UploadDocMutationVariables>

/**
 * __useUploadDocMutation__
 *
 * To run a mutation, you first call `useUploadDocMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadDocMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadDocMutation, { data, loading, error }] = useUploadDocMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUploadDocMutation(baseOptions?: Apollo.MutationHookOptions<UploadDocMutation, UploadDocMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UploadDocMutation, UploadDocMutationVariables>(UploadDocDocument, options)
}
export type UploadDocMutationHookResult = ReturnType<typeof useUploadDocMutation>
export type UploadDocMutationResult = Apollo.MutationResult<UploadDocMutation>
export type UploadDocMutationOptions = Apollo.BaseMutationOptions<UploadDocMutation, UploadDocMutationVariables>
