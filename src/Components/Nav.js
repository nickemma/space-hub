import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => (
  <nav className="navbar">
    <div>
      <img id="logo" src={logo} alt="Logo" />
      <h1>Space hub</h1>
    </div>
    <div className="links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Mission">Mission</NavLink>
      <NavLink to="/MyProfile">MyProfile</NavLink>
    </div>
  </nav>
);

export default NavBar;
