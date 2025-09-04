import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type StatesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  after?: Types.InputMaybe<Types.Scalars['String']['input']>
  filter?: Types.InputMaybe<Types.StateFilter>
  sort?: Types.InputMaybe<Types.SortFilter>
}>

export type StatesQuery = {
  __typename?: 'Query'
  states: {
    __typename?: 'StateConnection'
    nodes: Array<{ __typename?: 'State'; id: string; name: string; code?: string | null }>
  }
}

export const StatesDocument = gql`
  query states($first: Int, $after: String, $filter: StateFilter, $sort: SortFilter) {
    states(first: $first, after: $after, filter: $filter, sort: $sort) {
      nodes {
        id
        name
        code
      }
    }
  }
`

/**
 * __useStatesQuery__
 *
 * To run a query within a React component, call `useStatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useStatesQuery(baseOptions?: Apollo.QueryHookOptions<StatesQuery, StatesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options)
}
export function useStatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatesQuery, StatesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options)
}
export function useStatesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StatesQuery, StatesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<StatesQuery, StatesQueryVariables>(StatesDocument, options)
}
export type StatesQueryHookResult = ReturnType<typeof useStatesQuery>
export type StatesLazyQueryHookResult = ReturnType<typeof useStatesLazyQuery>
export type StatesSuspenseQueryHookResult = ReturnType<typeof useStatesSuspenseQuery>
export type StatesQueryResult = Apollo.QueryResult<StatesQuery, StatesQueryVariables>
