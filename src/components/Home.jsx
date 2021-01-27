import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Home = ({ company, products }) => {
  useEffect(() => {
    document.title = company.name;
  });

  return (
    <main>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">{company.name}</h1>
            <h2 className="subtitle">{company.phrase}</h2>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="is-flex is-align-items-center mb-2">
          <h1 className="title mb-0 mr-2 is-2">Featured Items</h1>
          <Link to="shop" className="button is-info">
            Shop
          </Link>
        </div>
        <div className="box">
          <div className="columns mx-3 is-multiline is-centered">
            {products.slice(0, 3).map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
