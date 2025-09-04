import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/privacy')({
  component: Page
})

function Page() {
  return <div>Privacy</div>
}
