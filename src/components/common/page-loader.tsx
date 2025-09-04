import { Skeleton } from '@/components/ui/skeleton'

export const AdminPageLoader = () => (
  <div className='h-full w-full space-y-6 px-5 pb-10'>
    <div className='flex h-16 items-center gap-3 sm:gap-4'>
      <Skeleton className='size-9' />
      <Skeleton className='h-5 w-28' />
      <Skeleton className='h-5 w-28' />
      <Skeleton className='ml-auto size-9' />
    </div>
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className='aspect-[3/2]' />
      ))}
    </div>
    <div className='space-y-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className='h-14 w-full' />
      ))}
    </div>
  </div>
)
