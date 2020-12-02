import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = (props) => (
  <nav>
    <NavLink to="/" className="logo_wrapper">
        <div className="logo"></div>
    </NavLink>
    <menu className="navigation">
      <li>
        <NavLink to="/about" activeClassName="navigation_active">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts" activeClassName="navigation_active">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/shop" activeClassName="navigation_active">Shop</NavLink>
      </li>
    </menu>
  </nav>
);

export default Nav;
