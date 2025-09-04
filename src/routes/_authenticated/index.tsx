import { createFileRoute } from '@tanstack/react-router'
import { AiChat } from '@/modules/dashboard/components/ai-chat'
import { OverviewCards } from '@/modules/dashboard/components/overview-cards'
import { i18n } from '@lingui/core'
import { Container } from '@/components/common/container'

const Page = () => (
  <Container title={i18n.t('Хянах самбар')} className='space-y-4'>
    <OverviewCards />
    <div className='grid grid-cols-1 gap-5 xl:grid-cols-[1fr_21rem]'>
      <div className='flex-1 space-y-5 pb-20'>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
        <div className='flex h-80 w-full items-center justify-center rounded-lg border bg-white shadow-xs'>Charts</div>
      </div>
      <AiChat />
    </div>
  </Container>
)

export const Route = createFileRoute('/_authenticated/')({
  component: Page
})
