import { useState, useRef, useEffect } from 'react'

/**
 * A custom hook to handle clicks outside a specified element.
 */
export const useClickOutside = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const elementRef = useRef<HTMLElement | null>(null)

  // Close when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
      setIsCollapsed(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    isCollapsed,
    setIsCollapsed,
    elementRef
  }
}
