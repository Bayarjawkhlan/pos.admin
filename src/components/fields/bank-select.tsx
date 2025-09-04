import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useBanksQuery } from '@/gql/bank-account/banks.generated'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface BankSelectProps {
  value?: string | null
  onChange?: (value: string) => void
  placeholder?: string
}

export function BankSelect({ value, onChange, placeholder = 'Select bank...' }: BankSelectProps) {
  const [open, setOpen] = React.useState(false)
  const { data } = useBanksQuery()
  const cachedValue = data?.banks?.find((bank) => bank.id === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between'>
          {cachedValue?.name || placeholder}
          <CaretSortIcon className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] overflow-y-auto p-0'>
        <Command>
          <CommandInput placeholder='Search bank...' className='h-9' />
          <CommandList className='max-h-[400px]'>
            <CommandGroup>
              {data?.banks?.map((bank) => (
                <CommandItem
                  key={bank.id}
                  value={bank.id}
                  keywords={[bank.name, bank.swiftCode || '']}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue)
                    setOpen(false)
                  }}
                >
                  {bank.name}
                  <CheckIcon className={cn('ml-auto size-4', value === bank.id ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
