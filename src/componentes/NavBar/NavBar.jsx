
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>*ThirdStar</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/categoria/1">
              Indumentaria
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/2">
              Calzado
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/3">
              Moda
            </NavLink>
          </li>


        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar