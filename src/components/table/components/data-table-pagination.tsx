import { useMemo } from 'react'
import { Select } from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PER_PAGE_OPTIONS } from '../config'
import { useTablesStore } from '../store'
import { TableKey } from '../types'
import { PaginationBar } from './pagination-bar'

type DataTablePaginationProps = {
  tableKey: TableKey
  tableFooterClassName?: string
  selectTriggerClassName?: string
  paginationBarClassName?: string
}

export const DataTablePagination = ({
  tableKey,
  tableFooterClassName,
  selectTriggerClassName,
  paginationBarClassName
}: DataTablePaginationProps) => {
  const { tables, setPerPage } = useTablesStore()
  const { perPage, totalPage } = useMemo(() => tables?.[tableKey as TableKey], [tableKey, tables])

  if (!perPage || !totalPage) return null

  return (
    <div className={cn('mt-4 flex h-12 flex-1 items-center justify-between px-5', tableFooterClassName)}>
      <Select value={perPage.toString()} onValueChange={(value) => setPerPage(tableKey, Number(value))}>
        <SelectTrigger className={cn('h-12', selectTriggerClassName)}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {PER_PAGE_OPTIONS.map((option) => (
            <SelectItem key={`sp-${option}`} value={option.toString()}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className={cn('flex h-14 items-center justify-center px-5', paginationBarClassName)}>
        <PaginationBar tableKey={tableKey} />
      </div>
    </div>
  )
}
