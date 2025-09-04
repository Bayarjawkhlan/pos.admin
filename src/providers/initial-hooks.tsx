import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { useMeLazyQuery } from '@/gql/user/me.generated'
import { useUserStore } from '@/modules/auth/user-store'

export const InitialHooks = () => {
  const { user, setUser, setIsLoading, isLoading } = useUserStore()
  const pathname = useLocation().pathname

  const [getMe] = useMeLazyQuery()

  useEffect(() => {
    if (user || isLoading) return
    setIsLoading(true)
    getMe()
      .then(({ data }) => {
        console.log(data)
        // if (data?.me) setUser(data?.me ?? null)
      })
      .finally(() => setIsLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}
