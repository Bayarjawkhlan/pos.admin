import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'
import { UserFragmentDoc } from './fragment.generated'

const defaultOptions = {} as const
export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input']
}>

export type UserQuery = {
  __typename?: 'Query'
  user?:
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
        fullName: string
        email?: any | null
        phone?: any | null
        username: string
        createdAt: any
        updatedAt: any
        lastSignInAt?: any | null
        lastSignInIp?: string | null
      }
    | { __typename?: 'UserDevice' }
    | { __typename?: 'UserEmail' }
    | { __typename?: 'UserPhone' }
    | { __typename?: 'Wallet' }
    | { __typename?: 'Watchlist' }
    | null
}

export const UserDocument = gql`
  query user($id: ID!) {
    user: node(id: $id) {
      ...user
    }
  }
  ${UserFragmentDoc}
`

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> &
    ({ variables: UserQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export function useUserSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options)
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>
