// import { useEffect, useMemo } from 'react'
// import { format } from 'date-fns'
import { createFileRoute } from '@tanstack/react-router'
// import { useProductsColumns } from '@/modules/products/stock-count/columns'
// import { PRODUCTS } from '@/modules/products/stock-count/constants'
// import { useStockCountsStore } from '@/modules/products/stock-count/store'
// import { StockCountProduct } from '@/modules/products/stock-count/types'
import { i18n } from '@lingui/core'
// import { toast } from 'sonner'
import { Container } from '@/components/common/container'

export const Route = createFileRoute('/_authenticated/products/stock-count')({
  component: RouteComponent
})

function RouteComponent() {
  // const { columns, setSelectedProduct, setPage, setPerPage, totalPage, page, perPage, filters, setColumns, setFilters } =
  //   useStockCountsStore()
  // const defaultColumns = useProductsColumns()

  // const handleDeleteProduct = async (row: StockCountProduct) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   toast.success(i18n.t('Бараа амжилттай устгагдлаа'))
  //   // TODO: Refetch products
  // }

  // const csvData = useMemo(
  //   () =>
  //     PRODUCTS.map((product) => ({
  //       ...product,
  //       branches: product.branches.map((branch: any) => branch.name).join(','),
  //       doStockEmployee: `${product.doStockEmployee.firstName} ${product.doStockEmployee.lastName}`,
  //       doStockDate: format(product.doStockDate, 'yyyy/MM/dd')
  //     })),
  //   []
  // )

  // useEffect(() => {
  //   setColumns(defaultColumns)
  // }, [])

  // const productType = filters?.find((filter) => filter.id === 'productType')?.value

  return (
    <Container title={i18n.t('Үлдэгдэл')} breadcrumbs={[{ to: '#', label: i18n.t('Бараа бүтээгдэхүүн') }]}>
      <div className='' />
      {/* <DataTable
        columns={columns}
        defaultColumns={defaultColumns}
        page={page}
        perPage={perPage}
        totalPage={totalPage}
        setPage={setPage}
        setPerPage={setPerPage}
        filters={filters}
        setFilter={setFilter} 
        disableActions={false}
        data={PRODUCTS.filter((product) => !productType || product.productType === productType)}
        actions={[
          { label: i18n.t('Засах'), icon: Pencil, onClick: (row) => setSelectedProduct(row) },
          { label: i18n.t('Устгах'), icon: Trash, onClick: (row) => handleDeleteProduct(row) }
        ]}
        tableHeader={<StockCountTableHeader csvData={csvData} />}
      /> */}
    </Container>
  )
}
