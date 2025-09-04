import { redirect } from '@tanstack/react-router'
import { i18n } from '@lingui/core'
import { create } from 'zustand'
import { getDeviceId } from '@/lib/device-id'
import {
  getAccessToken as getCookieAccessToken,
  getRefreshToken as getCookieRefreshToken,
  getTokenExpiry,
  saveAuthTokens,
  clearAuthCookies,
  isAccessTokenValid
} from '@/lib/tokens/auth-cookies'
import { useUserStore } from './user-store'

type AuthStore = {
  accessToken: string | null
  refreshToken: string | null
  expiresAt: number | null
  isAuthenticated: boolean
  isLoading: boolean
  isRefreshing: boolean
  login: (email: string, password: string, isAssertion?: boolean, otpToken?: string) => Promise<void>
  getAccessToken: () => Promise<string | null>
  logout: () => void
  setIsLoading: (loading: boolean) => void
}

let refreshPromise: Promise<string | null> | null = null

const resetToken = {
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  isAuthenticated: false,
  isLoading: false,
  isRefreshing: false
}

// Initialize from cookies
const initFromCookies = () => {
  const accessToken = getCookieAccessToken()
  const refreshToken = getCookieRefreshToken()
  const expiresAt = getTokenExpiry()

  return {
    accessToken,
    refreshToken,
    expiresAt,
    isAuthenticated: isAccessTokenValid() || !!refreshToken,
    isRefreshing: false,
    isLoading: false
  }
}

export const useAuthStore = create<AuthStore>()((set, get) => ({
  ...initFromCookies(),

  login: async (email: string, password: string, isAssertion = false, otpToken?: string) => {
    set({ isLoading: true })
    try {
      const response = await (isAssertion ? assertionRequest(email, password) : loginRequest(email, password, otpToken))

      const data = await response.json()

      if (!response.ok) throw new Error(data.error_description || data.error || 'Login failed', { cause: data.error })

      const expiresAt = (data.created_at + data.expires_in) * 1000

      // Save tokens to cookies
      saveAuthTokens(data.access_token, data.refresh_token, expiresAt)

      set({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: expiresAt,
        isAuthenticated: true,
        isLoading: false
      })

      redirect({ to: '/' })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },

  logout: () => {
    clearAuthCookies()
    useUserStore.getState().clearUser()
    set({
      accessToken: null,
      refreshToken: null,
      expiresAt: null,
      isAuthenticated: false,
      isLoading: false,
      isRefreshing: false
    })
    window.location.href = '/sign-in'
  },

  getAccessToken: async () => {
    const state = get()

    if (!state.refreshToken) return null

    // If access token exists and is not about to expire, return it
    if (state.accessToken && state.expiresAt && state.expiresAt > Date.now() + 60000) return state.accessToken

    // If we reach here, either:
    // 1. Access token is null but refresh token exists (assume expired)
    // 2. Access token exists but is expired or about to expire
    // In both cases, we need to rotate the token

    if (state.isRefreshing) return refreshPromise!

    set({ isRefreshing: true })

    refreshPromise = (async () => {
      try {
        const response = await refreshTokenRequest(state.refreshToken!)
        const data = await response.json()

        if (!response.ok) {
          clearAuthCookies()
          set({ ...resetToken })
          useUserStore.getState().clearUser()
          return null
        }

        const expiresAt = (data.created_at + data.expires_in) * 1000

        // Save tokens to cookies
        saveAuthTokens(data.access_token, data.refresh_token, expiresAt)

        set({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresAt: expiresAt,
          isAuthenticated: true,
          isRefreshing: false
        })

        return data.access_token
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Token refresh failed:', error)
        clearAuthCookies()
        set({ ...resetToken })
        useUserStore.getState().clearUser()
        return null
      } finally {
        refreshPromise = null
      }
    })()

    return refreshPromise
  },

  setIsLoading: (loading: boolean) => set({ isLoading: loading })
}))

const GTN_API_URL = import.meta.env.VITE_API_URL || ''
const GTN_CLIENT_ID = import.meta.env.VITE_CLIENT_ID || ''
const GTN_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET || ''

export const assertionRequest = (provider: string, assertion: string) =>
  fetch(`${GTN_API_URL}/oauth/token`, {
    method: 'POST',
    headers: getHeaders(),
    body: new URLSearchParams({
      grant_type: 'assertion',
      client_id: GTN_CLIENT_ID,
      client_secret: GTN_CLIENT_SECRET,
      scope: 'public backoffice',
      assertion: assertion,
      provider: provider
    })
  })

export const loginRequest = (email: string, password: string, otp?: string) =>
  fetch(`${GTN_API_URL}/oauth/token`, {
    method: 'POST',
    headers: getHeaders(),
    body: new URLSearchParams({
      grant_type: 'password',
      client_id: GTN_CLIENT_ID,
      client_secret: GTN_CLIENT_SECRET,
      scope: 'public backoffice',
      username: email,
      password,
      otp_token: otp || ''
    })
  })

export const refreshTokenRequest = (refreshToken: string) =>
  fetch(`${GTN_API_URL}/oauth/token`, {
    method: 'POST',
    headers: getHeaders(),
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: GTN_CLIENT_ID,
      client_secret: GTN_CLIENT_SECRET,
      refresh_token: refreshToken
    })
  })

export const getHeaders = () => ({
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept-Language': i18n.locale,
  'X-Device-ID': getDeviceId() || 'unknown',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache'
})
