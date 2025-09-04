import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type UserAccountsQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type UserAccountsQuery = {
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
    | {
        __typename?: 'User'
        id: string
        cashAccounts: Array<{
          __typename?: 'CashAccount'
          id: string
          number: string
          name?: string | null
          balance: number
          currency: string
          status?: string | null
          accountType: string
          buyingPower: number
          blockedAmount: number
          cashAvailableForWithdraw: number
          pendingDeposit: number
          pendingWithdraw: number
          pendingSettle: number
          createdAt: any
        }>
        exchangeAccounts: Array<{
          __typename?: 'ExchangeAccount'
          id: string
          exchangeAccountId?: number | null
          exchange: string
          exchangeAccountType?: string | null
          status?: string | null
          custodian?: string | null
          securityAccountId: number
          isPriceEnabled: boolean
          tradingEnabled: boolean
          createdAt: any
        }>
        securityAccounts: Array<{
          __typename?: 'SecurityAccount'
          id: string
          number: string
          name?: string | null
          currency: string
          status?: string | null
          accountType: string
          secApprovalStatus?: string | null
          cashAccountId: number
          createdAt: any
        }>
      }
    | { __typename?: 'UserDevice' }
    | { __typename?: 'UserEmail' }
    | { __typename?: 'UserPhone' }
    | { __typename?: 'Wallet' }
    | { __typename?: 'Watchlist' }
    | null
}

export const UserAccountsDocument = gql`
  query userAccounts($id: ID!) {
    node(id: $id) {
      ... on User {
        id
        cashAccounts {
          id
          number
          name
          balance
          currency
          status
          accountType
          buyingPower
          blockedAmount
          cashAvailableForWithdraw
          pendingDeposit
          pendingWithdraw
          pendingSettle
          createdAt
        }
        exchangeAccounts {
          id
          exchangeAccountId
          exchange
          exchangeAccountType
          status
          custodian
          securityAccountId
          isPriceEnabled
          tradingEnabled
          createdAt
        }
        securityAccounts {
          id
          number
          name
          currency
          status
          accountType
          secApprovalStatus
          cashAccountId
          createdAt
        }
      }
    }
  }
`

/**
 * __useUserAccountsQuery__
 *
 * To run a query within a React component, call `useUserAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAccountsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserAccountsQuery(
  baseOptions: Apollo.QueryHookOptions<UserAccountsQuery, UserAccountsQueryVariables> &
    ({ variables: UserAccountsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserAccountsQuery, UserAccountsQueryVariables>(UserAccountsDocument, options)
}
export function useUserAccountsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserAccountsQuery, UserAccountsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserAccountsQuery, UserAccountsQueryVariables>(UserAccountsDocument, options)
}
export function useUserAccountsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserAccountsQuery, UserAccountsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<UserAccountsQuery, UserAccountsQueryVariables>(UserAccountsDocument, options)
}
export type UserAccountsQueryHookResult = ReturnType<typeof useUserAccountsQuery>
export type UserAccountsLazyQueryHookResult = ReturnType<typeof useUserAccountsLazyQuery>
export type UserAccountsSuspenseQueryHookResult = ReturnType<typeof useUserAccountsSuspenseQuery>
export type UserAccountsQueryResult = Apollo.QueryResult<UserAccountsQuery, UserAccountsQueryVariables>
