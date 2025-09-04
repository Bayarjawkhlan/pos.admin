import { i18n } from '@lingui/core'

export type DataTableConfig = typeof DATA_TABLE_CONFIG

export const DATA_TABLE_CONFIG = {
  textOperators: [
    { label: i18n.t('Агуулсан'), value: 'iLike' as const },
    { label: i18n.t('Агуулаагүй'), value: 'notILike' as const },
    { label: i18n.t('Тэнцүү'), value: 'eq' as const },
    { label: i18n.t('Тэнцүү биш'), value: 'ne' as const },
    { label: i18n.t('Хоосон'), value: 'isEmpty' as const }
  ],
  numericOperators: [
    { label: i18n.t('Тэнцүү'), value: 'eq' as const },
    { label: i18n.t('Тэнцүү биш'), value: 'ne' as const },
    { label: i18n.t('Бага'), value: 'lt' as const },
    { label: i18n.t('Бага эсвэл тэнцүү'), value: 'lte' as const },
    { label: i18n.t('Их'), value: 'gt' as const },
    { label: i18n.t('Их эсвэл тэнцүү'), value: 'gte' as const },
    { label: i18n.t('Хоосон'), value: 'isEmpty' as const }
  ],
  dateOperators: [
    { label: i18n.t('Энэ өдөр'), value: 'eq' as const },
    { label: i18n.t('Энэ өдөр биш'), value: 'ne' as const },
    { label: i18n.t('Өмнөх өдөрүүд'), value: 'lt' as const },
    { label: i18n.t('Энэ өдөр болон өмнөх өдөрүүд'), value: 'lte' as const },
    { label: i18n.t('Дараагийх нь өдөрүүд'), value: 'gt' as const },
    { label: i18n.t('Энэ өдөр болон дараагийх нь өдөрүүд'), value: 'gte' as const },
    { label: i18n.t('Хооронд'), value: 'isBetween' as const }
  ],
  selectOperators: [
    { label: i18n.t('Ийм'), value: 'eq' as const },
    { label: i18n.t('Ийм биш'), value: 'ne' as const },
    { label: i18n.t('Хоосон'), value: 'isEmpty' as const },
    { label: i18n.t('Хоосон биш'), value: 'isNotEmpty' as const }
  ],
  multiSelectOperators: [
    { label: i18n.t('Агуулсан'), value: 'inArray' as const },
    { label: i18n.t('Агуулаагүй'), value: 'notInArray' as const },
    { label: i18n.t('Хоосон'), value: 'isEmpty' as const },
    { label: i18n.t('Хоосон биш'), value: 'isNotEmpty' as const }
  ],
  booleanOperators: [
    { label: i18n.t('Тийм'), value: 'eq' as const },
    { label: i18n.t('Үгүй'), value: 'ne' as const }
  ]
} as const
export const OPERATORS = [
  'iLike',
  'notILike',
  'eq',
  'ne',
  'inArray',
  'notInArray',
  'isEmpty',
  'isNotEmpty',
  'lt',
  'lte',
  'gt',
  'gte',
  'isBetween'
] as const

export const FILTER_VARIANTS = ['text', 'number', 'date', 'boolean', 'select', 'multi-select'] as const

export const JOIN_OPERATORS = ['and', 'or'] as const

export const PER_PAGE_OPTIONS = [10, 20, 50, 100] as const
