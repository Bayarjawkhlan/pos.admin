import { z } from 'zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { i18n } from '@lingui/core'
import { LogIn, Phone as PhoneIcon, Undo2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { NumberInput } from '@/components/common/number-input'

const formSchema = z.object({
  phoneNumber: z.string().regex(/^\+?[1-9]\d{0,2}[\s]?(?:\(?\d+\)?[\s]?){4,14}\d$/, {
    message: i18n.t('Мэдээллээ зөв оруулна уу')
  })
})

type FormValues = z.infer<typeof formSchema>

export const Route = createFileRoute('/_auth/forgot')({
  component: Page
})

function Page() {
  const navigate = Route.useNavigate()

  const { form, handleSubmit, loading } = useAppForm(formSchema)

  const onSubmit = async (values: FormValues) => {
    toast.success(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success(i18n.t('Код амжилттай илгээгдлээ'))
    navigate({ to: '/otp' })
  }

  return (
    <div className='space-y-6'>
      <p className='text-lg font-semibold'>{i18n.t('Нууц үгээ мартсан')}</p>
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
          <Button type='submit' disabled={loading} isLoading={loading}>
            <LogIn className='size-4' />
            {i18n.t('Код авах')}
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
