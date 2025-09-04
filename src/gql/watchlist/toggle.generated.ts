import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ToggleWatchListMutationVariables = Types.Exact<{
  key: Types.Scalars['String']['input']
  add?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
}>

export type ToggleWatchListMutation = {
  __typename?: 'Mutation'
  toggleWatchList?: {
    __typename?: 'Watchlist'
    id: string
    ticker: { __typename?: 'Ticker'; id: string; inWatchlist: boolean }
  } | null
}

export const ToggleWatchListDocument = gql`
  mutation toggleWatchList($key: String!, $add: Boolean) {
    toggleWatchList(input: { key: $key, add: $add }) {
      id
      ticker {
        id
        inWatchlist
      }
    }
  }
`
export type ToggleWatchListMutationFn = Apollo.MutationFunction<ToggleWatchListMutation, ToggleWatchListMutationVariables>

/**
 * __useToggleWatchListMutation__
 *
 * To run a mutation, you first call `useToggleWatchListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleWatchListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleWatchListMutation, { data, loading, error }] = useToggleWatchListMutation({
 *   variables: {
 *      key: // value for 'key'
 *      add: // value for 'add'
 *   },
 * });
 */
export function useToggleWatchListMutation(
  baseOptions?: Apollo.MutationHookOptions<ToggleWatchListMutation, ToggleWatchListMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ToggleWatchListMutation, ToggleWatchListMutationVariables>(ToggleWatchListDocument, options)
}
export type ToggleWatchListMutationHookResult = ReturnType<typeof useToggleWatchListMutation>
export type ToggleWatchListMutationResult = Apollo.MutationResult<ToggleWatchListMutation>
export type ToggleWatchListMutationOptions = Apollo.BaseMutationOptions<ToggleWatchListMutation, ToggleWatchListMutationVariables>
