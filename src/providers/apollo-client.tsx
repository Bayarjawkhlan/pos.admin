import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/lib/apollo-client'

export const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
)
