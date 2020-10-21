import React, { Component } from 'react';
import first from '../../assets/img/1.jpg'
import second from '../../assets/img/2.jpg'
import third from '../../assets/img/3.jpg'
import fourth from '../../assets/img/4.jpg'



import './Home.css';

class Home extends Component {

  state = {
    current: 0,
    listOfProjects: [
      {
        title: "MARMUS", 
        img: first,
        type: "commercial"
      },
      {
        title: "WATERMELON SUGAR", 
        img: second,
        type: "music video"
      },
      {
        title: "QAZAQ REPUBLIC", 
        img: third,
        type: "fashion"
      },
      {
        title: "WANTY APP", 
        img: fourth,
        type: "commercial"
      }
    ]
  }

  next = () => {
    if(this.state.listOfProjects.length - 1 > this.state.current ){
      this.setState({current: this.state.current + 1})
    }
    else{
      this.setState({current: 0})
    }
  }
  
  previous = () => {
    if(this.state.current > 0){
      this.setState({current: this.state.current - 1})
    }
    else{
      this.setState({current: this.state.listOfProjects.length - 1})
    }
  }

  
  render() {
    const {listOfProjects, current} = this.state;
    return (
      <div className="home">
        <div className="home_img_wrapper" style={{backgroundImage: `url(${listOfProjects[current].img})`}}></div>
        <div className="home__project_name">
          {listOfProjects[current].title}
        </div>
        <div className="home__play_button" />
        <div className="home__project_type">{listOfProjects[current].type}</div>
        <div className="home__project_arrows">
          <div className="home__arrow_left" onClick={this.previous} />
          <div className="home__arrow_right" onClick={this.next} />
        </div>
      </div>
    );
  }
}

export default Home;
