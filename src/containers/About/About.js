import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about_img_wrapper"></div>
        <div className="about_content">
          <h1 className="about_content_header">About</h1>
          <p className="about_content_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan
            neque eu accumsan. Praesent sodales urna ultricies dolor placerat
            ultricies.
          </p>
          <p className="about_content_text">
            Aenean molestie, augue id mollis blandit, dui ante
            tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis,
            condimentum nunc id, placerat lectus. In elit tortor, aliquet quis
            felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus,
            viverra laoreet enim. Cras blandit tincidunt laoreet.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
