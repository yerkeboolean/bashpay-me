import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useLocation } from "react-router-dom";

import "./MobileNav.css";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "28px",
    height: "24px",
    top: "20px",
    right: "30px",
  },
  bmBurgerBars: {
    background: "#ffffff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    right: "16px",
    top: "16px",
    height: "36px",
    width: "36px",
  },
  bmCross: {
    width: "4px",
    height: "30px",
    background: "#ffffff",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100vh",
  },
  bmMenu: {
    background: "#000000",
    padding: "2.5em 1.5em 0",
    fontSize: "3em",
    overflowY: "hidden",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    paddingTop: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const MobileNav = (props) => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="mobileNav">
      <NavLink to="/" className="logo_wrapper">
        <div className="logo"></div>
      </NavLink>
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        styles={styles}
        right={true}
      >
        <NavLink
          to="/about"
          className="menuItem"
          activeClassName="mobNavigation_active"
        >
          About
        </NavLink>
        <NavLink
          to="/contacts"
          className="menuItem"
          activeClassName="mobNavigation_active"
        >
          Contacts
        </NavLink>
        <NavLink
          to="/shop"
          className="menuItem"
          activeClassName="mobNavigation_active"
        >
          Shop
        </NavLink>
        <div className="mobSocial_buttons">
          <a
            href="https://t.me/ybashpay"
            target="_blank"
            rel="noopener noreferrer"
            className="mobSocial_buttons_link"
          >
            Telegram
          </a>
          <a
            href="http://instagram.com/bashpay"
            target="_blank"
            rel="noopener noreferrer"
            className="mobSocial_buttons_link"
          >
            Instagram
          </a>
        </div>
        <div className="mobCopyright">Almaty, Kazakhstan 2020</div>
      </Menu>
    </nav>
  );
};

export default MobileNav;
