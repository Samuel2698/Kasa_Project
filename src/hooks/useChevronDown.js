import { useState } from 'react'

export function useChevronDown() {
  const [isChevronDown, setIsChevronDown] = useState(false)

  const changeChevron = () => {
    setIsChevronDown(!isChevronDown)
  }

  return { isChevronDown, changeChevron }
}
