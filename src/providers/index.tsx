import { i18n } from '@/locales/i18n'
import { I18nProvider } from '@lingui/react'
import { Toaster } from 'sonner'
import { ApolloClientProvider } from './apollo-client'

type ProvidersProps = {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => (
  <ApolloClientProvider>
    <I18nProvider i18n={i18n}>
      {children}
      <Toaster duration={5000} richColors />
    </I18nProvider>
  </ApolloClientProvider>
)
