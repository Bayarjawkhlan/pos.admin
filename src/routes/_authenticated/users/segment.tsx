import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/users/segment')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/users/segment"!</div>
}
