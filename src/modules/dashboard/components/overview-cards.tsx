import { useLayoutStore } from '@/modules/layout/store'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { OVERVIEW_CARDS } from '../constants'

export const OverviewCards = () => {
  const { isSidebarOpen } = useLayoutStore()

  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 xl:grid-cols-4', !isSidebarOpen && 'grid-cols-4')}>
      {OVERVIEW_CARDS.map(({ icon: ICON, ...card }) => (
        <div className='space-y-2 rounded-lg border bg-white px-5 py-4 shadow-xs' key={card.title}>
          <div className='flex items-center justify-between gap-2'>
            <ICON className='size-4' />
            <Badge>{card.upPercentage}%</Badge>
          </div>
          <div className=''>
            <p className='text-muted-foreground text-sm'>{card.title}</p>
            <p className='text-2xl font-medium'>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
