import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/terms')({
  component: Page
})

function Page() {
  return <div>Terms</div>
}
