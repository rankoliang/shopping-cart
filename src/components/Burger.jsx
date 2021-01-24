const Burger = ({ onClick, active }) => {
  return (
    <a
      role="button"
      className={`navbar-burger ${active ? 'is-active' : ''}`}
      aria-label="menu"
      aria-expanded={active}
      onClick={onClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
};

export default Burger;
