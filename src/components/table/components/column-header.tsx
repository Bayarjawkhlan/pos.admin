import { cn } from '@/lib/utils'
import { SortDirection, SortField } from '../types'
import { getSortIcon } from '../utils'

type ColumnHeaderProps<K> = {
  title: string
  id?: string
  sorts?: SortField<K>[]
  sortable?: boolean
  setSorts?: (id: any, direction: SortDirection | null) => void
  className?: string
  align?: 'left' | 'center' | 'right'
}

export const ColumnHeader = <K,>({ title, id, sorts, sortable, setSorts, className, align = 'left' }: ColumnHeaderProps<K>) => {
  const handleSort = () => {
    if (!sortable || !id || !setSorts) return
    let direction: SortDirection | null = null
    if (!sorts?.some((s) => s.id === id)) {
      setSorts(id, 'asc')
      return
    }
    const existingSort = sorts?.find((s) => s.id === id)
    if (existingSort?.direction === 'asc') {
      direction = 'desc'
    } else {
      direction = null
    }
    setSorts(id, direction)
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
