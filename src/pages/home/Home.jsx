import { Banner } from '../../layout/banner/Banner'
import { ApartmentGrid } from '../../components/apartmentGrid/ApartmentGrid'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Banner />
      <ApartmentGrid />
    </div>
  )
}

export default Home
