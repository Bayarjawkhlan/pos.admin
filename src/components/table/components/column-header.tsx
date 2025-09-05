import { useMemo } from 'react'
import { cn } from '@/lib/utils'
import { useTablesStore } from '../store'
import { SortDirection, TableKey } from '../types'
import { getSortIcon } from '../utils'

type ColumnHeaderProps = {
  id?: string
  tableKey: TableKey
  title: string
  sortable?: boolean
  className?: string
  align?: 'left' | 'center' | 'right'
}

export const ColumnHeader = ({ title, id, tableKey, sortable = true, className, align = 'left' }: ColumnHeaderProps) => {
  const { tables, setSorts } = useTablesStore()
  const { sorts } = useMemo(() => tables?.[tableKey as TableKey], [tableKey, tables])

  const handleSort = () => {
    if (!sortable || !id || !setSorts) return
    let direction: SortDirection | null = null
    if (!sorts?.some((s) => s.id === id)) {
      setSorts(tableKey, { id, direction: 'asc' })
      return
    }
    const existingSort = sorts?.find((s) => s.id === id)
    if (existingSort?.direction === 'asc') {
      direction = 'desc'
    } else {
      direction = null
    }
    setSorts(tableKey, { id, direction })
  }

  return (
    <button
      className={cn(
        'flex items-center gap-x-2',
        className,
        align === 'center' && 'justify-center',
        align === 'right' && 'justify-end',
        !sortable && 'cursor-default'
      )}
      onClick={handleSort}
    >
      <p>{title}</p>
      {sortable && getSortIcon(sorts?.find((s) => s.id === id)?.direction)}
    </button>
  )
}
