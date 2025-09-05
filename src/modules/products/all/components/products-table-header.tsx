import { i18n } from '@lingui/core'
import { Download, Plus } from 'lucide-react'
import { exportTableToCSV } from '@/lib/export'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ColumnFilter } from '@/components/table/components/column-filter'
import { useTablesStore } from '@/components/table/store'
import { ColumnDef, TableKey } from '@/components/table/types'
import { Product, ProductColumnId } from '../types'
import { ProductFormModal } from './product-form-modal'

type ProductsTableHeaderProps = {
  tableKey: TableKey
  csvData: any[]
  selectedRowIds?: number
  totalRows?: number
}

export const ProductsTableHeader = ({ csvData, tableKey, selectedRowIds = 0, totalRows = 0 }: ProductsTableHeaderProps) => {
  const { tables } = useTablesStore()

  const { columns } = tables?.[tableKey as TableKey] || {}

  return (
    <div className='flex items-center justify-between border-b px-3 py-2'>
      <p className='text-sm'>
        {selectedRowIds} {i18n.t('Бараа сонгогдлоо')} / {i18n.t('Нийт')} {totalRows}
      </p>
      <div className='flex items-center gap-x-2'>
        {/* Add new Product sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Plus />
              <span>{i18n.t('Бараа нэмэх')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent className='sm:min-w-lg'>
            <ProductFormModal />
          </SheetContent>
        </Sheet>
        <Button
          variant='outline'
          size='icon'
          onClick={() => exportTableToCSV(columns as ColumnDef<Product, ProductColumnId>[], csvData, { filename: tableKey })}
        >
          <Download />
        </Button>
        <ColumnFilter tableKey={tableKey} />
      </div>
    </div>
  )
}
