import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

const Routes = () => {
  return (
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
  );
};

export default Routes;
