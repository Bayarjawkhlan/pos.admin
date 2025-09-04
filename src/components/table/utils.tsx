import { format } from 'date-fns'
import { i18n } from '@lingui/core'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { DATA_TABLE_CONFIG, FILTER_VARIANTS } from './config'
import { ColumnDef, FilterValue, JoinOperator, SortDirection } from './types'

export const getSortIcon = (direction: SortDirection | null | undefined) => {
  if (direction === 'asc') return <ArrowUp className='size-4' />
  if (direction === 'desc') return <ArrowDown className='size-4' />
  return <ArrowUpDown className='size-4' />
}

export const getOperators = (variant?: (typeof FILTER_VARIANTS)[number]) => {
  switch (variant) {
    case 'text':
      return DATA_TABLE_CONFIG.textOperators
    case 'number':
      return DATA_TABLE_CONFIG.numericOperators
    case 'date':
      return DATA_TABLE_CONFIG.dateOperators
    case 'boolean':
      return DATA_TABLE_CONFIG.booleanOperators
    case 'select':
      return DATA_TABLE_CONFIG.selectOperators
    case 'multi-select':
      return DATA_TABLE_CONFIG.multiSelectOperators
    default:
      return []
  }
}
export const getFilterValue = (
  column: ColumnDef<any, any>,
  values?: FilterValue[] | null,
  join: JoinOperator = 'and'
): string => {
  if (!values || values.length === 0) return ''

  return values
    .map((value) => {
      if (!column.meta?.variant) return value.value

      switch (column.meta?.variant) {
        case 'date': {
          if (value.operator === 'isBetween' && Array.isArray(value.value)) {
            const [start, end] = value.value
            const formattedStart = start ? format(start, 'yyyy-MM-dd') : ''
            const formattedEnd = end ? format(end, 'yyyy-MM-dd') : ''
            const formatted = formattedStart || formattedEnd ? `${formattedStart} – ${formattedEnd}` : i18n.t('Хоосон')
            return formatted
          }

          const dateValue =
            value.value instanceof Date ? format(value.value, 'yyyy-MM-dd') : value.value ? String(value.value) : i18n.t('Хоосон')
          return dateValue
        }

        case 'number':
          return value.value?.toString()

        case 'multi-select': {
          const multiValues = Array.isArray(value.value)
            ? value.value.map((id) => column.meta?.options?.find((o) => o.value === id)?.label || id).join(', ')
            : column.meta?.options?.find((o) => o.value === value.value)?.label || value.value
          return multiValues
        }

        case 'select': {
          const selectValue = column.meta?.options?.find((o) => o.value === value.value)?.label || value.value
          return selectValue
        }

        case 'text':
        case 'boolean':
          return value.value

        default:
          return value.value
      }
    })
    .join(values.length > 1 ? ` ${join === 'and' ? i18n.t('болон') : i18n.t('эс')} ` : ', ')
}
