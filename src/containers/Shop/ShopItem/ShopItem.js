import React, { Component } from 'react';

import first_preset from '../../../assets/img/preset_1.jpg';
import second_preset from '../../../assets/img/preset_2.jpg';


import './ShopItem.css';

class ShopItem extends Component {
  
  render() {
    console.log(first_preset, second_preset);
    const { text, img } = this.props.location.state;
    return (
      <div className="shopItem">
        <div className="shopItem_inner">
          <div className="shopItem_info"> 
            <div className="shopItem_main_img">
              <img
                src={img}
                alt={text}
              />
            </div>
            <div className="shopItem_text">
              {text}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopItem;
