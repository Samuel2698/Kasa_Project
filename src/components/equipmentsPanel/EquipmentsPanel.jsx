import { useState } from 'react'
import { useChevronDown } from '../../hooks/useChevronDown'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import './EquipmentsPanel.css'

export function EquipmentsPanel({ equipments }) {
  const { isChevronDown, changeChevron } = useChevronDown()
  const [isVisibleEquipments, setIsVisibleEquipments] = useState(false)

  const showEquipments = () => {
    setIsVisibleEquipments(!isVisibleEquipments)
  }

  const showEquipmentsStyles = () =>
    isVisibleEquipments ? 'equipments-content' : 'equipments-content-off'

  return (
    <div className="equipments-panel">
      <p className="equipments-header">
        Equipments
        <div onClick={changeChevron}>
          {isChevronDown ? (
            <FaChevronDown
              onClick={showEquipments}
              className="equipments-icon"
            />
          ) : (
            <FaChevronUp onClick={showEquipments} className="equipments-icon" />
          )}
        </div>
      </p>
      <div className={showEquipmentsStyles()}>
        {equipments.map((equipment, index) => (
          <ul key={index} className="equipments-list">
            <li>{equipment}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}
