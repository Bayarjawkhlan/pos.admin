import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type ArticlesQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>
  after?: Types.InputMaybe<Types.Scalars['String']['input']>
  filter?: Types.InputMaybe<Types.ArticleFilter>
  sort?: Types.InputMaybe<Types.SortFilter>
}>

export type ArticlesQuery = {
  __typename?: 'Query'
  articles: {
    __typename?: 'ArticleConnection'
    edges: Array<{
      __typename?: 'ArticleEdge'
      node: {
        __typename?: 'Article'
        id: string
        key: string
        headline?: string | null
        summary?: string | null
        imageUrl?: string | null
        symbols?: Array<string> | null
        exchanges?: Array<string> | null
        category?: Array<string> | null
        countryList?: Array<string> | null
        sourceText?: string | null
        url?: string | null
        createdAt: any
      }
    }>
    pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean; endCursor?: string | null }
  }
}

export const ArticlesDocument = gql`
  query articles($first: Int = 10, $after: String, $filter: ArticleFilter, $sort: SortFilter) {
    articles(first: $first, after: $after, filter: $filter, sort: $sort) {
      edges {
        node {
          id
          key
          headline
          summary
          imageUrl
          symbols
          exchanges
          category
          countryList
          sourceText
          url
          createdAt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options)
}
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options)
}
export function useArticlesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options)
}
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>
export type ArticlesSuspenseQueryHookResult = ReturnType<typeof useArticlesSuspenseQuery>
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>
