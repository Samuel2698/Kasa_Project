import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getApartmentsId } from '../services/getApartmentsId'

export function useApartmentsId() {
  const location = useLocation()
  const [apartmentId, setApartmentId] = useState(null)

  useEffect(() => {
    getApartmentsId({ location }).then(setApartmentId)
  }, [])

  return { apartmentId }
}
