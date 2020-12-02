import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './containers/layout';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Shop from './containers/Shop/Shop';
import ShopItem from './containers/Shop/ShopItem/ShopItem';


const AnimatedSwitch = (({ location }) => (
  <TransitionGroup>
    <CSSTransition key={location} classNames="slide" timeout={1000}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop-item" component={ShopItem} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const routes = (
  <Router>
    <Layout>
      <AnimatedSwitch />
    </Layout>
  </Router>
);

export default routes;
