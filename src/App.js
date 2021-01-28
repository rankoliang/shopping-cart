import { useEffect, useReducer } from 'react';
import Routes from './Routes';
import faker from 'faker';
import uniqid from 'uniqid';
import cartReducer from './reducers/cart';
import CompanyContext from './context/CompanyContext';
import ProductsContext from './context/ProductsContext';
import CartContext from './context/CartContext';

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

const App = () => {
  const cart = (function useCart() {
    const [state, dispatch] = useReducer(
      cartReducer.reducer,
      cartReducer.initialState
    );

    return { state, dispatch };
  })();

  useEffect(() => {
    document.title = company.name;
  });

  return (
    <CompanyContext.Provider value={company}>
      <ProductsContext.Provider value={products}>
        <CartContext.Provider value={cart}>
          <Routes />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </CompanyContext.Provider>
  );
};

export default App;
