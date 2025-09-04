import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type MeQueryVariables = Types.Exact<{
  includeCashAccounts?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
  includeBankAccounts?: Types.InputMaybe<Types.Scalars['Boolean']['input']>
}>

export type MeQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    fullName: string
    email?: any | null
    phone?: any | null
    username: string
    number: string
    status?: Types.Status | null
    language?: string | null
    twoFactorEnabled: boolean
    customerToken?: string | null
    createdAt: any
    updatedAt: any
    avatar?: { __typename?: 'Image'; mediumUrl: string } | null
    cashAccounts?: Array<{
      __typename?: 'CashAccount'
      id: string
      name?: string | null
      accountType: string
      balance: number
      blockedAmount: number
      buyingPower: number
      cashAvailableForWithdraw: number
      createdAt: any
      currency: string
      dailyOdLimit: number
      dailyOdLimitEnabled: number
      data: any
      dayMarginBlock: number
      dayMarginDue: number
      marginBlock: number
      marginDue: number
      metadata: any
      number: string
      odLimit: number
      pendingDeposit: number
      pendingSettle: number
      pendingWithdraw: number
      secondaryTradingLimit: number
      status?: string | null
      unsettledTransfers: number
    }>
    bankAccounts?: Array<{
      __typename?: 'BankAccount'
      id: string
      name: string
      isActive?: boolean | null
      number: string
      isVerified?: boolean | null
      bank: { __typename?: 'Bank'; id: string; code: string; name: string }
    }>
  } | null
}

export const MeDocument = gql`
  query me($includeCashAccounts: Boolean = false, $includeBankAccounts: Boolean = false) {
    me {
      id
      fullName
      email
      phone
      avatar {
        mediumUrl
      }
      username
      number
      status
      language
      twoFactorEnabled
      customerToken @include(if: $includeCashAccounts)
      cashAccounts @include(if: $includeCashAccounts) {
        id
        name
        accountType
        balance
        blockedAmount
        buyingPower
        cashAvailableForWithdraw
        createdAt
        currency
        dailyOdLimit
        dailyOdLimitEnabled
        data
        dayMarginBlock
        dayMarginDue
        id
        marginBlock
        marginDue
        metadata
        number
        odLimit
        pendingDeposit
        pendingSettle
        pendingWithdraw
        secondaryTradingLimit
        status
        unsettledTransfers
      }
      bankAccounts @include(if: $includeBankAccounts) {
        id
        name
        bank {
          id
          code
          name
        }
        isActive
        number
        isVerified
      }
      createdAt
      updatedAt
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *      includeCashAccounts: // value for 'includeCashAccounts'
 *      includeBankAccounts: // value for 'includeBankAccounts'
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
