import { useEffect } from 'react';
import Product from './Product';

const Shop = ({ company }) => {
  useEffect(() => {
    document.title = `Shop - ${company.name}`;
  });

  return (
    <div className="container">
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
