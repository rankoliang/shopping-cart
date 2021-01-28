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

  return total;
};

const removeFromCart = (product) => {
  return window.confirm(
    `Are you sure you want to remove ${product.name} from your cart?`
  );
};

export { checkActive, numCartItems, cartTotal, removeFromCart };
