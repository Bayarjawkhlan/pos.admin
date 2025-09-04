import { filter, identity, isArray, isEmpty, isPlainObject, isString, map, mapValues, pickBy } from 'lodash'

const storage = {
  getItem: (key: string) => {
    if (typeof localStorage === 'undefined') return
    const val = localStorage.getItem(key)
    if (val) return JSON.parse(val)
  },

  setItem: (key: string, value: any) => {
    if (typeof localStorage === 'undefined') return
    if (!value) localStorage.removeItem(key)
    else localStorage.setItem(key, JSON.stringify(sanitize(value)))
  },
  removeItem: (key: string) => {
    if (typeof localStorage === 'undefined') return
    localStorage.removeItem(key)
  }
}

function sanitize(object: any): any {
  if (isString(object)) return _sanitizeString(object)
  if (isArray(object)) return _sanitizeArray(object)
  if (isPlainObject(object)) return _sanitizeObject(object)

  return object
}

function _sanitizeString(string: string) {
  return isEmpty(string) ? null : string
}

function _sanitizeArray(array: any[]) {
  return filter(map(array, sanitize), identity)
}

function _sanitizeObject(object: any) {
  return pickBy(mapValues(object, sanitize), reject)
}

function reject(value: any) {
  return !(value === undefined || value === null || value === false)
}

export default storage
