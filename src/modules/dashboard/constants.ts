import { i18n } from '@lingui/core'
import { Package } from 'lucide-react'

export const OVERVIEW_CARDS = [
  {
    title: i18n.t('Нийт бүтээгдэхүүн'),
    value: 467,
    upPercentage: 3.2,
    icon: Package
  },
  {
    title: i18n.t('Дуусаж буй бүтээгдэхүүн'),
    value: 23,
    upPercentage: 0.4,
    icon: Package
  },
  {
    title: i18n.t('Дууссан бүтээгдэхүүн'),
    value: 19,
    upPercentage: 0.2,
    icon: Package
  },
  {
    title: i18n.t('Нийт захиалга'),
    value: 1279,
    upPercentage: 8.2,
    icon: Package
  }
]

export const AI_CHAT_INSTANT_SUGGESTED_MESSAGES = [
  i18n.t('Хугацаа дуусах гэж буй эмийн жагсаалт'),
  i18n.t('Дууссан / дуусахад ойр эмийн сэрэмжлүүлэг'),
  i18n.t('Их эрэлттэй эмүүдийн бодит үлдэгдэлүүд гаргах'),
  i18n.t('Өнөөдрийн / долоо хоногийн / сарын борлуулалтын дүн'),
  i18n.t('Хамгийн их борлуулалттай эмийн жагсаалт'),
  i18n.t('Ашигтай бүтээгдэхүүнүүдийн тайлан'),
  i18n.t('Төлбөрийн төрөл (бэлэн, карт, даатгал) тус бүрээр статистик'),
  i18n.t('Өнөөдөр орж ирсэн барааны мэдээлэл'),
  i18n.t('Хүлээгдэж буй нийлүүлэлт, захиалгын явц')
]

export const CHATS = [
  {
    id: 1,
    message: 'Хугацаа дуусах гэж буй эмийн жагсаалт',
    role: 'user',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: 2,
    message: 'Дууссан / дуусахад ойр эмийн сэрэмжлүүлэг',
    role: 'ai',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: 3,
    message: 'Их эрэлттэй эмүүдийн бодит үлдэгдэлүүд гаргах',
    role: 'user',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: 4,
    message: 'Өнөөдрийн / долоо хоногийн / сарын борлуулалтын дүн',
    role: 'user',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  },
  {
    id: 5,
    message: 'Хамгийн их борлуулалттай эмийн жагсаалт',
    role: 'ai',
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01'
  }
]
