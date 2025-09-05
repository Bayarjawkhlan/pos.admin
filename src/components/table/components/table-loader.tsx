import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type TableLoaderProps = {
  columnCount: number
  rowCount?: number
  showActionsColumn?: boolean
  tableHeaderClassName?: string
  rowClassName?: string
}

const headerWidths = ['w-24', 'w-32', 'w-20', 'w-28', 'w-16', 'w-24', 'w-20']
const cellWidths = ['w-36', 'w-24', 'w-28', 'w-40', 'w-20', 'w-32', 'w-24']

export const TableLoader = ({
  columnCount,
  rowCount = 20,
  showActionsColumn = false,
  tableHeaderClassName,
  rowClassName
}: TableLoaderProps) => {
  const cols = Array.from({ length: columnCount })
  const rows = Array.from({ length: rowCount })

  return (
    <Table>
      <TableHeader className={cn('sticky top-0 z-10 h-11', tableHeaderClassName)}>
        <TableRow className='bg-secondary-background *:!text-black *:not-last:pr-8'>
          {cols.map((_, idx) => (
            <TableHead key={`th-skel-${idx}`}>
              <Skeleton className={cn('h-4', headerWidths[idx % headerWidths.length])} />
            </TableHead>
          ))}
          {showActionsColumn && <TableHead className='sticky right-0 z-10' />}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((_, rIdx) => (
          <TableRow key={`row-skel-${rIdx}`} className={cn('relative h-12 *:not-last:pr-8 hover:bg-white', rowClassName)}>
            {cols.map((_, cIdx) => (
              <TableCell key={`td-skel-${rIdx}-${cIdx}`}>
                <Skeleton className={cn('h-4', cellWidths[cIdx % cellWidths.length])} />
              </TableCell>
            ))}
            {showActionsColumn && (
              <TableCell className='bg-background sticky right-0 z-10 w-10'>
                <Skeleton className='h-4 w-4' />
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
