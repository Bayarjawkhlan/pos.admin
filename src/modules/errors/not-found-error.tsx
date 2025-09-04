import { useNavigate, useRouter } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { Button } from '@/components/ui/button'

type NotFoundErrorProps = {
  backToHomeHref?: string
}

export const NotFoundError = ({ backToHomeHref = '/' }: NotFoundErrorProps) => {
  const navigate = useNavigate()
  const { history } = useRouter()

  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] leading-tight font-bold'>404</h1>
        <span className='font-medium'>{i18n.t('Oops! Page Not Found!')}</span>
        <p className='text-muted-foreground text-center'>
          {i18n.t("It seems like the page you're looking for")} <br />
          {i18n.t('does not exist or might have been removed.')}
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => history.go(-1)}>
            {i18n.t('Go Back')}
          </Button>
          <Button onClick={() => navigate({ to: backToHomeHref })}>{i18n.t('Back to Home')}</Button>
        </div>
      </div>
    </div>
  )
}
