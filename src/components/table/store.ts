import { create } from 'zustand'
import { FilterField, SetFilter, SetSorts, SortField } from '@/components/table/types'

export type TableState<ColumnId = string, Row = any> = {
  page: number
  perPage: number
  totalPage: number
  columns: { id: ColumnId; [key: string]: any }[]
  defaultColumns: { id: ColumnId; [key: string]: any }[]
  selectedRow: Row | null
  sorts: SortField<ColumnId>[]
  filters: FilterField<ColumnId>[]
}

type TablesStore = {
  tables: Record<string, TableState>
  initTable: (key: string, initial: TableState) => void
  setTable: (key: string, state: Partial<TableState>) => void
  setPage: (key: string, page: number) => void
  setPerPage: (key: string, perPage: number) => void
  setTotalPage: (key: string, totalPage: number) => void
  setColumns: (key: string, columns: TableState['columns']) => void
  setSelectedRow: (key: string, row: any) => void
  setSorts: (key: string, sort: SetSorts<string>) => void
  setFilter: (key: string, filter: SetFilter<string>) => void
  clearAllFilters: (key: string) => void
}

export const useTablesStore = create<TablesStore>((set, get) => ({
  tables: {},

  initTable: (key, initial) =>
    set((s) => ({
      tables: {
        ...s.tables,
        [key]: s.tables[key] ?? initial
      }
    })),

  setTable: (key, state) =>
    set((s) => ({
      tables: {
        ...s.tables,
        [key]: { ...s.tables[key], ...state }
      }
    })),

  setPage: (key, page) => get().setTable(key, { page }),
  setPerPage: (key, perPage) => get().setTable(key, { perPage }),
  setTotalPage: (key, totalPage) => get().setTable(key, { totalPage }),
  setColumns: (key, columns) => get().setTable(key, { columns, defaultColumns: columns }),
  setSelectedRow: (key, row) => get().setTable(key, { selectedRow: row }),
  setSorts: (key, { id, direction }) => {
    const table = get().tables[key]
    if (!table) return
    const sorts = direction
      ? table.sorts.some((s) => s.id === id)
        ? table.sorts.map((s) => (s.id === id ? { ...s, direction } : s))
        : [...table.sorts, { id, direction }]
      : table.sorts.filter((s) => s.id !== id)
    get().setTable(key, { sorts })
  },
  setFilter: (key, { id, value }) => {
    const table = get().tables[key]
    if (!table) return
    const filters = value
      ? table.filters.some((f) => f.id === id)
        ? table.filters.map((f) => (f.id === id ? { ...f, value } : f))
        : [...table.filters, { id, value }]
      : table.filters.filter((f) => f.id !== id)
    get().setTable(key, { filters })
  },
  clearAllFilters: (key) => get().setTable(key, { filters: [] })
}))
