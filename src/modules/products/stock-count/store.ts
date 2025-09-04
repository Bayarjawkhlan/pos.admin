import { create } from 'zustand'
import { FilterField, SortDirection, SortField } from '@/components/table/types'
import { StockCountColumn, StockCountColumnId, StockCountProduct } from './types'

type StockCountsStore = {
  // table state
  page: number
  perPage: number
  totalPage: number
  columns: StockCountColumn[]
  defaultColumns: StockCountColumn[]
  selectedProduct: StockCountProduct | null
  sorts: SortField[]
  filters: FilterField<keyof StockCountProduct>[]

  // table setters
  setPage: (page: number) => void
  setPerPage: (perPage: number) => void
  setTotalPage: (totalPage: number) => void
  addColumn: (columnId: StockCountColumnId) => void
  removeColumn: (columnId: StockCountColumnId) => void
  setSelectedProduct: (product: StockCountProduct | null) => void
  setSorts: (id: keyof StockCountProduct, direction: SortDirection | null) => void
  setFilters: (id: keyof StockCountProduct, value: any) => void
  setColumns: (columns: StockCountColumn[]) => void
}

export const useStockCountsStore = create<StockCountsStore>((set, get) => ({
  page: 1,
  perPage: 10,
  totalPage: 8,
  columns: [],
  defaultColumns: [],
  selectedProduct: null,
  sorts: [],
  filters: [{ id: 'productType', value: 'medicine' }],

  setPage: (page) => set({ page }),
  setPerPage: (perPage) => set({ perPage }),
  setTotalPage: (totalPage) => set({ totalPage }),
  addColumn: (columnId) => {
    const defaultColumn = get().defaultColumns.find((c) => c?.id === columnId)
    if (!defaultColumn) return
    set((state) => ({
      columns: [...state.columns.filter((c) => c.id !== columnId), defaultColumn]
    }))
  },
  removeColumn: (columnId) =>
    set((state) => ({
      columns: state.columns.filter((c) => c.id !== columnId)
    })),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setSorts: (id, direction) =>
    set((state) => ({
      sorts: direction
        ? state.sorts.some((s) => s.id === id)
          ? state.sorts.map((s) => (s.id === id ? { ...s, direction } : s))
          : [...state.sorts, { id, direction }]
        : state.sorts.filter((s) => s.id !== id)
    })),
  setFilters: (id, value) =>
    set((state) => ({
      filters: value
        ? state.filters.some((f) => f.id === id)
          ? state.filters.map((f) => (f.id === id ? { ...f, value } : f))
          : [...state.filters, { id, value }]
        : state.filters.filter((f) => f.id !== id)
    })),
  setColumns: (columns) => set({ columns, defaultColumns: columns })
}))
