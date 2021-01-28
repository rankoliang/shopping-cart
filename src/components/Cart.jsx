import { useContext } from 'react';
import { cartTotal } from '../helpers';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const isCartEmpty = state.size === 0;

  return (
    <div className="container">
      <div className="mx-3">
        <h1 className="title is-2 has-text-centered my-2">Your Cart</h1>
        {isCartEmpty && (
          <p className="has-text-centered">Your cart is empty :(</p>
        )}
        {[...state].map(([product, quantity]) => {
          return (
            <div className="box" key={product.id}>
              <div className="is-flex is-align-items-center is-justify-content-around w-100">
                <div style={{ flex: 1 }}>
                  {quantity} x <strong className="ml-2">{product.name}</strong>
                </div>
                <div className="is-flex is-align-items-center">
                  ${product.price}
                  <button
                    className="delete ml-1"
                    onClick={() =>
                      window.confirm(
                        `Are you sure you want to remove ${product.name} from your cart?`
                      ) && dispatch({ type: 'remove', item: product })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {!isCartEmpty && (
          <div className="has-text-right is-size-5">
            <span className="mr-2">Total Price:</span>
            <strong>${cartTotal(state)}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
