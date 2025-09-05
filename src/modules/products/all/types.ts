import { ColumnDef } from '@/components/table/types'

export type ProductType = 'medicine' | 'not-medicine'

export type Product = {
  id: number
  name: string
  imageUrl: string
  internationalName: string
  branches: { id: number; imageUrl: string; name: string; quantity: number }[]
  doStockEmployee: {
    avatarUrl: string
    firstName: string
    lastName: string
  }
  productType: ProductType
  doStockDate: Date
  barcode: string
  type: string
  manifacturer: string
  country: string
  price: number
  createdAt: Date
}

export type ProductColumnId =
  | 'id'
  | 'name'
  | 'internationalName'
  | 'branches'
  | 'doStockEmployee'
  | 'doStockDate'
  | 'barcode'
  | 'productType'
  | 'manifacturer'
  | 'country'
  | 'price'
  | 'createdAt'

export type ProductColumn = ColumnDef<Product, ProductColumnId>
