import Product from './Product';
import useTitle from '../hooks/useTitle';

const Shop = () => {
  useTitle('Shop');

  return (
    <div className="container mt-4">
      <div className="columns mx-3 is-multiline">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Shop;
