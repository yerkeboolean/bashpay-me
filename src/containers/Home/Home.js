import React, { Component, Fragment } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import first from '../../assets/img/1.jpg';
import second from '../../assets/img/2.jpg';
import third from '../../assets/img/3.jpg';
import fourth from '../../assets/img/4.jpg';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      show: false,
      current: 0,
      listOfProjects: [
        {
          id: 1,
          title: 'MARMUS',
          img: first,
          type: 'commercial',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
          video: '473477931',
        },
        {
          id: 2,
          title: 'WATERMELON SUGAR',
          img: second,
          type: 'music video',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
          video: '473503964',
        },
        {
          id: 3,
          title: 'QAZAQ REPUBLIC',
          img: third,
          type: 'fashion',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
          video: '473485463',
        },
        {
          id: 4,
          title: 'WANTY APP',
          img: fourth,
          type: 'commercial',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
          video: '473474519',
        },
      ],
    };

  }


  componentDidMount() {
    const imageList = [first, second, third, fourth]
    imageList.forEach((image) => {
        new Image().src = image
    });
  }

  next = () => {
    if (this.state.listOfProjects.length - 1 > this.state.current) {
      this.setState({ current: this.state.current + 1 });
    } else {
      this.setState({ current: 0 });
    }
  };

  previous = () => {
    if (this.state.current > 0) {
      this.setState({ current: this.state.current - 1 });
    } else {
      this.setState({ current: this.state.listOfProjects.length - 1 });
    }
  };

  play = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, current, listOfProjects } = this.state;
    return (
      <div className={`home ${show ? 'home_active' : ''}`}>
        {show ? (
          <Fragment>
            <div className="home_player">
              <Vimeo
                video={listOfProjects[current].video}
                className="home_video"yy
              />
            </div>
            <div className="home_player_close" onClick={this.close} />
            <div className="home_video_description">
              <div className="home_video_description_name">
                {listOfProjects[current].title}
              </div>
              <div className="home_video_description_type">
                {listOfProjects[current].type}
              </div>
              <div className="home_video_description_text">
                {listOfProjects[current].text}
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div
              className="home_img_wrapper"
              style={{ backgroundImage: `url(${listOfProjects[current].img})` }}
            ></div>
            <div className="home__project_name">
              {listOfProjects[current].title}
            </div>
            <div className="home__play_button" onClick={this.play} />
            <div className="home__project_type">
              {listOfProjects[current].type}
            </div>
            <div className="home__project_arrows">
              <div className="home__arrow_left" onClick={this.previous} />
              <div className="home__arrow_right" onClick={this.next} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
