import * as React from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { useStatesQuery } from '@/gql/address/states.generated'
import type { State } from '@/gql/graphql'
import { gql, useApolloClient } from '@apollo/client'
import { i18n } from '@lingui/core'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export interface StateSelectProps {
  value?: string | null
  onChange?: (value: string) => void
  countryId?: string | null
  placeholder?: string
}

export function StateSelect({ value, onChange, countryId = '496', placeholder = 'Select state...' }: StateSelectProps) {
  const [open, setOpen] = React.useState(false)
  const { data, loading } = useStatesQuery({ variables: { filter: { countryId: { eq: countryId } } }, skip: !open })
  const cachedValue = useCachedValue(value)

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
          <CommandInput placeholder='Search state...' className='h-9' />
          <CommandList className='max-h-[400px]'>
            <CommandEmpty>{loading ? i18n.t('Loading...') : i18n.t('No state found.')}</CommandEmpty>
            <CommandEmpty>{loading ? 'Loading...' : 'No state found.'}</CommandEmpty>
            <CommandGroup>
              {loading ? (
                <CommandItem disabled>{i18n.t('Loading states...')}</CommandItem>
              ) : (
                data?.states?.nodes.map((state) => (
                  <CommandItem
                    key={state.id}
                    value={state.id}
                    keywords={[state.name]}
                    onSelect={(currentValue) => {
                      onChange?.(currentValue)
                      setOpen(false)
                    }}
                  >
                    {state.name}
                    <CheckIcon className={cn('ml-auto size-4', value === state.id ? 'opacity-100' : 'opacity-0')} />
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
    id: `State:${id}`, // <-- "Taxon" should match your GraphQL type name
    fragment: gql`
      fragment state on State {
        id
        name
      }
    `
  }) as State | undefined
}
