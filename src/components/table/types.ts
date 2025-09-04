import { LucideIcon } from 'lucide-react'
import { FILTER_VARIANTS, JOIN_OPERATORS, OPERATORS } from './config'

export type ColumnDef<T, K extends string> = {
  id: K
  headerName: string
  header: React.ReactNode
  cell: (row: T) => React.ReactNode
  enableHiding?: boolean
  filterable?: boolean
  meta?: {
    options?: { icon?: LucideIcon; label: string; value: string }[]
    variant?: (typeof FILTER_VARIANTS)[number]
    placeholder?: string
    icon?: LucideIcon
    suffix?: string
    className?: string
    thousandSeparator?: boolean
  }
}

export type SortField = {
  id: string
  direction?: SortDirection
}

export type JoinOperator = (typeof JOIN_OPERATORS)[number]

export type FilterField<K> = {
  id: K
  join: JoinOperator
  values: FilterValue[]
}

export type FilterValue = { operator: Operator; value: any; uuid: string }

export type SortDirection = 'asc' | 'desc'

export type AddFilter<K> = {
  id: K
  operator: Operator
  value: any
}

export type SetFilterValue<K> = {
  id: K
  uuid: string
  value: any
  operator: Operator
}

export type RemoveFilter<K> = {
  id: K
  uuid: string
}

export type ChangeFilterOperator<K> = {
  id: K
  uuid: string
  operator: Operator
}

export type Operator = (typeof OPERATORS)[number]

export type Row<T> = keyof T

export type SetSorts<K> = {
  id: K
  direction: SortDirection | null
}
