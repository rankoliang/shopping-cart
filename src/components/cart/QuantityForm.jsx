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

const QuantityForm = ({ product, quantity }) => {
  const cart = useContext(CartContext);
  const quantityInput = useRef();
  const [quantitySelected, setQuantitySelected] = useState(false);

  useEffect(() => {
    if (quantitySelected) {
      quantityInput.current.focus();
      quantityInput.current.select();
    }
    setQuantitySelected(false);
  }, [quantitySelected]);

  const handleOnChange = (event) => {
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
  };

  const handleIncrement = (event) => {
    event.preventDefault();
    if (cart.state.get(product) < 99) {
      cart.dispatch({ type: 'increment', item: product });
    }
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    if (cart.state.get(product) === 1 && !removeFromCart(product)) {
      return;
    }
    cart.dispatch({ type: 'decrement', item: product });
  };

  return (
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
          id={`${product.id}-quantity`}
          value={quantity}
          ref={quantityInput}
          onChange={handleOnChange}
        />
      </div>
      <span>
        <QuantityControl
          colorClass="has-text-success"
          onClick={handleIncrement}
        >
          +
        </QuantityControl>
        <QuantityControl colorClass="has-text-danger" onClick={handleDecrement}>
          -
        </QuantityControl>
      </span>
    </form>
  );
};

export default QuantityForm;
