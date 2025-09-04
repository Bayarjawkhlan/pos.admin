import { Check, Settings2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ColumnDef } from '../types'

type ColumnFilterProps<T, K extends string> = {
  defaultColumns: ColumnDef<T, K>[]
  columns: ColumnDef<T, K>[]
  addColumn: (column: K) => void
  removeColumn: (column: K) => void
}

export const ColumnFilter = <T, K extends string>({
  defaultColumns,
  columns,
  addColumn,
  removeColumn
}: ColumnFilterProps<T, K>) => {
  const handleColumnToggle = (column: ColumnDef<T, K>) => {
    if (columns.find((c) => c.id === column.id)) {
      removeColumn(column.id)
    } else {
      addColumn(column.id)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='bg-secondary-background rounded-lg'>
          <Settings2 className='size-5' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='min-w-56'>
        <div className='flex flex-col gap-y-2'>
          {defaultColumns
            .filter((c) => c.enableHiding === undefined || c.enableHiding)
            .map((column) => (
              <button className='flex items-center gap-x-3' key={column.id} onClick={() => handleColumnToggle(column)}>
                <div
                  className={cn(
                    'flex size-4 items-center justify-center rounded border',
                    columns.find((c) => c.id === column.id) && 'bg-primary border-primary'
                  )}
                >
                  {columns.find((c) => c.id === column.id) && <Check className='size-3.5 text-white' />}
                </div>
                <p className='text-muted-foreground'>{column.headerName}</p>
              </button>
            ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
