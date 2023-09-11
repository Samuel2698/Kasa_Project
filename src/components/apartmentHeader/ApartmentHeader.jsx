import { FaStar } from 'react-icons/fa'
import './ApartmentHeader.css'

export function ApartmentHeader({
  title,
  location,
  tags,
  id,
  name,
  picture,
  rating
}) {
  const ratingValue = parseInt(rating, 10)

  const bigStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      size={25}
      className={index < ratingValue ? 'big-stars' : 'big-stars-off'}
    />
  ))

  const littleStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      size={20}
      className={index < ratingValue ? 'little-stars' : 'little-stars-off'}
    />
  ))

  return (
    <div className="apartment-page-header">
      <div className="apartment-page-title">
        <h1>{title}</h1>
        <h2>{location}</h2>

        <div className="apartment-page-tags">
          {tags.map((tag, index) => (
            <span key={index + id} className="apartment-page-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="apartment-page-owner">
        <div className="apartment-page-owner-name">
          {littleStars}
          <p>{name}</p>
          <img src={picture} alt={`Le hôte du logment: ${id}`} />
        </div>
        <div className="big-stars-container">{bigStars}</div>
      </div>
    </div>
  )
}
