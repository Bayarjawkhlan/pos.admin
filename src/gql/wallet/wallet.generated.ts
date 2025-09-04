import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { WalletFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type WalletQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type WalletQuery = {
  __typename?: 'Query'
  node?:
    | { __typename?: 'Address' }
    | { __typename?: 'Article' }
    | { __typename?: 'Bank' }
    | { __typename?: 'BankAccount' }
    | { __typename?: 'BankTransaction' }
    | { __typename?: 'BankTransfer' }
    | { __typename?: 'CGW' }
    | { __typename?: 'Card' }
    | { __typename?: 'CashAccount' }
    | { __typename?: 'Country' }
    | { __typename?: 'District' }
    | { __typename?: 'Document' }
    | { __typename?: 'ExchangeAccount' }
    | { __typename?: 'Financial' }
    | { __typename?: 'JobStatus' }
    | { __typename?: 'Market' }
    | { __typename?: 'Note' }
    | { __typename?: 'Order' }
    | { __typename?: 'Passkey' }
    | { __typename?: 'Position' }
    | { __typename?: 'Profile' }
    | { __typename?: 'Quarter' }
    | { __typename?: 'Reference' }
    | { __typename?: 'SecurityAccount' }
    | { __typename?: 'State' }
    | { __typename?: 'Ticker' }
    | { __typename?: 'Transaction' }
    | { __typename?: 'User' }
    | { __typename?: 'UserDevice' }
    | { __typename?: 'UserEmail' }
    | { __typename?: 'UserPhone' }
    | {
        __typename?: 'Wallet'
        id: string
        name?: string | null
        account: string
        balance: number
        lastTransactionAt?: any | null
        updatedAt: any
      }
    | { __typename?: 'Watchlist' }
    | null
}

export const WalletDocument = gql`
  query wallet($id: ID!) {
    node(id: $id) {
      ...wallet
    }
  }
  ${WalletFragmentDoc}
`

/**
 * __useWalletQuery__
 *
 * To run a query within a React component, call `useWalletQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWalletQuery(
  baseOptions: Apollo.QueryHookOptions<WalletQuery, WalletQueryVariables> &
    ({ variables: WalletQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options)
}
export function useWalletLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletQuery, WalletQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options)
}
export function useWalletSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WalletQuery, WalletQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<WalletQuery, WalletQueryVariables>(WalletDocument, options)
}
export type WalletQueryHookResult = ReturnType<typeof useWalletQuery>
export type WalletLazyQueryHookResult = ReturnType<typeof useWalletLazyQuery>
export type WalletSuspenseQueryHookResult = ReturnType<typeof useWalletSuspenseQuery>
export type WalletQueryResult = Apollo.QueryResult<WalletQuery, WalletQueryVariables>
