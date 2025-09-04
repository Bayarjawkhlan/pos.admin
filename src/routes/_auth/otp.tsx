import { useState } from 'react'
import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { i18n } from '@lingui/core'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormMessage, FormItem, FormLabel } from '@/components/ui/form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

export const Route = createFileRoute('/_auth/otp')({
  component: Page
})

const formSchema = z.object({
  otp: z.string().min(6, i18n.t('Код 6 оронтой байх ёстой')).max(6, i18n.t('Код 6 оронтой байх ёстой'))
})

function Page() {
  const navigate = Route.useNavigate()

  const [isResending, setIsResending] = useState(false)
  const { form, handleSubmit, loading } = useAppForm(formSchema)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    toast.success(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success(i18n.t('Код амжилттай баталгаажуулагдлаа'))
    navigate({ to: '/new-password' })
  }

  const onResend = async () => {
    setIsResending(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success(i18n.t('Код амжилттай илгээгдлээ'))
    setIsResending(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-4'>
        <FormField
          control={form.control}
          name='otp'
          render={({ field }) => (
            <FormItem className='space-y-2'>
              <FormLabel>{i18n.t('Код')}</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  {...field}
                  onEnded={() => {
                    toast.info(i18n.t('Код амжилттай баталгаажуулагдлаа'))
                  }}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' isLoading={loading}>
          {i18n.t('Код баталгаажуулах')}
        </Button>
        <Button type='button' variant='outline' isLoading={isResending} onClick={onResend}>
          {i18n.t('Код авах')}
        </Button>
      </form>
    </Form>
  )
}
