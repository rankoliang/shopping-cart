import Product from './Product';
import useTitle from '../hooks/useTitle';

const Shop = ({ products }) => {
  useTitle('Shop');

  return (
    <div className="container mt-4">
      <div className="box">
        <div className="columns mx-3 is-multiline">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
