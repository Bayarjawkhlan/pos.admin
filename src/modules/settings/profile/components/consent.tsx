import { UseFormReturn } from 'react-hook-form'
import { FormValues } from '@/routes/_authenticated/settings/profile'
import { i18n } from '@lingui/core'
import { File } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

interface ConsentProps {
  form: UseFormReturn<FormValues, any, FormValues>
}

export const Consent = ({ form }: ConsentProps) => (
  <div className='space-y-3'>
    <div className='flex items-center gap-x-2'>
      <Button variant='outline' size='icon' className='cursor-default bg-white hover:bg-white'>
        <File />
      </Button>
      <p className='font-medium'>{i18n.t('Зөвшөөрлийн  мэдээлэл')}</p>
    </div>

    <div className='grid grid-cols-2 gap-5'>
      <FormField
        control={form.control}
        name='consentImage'
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t('Тусгай зөвшөөрөл')}</FormLabel>
            <FormControl>
              <FileUploader onChange={field.onChange} value={field.value} disabled={field.disabled} className='h-full' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='idFront'
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t('Зөвшөөрлийн зураг')}</FormLabel>
            <FormControl>
              <FileUploader onChange={field.onChange} value={field.value} disabled={field.disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='idBack'
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t('Зөвшөөрлийн зураг')}</FormLabel>
            <FormControl>
              <FileUploader onChange={field.onChange} value={field.value} disabled={field.disabled} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  </div>
)
