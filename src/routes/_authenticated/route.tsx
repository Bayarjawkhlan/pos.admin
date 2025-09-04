import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useUserStore } from '@/modules/auth/user-store'
import { Sidebar } from '@/modules/layout/components/sidebar'
import { useLayoutStore } from '@/modules/layout/store'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent } from '@/components/ui/sheet'

const Layout = () => {
  const { isSidebarOpen, isMobileSidebarOpen, setIsMobileSidebarOpen } = useLayoutStore()
  const isMd = useMediaQuery('(min-width: 768px)')

  return (
    <div className='min-h-dvh w-full'>
      <div
        className={cn(
          'fixed top-0 left-0 z-30 hidden h-dvh w-(--sidebar-width) overflow-y-auto bg-white transition-all duration-200 md:block',
          !isSidebarOpen && 'md:-translate-x-(--sidebar-width)'
        )}
      >
        <Sidebar />
      </div>
      <div className={cn('flex-1 transition-all duration-200 md:pl-(--sidebar-width)', !isSidebarOpen && 'md:pl-0')}>
        <Outlet />
      </div>

      {/* Mobile sidebar */}
      <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
        <SheetContent className='overflow-y-auto p-0' side='left'>
          <Sidebar isMobile />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export const Route = createFileRoute('/_authenticated')({
  component: Layout,
  beforeLoad: async ({ location }) => {
    const { user, fetchUser: _fetchUser } = useUserStore.getState()
    if (user) {
      const role = 'admin'
      if (role !== 'admin') {
        throw redirect({ to: '/sign-in', search: { redirect: location.href } })
      }
      return
    }
    if (!user) {
      // await fetchUser()
      // const updatedUser = useUserStore.getState().user
      // if (!updatedUser) {
      return redirect({
        to: '/sign-in',
        search: { redirect: location.href }
      })
      // }
    }
  }
})
