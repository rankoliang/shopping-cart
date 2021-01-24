import { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/" className="title">
            Shopping Cart
          </Link>
        </div>
        <Burger active={active} onClick={toggleActive} />
      </div>
      <NavMenu active={active} />
    </nav>
  );
};

export default Navbar;
