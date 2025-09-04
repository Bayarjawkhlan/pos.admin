import { i18n } from '@lingui/core'
import { Button } from '@/components/ui/button'

export const MaintenanceError = () => (
  <div className='h-svh'>
    <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
      <h1 className='text-[7rem] leading-tight font-bold'>503</h1>
      <span className='font-medium'>{i18n.t('Website is under maintenance!')}</span>
      <p className='text-muted-foreground text-center'>
        {i18n.t('The site is not available at the moment.')} <br />
        {i18n.t("We'll be back online shortly.")}
      </p>
      <div className='mt-6 flex gap-4'>
        <Button variant='outline'>{i18n.t('Learn more')}</Button>
      </div>
    </div>
  </div>
)
