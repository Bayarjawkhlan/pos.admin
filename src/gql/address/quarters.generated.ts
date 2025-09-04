import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type QuartersQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  after?: Types.InputMaybe<Types.Scalars['String']['input']>
  filter?: Types.InputMaybe<Types.QuarterFilter>
  sort?: Types.InputMaybe<Types.SortFilter>
}>

export type QuartersQuery = {
  __typename?: 'Query'
  quarters: {
    __typename?: 'QuarterConnection'
    nodes: Array<{ __typename?: 'Quarter'; id: string; name: string; code?: string | null }>
  }
}

export const QuartersDocument = gql`
  query quarters($first: Int, $after: String, $filter: QuarterFilter, $sort: SortFilter) {
    quarters(first: $first, after: $after, filter: $filter, sort: $sort) {
      nodes {
        id
        name
        code
      }
    }
  }
`

/**
 * __useQuartersQuery__
 *
 * To run a query within a React component, call `useQuartersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuartersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuartersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useQuartersQuery(baseOptions?: Apollo.QueryHookOptions<QuartersQuery, QuartersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QuartersQuery, QuartersQueryVariables>(QuartersDocument, options)
}
export function useQuartersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuartersQuery, QuartersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QuartersQuery, QuartersQueryVariables>(QuartersDocument, options)
}
export function useQuartersSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QuartersQuery, QuartersQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<QuartersQuery, QuartersQueryVariables>(QuartersDocument, options)
}
export type QuartersQueryHookResult = ReturnType<typeof useQuartersQuery>
export type QuartersLazyQueryHookResult = ReturnType<typeof useQuartersLazyQuery>
export type QuartersSuspenseQueryHookResult = ReturnType<typeof useQuartersSuspenseQuery>
export type QuartersQueryResult = Apollo.QueryResult<QuartersQuery, QuartersQueryVariables>
