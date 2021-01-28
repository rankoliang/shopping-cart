const checkActive = (...alternativePaths) => {
  return (match, location) => {
    if (match) return true;

    return alternativePaths.includes(location.pathname);
  };
};

const numCartItems = (cart) => {
  return [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
};

export { checkActive, numCartItems };
