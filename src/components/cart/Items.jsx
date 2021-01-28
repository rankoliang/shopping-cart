import Item from './Item';

const Items = ({ cart: { state, dispatch } }) => {
  return [...state].map(([product, quantity]) => {
    return (
      <Item
        product={product}
        quantity={quantity}
        dispatch={dispatch}
        key={product.id}
      />
    );
  });
};

export default Items;
