import { format, formatDistanceToNow, parse } from 'date-fns'
import { i18n } from '@lingui/core'
import { type ClassValue, clsx } from 'clsx'
import { toast } from 'sonner'
import { twMerge } from 'tailwind-merge'
import { FetchError } from './errors/fetch'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const formatNumber = (num: number) => new Intl.NumberFormat('en-US').format(num)

export const formatBytes = (bytes: number, opts: { decimals?: number; sizeType?: 'accurate' | 'normal' } = {}) => {
  const { decimals = 0, sizeType = 'normal' } = opts

  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const accurateSizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))

  return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
    sizeType === 'accurate' ? (accurateSizes[i] ?? 'Bytest') : (sizes[i] ?? 'Bytes')
  }`
}

export const generateUUID = () => {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export const formatGidToInt = (gid: string): number => {
  const id = /\/(\d+)$/.exec(Buffer.from(gid, 'base64').toString('utf8'))

  return id ? parseInt(id[1]) : 0
}

type FormatMoneyOptions = {
  currency?: string | null
  fixed?: number
  short?: boolean
}

export const formatMoney = (
  value: string | number | undefined | null,
  options: FormatMoneyOptions = { currency: 'USD', fixed: 5, short: false }
): string => {
  if (typeof value === 'undefined') return ''
  if (value === null) return '0'

  let currency = options.currency ?? ''
  const fixed = options.fixed ?? 5
  const short = options.short ?? false

  if (currency === 'MNT') currency = '₮'

  const numeric = typeof value === 'string' ? parseFloat(value) : value
  if (numeric === Number.POSITIVE_INFINITY) return '∞'

  // Handle short format like "1.5K ₮"
  if (short) {
    const formatter = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    })
    return `${formatter.format(numeric)} ${currency}`.trim()
  }
  const formatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: fixed })
  const formatted = formatter.format(numeric)

  return currency === '$' ? `${currency}${formatted}` : `${formatted} ${currency}`.trim()
}

export const dateFormat = (dateString: string | Date, formatStr: string = 'yyyy/MM/dd HH:mm:ss'): string => {
  if (!dateString) return ''
  return format(dateString, formatStr)
}

export const dateFormatHuman = (dateString: string | Date, format?: string): string => {
  if (!dateString) return ''
  if (format) dateString = parse(dateString.toString(), format, new Date())
  return formatDistanceToNow(dateString, { addSuffix: true })
}

export const handleServerError = (error: unknown) => {
  // eslint-disable-next-line no-console
  console.log(error)

  let errMsg = i18n.t('Something went wrong!')

  if (error && typeof error === 'object' && 'status' in error && Number(error.status) === 204) {
    errMsg = i18n.t('Content not found.')
  }

  if (error instanceof FetchError) {
    errMsg = error.body
  }

  toast.error(errMsg)
}

export const showSubmittedData = (data: unknown, title: string = i18n.t('You submitted the following values:')) => {
  toast.message(title, {
    description: (
      // w-[340px]
      <pre className='mt-2 w-full overflow-x-auto rounded-md bg-slate-950 p-4'>
        <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
      </pre>
    )
  })
}
