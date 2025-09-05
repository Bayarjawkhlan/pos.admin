import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { SortDirection } from './types'

export const getSortIcon = (direction: SortDirection | null | undefined) => {
  if (direction === 'asc') return <ArrowUp className='size-4' />
  if (direction === 'desc') return <ArrowDown className='size-4' />
  return <ArrowUpDown className='size-4' />
}
