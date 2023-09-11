export async function getApartments() {
  try {
    const res = await fetch('db.json')
    const data = await res.json()
    return data
  } catch (err) {
    return console.error(err)
  }
}
