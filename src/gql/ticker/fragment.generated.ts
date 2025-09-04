import { gql } from '@apollo/client'
import type * as Types from '../graphql'

export type TickerFragment = {
  __typename?: 'Ticker'
  id: string
  key: string
  symbol: string
  name?: string | null
  volume?: number | null
  marketCap?: number | null
  lastPrice?: number | null
  netChange?: number | null
  pctChange?: number | null
  currency: string
}

export const TickerFragmentDoc = gql`
  fragment ticker on Ticker {
    id
    key
    symbol
    name
    volume
    marketCap
    lastPrice
    volume
    netChange
    pctChange
    currency
  }
`
