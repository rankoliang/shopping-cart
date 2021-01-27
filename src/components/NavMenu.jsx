import { NavLink } from 'react-router-dom';
import { checkActive } from '../helpers';

const NavMenu = ({ active, setActive }) => {
  return (
    <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <NavLink
          to="/home"
          className="navbar-item"
          activeClassName="is-active"
          isActive={checkActive('/')}
          onClick={() => setActive(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className="navbar-item"
          activeClassName="is-active"
          onClick={() => setActive(false)}
        >
          Shop
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">Items in cart: 0</div>
      </div>
    </div>
  );
};

export default NavMenu;
