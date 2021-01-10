import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about_img_wrapper"></div>
        <div className="about_content">
          <h1 className="about_content_header">Hello</h1>
          <p className="about_content_text">
            Since early childhood I was passionate about everything related with cameras. Eventualy, in 2015 I had started working on my dream. 
          </p>
          <p className="about_content_text">
            С раннего детства меня интересовало все, что связано с камерой. В 2015 году я решился идти к своей мечте. Результаты показываю сквозь свои работы.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
