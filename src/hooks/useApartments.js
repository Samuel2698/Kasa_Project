import { useState, useEffect } from 'react'
import { getApartments } from '../services/getApartments'

export function useApartments() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    getApartments().then(setApartments)
  }, [])

  return { apartments }
}
