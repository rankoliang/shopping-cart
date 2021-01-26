import { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import NavMenu from './NavMenu';

const Navbar = ({ company }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/" className="title is-primary">
            {company.name}
          </Link>
        </div>
        <Burger active={active} onClick={toggleActive} />
      </div>
      <NavMenu active={active} setActive={setActive} />
    </nav>
  );
};

export default Navbar;
