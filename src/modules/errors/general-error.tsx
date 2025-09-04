import { useNavigate, useRouter } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type GeneralErrorProps = React.HTMLAttributes<HTMLDivElement> & {
  minimal?: boolean
}

export const GeneralError = ({ className, minimal = false }: GeneralErrorProps) => {
  const navigate = useNavigate()
  const { history } = useRouter()
  return (
    <div className={cn('h-svh w-full', className)}>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        {!minimal && <h1 className='text-[7rem] leading-tight font-bold'>500</h1>}
        <span className='font-medium'>{i18n.t('Oops! Something went wrong')}</span>
        <p className='text-muted-foreground text-center'>
          {i18n.t('We apologize for the inconvenience.')} <br /> {i18n.t('Please try again later.')}
        </p>
        {!minimal && (
          <div className='mt-6 flex gap-4'>
            <Button variant='outline' onClick={() => history.go(-1)}>
              {i18n.t('Go Back')}
            </Button>
            <Button onClick={() => navigate({ to: '/' })}>{i18n.t('Back to Home')}</Button>
          </div>
        )}
      </div>
    </div>
  )
}
