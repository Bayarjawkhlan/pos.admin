import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/settings/payment-methods')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/settings/payment-methods"!</div>
}
