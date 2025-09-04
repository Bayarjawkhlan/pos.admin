import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/discounts')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/discount"!</div>
}
