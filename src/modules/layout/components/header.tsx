import { Fragment, useEffect, useState } from 'react'
import { LinkProps } from '@tanstack/react-router'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useUserStore } from '@/modules/auth/user-store'
import { Bell, PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as BC from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useLayoutStore } from '../store'

interface HeaderProps {
  title?: string
  breadcrumbs?: { to: LinkProps['to'] | '#'; params?: LinkProps['params']; search?: LinkProps['search']; label: string }[]
}

export const Header = ({ title, breadcrumbs }: HeaderProps) => {
  const [offset, setOffset] = useState(0)
  const { user } = useUserStore()
  const { isSidebarOpen, setIsSidebarOpen, setIsMobileSidebarOpen, isMobileSidebarOpen } = useLayoutStore()
  const isMd = useMediaQuery('(min-width: 768px)')

  const handleToggleSidebar = () => {
    if (isMd) {
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      setIsMobileSidebarOpen(!isMobileSidebarOpen)
    }
  }

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-0 z-20 h-(--header-height) bg-white transition-all duration-200',
        offset > 20 ? 'shadow-sm' : 'shadow-none',
        isSidebarOpen ? 'md:pl-[calc(var(--sidebar-width))]' : 'md:pl-0'
      )}
    >
      <div className='flex h-full w-full items-center gap-3 p-5 sm:gap-4'>
        <Button size='icon' variant='outline' onClick={handleToggleSidebar}>
          {isSidebarOpen ? <PanelRightOpen /> : <PanelLeftOpen />}
        </Button>
        {title && (
          <BC.Breadcrumb>
            <BC.BreadcrumbList>
              {breadcrumbs?.map((item, index) => (
                <Fragment key={index}>
                  <BC.BreadcrumbItem className='hidden md:block'>
                    <BC.BreadcrumbLink href={item.to} disabled={item.to === '#'} params={item.params} search={item.search}>
                      {item.label}
                    </BC.BreadcrumbLink>
                  </BC.BreadcrumbItem>
                  <BC.BreadcrumbSeparator className='hidden md:block' />
                </Fragment>
              ))}
              <BC.BreadcrumbItem>
                <BC.BreadcrumbPage>{title}</BC.BreadcrumbPage>
              </BC.BreadcrumbItem>
            </BC.BreadcrumbList>
          </BC.Breadcrumb>
        )}
        <div className='ml-auto flex items-center space-x-4'>
          <Popover>
            <PopoverTrigger asChild>
              <Button size='icon' variant='outline'>
                <Bell />
              </Button>
            </PopoverTrigger>
            <PopoverContent align='end'>
              <p>Notifications</p>
            </PopoverContent>
          </Popover>
          <div className='flex items-center gap-x-2'>
            <img src={user?.avatarUrl || ''} alt='' className='size-8 rounded-full' />
            <div className='hidden flex-col md:flex'>
              <p className='leading-5 font-medium'>
                {user?.lastName?.[0].concat('.')} {user?.firstName}
              </p>
              <p className='text-muted-foreground leading-4'>{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
