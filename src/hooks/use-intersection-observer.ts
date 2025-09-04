import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (callback: () => void, options: IntersectionObserverInit = {}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const callbackRef = useRef(callback)

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callbackRef.current()
          }
        })
      },
      {
        threshold: 0.1,
        ...options
      }
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return setRef
}
