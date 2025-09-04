import { gql } from '@apollo/client'
import type * as Types from '../graphql'

export type FinancialFragment = {
  __typename?: 'Financial'
  id: string
  annualIncomeBracket: string
  expectedTradingVolume: string
  investmentExperience: string
  investmentObjective: string
  liquidAssets?: string | null
  netWorthBracket: string
  primaryIncomeSource: string
  riskTolerance: string
  year: number
  updatedAt: any
}

export const FinancialFragmentDoc = gql`
  fragment financial on Financial {
    id
    annualIncomeBracket
    expectedTradingVolume
    investmentExperience
    investmentObjective
    liquidAssets
    netWorthBracket
    primaryIncomeSource
    riskTolerance
    year
    updatedAt
  }
`
