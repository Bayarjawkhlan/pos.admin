import { EllipsisVertical, LucideIcon, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ActionDialog } from '@/components/common/action-dialog'
import { AddFilter, ChangeFilterOperator, ColumnDef, FilterField, RemoveFilter, SetFilterValue } from '../types'
import { DataTablePagination } from './data-table-pagination'
import { FilterRowCell } from './filter-row-cell'

type DataTableProps<T, K extends string> = {
  columns: ColumnDef<T, K>[]
  defaultColumns: ColumnDef<T, K>[]
  data: T[]
  actions?: { label: string; icon: LucideIcon; onClick: (row: T) => void }[]
  totalPage?: number
  page?: number
  perPage?: number
  filters?: FilterField<K>[]
  containerClassName?: string
  tableContainerClassName?: string
  rowClassName?: string
  tableHeaderClassName?: string
  tableFooterClassName?: string
  selectTriggerClassName?: string
  paginationBarClassName?: string
  caption?: string
  tableHeader?: React.ReactNode
  disableActions?: boolean

  setPage?: (page: number) => void
  addFilter?: (filter: AddFilter<K>) => void
  removeFilter?: (filter: RemoveFilter<K>) => void
  setFilterValue?: (filter: SetFilterValue<K>) => void
  clearFilters?: (filter: K) => void
  clearAllFilters?: () => void
  setPerPage?: (perPage: number) => void
  onRowClick?: (row: T) => void
  tableCellClassName?: (row: T) => string
  changeFilterOperator?: (filter: ChangeFilterOperator<K>) => void
}

export const DataTable = <T, K extends string>({
  columns,
  defaultColumns,
  data,
  onRowClick,
  actions,
  totalPage,
  page,
  setPage,
  perPage,
  setPerPage,
  filters,
  addFilter,
  removeFilter,
  setFilterValue,
  clearAllFilters,
  changeFilterOperator,
  rowClassName,
  containerClassName,
  tableHeaderClassName,
  tableFooterClassName,
  selectTriggerClassName,
  paginationBarClassName,
  tableContainerClassName,
  tableCellClassName,
  caption,
  tableHeader,
  disableActions
}: DataTableProps<T, K>) => (
  <div className={cn('h-full overflow-hidden rounded-lg border bg-white shadow-sm', containerClassName)}>
    {tableHeader}
    <div className={cn('relative h-full overflow-y-auto *:h-full', tableContainerClassName)}>
      <Table>
        {caption && <TableCaption className='pb-10'>{caption}</TableCaption>}
        <TableHeader className={cn('sticky top-0 z-10 h-11', tableHeaderClassName)}>
          <TableRow className='bg-secondary-background *:!text-black *:not-last:pr-8'>
            {defaultColumns.map((column, index) => {
              if (!columns.find((c) => c?.id === column?.id)) return
              return <TableHead key={`th-${index}`}>{column.header}</TableHead>
            })}
            {actions && <TableHead className='sticky right-0 z-10 w-10' />}
          </TableRow>
        </TableHeader>

        <TableBody>
          {columns.some((c) => c.filterable) && (
            <TableRow className='h-10 hover:bg-white'>
              {defaultColumns.map((column, index) => {
                if (!columns.find((c) => c?.id === column?.id)) return null
                if (!filters || !addFilter) return null
                return (
                  <TableCell key={`th-${index}`}>
                    <FilterRowCell
                      column={column}
                      filters={filters}
                      addFilter={addFilter}
                      setFilterValue={setFilterValue}
                      removeFilter={removeFilter}
                      changeFilterOperator={changeFilterOperator}
                    />
                  </TableCell>
                )
              })}
              {clearAllFilters && filters && filters.reduce((acc, curr) => acc + curr.values.length, 0) > 0 && (
                <TableCell className='bg-background sticky right-0 z-10 w-10'>
                  <ActionDialog onConfirm={() => clearAllFilters?.()}>
                    <Button variant='ghost' size='icon'>
                      <Trash2 className='size-5' />
                    </Button>
                  </ActionDialog>
                </TableCell>
              )}
            </TableRow>
          )}
          {data.slice(0, perPage || 10).map((row, index) => (
            <TableRow
              key={`row-${index}`}
              className={cn('relative h-12 *:not-last:pr-8 hover:bg-white', rowClassName)}
              onClick={() => onRowClick?.(row)}
            >
              {defaultColumns.map((column) => {
                if (!columns.find((c) => c?.id === column?.id)) return
                return (
                  <TableCell key={`td-${column.id}`} className={cn(tableCellClassName?.(row))}>
                    {column.cell(row)}
                  </TableCell>
                )
              })}
              {actions && (
                <TableCell className='bg-background sticky right-0 z-10 w-10'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' size='icon'>
                        <EllipsisVertical className='size-5' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                      {actions.map((action, index) => (
                        <DropdownMenuItem
                          disabled={disableActions}
                          key={`dm-${action.label}-${index}`}
                          className='cursor-pointer'
                          onClick={() => action.onClick(row)}
                        >
                          <action.icon className='mr-2 size-4' />
                          {action.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

    <DataTablePagination
      setPage={setPage}
      setPerPage={setPerPage}
      totalPage={totalPage}
      page={page}
      perPage={perPage}
      tableFooterClassName={tableFooterClassName}
      selectTriggerClassName={selectTriggerClassName}
      paginationBarClassName={paginationBarClassName}
    />
  </div>
)
