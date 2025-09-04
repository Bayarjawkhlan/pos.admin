import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/use-debounce'
import { ListFilter } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  AddFilter,
  ChangeFilterOperator,
  ColumnDef,
  FilterField,
  FilterValue,
  Operator,
  RemoveFilter,
  SetFilterValue
} from '../types'
import { getFilterValue, getOperators } from '../utils'

type FilterRowCellProps<T, K extends string> = {
  addFilter: (options: AddFilter<K>) => void
  removeFilter?: (options: RemoveFilter<K>) => void
  changeFilterOperator?: (options: ChangeFilterOperator<K>) => void
  setFilterValue?: (options: SetFilterValue<K>) => void
  filters: FilterField<K>[]
  column: ColumnDef<T, K>
}

export const FilterRowCell = <T, K extends string>({
  addFilter,
  removeFilter,
  changeFilterOperator,
  setFilterValue,
  filters,
  column
}: FilterRowCellProps<T, K>) => {
  const handleInitialAddFilter = (initial?: boolean) => {
    const filteredFilters = filters.filter((f) => f.id === column.id)
    if (filteredFilters.length > 0 && initial) return
    const variant = column.meta?.variant
    if (!variant) return
    const operator = getOperators(variant)[0].value
    addFilter({ id: column.id, operator, value: null })
  }

  const filter = filters.find((f) => f.id === column.id)

  const operators = getOperators(column.meta?.variant)

  return (
    <div className={cn('relative flex items-center gap-x-1 pr-2', column.meta?.className)}>
      <div className='flex h-9 flex-1 items-center rounded-md border px-4'>
        <span className='max-w-xs overflow-x-auto'>{getFilterValue(column, filter?.values, filter?.join)}</span>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='ghost' size='icon' className='relative bg-white' onClick={() => handleInitialAddFilter(true)}>
            {filters.filter((f) => f.id === column.id).values.length > 0 && (
              <Badge variant='secondary' className='absolute -top-1 -right-1'>
                {filters.filter((f) => f.id === column.id).length}
              </Badge>
            )}
            <ListFilter className='size-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-64 shrink'>
          {filter?.values.length === 0}
          {filter?.values.map((filter, index) => (
            <div key={`filter-${index}`} className='space-y-2'>
              <Select
                value={filter.operator}
                onValueChange={(value) =>
                  changeFilterOperator?.({ id: column.id, uuid: filter.uuid, operator: value as Operator })
                }
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder={column.meta?.placeholder || '-'} />
                </SelectTrigger>
                <SelectContent>
                  {operators?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FilterRowCellItem
                index={index}
                addFilter={addFilter}
                removeFilter={removeFilter}
                setFilterValue={setFilterValue}
                changeFilterOperator={changeFilterOperator}
                column={column}
                filter={filter}
              />
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  )
}

type FilterRowCellItemProps<T, K extends string> = {
  addFilter: (options: AddFilter<K>) => void
  removeFilter?: (options: RemoveFilter<K>) => void
  changeFilterOperator?: (options: ChangeFilterOperator<K>) => void
  setFilterValue?: (options: SetFilterValue<K>) => void
  column: ColumnDef<T, K>
  filter: FilterValue
  index: number
}

export const FilterRowCellItem = <T, K extends string>({
  addFilter,
  removeFilter,
  setFilterValue,
  column,
  filter,
  index
}: FilterRowCellItemProps<T, K>) => {
  const [value, setValue] = useState<string | null>(null)
  const debouncedValue = useDebounce(value, 300)

  useEffect(() => {
    if (debouncedValue && setFilterValue) {
      setFilterValue({ id: column.id, uuid: filter.uuid, value: debouncedValue, operator: filter.operator })
    }
  }, [debouncedValue, setFilterValue])

  switch (column.meta?.variant) {
    case 'text':
      return (
        <div className={cn('relative', column.meta?.className)}>
          <Input value={value || ''} placeholder={column.meta?.placeholder || '-'} onChange={(e) => setValue(e.target.value)} />
        </div>
      )

    default:
      break
  }
}

// case 'text':
//   return (
//     <div className={cn('relative', column.meta?.className)}>
//       <Input value={value} placeholder={column.meta?.placeholder || '-'} onChange={(e) => setValue(e.target.value)} />
//     </div>
//   )
// case 'number':
//   return (
//     <div className={cn('relative', column.meta?.className)}>
//       <Input
//         pattern='[0-9<>,-]*'
//         value={value}
//         placeholder={column.meta?.placeholder || '-'}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   )
// case 'select':
//   return (
//     <Popover open={isOpen} onOpenChange={setIsOpen}>
//       <PopoverTrigger asChild>
//         <Button variant='outline' className='w-full max-w-52 justify-between'>
//           {value ? column.meta?.options?.find((option) => option.value === value)?.label : column.meta?.placeholder || '-'}
//           <ChevronsUpDown className='opacity-50' />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='w-52 p-0' align='start'>
//         <Command>
//           <CommandInput placeholder={i18n.t('Хайх ...')} className='h-9' />
//           <CommandList>
//             <CommandEmpty>{i18n.t('Үр дүн олдсонгүй.')}</CommandEmpty>
//             <CommandGroup>
//               {column?.meta?.options?.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.value}
//                   onSelect={(currentValue) => {
//                     setValue(currentValue === value ? '' : currentValue)
//                     setIsOpen(false)
//                   }}
//                 >
//                   {option.label}
//                   <Check className={cn('ml-auto', value === option.value ? 'opacity-100' : 'opacity-0')} />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   )
// case 'multi-select':
//   return (
//     <MultiSelect
//       singleLine
//       className='h-9'
//       options={column.meta?.options || []}
//       onValueChange={setValue}
//       defaultValue={value || []}
//       placeholder={column.meta?.placeholder || '-'}
//       variant='secondary'
//       animationConfig={{
//         badgeAnimation: 'pulse',
//         popoverAnimation: 'fade'
//       }}
//     />
//   )
// case 'date':
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant='outline' className='w-full max-w-52 justify-between'>
//           {value ? format(value, 'yyyy-MM-dd') : column.meta?.placeholder || '-'}
//           <ChevronsUpDown className='opacity-50' />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='w-auto border-0 p-0' align='start'>
//         <Calendar
//           mode='single'
//           selected={value}
//           onSelect={setValue}
//           className='rounded-lg border shadow-sm'
//           captionLayout='dropdown'
//         />
//       </PopoverContent>
//     </Popover>
//   )
// case 'date-range':
//   return (
//     <Popover>
//       <PopoverTrigger asChild>
//         <Button variant='outline' className='w-full max-w-52 justify-between'>
//           {value ? (
//             <>
//               {format(value?.from || new Date(), 'yyyy-MM-dd')} - {format(value?.to || new Date(), 'yyyy-MM-dd')}
//             </>
//           ) : (
//             column.meta?.placeholder || '-'
//           )}
//           <ChevronsUpDown className='opacity-50' />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className='w-auto border-0 p-0' align='start'>
//         <Calendar
//           mode='range'
//           selected={value}
//           onSelect={setValue}
//           numberOfMonths={2}
//           className='rounded-lg border shadow-sm'
//         />
//       </PopoverContent>
//     </Popover>
//   )

// function onFilterInputRender<TData>({
//   filter,
//   inputId,
//   column,
//   columnMeta,
//   onFilterUpdate,
//   showValueSelector,
//   setShowValueSelector
// }: {
//   filter: ExtendedColumnFilter<TData>
//   inputId: string
//   column: Column<TData>
//   columnMeta?: ColumnMeta<TData, unknown>
//   onFilterUpdate: (filterId: string, updates: Partial<Omit<ExtendedColumnFilter<TData>, 'filterId'>>) => void
//   showValueSelector: boolean
//   setShowValueSelector: (value: boolean) => void
// }) {
//   if (filter.operator === 'isEmpty' || filter.operator === 'isNotEmpty') {
//     return (
//       <div
//         id={inputId}
//         role='status'
//         aria-label={`${columnMeta?.label} filter is ${filter.operator === 'isEmpty' ? 'empty' : 'not empty'}`}
//         aria-live='polite'
//         className='dark:bg-input/30 h-8 w-full rounded border bg-transparent'
//       />
//     )
//   }

//   switch (filter.variant) {
//     case 'text':
//     case 'number':
//     case 'range': {
//       if ((filter.variant === 'range' && filter.operator === 'isBetween') || filter.operator === 'isBetween') {
//         return (
//           <DataTableRangeFilter filter={filter} column={column} inputId={inputId} onFilterUpdate={onFilterUpdate} />
//         )
//       }

//       const isNumber = filter.variant === 'number' || filter.variant === 'range'

//       return (
//         <Input
//           id={inputId}
//           type={isNumber ? 'number' : filter.variant}
//           aria-label={`${columnMeta?.label} filter value`}
//           aria-describedby={`${inputId}-description`}
//           inputMode={isNumber ? 'numeric' : undefined}
//           placeholder={columnMeta?.placeholder ?? 'Enter a value...'}
//           className='h-8 w-full rounded'
//           defaultValue={typeof filter.value === 'string' ? filter.value : undefined}
//           onChange={(event) =>
//             onFilterUpdate(filter.filterId, {
//               value: event.target.value
//             })
//           }
//         />
//       )
//     }

//     case 'boolean': {
//       if (Array.isArray(filter.value)) return null

//       const inputListboxId = `${inputId}-listbox`

//       return (
//         <Select
//           open={showValueSelector}
//           onOpenChange={setShowValueSelector}
//           value={filter.value}
//           onValueChange={(value) =>
//             onFilterUpdate(filter.filterId, {
//               value
//             })
//           }
//         >
//           <SelectTrigger
//             id={inputId}
//             aria-controls={inputListboxId}
//             aria-label={`${columnMeta?.label} boolean filter`}
//             className='h-8 w-full rounded [&[data-size]]:h-8'
//           >
//             <SelectValue placeholder={filter.value ? 'True' : 'False'} />
//           </SelectTrigger>
//           <SelectContent id={inputListboxId}>
//             <SelectItem value='true'>True</SelectItem>
//             <SelectItem value='false'>False</SelectItem>
//           </SelectContent>
//         </Select>
//       )
//     }

//     case 'select':
//     case 'multiSelect': {
//       const inputListboxId = `${inputId}-listbox`

//       const multiple = filter.variant === 'multiSelect'
//       const selectedValues = multiple
//         ? Array.isArray(filter.value)
//           ? filter.value
//           : []
//         : typeof filter.value === 'string'
//           ? filter.value
//           : undefined

//       return (
//         <Faceted
//           open={showValueSelector}
//           onOpenChange={setShowValueSelector}
//           value={selectedValues}
//           onValueChange={(value) => {
//             onFilterUpdate(filter.filterId, {
//               value
//             })
//           }}
//           multiple={multiple}
//         >
//           <FacetedTrigger asChild>
//             <Button
//               id={inputId}
//               aria-controls={inputListboxId}
//               aria-label={`${columnMeta?.label} filter value${multiple ? 's' : ''}`}
//               variant='outline'
//               size='sm'
//               className='w-full rounded font-normal'
//             >
//               <FacetedBadgeList
//                 options={columnMeta?.options}
//                 placeholder={columnMeta?.placeholder ?? `Select option${multiple ? 's' : ''}...`}
//               />
//             </Button>
//           </FacetedTrigger>
//           <FacetedContent
//             id={inputListboxId}
//             className='w-[200px] origin-[var(--radix-popover-content-transform-origin)]'
//           >
//             <FacetedInput
//               aria-label={`Search ${columnMeta?.label} options`}
//               placeholder={columnMeta?.placeholder ?? 'Search options...'}
//             />
//             <FacetedList>
//               <FacetedEmpty>No options found.</FacetedEmpty>
//               <FacetedGroup>
//                 {columnMeta?.options?.map((option) => (
//                   <FacetedItem key={option.value} value={option.value}>
//                     {option.icon && <option.icon />}
//                     <span>{option.label}</span>
//                     {option.count && <span className='ml-auto font-mono text-xs'>{option.count}</span>}
//                   </FacetedItem>
//                 ))}
//               </FacetedGroup>
//             </FacetedList>
//           </FacetedContent>
//         </Faceted>
//       )
//     }

//     case 'date':
//     case 'dateRange': {
//       const inputListboxId = `${inputId}-listbox`

//       const dateValue = Array.isArray(filter.value)
//         ? filter.value.filter(Boolean)
//         : [filter.value, filter.value].filter(Boolean)

//       const displayValue =
//         filter.operator === 'isBetween' && dateValue.length === 2
//           ? `${formatDate(new Date(Number(dateValue[0])))} - ${formatDate(new Date(Number(dateValue[1])))}`
//           : dateValue[0]
//             ? formatDate(new Date(Number(dateValue[0])))
//             : 'Pick a date'

//       return (
//         <Popover open={showValueSelector} onOpenChange={setShowValueSelector}>
//           <PopoverTrigger asChild>
//             <Button
//               id={inputId}
//               aria-controls={inputListboxId}
//               aria-label={`${columnMeta?.label} date filter`}
//               variant='outline'
//               size='sm'
//               className={cn(
//                 'w-full justify-start rounded text-left font-normal',
//                 !filter.value && 'text-muted-foreground'
//               )}
//             >
//               <CalendarIcon />
//               <span className='truncate'>{displayValue}</span>
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent
//             id={inputListboxId}
//             align='start'
//             className='w-auto origin-[var(--radix-popover-content-transform-origin)] p-0'
//           >
//             {filter.operator === 'isBetween' ? (
//               <Calendar
//                 aria-label={`Select ${columnMeta?.label} date range`}
//                 mode='range'
//                 initialFocus
//                 selected={
//                   dateValue.length === 2
//                     ? {
//                         from: new Date(Number(dateValue[0])),
//                         to: new Date(Number(dateValue[1]))
//                       }
//                     : {
//                         from: new Date(),
//                         to: new Date()
//                       }
//                 }
//                 onSelect={(date) => {
//                   onFilterUpdate(filter.filterId, {
//                     value: date ? [(date.from?.getTime() ?? '').toString(), (date.to?.getTime() ?? '').toString()] : []
//                   })
//                 }}
//               />
//             ) : (
//               <Calendar
//                 aria-label={`Select ${columnMeta?.label} date`}
//                 mode='single'
//                 initialFocus
//                 selected={dateValue[0] ? new Date(Number(dateValue[0])) : undefined}
//                 onSelect={(date) => {
//                   onFilterUpdate(filter.filterId, {
//                     value: (date?.getTime() ?? '').toString()
//                   })
//                 }}
//               />
//             )}
//           </PopoverContent>
//         </Popover>
//       )
//     }

//     default:
//       return null
//   }
// }
