import { UseFormReturn } from 'react-hook-form'
import { FormValues } from '@/routes/_authenticated/settings/profile'
import { i18n } from '@lingui/core'
import { Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader'
import { FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface CompanyProps {
  form: UseFormReturn<FormValues, any, FormValues>
}

export const Company = ({ form }: CompanyProps) => (
  <div className='space-y-3'>
    <div className='flex items-center gap-x-2'>
      <Button variant='outline' size='icon' className='cursor-default bg-white hover:bg-white'>
        <Store />
      </Button>
      <p className='font-medium'>{i18n.t('Бизнесээ үүсгэх')}</p>
    </div>

    <div className='grid gap-5 lg:grid-cols-2'>
      <FormField
        control={form.control}
        name='logo'
        render={({ field }) => (
          <FormItem>
            <FormLabel>{i18n.t('Лого оруулах')}</FormLabel>
            <FormControl>
              <FileUploader onChange={field.onChange} value={field.value} disabled={field.disabled || false} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='space-y-5'>
        <FormField
          control={form.control}
          name='companyRegisterNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{i18n.t('Байгууллагын регистерийн дугаар')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='companyName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{i18n.t('Байгууллагын хуулийн дагуух нэр')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='companyName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{i18n.t('Эмийн сангийн нэр')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  </div>
)
