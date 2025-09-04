import { Select } from '@radix-ui/react-select'
import { cn } from '@/lib/utils'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PER_PAGE_OPTIONS } from '../config'
import { PaginationBar } from './pagination-bar'

type DataTablePaginationProps = {
  setPage?: (page: number) => void
  setPerPage?: (perPage: number) => void
  totalPage?: number
  page?: number
  perPage?: number
  tableFooterClassName?: string
  selectTriggerClassName?: string
  paginationBarClassName?: string
}

export const DataTablePagination = ({
  setPage,
  setPerPage,
  totalPage,
  page,
  perPage,
  tableFooterClassName,
  selectTriggerClassName,
  paginationBarClassName
}: DataTablePaginationProps) => {
  if (!setPage || !setPerPage || !totalPage || !page || !perPage) return null

  return (
    <div className={cn('mt-4 flex h-12 flex-1 items-center justify-between px-5', tableFooterClassName)}>
      <Select value={perPage.toString()} onValueChange={(value) => setPerPage(Number(value))}>
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
        <PaginationBar currentPage={page} totalPages={totalPage} onPageChange={setPage} />
      </div>
    </div>
  )
}
