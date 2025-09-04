import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type CashAccountQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type CashAccountQuery = {
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
    | {
        __typename?: 'CashAccount'
        id: string
        number: string
        name?: string | null
        accountType: string
        status?: string | null
        balance: number
        currency: string
        buyingPower: number
        blockedAmount: number
        cashAvailableForWithdraw: number
        pendingDeposit: number
        pendingWithdraw: number
        pendingSettle: number
        odLimit: number
        dailyOdLimit: number
        dailyOdLimitEnabled: number
        marginBlock: number
        marginDue: number
        dayMarginBlock: number
        dayMarginDue: number
        secondaryTradingLimit: number
        unsettledTransfers: number
        createdAt: any
        updatedAt: any
        securityAccounts: Array<{
          __typename?: 'SecurityAccount'
          id: string
          number: string
          name?: string | null
          status?: string | null
        }>
      }
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
    | { __typename?: 'Wallet' }
    | { __typename?: 'Watchlist' }
    | null
}

export const CashAccountDocument = gql`
  query cashAccount($id: ID!) {
    node(id: $id) {
      ... on CashAccount {
        id
        number
        name
        accountType
        status
        balance
        currency
        buyingPower
        blockedAmount
        cashAvailableForWithdraw
        pendingDeposit
        pendingWithdraw
        pendingSettle
        odLimit
        dailyOdLimit
        dailyOdLimitEnabled
        marginBlock
        marginDue
        dayMarginBlock
        dayMarginDue
        secondaryTradingLimit
        unsettledTransfers
        createdAt
        updatedAt
        securityAccounts {
          id
          number
          name
          status
        }
      }
    }
  }
`

/**
 * __useCashAccountQuery__
 *
 * To run a query within a React component, call `useCashAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCashAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCashAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCashAccountQuery(
  baseOptions: Apollo.QueryHookOptions<CashAccountQuery, CashAccountQueryVariables> &
    ({ variables: CashAccountQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CashAccountQuery, CashAccountQueryVariables>(CashAccountDocument, options)
}
export function useCashAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CashAccountQuery, CashAccountQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CashAccountQuery, CashAccountQueryVariables>(CashAccountDocument, options)
}
export function useCashAccountSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CashAccountQuery, CashAccountQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<CashAccountQuery, CashAccountQueryVariables>(CashAccountDocument, options)
}
export type CashAccountQueryHookResult = ReturnType<typeof useCashAccountQuery>
export type CashAccountLazyQueryHookResult = ReturnType<typeof useCashAccountLazyQuery>
export type CashAccountSuspenseQueryHookResult = ReturnType<typeof useCashAccountSuspenseQuery>
export type CashAccountQueryResult = Apollo.QueryResult<CashAccountQuery, CashAccountQueryVariables>
