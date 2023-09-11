import { useApartmentsId } from '../../hooks/useApartmentsId'
import { ImageBanner } from '../../components/imageBanner/ImageBanner'
import { ApartmentHeader } from '../../components/apartmentHeader/ApartmentHeader'
import { DescriptionPanel } from '../../components/descriptionPanel/DescriptionPanel'
import { EquipmentsPanel } from '../../components/equipmentsPanel/EquipmentsPanel'
import './ApartmentPage.css'

export function ApartmentPage() {
  const { apartmentId } = useApartmentsId()

  if (apartmentId === null)
    return (
      <div className="loader-container">
        <div class="lds-dual-ring"></div>
      </div>
    )

  const {
    id,
    title,
    location,
    tags,
    host: { name, picture },
    rating,
    pictures,
    description,
    equipments
  } = apartmentId

  return (
    <div className="apartment-page">
      <ImageBanner banner={pictures} id={id} />
      <ApartmentHeader
        title={title}
        location={location}
        tags={tags}
        id={id}
        name={name}
        picture={picture}
        rating={rating}
      />
      <div className="description-area">
        <DescriptionPanel title="Description" description={description} />
        <EquipmentsPanel equipments={equipments} id={id} />
      </div>
    </div>
  )
}
