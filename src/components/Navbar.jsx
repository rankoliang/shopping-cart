import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import NavMenu from './NavMenu';
import CompanyContext from '../context/CompanyContext';

const Navbar = () => {
  const company = useContext(CompanyContext);

  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar is-light is-fixed-top">
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
