import { create } from 'zustand'
import { Product } from './types'

type ProductsStore = {
  data: Product | null
  setData: (data: Product | null) => void
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
  onClose: () => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
  data: null,
  isEditing: false,
  setData: (data) => set({ data }),
  setIsEditing: (isEditing) => set({ isEditing }),
  onClose: () => set({ data: null, isEditing: false })
}))
