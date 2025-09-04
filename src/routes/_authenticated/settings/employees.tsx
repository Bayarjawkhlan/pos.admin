import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/settings/employees')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/settings/employees"!</div>
}
