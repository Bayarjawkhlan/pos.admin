import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type CountriesQueryVariables = Types.Exact<{ [key: string]: never }>

export type CountriesQuery = {
  __typename?: 'Query'
  countries: Array<{ __typename?: 'Country'; id: string; name: string; iso3?: string | null }>
}

export const CountriesDocument = gql`
  query countries {
    countries {
      id
      name
      iso3
    }
  }
`

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options)
}
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options)
}
export function useCountriesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountriesQuery, CountriesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options)
}
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>
export type CountriesSuspenseQueryHookResult = ReturnType<typeof useCountriesSuspenseQuery>
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>
