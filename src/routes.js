import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './containers/layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Shop from './containers/Shop/Shop';

const routes = (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Layout>
  </Router>
);

export default routes;
