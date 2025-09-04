import { gql } from '@apollo/client'
import type * as Types from '../graphql'

export type UserFragment = {
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

export const UserFragmentDoc = gql`
  fragment user on User {
    ... on User {
      id
      fullName
      email
      phone
      username
      createdAt
      updatedAt
      lastSignInAt
      lastSignInIp
    }
  }
`
