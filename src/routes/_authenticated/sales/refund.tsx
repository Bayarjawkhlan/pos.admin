import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/sales/refund')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/sales/refund"!</div>
}
