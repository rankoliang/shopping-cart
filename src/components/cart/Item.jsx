import styled from 'styled-components';
import QuantityControl from './QuantityControl';

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

const Item = ({ product, quantity, dispatch }) => {
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
                defaultValue={quantity}
              />
            </div>
            <span>
              <QuantityControl colorClass="has-text-success">+</QuantityControl>
              <QuantityControl colorClass="has-text-danger">-</QuantityControl>
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
};

export default Item;
