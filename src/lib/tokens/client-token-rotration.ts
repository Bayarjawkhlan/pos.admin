import Cookies from 'js-cookie'
import { i18n } from '@lingui/core'
import { getDeviceId } from '@/lib/device-id'

// For API response typing only
const TOKEN_STORAGE_KEY = 'auth.public_token'

const COOKIE_OPTIONS = {
  path: '/',
  sameSite: 'strict' as const,
  secure: window.location.protocol === 'https:'
}

const API_URL = import.meta.env.VITE_API_URL || ''
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID || ''
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET || ''

type TokenData = {
  access_token: string
  refresh_token: string
  expires_in: number
  token_type: string
}

export const saveToken = async (tokenData: TokenData): Promise<void> => {
  const expiresAt = Date.now() + tokenData.expires_in * 1000
  Cookies.set(TOKEN_STORAGE_KEY, tokenData.access_token, { ...COOKIE_OPTIONS, expires: new Date(expiresAt) })
}

export const getStoredToken = async (): Promise<string | null> => Cookies.get(TOKEN_STORAGE_KEY) || null

export const clearToken = async (): Promise<void> => {
  Cookies.remove(TOKEN_STORAGE_KEY)
}

export const getPublicToken = async (): Promise<string | null> => {
  const storedToken = await getStoredToken()
  if (!storedToken) return getNewTokenIfNeeded()
  return storedToken
}

export const getNewTokenIfNeeded = async () => {
  try {
    const newToken = await generateNewToken()
    await saveToken(newToken)
    return newToken.access_token
  } catch (_e) {
    await clearToken()
    return null
  }
}

export const generateNewToken = async (): Promise<TokenData> => {
  const response = await fetch(`${API_URL}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Language': i18n.locale,
      'X-Device-ID': getDeviceId() || 'unknown',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache'
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    })
  })

  if (!response.ok) throw new Error('Failed to generate token')

  return response.json()
}
