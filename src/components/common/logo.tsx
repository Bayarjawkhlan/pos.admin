import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => <img src='/images/logo.svg' alt='logo' className={cn('h-8', className)} />
