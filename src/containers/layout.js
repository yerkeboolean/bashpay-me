import React from 'react';
import { Nav, Footer } from '../components';


const Layout = (props) => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
