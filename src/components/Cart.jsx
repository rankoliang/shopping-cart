import { useContext } from 'react';
import { cartTotal } from '../helpers';
import useTitle from '../hooks/useTitle';
import CartContext from '../context/CartContext';
import Items from './cart/Items';
import styled from 'styled-components';

const Totals = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 15em;
`;

const Cart = () => {
  const cart = useContext(CartContext);
  const isCartEmpty = cart.state.size === 0;

  useTitle('Cart');

  return (
    <div className="container">
      <div className="mx-3">
        {isCartEmpty ? (
          <>
            <h1 className="title is-2 has-text-centered my-3 mx-3">Your Cart</h1>
            <p className="has-text-centered">Your cart is empty :(</p>
          </>
        ) : (
          <>
            <div className="is-flex is-align-items-flex-start is-flex-wrap-wrap">
              <div className="is-flex-grow-5">
                <h1 className="title is-2 has-text-centered my-3">Your Cart</h1>
                <Items cart={cart} />
              </div>
              <div className="is-flex-grow-1">
                <h1 className="title is-2 has-text-centered my-3">Totals</h1>
                <Totals className="box mx-3">
                  <div className="is-size-5">
                    <span className="mr-2">Subtotal:</span>
                    <strong>${cartTotal(cart.state).toFixed(2)}</strong>
                  </div>
                  <div className="is-size-5">
                    <span className="mr-2">Tax (10%):</span>
                    <strong>${(cartTotal(cart.state) * 0.1).toFixed(2)}</strong>
                  </div>
                  <div className="is-size-5">
                    <span className="mr-2">Total:</span>
                    <strong>${(cartTotal(cart.state) * 1.1).toFixed(2)}</strong>
                  </div>
                  <button className="button is-info is-align-self-stretch mt-2">
                    Place order
                  </button>
                </Totals>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
