import React from "react";
import { Nav, MobileNav, Footer } from "../components";
import { BrowserView, MobileView } from "react-device-detect";

const Layout = (props) => {
  return (
    <div>
      <BrowserView>
        <Nav />
      </BrowserView>
      <MobileView>
        <MobileNav />
      </MobileView>

      {props.children}

      <BrowserView>
        <Footer />
      </BrowserView>
    </div>
  );
};

export default Layout;
