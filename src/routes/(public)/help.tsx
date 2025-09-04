import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/help')({
  component: Page
})

function Page() {
  return <div>Help</div>
}
