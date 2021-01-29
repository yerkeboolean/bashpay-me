import React, { Component } from "react";
import classes from "./Contacts.module.css";

class Contacts extends Component {
  render() {
    return (
      <div className={classes.Contacts}>
        <div className={classes.header}>Contacts</div>
        <div className={classes.phone}>
          Telegram/Whats app:
          <span>
            <a href="tel:+77783088200">+7 778 308 82 00</a>
          </span>
        </div>
        <div className={classes.email}>
          Mail:
          <span>
            <a href="mailto:98ernur@gmail.com"> 98ernur@gmail.com</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Contacts;
