import { ColumnDef } from '@/components/table/types'

export type ProductType = 'medicine' | 'not-medicine'

export type StockCountProduct = {
  id: string
  name: string
  imageUrl: string
  internationalName: string
  branches: { id: string; imageUrl: string; name: string; quantity: number }[]
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

export type StockCountColumnId =
  | 'name'
  | 'internationalName'
  | 'branches'
  | 'doStockEmployee'
  | 'doStockDate'
  | 'barcode'
  | 'type'
  | 'manifacturer'
  | 'country'
  | 'price'
  | 'createdAt'

export type StockCountColumn = ColumnDef<StockCountProduct, StockCountColumnId>
