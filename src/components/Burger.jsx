import styled from 'styled-components';

const StyledBurger = styled.button`
  background: none;
  border: 0;
`;

const Burger = ({ onClick, active }) => {
  return (
    <StyledBurger
      className={`navbar-burger ${active ? 'is-active' : ''}`}
      aria-label="menu"
      aria-expanded={active}
      onClick={onClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </StyledBurger>
  );
};

export default Burger;
