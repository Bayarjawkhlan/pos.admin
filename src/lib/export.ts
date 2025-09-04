import { ColumnDef } from '@/components/table/types'

export const exportTableToCSV = <TData>(
  columns: ColumnDef<TData, any>[],
  rows: any[],
  opts: {
    filename?: string
  } = {}
): void => {
  const { filename = 'table' } = opts

  const headers = columns.map((column) => column.id)

  const escapeCSV = (value: unknown): string => {
    if (value === null || value === undefined) return '-'

    let str = ''
    if (typeof value === 'string') {
      str = value
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      str = String(value)
    } else {
      // Objects/arrays → JSON
      try {
        str = JSON.stringify(value)
      } catch {
        str = String(value)
      }
    }

    // Escape quotes by doubling them
    if (/[",\n]/.test(str)) {
      str = `"${str.replace(/"/g, '""')}"`
    }
    return str
  }

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => escapeCSV((row as any)[header])).join(','))
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
