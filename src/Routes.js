import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import faker from 'faker';
import uniqid from 'uniqid';
import CompanyContext from './context/CompanyContext';
import ProductsContext from './context/ProductsContext';

const Routes = () => {
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
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </Switch>
        </Router>
      </ProductsContext.Provider>
    </CompanyContext.Provider>
  );
};

export default Routes;
