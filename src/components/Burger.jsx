const Burger = ({ onClick, active }) => {
  return (
    <button
      className={`navbar-burger ${active ? 'is-active' : ''}`}
      aria-label="menu"
      aria-expanded={active}
      style={{
        background: 'none',
        border: 0,
      }}
      onClick={onClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  );
};

export default Burger;
