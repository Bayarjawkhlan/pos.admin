let cachedDeviceId: string | null = null

const generateUUID = () => {
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

export const getDeviceId = () => {
  if (cachedDeviceId) return cachedDeviceId

  try {
    const deviceId = localStorage.getItem('deviceId')
    if (deviceId) {
      cachedDeviceId = deviceId
      return deviceId
    }
    const newDeviceId = generateUUID()
    try {
      localStorage.setItem('deviceId', newDeviceId)
    } catch (e: any) {
      // Handle storage quota exceeded
      if (e.name === 'QuotaExceededError') {
        localStorage.clear()
        localStorage.setItem('deviceId', newDeviceId)
      }
    }
    cachedDeviceId = newDeviceId
    return newDeviceId
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error accessing device ID:', error)
    return null
  }
}
