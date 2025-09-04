import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useDistrictsQuery } from '@/gql/address/districts.generated'
import type { State } from '@/gql/graphql'
import { gql, useApolloClient } from '@apollo/client'
import { i18n } from '@lingui/core'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface DistrictSelectProps {
  value?: string | null
  onChange?: (value: string) => void
  stateId?: string | null
  placeholder?: string
  conditional?: boolean
}

export function DistrictSelect({ value, onChange, stateId, placeholder, conditional }: DistrictSelectProps) {
  const [open, setOpen] = React.useState(false)
  const { data, loading } = useDistrictsQuery({ variables: { filter: { stateId: { eq: stateId } } }, skip: !open || !stateId })
  const cachedValue = useCachedValue(value)

  if (conditional && !stateId)
    return (
      <Button variant='outline' disabled className='justify-between'>
        Select parent state first
      </Button>
    )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between'>
          {cachedValue?.name || placeholder || 'Select district...'}
          <CaretSortIcon className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] overflow-y-auto p-0'>
        <Command>
          <CommandInput placeholder='Search district...' className='h-9' />
          <CommandList className='max-h-[400px]'>
            <CommandEmpty>{loading ? i18n.t('Loading...') : i18n.t('No district found.')}</CommandEmpty>
            <CommandGroup>
              {loading ? (
                <CommandItem disabled>{i18n.t('Loading districts...')}</CommandItem>
              ) : (
                data?.districts?.nodes.map((district) => (
                  <CommandItem
                    key={district.id}
                    value={district.id}
                    keywords={[district.name, district.code || '']}
                    onSelect={(currentValue) => {
                      onChange?.(currentValue)
                      setOpen(false)
                    }}
                  >
                    {district.name}
                    <CheckIcon className={cn('ml-auto size-4', value === district.id ? 'opacity-100' : 'opacity-0')} />
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function useCachedValue(id?: string | null): State | undefined {
  const client = useApolloClient()
  if (!id) return undefined
  return client.readFragment({
    id: `District:${id}`, // <-- "Taxon" should match your GraphQL type name
    fragment: gql`
      fragment district on District {
        id
        name
      }
    `
  }) as State | undefined
}
