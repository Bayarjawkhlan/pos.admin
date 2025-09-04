import Cookies from 'js-cookie'
import { i18n } from '@lingui/core'
// @ts-expect-error no types
import { messages as enMessages } from './messages/en.po'
// @ts-expect-error no types
import { messages as mnMessages } from './messages/mn.po'

export const locales = {
  en: 'English',
  mn: 'Монгол'
} as const

export const defaultLocale = 'mn' as const

// Load messages
i18n.load({
  en: enMessages,
  mn: mnMessages
})

const activate = (locale: keyof typeof locales) => {
  i18n.activate(locale)
  Cookies.set('locale', locale)
}
const getLocale = () => Cookies.get('locale') || defaultLocale

// Activate default locale
i18n.activate(getLocale())

export { i18n, activate, getLocale }
