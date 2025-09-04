import { create } from 'zustand'
import { useAuthStore } from './store'

export type User = typeof initialUser | null

type UserStore = {
  user: User
  isLoading: boolean
  fetchUser: () => Promise<void>
  setUser: (user: User) => void
  setIsLoading: (isLoading: boolean) => void
  clearUser: () => void
}

const initialUser = {
  id: 1,
  firstName: 'Bayarjavkhlan',
  lastName: 'Batgerel',
  email: 'bayarjavkhlan.ba@gmail.com',
  avatarUrl: 'https://avatars.githubusercontent.com/u/97165289',
  phoneNumber: '94932436',
  role: 'admin',
  branchIds: [],
  lastLoggedInDate: new Date(),
  synched: true
}

export const useUserStore = create<UserStore>()((set) => ({
  user: initialUser,
  isLoading: false,

  fetchUser: async () => {
    try {
      const { accessToken } = useAuthStore.getState()

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
      const response = await fetch(import.meta.env.VITE_API_URL + '/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query: `
          query Me {
            me {
              id
              fullName
              email
              phone
              avatar {
                mediumUrl
              }
              username
              number
              language
              twoFactorEnabled
              createdAt
              updatedAt
            }
          }
        `
        })
      })
      const result = await response.json()
      if (result.data?.me) {
        set({ user: result.data.me })
      }
    } catch (error) {
      console.error(error)
    }
  },
  setUser: (user) => set({ user }),
  setIsLoading: (isLoading) => set({ isLoading }),
  clearUser: () => set({ user: null })
}))
