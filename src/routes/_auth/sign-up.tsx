import { useState } from 'react'
import { z } from 'zod'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { useUserStore } from '@/modules/auth/user-store'
import { i18n } from '@lingui/core'
import {
  PencilLine,
  Building2,
  Pill,
  ShieldCheck,
  UserPlus,
  EyeOff,
  Eye,
  LockIcon,
  LockKeyhole,
  ChevronDownIcon,
  PhoneIcon
} from 'lucide-react'
import { toast } from 'sonner'
import { phoneNumberRegex, passwordRegex } from '@/lib/regexs'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'

const formSchema = z
  .object({
    companyRegisterNumber: z.string().regex(/^\d{7}$/, { message: i18n.t('Байгууллагын регистр тоо буруу байна.') }),
    companyName: z.string().min(1, { message: i18n.t('Байгууллагын нэр буруу байна.') }),
    phoneNumber: z.string().regex(phoneNumberRegex, { message: i18n.t('Утасны дугаар буруу байна.') }),
    pharmacyName: z.string().min(1, { message: i18n.t('Эмийн сангийн нэр буруу байна.') }),
    licenseNumber: z.string().min(1, { message: i18n.t('Лицензийн дугаар буруу байна.') }),
    licenseExpiryDate: z.date(),
    password: z.string().regex(passwordRegex, { message: i18n.t('Нууц үг буруу байна.') }),
    isSupplier: z.boolean(),
    confirmPassword: z.string().min(6, { message: 'Нууц үг буруу байна.' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: i18n.t('Нууц үгүүд таарахгүй байна'),
    path: ['confirmPassword']
  })

type FormValues = z.infer<typeof formSchema>

export const Route = createFileRoute('/_auth/sign-up')({
  component: Page
})

function Page() {
  const navigate = Route.useNavigate()

  const { setUser } = useUserStore()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const { form, handleSubmit, loading } = useAppForm(formSchema)

  const onSubmit = async (values: FormValues) => {
    toast.success(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 2000))
    navigate({ to: '/' })
  }

  return (
    <div className='space-y-6'>
      <p className='text-lg font-semibold'>{i18n.t('Бүртгүүлэх')}</p>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-4'>
          <FormField
            control={form.control}
            name='companyRegisterNumber'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Компанийн регистер')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <PencilLine className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      placeholder={i18n.t('Компанийн регистерээ энд бичнэ үү')}
                      autoComplete='company-register-number'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='companyName'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Байгууллага ХХК-н нэр')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Building2 className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      placeholder={i18n.t('Байгууллага ХХК-н нэрээ энд бичнэ үү')}
                      autoComplete='company-name'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='pharmacyName'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Эмийн сангийн нэр')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <Pill className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      placeholder={i18n.t('Эмийн сангийн нэрээ энд бичнэ үү')}
                      autoComplete='pharmacy-name'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='licenseNumber'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Лицензийн дугаар')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <ShieldCheck className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      placeholder={i18n.t('Лицензийн дугаарээ энд бичнэ үү')}
                      autoComplete='license-number'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='licenseExpiryDate'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Хүчинтэй хугацаа')}</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline' id='date' className='w-full justify-between font-normal'>
                      {field.value ? field.value.toLocaleDateString() : 'Select date'}
                      <ChevronDownIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
                    <Calendar
                      mode='single'
                      defaultMonth={field.value}
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={{ before: new Date() }}
                      className='rounded-lg border shadow-sm'
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem className='space-y-2'>
                <FormLabel>{i18n.t('Утасны дугаар')}</FormLabel>
                <FormControl>
                  <div className='relative'>
                    <PhoneIcon className='text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2' />
                    <Input
                      className='pl-10'
                      placeholder={i18n.t('Утасны дугаарээ энд бичнэ үү')}
                      autoComplete='phone-number'
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      autoComplete='password'
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
                      autoComplete='password'
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
          <FormField
            control={form.control}
            name='isSupplier'
            render={({ field }) => (
              <FormItem className='mt-2 flex flex-row items-center justify-between rounded-lg border px-3 py-2 shadow-sm'>
                <FormLabel>{i18n.t('Ханган нийлүүлэгч эсэх')}</FormLabel>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type='submit' disabled={loading} isLoading={loading}>
            <UserPlus className='size-4' />
            {i18n.t('Бүртгүүлэх')}
          </Button>
          <div className='text-muted-foreground flex w-full items-center justify-center gap-x-2 text-xs'>
            <span>{i18n.t('Аль хэдийн бүртгэлтэй юу?')}</span>
            <Link to='/sign-in' className='text-primary underline-offset-4 hover:underline'>
              {i18n.t('Нэвтрэх')}
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
