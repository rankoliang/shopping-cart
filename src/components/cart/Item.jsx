import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { removeFromCart } from '../../helpers';
import QuantityForm from './QuantityForm';
import PlaceholderImage from '../PlaceholderImage';

const Item = ({ product, quantity }) => {
  const cart = useContext(CartContext);

  return (
    <div className="box">
      <div className="is-flex is-align-items-center is-justify-content-around w-100 is-flex-wrap-wrap">
        <div className="flex-1 is-flex is-align-items-center">
          <PlaceholderImage
            width={25}
            height={25}
            keyword={product.name}
            className="mr-1"
          ></PlaceholderImage>
          <strong className="white-space-nowrap">{product.name}</strong>
        </div>
        <div className="is-flex is-align-items-center">
          <QuantityForm product={product} quantity={quantity} />
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
