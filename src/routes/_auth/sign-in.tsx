import { useState } from 'react'
import { z } from 'zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { useUserStore } from '@/modules/auth/user-store'
import { i18n } from '@lingui/core'
import { LogIn, Lock as LockIcon, Phone as PhoneIcon, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { phoneNumberRegex } from '@/lib/regexs'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { NumberInput } from '@/components/common/number-input'

const formSchema = z.object({
  phoneNumber: z.string().regex(phoneNumberRegex, { message: i18n.t('Утасны дугаар буруу байна.') }),
  password: z.string().min(6, { message: i18n.t('Нууц үг буруу байна.') })
})

type FormValues = z.infer<typeof formSchema>

export const Route = createFileRoute('/_auth/sign-in')({
  component: Page
})

function Page() {
  const navigate = Route.useNavigate()

  const { setUser } = useUserStore()
  const [isShowPassword, setIsShowPassword] = useState(false)

  const { form, handleSubmit, loading } = useAppForm(formSchema)

  const onSubmit = async (values: FormValues) => {
    toast.success(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 2000))
    navigate({ to: '/' })
  }

  return (
    <div className='space-y-6'>
      <p className='text-lg font-semibold'>{i18n.t('Нэвтрэх')}</p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-4'>
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Утасны дугаар')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <PhoneIcon className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <NumberInput
                      field={field}
                      className='pl-10'
                      placeholder={i18n.t('Утасны дугаараа энд бичнэ үү')}
                      autoComplete='username'
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='space-y-2'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-2'>
                  <FormLabel>{i18n.t('Нууц үг')}</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <LockIcon className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                      <Input
                        className='pl-10'
                        type={isShowPassword ? 'text' : 'password'}
                        placeholder={i18n.t('Нууц үгээ энд бичнэ үү')}
                        autoComplete='current-password'
                        {...field}
                      />
                      <Button
                        type='button'
                        variant='ghost'
                        tabIndex={-1}
                        size='sm'
                        className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                        onClick={() => setIsShowPassword(!isShowPassword)}
                      >
                        {isShowPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-end'>
              <Button type='button' variant='link' size='sm' className='px-0' asChild>
                <Link to='/forgot'>{i18n.t('Нууц үг сэргээх')}</Link>
              </Button>
            </div>
          </div>
          <Button type='submit' disabled={loading} isLoading={loading}>
            <LogIn className='size-4' />
            {i18n.t('Нэвтрэх')}
          </Button>
          <div className='text-muted-foreground flex w-full items-center justify-center gap-x-2 text-xs'>
            <span>{i18n.t('Шинээр бүртгэл үүсгэхийг хүсвэл')}</span>
            <Link to='/sign-up' className='text-primary underline-offset-4 hover:underline'>
              {i18n.t('Бүртгүүлэх')}
            </Link>
          </div>
        </form>
      </Form>

      <div className='text-muted-foreground flex items-center justify-between gap-4'>
        <Button variant='link' size='sm' className='text-muted-foreground px-0 text-xs' asChild disabled={loading}>
          <Link to='/terms'>{i18n.t('Үйлчилгээний нөхцөл')}</Link>
        </Button>
        <Button variant='link' size='sm' className='text-muted-foreground px-0 text-xs' asChild disabled={loading}>
          <Link to='/privacy'>{i18n.t('Нууцлалын бодлого')}</Link>
        </Button>
      </div>
    </div>
  )
}
