import { useContext } from 'react';
import { cartTotal } from '../helpers';
import useTitle from '../hooks/useTitle';
import CartContext from '../context/CartContext';
import styled from 'styled-components';

const Quantity = styled.input`
  -moz-appearance: textfield;
  height: 1.5em;
  width: 2.5em;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledQuantityControl = styled.button`
  height: 1em;
  width: 1em;
`;

const QuantityControl = ({ children, colorClass }) => {
  return (
    <StyledQuantityControl
      className={`button is-large p-0 ml-1 is-outlined ${colorClass}`}
    >
      {children}
    </StyledQuantityControl>
  );
};

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const isCartEmpty = state.size === 0;
  
  useTitle('Cart')

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
              <div className="is-flex is-align-items-center is-justify-content-around w-100 is-flex-wrap-wrap">
                <div style={{ flex: 1 }}>
                  <strong style={{ whiteSpace: 'nowrap' }}>
                    {product.name}
                  </strong>
                </div>
                <div className="is-flex is-align-items-center">
                  <form className="nowrap">
                    <div className="nowrap">
                      <label htmlFor={`${product.id}-quantity`}>
                        <strong className="mr-1">Quantity:</strong>
                      </label>
                      <Quantity
                        type="number"
                        className="input has-text-right px-2"
                        min="0"
                        max="99"
                        name={`${product.id}-quantity`}
                        defaultValue={quantity}
                      />
                    </div>
                    <span className="nowrap">
                      <QuantityControl colorClass="has-text-success">
                        +
                      </QuantityControl>
                      <QuantityControl colorClass="has-text-danger">
                        -
                      </QuantityControl>
                    </span>
                  </form>
                  <span className="mx-1">@</span>
                  <span className="has-text-weight-bold">${product.price}</span>
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
