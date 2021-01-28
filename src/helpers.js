const checkActive = (...alternativePaths) => {
  return (match, location) => {
    if (match) return true;

    return alternativePaths.includes(location.pathname);
  };
};

const numCartItems = (cart) => {
  return [...cart.values()].reduce((sum, quantity) => sum + quantity, 0);
};

const cartTotal = (cart) => {
  const total = [...cart].reduce((total, [{ price }, quantity]) => {
    return total + Number(price) * quantity;
  }, 0);

  return total.toFixed(2);
};

export { checkActive, numCartItems, cartTotal };
