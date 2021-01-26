import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import faker from 'faker';
import uniqid from 'uniqid';

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
    <Router>
      <Navbar company={company} />
      <Switch>
        <Route exact path="/">
          <Home company={company} />
        </Route>
        <Route exact path="/home">
          <Home company={company} />
        </Route>
        <Route exact path="/shop">
          <Shop products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
