import Cookies from 'js-cookie'

// Cookie names
const ACCESS_TOKEN_COOKIE = 'auth_access_token'
const REFRESH_TOKEN_COOKIE = 'auth_refresh_token'

// Cookie options
const COOKIE_OPTIONS = {
  path: '/',
  sameSite: 'strict' as const,
  secure: window.location.protocol === 'https:'
}

/**
 * Save access token to cookie with expiration
 */
export const saveAccessToken = (token: string, expiresAt: number): void => {
  const expiryDate = new Date(expiresAt)
  Cookies.set(ACCESS_TOKEN_COOKIE, token, { ...COOKIE_OPTIONS, expires: expiryDate })
}

/**
 * Save refresh token to cookie with longer expiration (30 days)
 */
export const saveRefreshToken = (token: string): void => {
  // Refresh token typically has a longer lifespan
  const expiryDate = new Date(Date.now() + 364 * 24 * 60 * 60 * 1000) // 364 days
  Cookies.set(REFRESH_TOKEN_COOKIE, token, { ...COOKIE_OPTIONS, expires: expiryDate })
}

/**
 * Get access token from cookie
 */
export const getAccessToken = (): string | null => Cookies.get(ACCESS_TOKEN_COOKIE) || null

/**
 * Decode JWT token without verification and extract expiration time
 */
export const decodeJwtExpiry = (token: string): number | null => {
  try {
    // JWT token consists of three parts: header.payload.signature
    const parts = token.split('.')
    if (parts.length !== 3) return null

    // Decode the payload (second part)
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))

    // Extract expiration time (exp) and convert to milliseconds
    return payload.exp ? payload.exp * 1000 : null
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error decoding JWT token:', error)
    return null
  }
}

/**
 * Get token expiry timestamp from JWT token
 * Extracts expiration directly from the JWT token without verification
 */
export const getTokenExpiry = (): number | null => {
  const token = getAccessToken()
  if (!token) return null

  // Extract expiration from JWT token
  return decodeJwtExpiry(token)
}

/**
 * Get refresh token from cookie
 */
export const getRefreshToken = (): string | null => Cookies.get(REFRESH_TOKEN_COOKIE) || null

/**
 * Clear all auth cookies
 */
export const clearAuthCookies = (): void => {
  Cookies.remove(ACCESS_TOKEN_COOKIE, { path: '/' })
  Cookies.remove(REFRESH_TOKEN_COOKIE, { path: '/' })
}

/**
 * Save both tokens at once
 */
export const saveAuthTokens = (accessToken: string, refreshToken: string, expiresAt: number): void => {
  saveAccessToken(accessToken, expiresAt)
  saveRefreshToken(refreshToken)
}

/**
 * Check if access token is valid (exists)
 * Since we're using cookie expiry directly, we only need to check if the token exists
 * If the cookie is gone, it means it's expired
 */
export const isAccessTokenValid = (): boolean => getAccessToken() !== null
