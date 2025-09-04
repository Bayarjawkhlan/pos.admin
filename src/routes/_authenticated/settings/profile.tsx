import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { useAppForm } from '@/hooks/use-app-form'
import { Company } from '@/modules/settings/profile/components/company'
import { Consent } from '@/modules/settings/profile/components/consent'
import { i18n } from '@lingui/core'
import { BookmarkPlus } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Container } from '@/components/common/container'

const formSchema = z.object({
  companyRegisterNumber: z.string().regex(/^\d{7}$/, { message: i18n.t('Байгууллагын регистр тоо буруу байна.') }),
  companyName: z.string().min(1, { message: i18n.t('Байгууллагын нэр буруу байна.') }),
  pharmacyName: z.string().min(1, { message: i18n.t('Эмийн сангийн нэр буруу байна.') }),
  licenseNumber: z.string().min(1, { message: i18n.t('Лицензийн дугаар буруу байна.') }),
  licenseExpiryDate: z.date(),
  logo: z.instanceof(File),
  consentImage: z.instanceof(File),
  idFront: z.instanceof(File),
  idBack: z.instanceof(File)
})

export type FormValues = z.infer<typeof formSchema>

export const Route = createFileRoute('/_authenticated/settings/profile')({
  component: RouteComponent
})

function RouteComponent() {
  const { form, handleSubmit, loading } = useAppForm(formSchema, {
    defaultValues: {
      companyName: 'Azi Pharma',
      companyRegisterNumber: '7080901',
      pharmacyName: 'Azi Pharma',
      licenseNumber: '892236377',
      licenseExpiryDate: new Date(2026, 7, 9)
    }
  })

  const onSubmit = async (values: FormValues) => {
    toast.success(JSON.stringify(values), { duration: 2000 })
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success(i18n.t('Бизнесээ амжилттай шинэчлэгдлээ'))
  }

  return (
    <Container title={i18n.t('Бизнесийн профайл ')} breadcrumbs={[{ to: '#', label: i18n.t('Тохиргоо') }]} className=''>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-8 rounded-lg bg-white px-5 py-4 shadow-sm'>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='flex-1 space-y-1'>
              <p className='text-xl font-semibold'>{i18n.t('Бизнесийн ерөнхий мэдээлэл')}</p>
              <p className='text-muted-foreground'>
                {i18n.t('Та доорх заавар болон алхамын дагуу системд мэдээллээ оруулж ПОС системийг ашиглана уу. ')}
              </p>
            </div>
            <div className='flex justify-end'>
              <Button isLoading={loading} disabled={loading}>
                <BookmarkPlus />
                {i18n.t('Хадгалах')}
              </Button>
            </div>
          </div>
          <Company form={form} />
          <Consent form={form} />
        </form>
      </Form>
    </Container>
  )
}
