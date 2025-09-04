import { i18n } from '@lingui/core'
import { File, Pill, Plus, ShoppingBag } from 'lucide-react'
import { exportTableToCSV } from '@/lib/export'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ColumnFilter } from '@/components/table/components/column-filter'
import { useProductsStore } from '../store'
import { ProductFormModal } from './product-form-modal'

type ProductsTableHeaderProps = {
  csvData: any[]
}

export const ProductsTableHeader = ({ csvData }: ProductsTableHeaderProps) => {
  const { filters, setFilters, columns, defaultColumns, addColumn, removeColumn } = useProductsStore()

  return (
    <div className='flex items-center justify-between border-b px-3 py-2'>
      <div className='flex items-center gap-x-1'>
        <Button
          variant='outline'
          onClick={() => setFilters('productType', 'medicine')}
          className={cn(
            filters?.some((filter) => filter.id === 'productType' && filter.value === 'medicine') &&
              'bg-primary/10 hover:bg-primary/5 text-primary hover:text-primary border-primary/50'
          )}
        >
          <Pill />{' '}
          {filters?.some((filter) => filter.id === 'productType' && filter.value === 'medicine') && <span>{i18n.t('Эм')}</span>}
        </Button>
        <Button
          variant='outline'
          onClick={() => setFilters('productType', 'not-medicine')}
          className={cn(
            filters?.some((filter) => filter.id === 'productType' && filter.value === 'not-medicine') &&
              'bg-primary/10 hover:bg-primary/5 text-primary hover:text-primary border-primary/50'
          )}
        >
          <ShoppingBag />{' '}
          {filters?.some((filter) => filter.id === 'productType' && filter.value === 'not-medicine') && (
            <span>{i18n.t('Эм бус')}</span>
          )}
        </Button>
      </div>

      <div className='flex items-center gap-x-2'>
        <Button variant='outline' onClick={() => exportTableToCSV(columns, csvData, { filename: 'products' })}>
          <File />
          <span>{i18n.t('Excel-р татах')}</span>
        </Button>
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
        <ColumnFilter columns={columns} addColumn={addColumn} removeColumn={removeColumn} defaultColumns={defaultColumns} />
      </div>
    </div>
  )
}
