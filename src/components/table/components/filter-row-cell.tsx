import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useDebounce } from '@/hooks/use-debounce'
import { i18n } from '@lingui/core'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { MultiSelect } from '@/components/common/multi-select'
import { ColumnDef, FilterField, SetFilter } from '../types'

type FilterRowCellProps<T, K extends string> = {
  column: ColumnDef<T, K>
  filters: FilterField<K>[]
  setFilter: (options: SetFilter<K>) => void
}

export const FilterRowCell = <T, K extends string>({ setFilter, column, filters }: FilterRowCellProps<T, K>) => {
  const [value, setValue] = useState<any | null>(filters?.find((filter) => filter.id === column.id)?.value)
  const debouncedValue = useDebounce(value, 300)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setFilter({ id: column.id, value: debouncedValue })
  }, [debouncedValue])

  const filter = filters?.find((filter) => filter.id === column.id)

  switch (column.meta?.variant) {
    case 'text':
      return (
        <div className={cn('relative', column.meta?.className)}>
          <Input value={value || ''} placeholder={column.meta?.placeholder || '-'} onChange={(e) => setValue(e.target.value)} />
        </div>
      )
    case 'number':
      return (
        <div className={cn('relative', column.meta?.className)}>
          <Input
            value={value || ''}
            placeholder={column.meta?.placeholder || '-'}
            onChange={(e) => {
              if (/^[0-9<>,-]*$/.test(e.target.value)) setValue(e.target.value)
            }}
          />
        </div>
      )
    case 'select':
      return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant='outline' className='w-full max-w-52 justify-between'>
              <span className={cn('text-muted-foreground/50', filter?.value ? 'text-foreground' : 'text-muted-foreground/50')}>
                {filter?.value
                  ? column.meta?.options?.find((option) => option.value === filter?.value)?.label
                  : column.meta?.placeholder || '-'}
              </span>
              <ChevronsUpDown className='opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-52 p-0' align='start'>
            <Command>
              <CommandInput placeholder={i18n.t('Хайх ...')} className='h-9' />
              <CommandList>
                <CommandEmpty>{i18n.t('Үр дүн олдсонгүй.')}</CommandEmpty>
                <CommandGroup>
                  {column?.meta?.options?.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={(currentValue) => {
                        setFilter({ id: column.id, value: filter?.value ? '' : currentValue })
                        setIsOpen(false)
                      }}
                    >
                      {option.label}
                      <Check className={cn('ml-auto', filter?.value === option.value ? 'opacity-100' : 'opacity-0')} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )
    case 'multi-select':
      return (
        <MultiSelect
          singleLine
          className='h-9'
          options={column.meta?.options || []}
          onValueChange={(value) => setFilter({ id: column.id, value })}
          defaultValue={filter?.value || []}
          placeholder={column.meta?.placeholder || '-'}
          variant='secondary'
          animationConfig={{
            badgeAnimation: 'pulse',
            popoverAnimation: 'fade'
          }}
        />
      )
    case 'date-range':
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' className='w-full max-w-52 justify-between'>
              {filter?.value ? (
                <span>
                  {format(filter?.value?.from || new Date(), 'yyyy-MM-dd')} -{' '}
                  {format(filter?.value?.to || new Date(), 'yyyy-MM-dd')}
                </span>
              ) : (
                <span className='text-muted-foreground/50'>{column.meta?.placeholder || '-'}</span>
              )}
              <ChevronsUpDown className='opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto border-0 p-0' align='start'>
            <Calendar
              mode='range'
              selected={filter?.value}
              onSelect={(value) => setFilter({ id: column.id, value })}
              numberOfMonths={2}
              className='rounded-lg border shadow-sm'
            />
          </PopoverContent>
        </Popover>
      )

    default:
      return null
  }
}
