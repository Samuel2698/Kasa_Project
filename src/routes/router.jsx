import Home from '../pages/home/Home.jsx'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Main } from '../components/main/Main.jsx'
import { Navbar } from '../components/navbar/Navbar.jsx'
import { Footer } from '../layout/footer/Footer.jsx'
import { ApartmentPage } from '../pages/apartmentPage/ApartmentPage.jsx'
import { About } from '../pages/about/About.jsx'
import { ErrorPage } from '../pages/errorPage/errorPage.jsx'

const NavbarFooterLayout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export const router = createBrowserRouter([
  {
    element: <NavbarFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/logement',
        element: <ApartmentPage />
      },
      {
        path: '/a-propos',
        element: <About />
      }
    ]
  }
])
