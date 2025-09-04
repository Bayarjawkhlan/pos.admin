import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import type * as Types from '../graphql'

const defaultOptions = {} as const
export type DevicesQueryVariables = Types.Exact<{ [key: string]: never }>

export type DevicesQuery = {
  __typename?: 'Query'
  me?: {
    __typename?: 'User'
    id: string
    devices: Array<{
      __typename?: 'UserDevice'
      id: string
      name?: string | null
      deviceId?: string | null
      ip?: string | null
      confirmed?: boolean | null
      location?: string | null
      platform: string
      channel?: Types.DeviceChannel | null
      lastActiveAt: any
    }>
  } | null
}

export const DevicesDocument = gql`
  query devices {
    me {
      id
      devices {
        id
        name
        deviceId
        ip
        confirmed
        location
        platform
        channel
        lastActiveAt
      }
    }
  }
`

/**
 * __useDevicesQuery__
 *
 * To run a query within a React component, call `useDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevicesQuery(baseOptions?: Apollo.QueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, options)
}
export function useDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevicesQuery, DevicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, options)
}
export function useDevicesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DevicesQuery, DevicesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<DevicesQuery, DevicesQueryVariables>(DevicesDocument, options)
}
export type DevicesQueryHookResult = ReturnType<typeof useDevicesQuery>
export type DevicesLazyQueryHookResult = ReturnType<typeof useDevicesLazyQuery>
export type DevicesSuspenseQueryHookResult = ReturnType<typeof useDevicesSuspenseQuery>
export type DevicesQueryResult = Apollo.QueryResult<DevicesQuery, DevicesQueryVariables>
