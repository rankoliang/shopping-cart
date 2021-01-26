import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import faker from 'faker';

const Routes = () => {
  const company = {
    name: faker.company.companyName(),
    phrase: faker.company.catchPhrase(),
  };

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
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
