import { useState } from 'react'
import './ImageBanner.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Carousel } from '../Carousel'

export function ImageBanner({ banner, id }) {
  const [currentImage, setCurrentImage] = useState(0)

  const getClassName = (index) => (index === currentImage ? 'show' : '')

  const moveToPrevious = () => {
    const newCurrentImage = currentImage - 1
    if (newCurrentImage < 0) {
      setCurrentImage(banner.length - 1)
      return
    }
    setCurrentImage(newCurrentImage)
  }

  const moveToNext = () => {
    setCurrentImage((currentImage + 1) % banner.length)
  }

  return (
    <div className="image-banner">
      <div className="image-container">
        <Carousel banner={banner} id={id} getClassName={getClassName} />
      </div>
      <div className="btn-container">
        <FaChevronLeft className="btn-previous" onClick={moveToPrevious} />
        <div className="slide-counter">
          {currentImage + 1} / {banner.length}
        </div>
        <FaChevronRight className="btn-next" onClick={moveToNext} />
      </div>
    </div>
  )
}
