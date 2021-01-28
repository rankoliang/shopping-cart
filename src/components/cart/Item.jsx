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
          <figure className="image is-24x24 mr-1">
            <PlaceholderImage
              width={24}
              height={24}
              keyword={product.name}
            ></PlaceholderImage>
          </figure>
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
