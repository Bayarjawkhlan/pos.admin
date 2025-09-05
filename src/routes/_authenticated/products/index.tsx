import { useMemo, useState } from 'react'
import { format } from 'date-fns'
import { createFileRoute } from '@tanstack/react-router'
import { useProductsColumns } from '@/modules/products/all/columns'
import { ProductFormModal } from '@/modules/products/all/components/product-form-modal'
import { ProductsTableHeader } from '@/modules/products/all/components/products-table-header'
import { PRODUCTS } from '@/modules/products/all/constants'
import { useProductsStore } from '@/modules/products/all/store'
import { Product } from '@/modules/products/all/types'
import { i18n } from '@lingui/core'
import { Pencil, Trash } from 'lucide-react'
import { toast } from 'sonner'
import { Container } from '@/components/common/container'
import { DataTable } from '@/components/table/components/data-table'

export const Route = createFileRoute('/_authenticated/products/')({
  component: RouteComponent
})

function RouteComponent() {
  const { setData, setIsEditing } = useProductsStore()
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([])

  const columns = useProductsColumns(
    'products',
    selectedRowIds,
    (rowId) => setSelectedRowIds((prev) => (prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId])),
    () => setSelectedRowIds(selectedRowIds.length === PRODUCTS.length ? [] : PRODUCTS.map((product) => product.id))
  )

  const handleDeleteProduct = async (row: Product) => {
    console.log(row)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success(i18n.t('Бараа амжилттай устгагдлаа'))
    // TODO: Refetch products
  }

  const handleRowClick = (row: Product) => {
    setData(row)
    setIsEditing(false)
  }

  const csvData = useMemo(
    () =>
      PRODUCTS.map((product) => ({
        ...product,
        branches: product.branches.map((branch) => branch.name).join(','),
        doStockEmployee: `${product.doStockEmployee.firstName} ${product.doStockEmployee.lastName}`,
        doStockDate: format(product.doStockDate, 'yyyy/MM/dd')
      })),
    []
  )

  return (
    <Container title={i18n.t('Сан')} breadcrumbs={[{ to: '#', label: i18n.t('Бараа бүтээгдэхүүн') }]}>
      <DataTable
        tableKey='products'
        columns={columns}
        disableActions={false}
        data={PRODUCTS}
        actions={[
          {
            label: i18n.t('Засах'),
            icon: Pencil,
            onClick: (row) => {
              setData(row)
              setIsEditing(true)
            }
          },
          { label: i18n.t('Устгах'), icon: Trash, onClick: (row) => handleDeleteProduct(row), variant: 'destructive' }
        ]}
        tableHeader={<ProductsTableHeader csvData={csvData} tableKey='products' />}
        onRowClick={handleRowClick}
        totalPage={10}
      />

      {/* Modals */}
      <ProductFormModal />
    </Container>
  )
}
