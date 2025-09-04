import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/users/message')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/_authenticated/users/message"!</div>
}
