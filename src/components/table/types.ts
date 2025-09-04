import { LucideIcon } from 'lucide-react'
import { FILTER_VARIANTS } from './config'

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
    className?: string
  }
}

export type SortField<K> = {
  id: K
  direction?: SortDirection
}

export type FilterField<K> = {
  id: K
  value: any
}

export type SortDirection = 'asc' | 'desc'

export type Row<T> = keyof T

export type SetSorts<K> = {
  id: K
  direction: SortDirection | null
}

export type SetFilter<K> = {
  id: K
  value: any
}
