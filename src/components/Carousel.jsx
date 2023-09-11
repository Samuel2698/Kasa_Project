export function Carousel({ banner, id, getClassName }) {
  return (
    <div>
      {banner.map((pic, index) => (
        <img
          className={getClassName(index)}
          src={pic}
          alt={`Pièce principale du logement: ${index + id}`}
          key={index + id}
        />
      ))}
    </div>
  )
}
