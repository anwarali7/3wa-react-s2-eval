import { NavLink } from "react-router-dom";
import './nav.css';

function NavBar() {

  return (
    <nav>
      <NavLink
        end
        to={'/'}
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Liste des tâches
      </NavLink>
    </nav>
  )
}

export default NavBar;