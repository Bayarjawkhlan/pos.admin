import { i18n } from '@lingui/core'
import { Users, Store, ChartLine, BadgePercent, CircleUser, Settings, Monitor, Pill } from 'lucide-react'
import { Sidebar } from './types'

export const SIDEBAR_DATA: Sidebar = [
  {
    title: i18n.t('Үндсэн цэсүүд'),
    items: [
      { title: i18n.t('Хянах самбар'), url: '/', icon: Monitor },
      {
        title: i18n.t('Бараа бүтээгдэхүүн'),
        url: '#' as any,
        icon: Pill,
        items: [
          { title: i18n.t('Сан'), url: '/products' as any },
          { title: i18n.t('Тооллого'), url: '/products/stock' },
          { title: i18n.t('Үлдэгдэл'), url: '/products/stock-count' }
        ]
      },
      { title: i18n.t('Салбар'), url: '/branches', icon: Store },
      {
        title: i18n.t('Борлуулалт'),
        url: '#' as any,
        icon: ChartLine,
        items: [
          { title: i18n.t('Борлуулалтын жагсаалт'), url: '/sales' },
          { title: i18n.t('Буцаалт'), url: '/sales/refund' }
        ]
      },
      {
        title: i18n.t('Хэрэглэгч'),
        url: '/users',
        icon: Users,
        items: [
          {
            title: i18n.t('Хэрэглэгчийн жагсаалт'),
            url: '/users'
          },
          {
            title: i18n.t('Сегмент'),
            url: '/users/segments'
          },
          {
            title: i18n.t('Мессеж'),
            url: '/users/message'
          }
        ]
      },
      { title: i18n.t('Хямдрал'), url: '/discounts', icon: BadgePercent },
      { title: i18n.t('Тайлан'), url: '/reports', icon: CircleUser }
    ]
  },
  {
    title: i18n.t('Нэмэлт цэсүүд'),
    items: [
      {
        title: i18n.t('Тохиргоо'),
        url: '#' as any,
        icon: Settings,
        items: [
          { title: i18n.t('Бизнесийн профайл '), url: '/settings/profile' },
          { title: i18n.t('Ажилтан'), url: '/settings/employees' },
          { title: i18n.t('Хүргэлт'), url: '/settings/deliveries' },
          { title: i18n.t('Төлбөр'), url: '/settings/payment' },
          { title: i18n.t('Төлбөрийн сонголт'), url: '/settings/payment-methods' }
        ]
      }
    ]
  }
]
