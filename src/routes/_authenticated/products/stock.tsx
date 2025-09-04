import { createFileRoute } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { Container } from '@/components/common/container'
import { DataTable } from '@/components/table/components/data-table'

export const Route = createFileRoute('/_authenticated/products/stock')({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <Container title={i18n.t('Тооллого')} breadcrumbs={[{ to: '#', label: i18n.t('Бараа бүтээгдэхүүн') }]}>
      <DataTable columns={[]} defaultColumns={[]} data={[]} />
    </Container>
  )
}
