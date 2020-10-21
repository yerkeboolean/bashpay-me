import React from 'react';
import './Footer.css';

const Footer = (props) => (
  <footer>
    <div className="social_buttons">
      <a
        href="https://t.me/ybashpay"
        target="_blank"
        rel="noopener noreferrer"
        className="social_buttons_link"
      >
        Telegram
      </a>
      <a
        href="http://instagram.com/bashpay"
        target="_blank"
        rel="noopener noreferrer"
        className="social_buttons_link"
      >
        Instagram
      </a>
    </div>
    <div className="copyright">Almaty, Kazakhstan 2020</div>
  </footer>
);

export default Footer;
