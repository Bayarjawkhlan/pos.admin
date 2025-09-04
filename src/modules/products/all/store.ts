import { create } from 'zustand'
import { FilterField, SetFilter, SetSorts, SortField } from '@/components/table/types'
import { Product, ProductColumn, ProductColumnId } from './types'

type ProductsStore = {
  // table state
  page: number
  perPage: number
  totalPage: number
  columns: ProductColumn[]
  defaultColumns: ProductColumn[]
  selectedProduct: Product | null
  sorts: SortField[]
  filters: FilterField<ProductColumnId>[]

  // table setters
  setPage: (page: number) => void
  setPerPage: (perPage: number) => void
  setTotalPage: (totalPage: number) => void
  addColumn: (columnId: ProductColumnId) => void
  removeColumn: (columnId: ProductColumnId) => void
  setSelectedProduct: (product: Product | null) => void
  setSorts: (sort: SetSorts<ProductColumnId>) => void
  setFilter: (filter: SetFilter<ProductColumnId>) => void
  clearAllFilters: () => void
  setColumns: (columns: ProductColumn[]) => void
}

export const useProductsStore = create<ProductsStore>((set, get) => ({
  // table state
  page: 1,
  perPage: 10,
  totalPage: 8,
  columns: [],
  defaultColumns: [],
  selectedProduct: null,
  sorts: [],
  filters: [{ id: 'productType', value: 'medicine' }],

  // table setters
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
  setSorts: ({ id, direction }) =>
    set((state) => ({
      sorts: direction
        ? state.sorts.some((s) => s.id === id)
          ? state.sorts.map((s) => (s.id === id ? { ...s, direction } : s))
          : [...state.sorts, { id, direction }]
        : state.sorts.filter((s) => s.id !== id)
    })),
  setFilter: ({ id, value }) =>
    set((state) => ({
      filters: value
        ? state.filters.some((f) => f.id === id)
          ? state.filters.map((f) => (f.id === id ? { ...f, value } : f))
          : [...state.filters, { id, value }]
        : state.filters.filter((f) => f.id !== id)
    })),
  clearAllFilters: () => set({ filters: [] }),
  setColumns: (columns) => set({ columns, defaultColumns: columns })
}))
