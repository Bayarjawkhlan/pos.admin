import { createRootRouteWithContext, HeadContent, Outlet } from '@tanstack/react-router'
import { GeneralError } from '@/modules/errors/general-error'
import { NotFoundError } from '@/modules/errors/not-found-error'
import { InitialHooks } from '@/providers/initial-hooks'
import { NavigationProgress } from '@/components/common/navigation-progress'

export const Route = createRootRouteWithContext<{}>()({
  component: () => (
    <>
      <HeadContent />
      <InitialHooks />
      <NavigationProgress />
      <Outlet />

      {/*{import.meta.env.MODE === 'development' && (*/}
      {/*  <>*/}
      {/*    <ReactQueryDevtools buttonPosition='bottom-left' />*/}
      {/*    <TanStackRouterDevtools position='bottom-right' />*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  ),
  notFoundComponent: () => <NotFoundError backToHomeHref='/' />,
  errorComponent: GeneralError
})
