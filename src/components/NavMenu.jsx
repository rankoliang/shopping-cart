import { NavLink } from 'react-router-dom';
import { checkActive } from '../helpers';

const NavMenu = ({ active }) => {
  return (
    <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <NavLink
          to="/home"
          className="navbar-item"
          activeClassName="is-active"
          isActive={checkActive('/')}
        >
          Home
        </NavLink>
        <NavLink to="/shop" className="navbar-item" activeClassName="is-active">
          Shop
        </NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
