import { format } from 'date-fns'
import { i18n } from '@lingui/core'
import { Barcode, DollarSign, Factory, Globe2, Search } from 'lucide-react'
import COUNTRIES from '@/lib/constants/countries.json'
import { formatMoney } from '@/lib/utils'
import { ColumnHeader } from '@/components/table/components/column-header'
import { useProductsStore } from './store'
import { ProductColumn } from './types'

export const useProductsColumns = (): ProductColumn[] => {
  const { setSelectedProduct, setSorts, sorts } = useProductsStore()

  return [
    {
      id: 'name',
      headerName: i18n.t('Нэр'),
      header: <ColumnHeader title={i18n.t('Нэр')} id='name' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => (
        <button className='flex items-center gap-x-3' onClick={() => setSelectedProduct(row)}>
          <img src={row.imageUrl || ''} alt={row.name} className='size-12 min-w-12 rounded-md object-cover object-center' />
          <p className='text-left text-sm'>{row.name}</p>
        </button>
      ),
      filterable: true,
      meta: {
        variant: 'text',
        placeholder: 'Omega',
        icon: Search
      },
      enableHiding: false
    },
    {
      id: 'internationalName',
      headerName: i18n.t('Олон улсын нэршил'),
      header: (
        <ColumnHeader title={i18n.t('Олон улсын нэршил')} id='internationalName' sorts={sorts} setSorts={setSorts} sortable />
      ),
      cell: (row) => <p className='text-muted-foreground text-sm'>{row.internationalName || '-'}</p>,
      filterable: true,
      meta: {
        variant: 'text',
        placeholder: 'Vitamin C',
        icon: Globe2
      }
    },
    {
      id: 'barcode',
      headerName: i18n.t('Баркод'),
      header: <ColumnHeader title={i18n.t('Баркод')} id='barcode' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{row.barcode || '-'}</p>,
      filterable: true,
      meta: {
        variant: 'text',
        placeholder: i18n.t('21873289472'),
        icon: Barcode
      }
    },
    {
      id: 'productType',
      headerName: i18n.t('Эмийн хэлбэр'),
      header: <ColumnHeader title={i18n.t('Эмийн хэлбэр')} />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{row.productType}</p>,
      filterable: true,
      meta: {
        variant: 'select',
        placeholder: i18n.t('Эм эсвэл эм бус'),
        options: [
          { label: i18n.t('Эм'), value: 'medicine' },
          { label: i18n.t('Эм бус'), value: 'not-medicine' }
        ]
      }
    },
    {
      id: 'manifacturer',
      headerName: i18n.t('Үйлдвэрлэгч'),
      header: <ColumnHeader title={i18n.t('Үйлдвэрлэгч')} id='manifacturer' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{row.manifacturer}</p>,
      filterable: true,
      meta: {
        variant: 'text',
        placeholder: i18n.t('Үйлдвэрлэгч'),
        icon: Factory
      }
    },
    {
      id: 'country',
      headerName: i18n.t('Улс'),
      header: <ColumnHeader title={i18n.t('Улс')} id='country' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{row.country}</p>,
      filterable: true,
      meta: {
        variant: 'multi-select',
        placeholder: i18n.t('Монгол'),
        options: COUNTRIES?.map((country) => ({ label: country.en, value: country.id })) || []
      }
    },
    {
      id: 'price',
      headerName: i18n.t('Нэгж үнэ'),
      header: <ColumnHeader title={i18n.t('Нэгж үнэ')} id='price' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{formatMoney(row.price, { currency: 'MNT' })}</p>,
      filterable: true,
      meta: {
        variant: 'number',
        placeholder: i18n.t('1000'),
        icon: DollarSign
      }
    },
    {
      id: 'createdAt',
      headerName: i18n.t('Үүсгэсэн огноо'),
      header: <ColumnHeader title={i18n.t('Үүсгэсэн огноо')} id='createdAt' sorts={sorts} setSorts={setSorts} sortable />,
      cell: (row) => <p className='text-muted-foreground text-sm'>{format(row.createdAt, 'dd/MM/yyyy')}</p>,
      filterable: true,
      meta: {
        variant: 'date-range',
        placeholder: i18n.t('Огноо')
      }
    }
  ]
}
