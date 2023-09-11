export async function getApartmentsId({ location }) {
  try {
    const res = await fetch('db.json')
    const apartments = await res.json()
    const apartmentsId = apartments.find(
      (apartment) => apartment.id === location.state
    )
    return apartmentsId
  } catch (data) {
    return console.error(data)
  }
}
