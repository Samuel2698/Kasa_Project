import { useState } from 'react'
import { useChevronDown } from '../../hooks/useChevronDown'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import './DescriptionPanel.css'

export function DescriptionPanel({ description, title }) {
  const { isChevronDown, changeChevron } = useChevronDown()
  const [isVisibleDescription, setisVisibleDescription] = useState(false)

  const showDescription = () => {
    setisVisibleDescription(!isVisibleDescription)
  }

  const showDescriptionStyles = () =>
    isVisibleDescription ? 'description-content' : 'description-content-off'

  return (
    <div className="description-panel">
      <p className="description-header">
        {title}
        <div onClick={changeChevron}>
          {isChevronDown ? (
            <FaChevronDown
              onClick={showDescription}
              className="description-icon"
            />
          ) : (
            <FaChevronUp
              onClick={showDescription}
              className="description-icon"
            />
          )}
        </div>
      </p>
      <p className={showDescriptionStyles()}>{description}</p>
    </div>
  )
}
