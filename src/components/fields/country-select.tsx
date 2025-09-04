import { useState } from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import countriesWithFlags from 'world-countries'
import COUNTRIES from '@/lib/constants/countries.json'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface CountrySelectProps {
  value?: string | null
  onChange?: (value: string) => void
  placeholder?: string
}

export function CountrySelect({ value, onChange, placeholder = 'Select country...' }: CountrySelectProps) {
  const [open, setOpen] = useState(false)

  const cachedValue = COUNTRIES.find((country) => country.id === value)
  const cachedFlag = countriesWithFlags.find((c) => c.cca2 === cachedValue?.iso)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between'>
          <p className='flex items-center'>
            <span className='mr-2 text-lg'>{cachedFlag?.flag}</span>
            {cachedValue?.en || placeholder}
          </p>
          <CaretSortIcon className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] overflow-y-auto p-0'>
        <Command>
          <CommandInput placeholder='Search country...' className='h-9' />
          <CommandList className='max-h-[400px]'>
            <CommandGroup>
              {COUNTRIES.map((country) => (
                <CommandItem
                  key={country.id}
                  value={country.id}
                  keywords={[country.en, country.mn, country.iso3]}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue)
                    setOpen(false)
                  }}
                >
                  <p className='flex items-center'>
                    <span className='mr-2 text-lg'>{countriesWithFlags.find((c) => c.cca2 === country.iso)?.flag}</span>
                    {country.en}
                  </p>
                  <CheckIcon className={cn('ml-auto size-4', value === country.id ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
