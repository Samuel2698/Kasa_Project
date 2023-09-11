import { Link } from 'react-router-dom'
import { useApartments } from '../../hooks/useApartments'
import './ApartmentGrid.css'

export function ApartmentGrid() {
  const { apartments } = useApartments()

  return (
    <div className="apartment-grid">
      {apartments.map((apartment) => (
        <Link to="/logement" state={apartment.id}>
          <div className="apartment-item">
            <img loading="lazy" src={apartment.cover} alt={apartment.id} />
            <p className="image-overlay-text">{apartment.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
