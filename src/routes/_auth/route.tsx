import {
  createFileRoute,
  Outlet
  // redirect
} from '@tanstack/react-router'
// import { useAuthStore } from '@/modules/auth/store'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Logo } from '@/components/common/logo'

export const Route = createFileRoute('/_auth')({
  component: () => <Layout />,
  beforeLoad: async () => {
    // const { isAuthenticated } = useAuthStore.getState()
    // if (isAuthenticated) return redirect({ to: '/' })
  }
})

const Layout = () => (
  <div className='relative flex min-h-dvh items-center justify-center py-12'>
    <Card className='relative z-10 w-full max-w-md'>
      <CardHeader className='items-center'>
        <CardTitle>
          <Logo />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  </div>
)
