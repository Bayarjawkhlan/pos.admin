import { HTMLAttributes } from 'react'
import { LinkProps } from '@tanstack/react-router'
import { Header } from '@/modules/layout/components/header'
import { cn } from '@/lib/utils'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  title?: string
  breadcrumbs?: {
    to: LinkProps['to'] | '#'
    label: string
    params?: Record<string, string>
    search?: Record<string, string>
  }[]
  containerClassName?: string
  children: React.ReactNode
}

export const Container = ({ title, breadcrumbs, children, className, containerClassName, ...props }: ContainerProps) => (
  <div
    className={cn('w-full space-y-5 pb-10', title && 'pt-[calc(var(--header-height)+1.25rem)]', containerClassName)}
    {...props}
  >
    {title && <Header title={title} breadcrumbs={breadcrumbs} />}

    <div className={cn('px-5', className)}>{children}</div>
  </div>
)
