import { useNavigate, useRouter } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { Button } from '@/components/ui/button'

export const UnauthorisedError = () => {
  const navigate = useNavigate()
  const { history } = useRouter()

  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] leading-tight font-bold'>401</h1>
        <span className='font-medium'>{i18n.t('Unauthorized Access')}</span>
        <p className='text-muted-foreground text-center'>
          {i18n.t('Please log in with the appropriate credentials')} <br /> {i18n.t('to access this resource.')}
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => history.go(-1)}>
            {i18n.t('Go Back')}
          </Button>
          <Button onClick={() => navigate({ to: '/' })}>{i18n.t('Back to Home')}</Button>
        </div>
      </div>
    </div>
  )
}
