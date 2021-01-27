import Product from './Product';
import useTitle from '../hooks/useTitle';

const Shop = ({ products }) => {
  useTitle('Shop');

  return (
    <div className="container mt-4">
      <div className="columns mx-3 is-multiline">
        {products.map((product) => (
          <div className="column is-one-third" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
