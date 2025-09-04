import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ExchangeAccountQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type ExchangeAccountQuery = {
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
    | {
        __typename?: 'ExchangeAccount'
        id: string
        exchange: string
        exchangeAccountId?: number | null
        exchangeAccountType?: string | null
        status?: string | null
        custodian?: string | null
        securityAccountId: number
        isPriceEnabled: boolean
        tradingEnabled: boolean
        commissionType?: number | null
        feedLevel?: number | null
        createdAt: any
        updatedAt: any
      }
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

export const ExchangeAccountDocument = gql`
  query exchangeAccount($id: ID!) {
    node(id: $id) {
      ... on ExchangeAccount {
        id
        exchange
        exchangeAccountId
        exchangeAccountType
        status
        custodian
        securityAccountId
        isPriceEnabled
        tradingEnabled
        commissionType
        feedLevel
        createdAt
        updatedAt
      }
    }
  }
`

/**
 * __useExchangeAccountQuery__
 *
 * To run a query within a React component, call `useExchangeAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangeAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangeAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExchangeAccountQuery(
  baseOptions: Apollo.QueryHookOptions<ExchangeAccountQuery, ExchangeAccountQueryVariables> &
    ({ variables: ExchangeAccountQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ExchangeAccountQuery, ExchangeAccountQueryVariables>(ExchangeAccountDocument, options)
}
export function useExchangeAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ExchangeAccountQuery, ExchangeAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ExchangeAccountQuery, ExchangeAccountQueryVariables>(ExchangeAccountDocument, options)
}
export function useExchangeAccountSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ExchangeAccountQuery, ExchangeAccountQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ExchangeAccountQuery, ExchangeAccountQueryVariables>(ExchangeAccountDocument, options)
}
export type ExchangeAccountQueryHookResult = ReturnType<typeof useExchangeAccountQuery>
export type ExchangeAccountLazyQueryHookResult = ReturnType<typeof useExchangeAccountLazyQuery>
export type ExchangeAccountSuspenseQueryHookResult = ReturnType<typeof useExchangeAccountSuspenseQuery>
export type ExchangeAccountQueryResult = Apollo.QueryResult<ExchangeAccountQuery, ExchangeAccountQueryVariables>
