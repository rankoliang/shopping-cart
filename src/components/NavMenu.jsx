import { NavLink } from 'react-router-dom';
import { checkActive } from '../helpers';
import styled from 'styled-components';

const StyledNavMenu = styled.div`
  position: absolute;
  width: 100%;
`;

const NavMenu = ({ active, setActive }) => {
  return (
    <StyledNavMenu className={`navbar-menu ${active ? 'is-active' : ''}`}>
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
        <div className="navbar-item">0 items in cart</div>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
