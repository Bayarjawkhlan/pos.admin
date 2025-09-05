// import { format } from 'date-fns'
// import { i18n } from '@lingui/core'
// import { Barcode, DollarSign, Factory, Globe2, Search } from 'lucide-react'
// import { formatMoney } from '@/lib/utils'
// import { ColumnHeader } from '@/components/table/components/column-header'
// import COUNTRIES from './countries.json'
// import { useStockCountsStore } from './store'
// import { StockCountColumn } from './types'

// export const useProductsColumns = (): StockCountColumn[] => {
//   const { setSelectedProduct, setSorts, sorts } = useStockCountsStore()

//   return [
//     {
//       id: 'name',
//       headerName: i18n.t('Нэр'),
//       header: <ColumnHeader title={i18n.t('Нэр')} id='name' sorts={sorts} setSorts={setSorts} sortable />,
//       cell: (row) => (
//         <button className='flex items-center gap-x-3' onClick={() => setSelectedProduct(row)}>
//           <img src={row.imageUrl || ''} alt={row.name} className='size-12 min-w-12 rounded-md object-cover object-center' />
//           <p className='text-left text-sm'>{row.name}</p>
//         </button>
//       ),
//       filterable: true,
//       meta: {
//         variant: 'text',
//         placeholder: 'Omega',
//         icon: Search
//       },
//       enableHiding: false
//     },
//     {
//       id: 'internationalName',
//       headerName: i18n.t('Олон улсын нэршил'),
//       header: (
//         <ColumnHeader title={i18n.t('Олон улсын нэршил')} id='internationalName' sorts={sorts} setSorts={setSorts} sortable />
//       ),
//       cell: (row) => <p className='text-muted-foreground text-sm'>{row.internationalName || '-'}</p>,
//       filterable: true,
//       meta: {
//         variant: 'text',
//         placeholder: 'Vitamin C',
//         icon: Globe2
//       }
//     },
//     {
//       id: 'branches',
//       headerName: i18n.t('Салбарууд'),
//       header: <ColumnHeader title={i18n.t('Салбарууд')} />,
//       cell: (row) => (
//         <p className='text-muted-foreground flex -space-x-1.5 text-sm'>
//           {row.branches.slice(0, 5).map((branch) => (
//             <img
//               key={`branch-${branch.id}`}
//               src={branch.imageUrl}
//               alt={branch.name}
//               className='size-7 min-w-7 rounded-full object-cover object-center'
//             />
//           ))}
//           {row.branches.length > 5 && (
//             <div className='text-muted-foreground bg-muted flex size-7 items-center justify-center rounded-full text-xs'>
//               +{row.branches.length - 5}
//             </div>
//           )}
//         </p>
//       ),
//       filterable: true,
//       meta: {
//         variant: 'multi-select',
//         placeholder: i18n.t('Салбарууд'),
//         options: [
//           { label: i18n.t('Бинзин'), value: 'benzine' },
//           { label: i18n.t('Дизель'), value: 'diesel' },
//           { label: i18n.t('Газ'), value: 'gas' },
//           { label: i18n.t('Электро'), value: 'electric' },
//           { label: i18n.t('Танки'), value: 'tank' }
//         ]
//       }
//     },
//     {
//       id: 'doStockEmployee',
//       headerName: i18n.t('Тооллого хийсэн ажилтан'),
//       header: <ColumnHeader title={i18n.t('Тооллого хийсэн ажилтан')} />,
//       cell: (row) => (
//         <div className='flex items-center gap-x-2'>
//           <img
//             src={row.doStockEmployee.avatarUrl}
//             alt={row.doStockEmployee.firstName}
//             className='size-10 min-w-10 rounded-full object-cover object-center'
//           />
//           <p className='text-muted-foreground text-sm'>
//             {row.doStockEmployee.firstName} {row.doStockEmployee.lastName}
//           </p>
//         </div>
//       ),
//       filterable: true,
//       meta: {
//         variant: 'multi-select',
//         placeholder: i18n.t('Ажилтан'),
//         options: [
//           { label: i18n.t('Марал эрдэнэ'), value: '1' },
//           { label: i18n.t('Мишээл Хүслэн'), value: '2' },
//           { label: i18n.t('Ганзориг Магнай'), value: '3' }
//         ]
//       }
//     },
//     {
//       id: 'doStockDate',
//       headerName: i18n.t('Тооллого хийсэн огноо'),
//       header: (
//         <ColumnHeader title={i18n.t('Тооллого хийсэн огноо')} id='doStockDate' sorts={sorts} setSorts={setSorts} sortable />
//       ),
//       cell: (row) => <p className='text-muted-foreground text-sm'>{format(row.doStockDate, 'MM/dd, yyyy')}</p>,
//       filterable: true,
//       meta: {
//         variant: 'date-range',
//         placeholder: i18n.t('Огноо'),
//         icon: Search,
//         options: [
//           { label: i18n.t('Эм'), value: 'medicine' },
//           { label: i18n.t('Эм бус'), value: 'not-medicine' },
//           { label: i18n.t('Хэрэглээгүй'), value: 'unused' },
//           { label: i18n.t('Амьсгалаас хүлээгдэх'), value: 'amygdalin' },
//           { label: i18n.t('Хэрэглээгүй1'), value: 'unused1' }
//         ]
//       }
//     },
//     {
//       id: 'barcode',
//       headerName: i18n.t('Баркод'),
//       header: <ColumnHeader title={i18n.t('Баркод')} id='barcode' sorts={sorts} setSorts={setSorts} sortable />,
//       cell: (row) => <p className='text-muted-foreground text-sm'>{row.barcode}</p>,
//       filterable: true,
//       meta: {
//         variant: 'text',
//         placeholder: i18n.t('21873289472'),
//         icon: Barcode
//       }
//     },
//     {
//       id: 'type',
//       headerName: i18n.t('Эмийн хэлбэр'),
//       header: <ColumnHeader title={i18n.t('Эмийн хэлбэр')} />,
//       cell: (row) => <p className='text-muted-foreground text-sm'>{row.type}</p>,
//       filterable: true,
//       meta: {
//         variant: 'select',
//         placeholder: i18n.t('Эм эсвэл эм бус'),
//         options: [
//           { label: i18n.t('Эм'), value: 'medicine' },
//           { label: i18n.t('Эм бус'), value: 'not-medicine' }
//         ]
//       }
//     },
//     {
//       id: 'manifacturer',
//       headerName: i18n.t('Үйлдвэрлэгч'),
//       header: <ColumnHeader title={i18n.t('Үйлдвэрлэгч')} id='manifacturer' sorts={sorts} setSorts={setSorts} sortable />,
//       cell: (row) => <p className='text-muted-foreground text-sm'>{row.manifacturer}</p>,
//       filterable: true,
//       meta: {
//         variant: 'text',
//         placeholder: i18n.t('Үйлдвэрлэгч'),
//         icon: Factory
//       }
//     },
//     {
//       id: 'country',
//       headerName: i18n.t('Улс'),
//       header: <ColumnHeader title={i18n.t('Улс')} id='country' sorts={sorts} setSorts={setSorts} sortable />,
//       cell: (row) => <p className='text-muted-foreground text-sm'>{row.country}</p>,
//       filterable: true,
//       meta: {
//         variant: 'multi-select',
//         placeholder: i18n.t('Монгол'),
//         options: COUNTRIES?.map((country) => ({ label: country.en, value: country.id })) || []
//       }
//     },
//     {
//       id: 'price',
//       headerName: i18n.t('Нэгж үнэ'),
//       header: <ColumnHeader title={i18n.t('Нэгж үнэ')} id='price' sorts={sorts} setSorts={setSorts} sortable />,
//       cell: (row) => <p className='text-muted-foreground text-sm'>{formatMoney(row.price, { currency: 'MNT' })}</p>,
//       filterable: true,
//       meta: {
//         variant: 'number',
//         placeholder: i18n.t('1000'),
//         icon: DollarSign
//       }
//     }
//   ]
// }
