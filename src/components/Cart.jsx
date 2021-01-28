import { useContext } from 'react';
import { cartTotal } from '../helpers';
import useTitle from '../hooks/useTitle';
import CartContext from '../context/CartContext';
import Items from './cart/Items';

const Cart = () => {
  const cart = useContext(CartContext);
  const isCartEmpty = cart.state.size === 0;

  useTitle('Cart');

  return (
    <div className="container">
      <div className="mx-3">
        <h1 className="title is-2 has-text-centered my-2">Your Cart</h1>
        {isCartEmpty ? (
          <>
            <p className="has-text-centered">Your cart is empty :(</p>
          </>
        ) : (
          <>
            <Items cart={cart} />
            <div className="has-text-right is-size-5">
              <span className="mr-2">Total Price:</span>
              <strong>${cartTotal(cart.state)}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
