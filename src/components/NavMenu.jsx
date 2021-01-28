import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { checkActive, numCartItems } from '../helpers';
import CartContext from '../context/CartContext';

const NavMenu = ({ active, setActive }) => {
  const cart = useContext(CartContext);

  return (
    <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <NavLink
          to="/home"
          className="navbar-item"
          activeClassName="is-active"
          isActive={checkActive('/')}
          onClick={() => setActive(false)}
          replace
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className="navbar-item"
          activeClassName="is-active"
          onClick={() => setActive(false)}
          replace
        >
          Shop
        </NavLink>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/cart"
          className="navbar-item"
          activeClassName="is-active"
          onClick={() => setActive(false)}
          replace
        >
          Items in cart: {numCartItems(cart.state)}
        </NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
