import { useState } from 'react'
import { z } from 'zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { i18n } from '@lingui/core'
import { Eye, EyeOff, LockIcon, LockKeyhole, LogIn, Undo2 } from 'lucide-react'
import { toast } from 'sonner'
import { passwordRegex } from '@/lib/regexs'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/_auth/new-password')({
  component: Page
})

const formSchema = z
  .object({
    password: z.string().regex(passwordRegex, {
      message: i18n.t('Багадаа 1 том тэмдэг, 1 жижиг тэмдэг, 1 тоо, 1 тусгай тэмдэг ($, @) байх ёстой.')
    }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: i18n.t('Нууц үгүүд таарахгүй байна'),
    path: ['confirmPassword']
  })

function Page() {
  const navigate = Route.useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const { form, handleSubmit, loading } = useAppForm(formSchema)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast.success(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success(i18n.t('Нууц үгээ амжилттай солигдлоо'))
    navigate({ to: '/sign-in' })
  }

  return (
    <div className='space-y-6'>
      <p className='text-lg font-semibold'>{i18n.t('Нууц үгээ солих')}</p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-4'>
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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Нууц үгээ давтах')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <LockKeyhole className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      type={isShowConfirmPassword ? 'text' : 'password'}
                      placeholder={i18n.t('Нууц үгээ давтах')}
                      autoComplete='current-password'
                      {...field}
                    />
                    <Button
                      type='button'
                      variant='ghost'
                      tabIndex={-1}
                      size='sm'
                      className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
                      onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                    >
                      {isShowConfirmPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' disabled={loading} isLoading={loading}>
            <LogIn className='size-4' />
            {i18n.t('Нууц үгээ солих')}
          </Button>
          <Button type='button' variant='outline' asChild>
            <Link to='/sign-in'>
              <Undo2 className='size-4' />
              {i18n.t('Буцах')}
            </Link>
          </Button>
        </form>
      </Form>
    </div>
  )
}
