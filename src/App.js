import { useEffect } from 'react';
import Routes from './Routes';
import faker from 'faker';
import uniqid from 'uniqid';
import CompanyContext from './context/CompanyContext';
import ProductsContext from './context/ProductsContext';

const App = () => {
  const company = {
    name: faker.company.companyName(),
    phrase: faker.company.catchPhrase(),
  };

  const products = new Array(21).fill().map(() => {
    return {
      id: uniqid(),
      name: faker.commerce.productName(),
      description: faker.lorem.words(5),
      price: faker.commerce.price(1, 100, 2, '$'),
    };
  });

  useEffect(() => {
    document.title = company.name;
  });

  return (
    <CompanyContext.Provider value={company}>
      <ProductsContext.Provider value={products}>
        <Routes />
      </ProductsContext.Provider>
    </CompanyContext.Provider>
  );
};

export default App;
