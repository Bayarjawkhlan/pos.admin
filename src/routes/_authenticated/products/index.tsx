import { useEffect, useMemo } from 'react'
import { format } from 'date-fns'
import { createFileRoute } from '@tanstack/react-router'
import { useProductsColumns } from '@/modules/products/all/columns'
import { ProductsTableHeader } from '@/modules/products/all/components/products-table-header'
import { PRODUCTS } from '@/modules/products/all/constants'
import { useProductsStore } from '@/modules/products/all/store'
import { Product, ProductColumnId } from '@/modules/products/all/types'
import { i18n } from '@lingui/core'
import { Pencil, Trash } from 'lucide-react'
import { toast } from 'sonner'
import { Container } from '@/components/common/container'
import { DataTable } from '@/components/table/components/data-table'

export const Route = createFileRoute('/_authenticated/products/')({
  component: RouteComponent
})

function RouteComponent() {
  const {
    columns,
    setSelectedProduct,
    setPage,
    setPerPage,
    totalPage,
    page,
    perPage,
    filters,
    setColumns,
    setFilter,
    clearAllFilters
  } = useProductsStore()
  const defaultColumns = useProductsColumns()

  const handleDeleteProduct = async (row: Product) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success(i18n.t('Бараа амжилттай устгагдлаа'))
    // TODO: Refetch products
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

  useEffect(() => {
    setColumns(defaultColumns)
  }, [])

  const handleRowClick = (row: any) => {
    console.log({ row })
  }

  const productType = filters?.find((filter) => filter.id === 'productType')?.value

  return (
    <Container title={i18n.t('Сан')} breadcrumbs={[{ to: '#', label: i18n.t('Бараа бүтээгдэхүүн') }]}>
      <DataTable<Product, ProductColumnId>
        columns={columns}
        page={page}
        perPage={perPage}
        totalPage={totalPage}
        setPage={setPage}
        setPerPage={setPerPage}
        filters={filters}
        setFilter={setFilter}
        defaultColumns={defaultColumns}
        clearAllFilters={clearAllFilters}
        disableActions={false}
        data={PRODUCTS.filter((product) => !productType || product.productType === productType)}
        actions={[
          { label: i18n.t('Засах'), icon: Pencil, onClick: (row) => setSelectedProduct(row) },
          { label: i18n.t('Устгах'), icon: Trash, onClick: (row) => handleDeleteProduct(row), variant: 'destructive' }
        ]}
        tableHeader={<ProductsTableHeader csvData={csvData} />}
        onRowClick={handleRowClick}
      />
    </Container>
  )
}
