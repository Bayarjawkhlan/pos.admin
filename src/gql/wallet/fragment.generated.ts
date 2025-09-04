import { gql } from '@apollo/client'
import type * as Types from '../graphql'

export type WalletFragment = {
  __typename?: 'Wallet'
  id: string
  name?: string | null
  account: string
  balance: number
  lastTransactionAt?: any | null
  updatedAt: any
}

export const WalletFragmentDoc = gql`
  fragment wallet on Wallet {
    id
    name
    account
    balance
    lastTransactionAt
    updatedAt
  }
`
