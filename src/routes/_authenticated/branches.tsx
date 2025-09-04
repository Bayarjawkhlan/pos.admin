import { createFileRoute } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { Container } from '@/components/common/container'

export const Route = createFileRoute('/_authenticated/branches')({
  component: RouteComponent
})

function RouteComponent() {
  // const {
  //   columns,
  //   setSelectedBranch,
  //   setPage,
  //   setPerPage,
  //   totalPage,
  //   page,
  //   perPage,
  //   addColumn,
  //   removeColumn,
  //   filters,
  //   setFilters
  // } = useBranchesStore()

  // const handleDeleteProduct = async (row: Product) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   toast.success(i18n.t('Бараа амжилттай устгагдлаа'))
  //   // TODO: Refetch products
  // }

  // const csvData = useMemo(
  //   () =>
  //     PRODUCTS.map((product) => ({
  //       ...product,
  //       branches: product.branches.map((branch) => branch.name).join(','),
  //       doStockEmployee: `${product.doStockEmployee.firstName} ${product.doStockEmployee.lastName}`,
  //       doStockDate: format(product.doStockDate, 'yyyy/MM/dd')
  //     })),
  //   []
  // )

  return (
    <Container title={i18n.t('Сан')} breadcrumbs={[{ to: '#', label: i18n.t('Бараа бүтээгдэхүүн') }]}>
      <div className='' />
      {/* <DataTable
        caption={i18n.t('Бараа бүтээгдэхүүнүүд')}
        columns={columns}
        defaultColumns={getProductsColumns({ setSelectedProduct })}
        page={page}
        perPage={perPage}
        totalPage={totalPage}
        setPage={setPage}
        setPerPage={setPerPage}
        disableActions={false}
        data={PRODUCTS}
        actions={[
          { label: i18n.t('Засах'), icon: Pencil, onClick: (row) => setSelectedProduct(row) },
          { label: i18n.t('Устгах'), icon: Trash, onClick: (row) => handleDeleteProduct(row) }
        ]}
        tableHeader={
          <div className='flex items-center justify-between border-b px-3 py-2'>
            <div className='flex items-center gap-x-1'>
              <Button
                size='sm'
                variant='outline'
                onClick={() => setFilters('productType', 'medicine')}
                className={cn(
                  filters?.some((filter) => filter.id === 'productType' && filter.value === 'medicine') &&
                    'bg-primary/10 hover:bg-primary/5 text-primary hover:text-primary border-primary/50'
                )}
              >
                <Pill />{' '}
                {filters?.some((filter) => filter.id === 'productType' && filter.value === 'medicine') && (
                  <span>{i18n.t('Эм')}</span>
                )}
              </Button>
              <Button
                size='sm'
                variant='outline'
                onClick={() => setFilters('productType', 'non-medicine')}
                className={cn(
                  filters?.some((filter) => filter.id === 'productType' && filter.value === 'non-medicine') &&
                    'bg-primary/10 hover:bg-primary/5 text-primary hover:text-primary border-primary/50'
                )}
              >
                <ShoppingBag />{' '}
                {filters?.some((filter) => filter.id === 'productType' && filter.value === 'non-medicine') && (
                  <span>{i18n.t('Эм бус')}</span>
                )}
              </Button>
            </div>

            <div className='flex items-center gap-x-2'>
              <Button variant='outline' size='sm' onClick={() => exportTableToCSV(columns, csvData, { filename: 'products' })}>
                <File />
                <span>{i18n.t('Excel-р татах')}</span>
              </Button>
              <ColumnFilter
                defaultColumns={getProductsColumns({ setSelectedProduct })}
                columns={columns}
                addColumn={addColumn}
                removeColumn={removeColumn}
              />
            </div>
          </div>
        }
      /> */}
    </Container>
  )
}
