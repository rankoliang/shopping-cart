import { useEffect, useContext, useState, useRef } from 'react';
import styled from 'styled-components';
import QuantityControl from './QuantityControl';
import CartContext from '../../context/CartContext';
import { removeFromCart } from '../../helpers';

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

const Item = ({ product, quantity }) => {
  const cart = useContext(CartContext);
  const [quantitySelected, setQuantitySelected] = useState(false);
  const quantityInput = useRef();

  useEffect(() => {
    if (quantitySelected) {
      quantityInput.current.focus();
      quantityInput.current.select();
    }
    setQuantitySelected(false);
  }, [quantitySelected]);

  return (
    <div className="box">
      <div className="is-flex is-align-items-center is-justify-content-around w-100 is-flex-wrap-wrap">
        <div className="flex-1">
          <strong className="white-space-nowrap">{product.name}</strong>
        </div>
        <div className="is-flex is-align-items-center">
          <form className="nowrap">
            <div>
              <label htmlFor={`${product.id}-quantity`}>
                <strong className="mr-1">Quantity:</strong>
              </label>
              <Quantity
                type="number"
                className="input has-text-right px-2"
                min="0"
                max="99"
                name={`${product.id}-quantity`}
                value={quantity}
                ref={quantityInput}
                onChange={(event) => {
                  if (event.target.value === '') {
                    setQuantitySelected(true);
                    return;
                  }

                  const quantity = Number(event.target.value);

                  if (quantity === 0 && !removeFromCart(product)) {
                    return;
                  }

                  if (quantity <= 99) {
                    cart.dispatch({
                      type: 'set',
                      item: product,
                      quantity,
                    });
                  }
                }}
              />
            </div>
            <span>
              <QuantityControl
                colorClass="has-text-success"
                onClick={(event) => {
                  event.preventDefault();
                  if (cart.state.get(product) < 99) {
                    cart.dispatch({ type: 'increment', item: product });
                  }
                }}
              >
                +
              </QuantityControl>
              <QuantityControl
                colorClass="has-text-danger"
                onClick={(event) => {
                  event.preventDefault();
                  if (
                    cart.state.get(product) === 1 &&
                    !removeFromCart(product)
                  ) {
                    return;
                  }
                  cart.dispatch({ type: 'decrement', item: product });
                }}
              >
                -
              </QuantityControl>
            </span>
          </form>
          <span className="mx-1">@</span>
          <span className="has-text-weight-bold">${product.price}</span>
          <button
            className="delete ml-1"
            onClick={() =>
              removeFromCart(product) &&
              cart.dispatch({ type: 'remove', item: product })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
