import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="logo.png" alt="Kasa" />
      </Link>
      <div className="navbar-links">
        <Link id="Link1" className="navbar-buttons" to="/">
          Accueil
        </Link>
        <Link className="navbar-buttons" to="/a-propos">
          A propos
        </Link>
      </div>
    </nav>
  )
}
