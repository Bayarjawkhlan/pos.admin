import { useEffect, useMemo } from 'react'
import { i18n } from '@lingui/core'
import { EllipsisVertical, LucideIcon, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { ActionDialog } from '@/components/common/action-dialog'
import { useTablesStore } from '../store'
import { ColumnDef, FilterField, SortField, TableKey } from '../types'
import { DataTablePagination } from './data-table-pagination'
import { FilterRowCell } from './filter-row-cell'
import { TableLoader } from './table-loader'

type DataTableProps<T, K extends string> = {
  tableKey: TableKey
  columns: ColumnDef<T, K>[]
  data: T[]

  totalPage: number
  isLoading?: boolean
  disableActions?: boolean
  tableHeader?: React.ReactNode
  actions?: { label: string; icon: LucideIcon; onClick: (row: T) => void; variant?: 'default' | 'destructive' }[]
  initialSorts?: SortField<K>[]
  initialFilters?: FilterField<K>[]
  selectedRowIds?: number[]

  containerClassName?: string
  tableContainerClassName?: string
  rowClassName?: string
  tableHeaderClassName?: string
  tableFooterClassName?: string
  selectTriggerClassName?: string
  paginationBarClassName?: string

  onRowClick?: (row: T) => void
  tableCellClassName?: (row: T) => string
  setSelectedRowIds?: (rowIds: number[]) => void
}

export const DataTable = <T, K extends string>({
  tableKey,
  columns,
  data,

  isLoading,
  tableHeader,
  disableActions,
  totalPage,
  actions,
  initialSorts = [],
  initialFilters = [],

  rowClassName,
  containerClassName,
  tableHeaderClassName,
  tableFooterClassName,
  selectTriggerClassName,
  paginationBarClassName,
  tableContainerClassName,

  onRowClick,
  tableCellClassName
}: DataTableProps<T, K>) => {
  const { tables, initTable, clearAllFilters } = useTablesStore()

  useEffect(() => {
    initTable(tableKey, {
      page: 1,
      perPage: 20,
      totalPage: totalPage || 1,
      columns: columns || [],
      defaultColumns: columns || [],
      sorts: initialSorts || [],
      filters: initialFilters || []
    })
  }, [tableKey])

  const table = useMemo(() => tables?.[tableKey as TableKey], [tableKey, tables])

  if (!table) return <TableLoader columnCount={columns.length} />

  const visibleColumns = (table.defaultColumns || []).filter((column) => table.columns.find((c) => c?.id === column?.id))

  return (
    <div className={cn('h-full overflow-hidden rounded-lg border bg-white shadow-sm', containerClassName)}>
      {tableHeader}
      <div className={cn('relative h-full overflow-y-auto *:h-full', tableContainerClassName)}>
        <Table>
          <TableHeader className={cn('sticky top-0 z-10 h-11', tableHeaderClassName)}>
            <TableRow className='bg-secondary-background *:!text-black *:not-last:pr-8'>
              {table.defaultColumns.map((column, index) => {
                if (!table.columns.find((c) => c?.id === column?.id)) return
                return <TableHead key={`th-${index}`}>{column.header}</TableHead>
              })}
              {actions && <TableHead className='sticky right-0 z-10' />}
            </TableRow>
          </TableHeader>

          <TableBody>
            {table.columns.some((c) => c.filterable) && (
              <TableRow className='h-10 hover:bg-white'>
                {table.defaultColumns.map((column, index) => {
                  if (!table.columns.find((c) => c?.id === column?.id)) return null
                  if (!table.filters) return null
                  return (
                    <TableCell key={`th-${index}`}>
                      <FilterRowCell column={column as ColumnDef<T, K>} tableKey={tableKey} />
                    </TableCell>
                  )
                })}
                {clearAllFilters && table.filters && table.filters.length > 0 && (
                  <TableCell className='bg-background sticky right-0 z-10 w-10'>
                    <ActionDialog title={i18n.t('Бүх шүүлтүүрийг устгах')} onConfirm={() => clearAllFilters(tableKey)}>
                      <Button variant='ghost' size='icon'>
                        <Trash2 className='size-5' />
                      </Button>
                    </ActionDialog>
                  </TableCell>
                )}
              </TableRow>
            )}
            {isLoading ? (
              <TableLoader
                columnCount={visibleColumns.length}
                rowCount={table.perPage || 10}
                showActionsColumn={!!actions}
                rowClassName={rowClassName}
              />
            ) : (
              data.slice(0, table.perPage || 10).map((row, index) => (
                <TableRow
                  key={`row-${index}`}
                  className={cn('relative h-12 *:not-last:pr-8 hover:bg-white', rowClassName)}
                  onClick={() => onRowClick?.(row)}
                >
                  {table.defaultColumns.map((column) => {
                    if (!table.columns.find((c) => c?.id === column?.id)) return
                    return (
                      <TableCell key={`td-${column.id}`} className={cn(tableCellClassName?.(row))}>
                        {column.cell(row)}
                      </TableCell>
                    )
                  })}
                  {actions && (
                    <TableCell className='bg-background sticky right-0 z-10'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant='ghost' size='icon' onClick={(event) => event.stopPropagation()}>
                            <EllipsisVertical className='size-5' />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end'>
                          {actions.map((action, index) => (
                            <DropdownMenuItem
                              variant={action.variant || 'default'}
                              disabled={disableActions}
                              key={`dm-${action.label}-${index}`}
                              className='cursor-pointer'
                              onClick={(event) => {
                                event.stopPropagation()
                                action.onClick(row)
                              }}
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
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination
        tableKey={tableKey}
        tableFooterClassName={tableFooterClassName}
        selectTriggerClassName={selectTriggerClassName}
        paginationBarClassName={paginationBarClassName}
      />
    </div>
  )
}
