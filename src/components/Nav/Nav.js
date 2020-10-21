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
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </menu>
  </nav>
);

export default Nav;
