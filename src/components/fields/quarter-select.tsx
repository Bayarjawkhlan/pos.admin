import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useQuartersQuery } from '@/gql/address/quarters.generated'
import type { Quarter } from '@/gql/graphql'
import { gql, useApolloClient } from '@apollo/client'
import { i18n } from '@lingui/core'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface QuarterSelectProps {
  value?: string | null
  onChange?: (value: string) => void
  districtId?: string | null
  placeholder?: string
  conditional?: boolean
}

export function QuarterSelect({ value, onChange, districtId, placeholder, conditional }: QuarterSelectProps) {
  const [open, setOpen] = React.useState(false)
  const { data, loading } = useQuartersQuery({
    variables: { filter: { districtId: { eq: districtId } } },
    skip: !open || !districtId
  })
  const cachedValue = useCachedValue(value)
  if (conditional && !districtId)
    return (
      <Button variant='outline' disabled className='justify-between'>
        Select parent district first
      </Button>
    )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between'>
          {cachedValue?.name || value || placeholder || 'Select quarter...'}
          <CaretSortIcon className='ml-2 size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[var(--radix-popover-trigger-width)] overflow-y-auto p-0'>
        <Command>
          <CommandInput placeholder='Search quarter...' className='h-9' />
          <CommandList className='max-h-[400px]'>
            <CommandEmpty>{loading ? i18n.t('Loading...') : i18n.t('No quarter found.')}</CommandEmpty>
            <CommandGroup>
              {loading ? (
                <CommandItem disabled>{i18n.t('Loading quarters...')}</CommandItem>
              ) : (
                data?.quarters?.nodes.map((quarter) => (
                  <CommandItem
                    key={quarter.id}
                    value={quarter.id}
                    keywords={[quarter.name]}
                    onSelect={(currentValue) => {
                      onChange?.(currentValue)
                      setOpen(false)
                    }}
                  >
                    {quarter.name}
                    <CheckIcon className={cn('ml-auto size-4', value === quarter.id ? 'opacity-100' : 'opacity-0')} />
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

function useCachedValue(id?: string | null): Quarter | undefined {
  const client = useApolloClient()
  if (!id) return undefined
  return client.readFragment({
    id: `Quarter:${id}`, // <-- "Taxon" should match your GraphQL type name
    fragment: gql`
      fragment quarter on Quarter {
        id
        name
      }
    `
  }) as Quarter | undefined
}
