import { Fragment } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { useAuthStore } from '@/modules/auth/store'
import { useUserStore } from '@/modules/auth/user-store'
import { i18n } from '@lingui/core'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronRight, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { SheetClose } from '@/components/ui/sheet'
import { Sidebar as BaseSidebar } from '@/components/ui/sidebar'
import { Logo } from '@/components/common/logo'
import { SIDEBAR_DATA } from '../constants'
import { useLayoutStore } from '../store'

export const Sidebar = ({ isMobile = false, ...props }: React.ComponentProps<typeof BaseSidebar> & { isMobile?: boolean }) => {
  const location = useLocation()
  const { logout } = useAuthStore()
  const { user } = useUserStore()
  const { selectedItem, setSelectedItem } = useLayoutStore()

  return (
    <div className='h-full w-full border-r bg-white px-5 py-6'>
      <div className='mb-8 flex w-full justify-center'>
        <Logo className='h-7' />
      </div>

      <div>
        {SIDEBAR_DATA.map((wrapperSection, idx) => (
          <Fragment key={`wrapper-section-${idx}`}>
            <div className='space-y-2'>
              <p className='text-muted-foreground text-sm'>{wrapperSection.title}</p>
              <div className='flex flex-col gap-y-3'>
                {wrapperSection.items.map(({ icon: Icon, ...wrapperItem }, index) => {
                  if (wrapperItem?.items) {
                    return (
                      <div key={`wrapper-item-${wrapperItem.title}-${index}`}>
                        <button
                          className={cn(
                            'color-transition flex w-full items-center gap-x-2 rounded-md px-3.5 py-2',
                            selectedItem === wrapperItem.title && 'bg-primary text-gray-100',
                            selectedItem !== wrapperItem.title && 'hover:bg-muted'
                          )}
                          onClick={() => setSelectedItem(wrapperItem.title !== selectedItem ? wrapperItem.title : null)}
                        >
                          {Icon && <Icon className='size-5' />}
                          <span className='text-sm'>{wrapperItem.title}</span>
                          {wrapperItem.items &&
                            (selectedItem === wrapperItem.title ? (
                              <ChevronDown className='ml-auto size-5' />
                            ) : (
                              <ChevronRight className='ml-auto size-5' />
                            ))}
                        </button>

                        <motion.div
                          className='overflow-hidden px-5'
                          animate={{
                            height: selectedItem === wrapperItem.title ? 'auto' : 0,
                            marginTop: selectedItem === wrapperItem.title ? '8px' : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {wrapperItem.items.map(({ icon: Icon, ...item }) => {
                            const isActive = item.url === location.pathname

                            if (isMobile) {
                              return (
                                <SheetClose asChild key={`wrapper-item-${item.title}`}>
                                  <Link to={item.url}>
                                    <button
                                      className={cn(
                                        'color-transition flex w-full justify-start border-l px-3.5 py-2.5',
                                        isActive && 'border-primary bg-primary/10 text-primary'
                                      )}
                                    >
                                      <span className='text-sm'>{item.title}</span>
                                    </button>
                                  </Link>
                                </SheetClose>
                              )
                            } else {
                              return (
                                <Link to={item.url} key={`wrapper-item-${item.title}`}>
                                  <button
                                    className={cn(
                                      'color-transition flex w-full justify-start border-l px-3.5 py-2.5',
                                      isActive && 'border-primary bg-primary/10 text-primary'
                                    )}
                                  >
                                    <span className='text-sm'>{item.title}</span>
                                  </button>
                                </Link>
                              )
                            }
                          })}
                        </motion.div>
                      </div>
                    )
                  }

                  const isActive = wrapperItem.url === location.pathname

                  if (isMobile) {
                    return (
                      <SheetClose asChild key={`wrapper-item-${wrapperItem.title}`}>
                        <Link to={wrapperItem.url}>
                          <button
                            className={cn(
                              'color-transition flex w-full items-center gap-x-2 rounded-md px-3.5 py-2',
                              isActive && 'bg-primary text-gray-100',
                              !isActive && 'hover:bg-muted'
                            )}
                          >
                            {Icon && <Icon className='size-5' />}
                            <span className='text-sm'>{wrapperItem.title}</span>
                          </button>
                        </Link>
                      </SheetClose>
                    )
                  } else {
                    return (
                      <Link to={wrapperItem.url} key={`wrapper-item-${wrapperItem.title}`}>
                        <button
                          className={cn(
                            'color-transition flex w-full items-center gap-x-2 rounded-md px-3.5 py-2',
                            isActive && 'bg-primary text-gray-100',
                            !isActive && 'hover:bg-muted'
                          )}
                        >
                          {Icon && <Icon className='size-5' />}
                          <span className='text-sm'>{wrapperItem.title}</span>
                        </button>
                      </Link>
                    )
                  }
                })}
              </div>
            </div>
            {idx !== SIDEBAR_DATA.length - 1 && <Separator className='my-5' />}
          </Fragment>
        ))}
      </div>

      <Separator className='my-5' />

      <Button variant='ghost' className='w-full justify-start' onClick={logout}>
        <LogOut />
        <span>{i18n.t('Системээс гаргах')}</span>
      </Button>

      {isMobile && (
        <>
          <Separator className='my-5' />
          <div className='flex items-center gap-x-2 pb-10'>
            <img src={user?.avatarUrl || ''} alt='' className='size-8 rounded-full' />
            <div className='flex flex-col'>
              <p className='leading-5 font-medium'>
                {user?.lastName?.[0].concat('.')} {user?.firstName}
              </p>
              <p className='text-muted-foreground leading-4'>{user?.role}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
