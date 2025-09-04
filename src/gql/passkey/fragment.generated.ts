import { gql } from '@apollo/client'
import type * as Types from '../graphql'

export type PasskeyFragment = {
  __typename?: 'Passkey'
  id: string
  externalId?: string | null
  label?: string | null
  createdAt: any
  signCount?: number | null
  isActive: boolean
  lastUsedAt?: any | null
  userAgent?: string | null
}

export const PasskeyFragmentDoc = gql`
  fragment passkey on Passkey {
    id
    externalId
    label
    createdAt
    signCount
    isActive
    lastUsedAt
    userAgent
  }
`
