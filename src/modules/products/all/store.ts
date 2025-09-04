import { create } from 'zustand'
import { generateUUID } from '@/lib/utils'
import {
  AddFilter,
  ChangeFilterOperator,
  FilterField,
  RemoveFilter,
  SetFilterValue,
  SetSorts,
  SortField
} from '@/components/table/types'
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
  addFilter: (options: AddFilter<ProductColumnId>) => void
  setFilterValue: (options: SetFilterValue<ProductColumnId>) => void
  removeFilter: (options: RemoveFilter<ProductColumnId>) => void
  clearAllFilters: () => void
  changeFilterOperator: (options: ChangeFilterOperator<ProductColumnId>) => void
  setColumns: (columns: ProductColumn[]) => void
}

const initialFilters: FilterField<ProductColumnId>[] = [
  { id: 'productType', join: 'and', values: [{ operator: 'eq', value: 'medicine', uuid: generateUUID() }] }
]

export const useProductsStore = create<ProductsStore>((set, get) => ({
  // table state
  page: 1,
  perPage: 10,
  totalPage: 8,
  columns: [],
  defaultColumns: [],
  selectedProduct: null,
  sorts: [],
  filters: initialFilters,

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
  addFilter: ({ id, operator, value }) =>
    set((state) => ({
      filters: state.filters.some((f) => f.id === id)
        ? state.filters.map((f) => (f.id === id ? { ...f, values: [...f.values, { operator, value, uuid: generateUUID() }] } : f))
        : [...state.filters, { id, values: [{ operator, value, uuid: generateUUID() }], join: 'and' }]
    })),
  setFilterValue: ({ id, uuid, value, operator }) =>
    set((state) => ({
      filters: state.filters
        .map((f) => (f.id === id ? { ...f, values: f.values.map((v) => (v.uuid === uuid ? { ...v, value } : v)) } : f))
        .concat(
          state.filters.map((f) =>
            f.id === id ? { ...f, values: f.values.map((v) => (v.uuid === uuid ? { ...v, value } : v)) } : f
          ).length === 1
            ? [{ id, values: [{ operator, value, uuid }], join: 'and' }]
            : []
        )
    })),
  changeFilterOperator: ({ id, uuid, operator }) =>
    set((state) => ({
      filters: state.filters.map((f) =>
        f.id === id ? { ...f, values: f.values.map((v) => (v.uuid === uuid ? { ...v, operator } : v)) } : f
      )
    })),
  removeFilter: ({ id, uuid }) =>
    set((state) => ({
      filters: state.filters.map((f) => (f.id === id ? { ...f, values: f.values.filter((v) => v.uuid !== uuid) } : f))
    })),
  clearAllFilters: () => set({ filters: initialFilters }),
  setColumns: (columns) => set({ columns, defaultColumns: columns })
}))
