import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Shop.css';
import first_preset from '../../assets/img/preset_1.jpg';

class Shop extends Component {
  state = {
    shopList: [
      {
        id: 1,
        title: 'First Preset',
        img: first_preset,
        //imgExamples: [first_example_1, first_example_2, first_example_3],
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
      },
      {
        id: 2,
        title: 'Second Preset',
        img: first_preset,
        //imgExamples: [second_example_1, second_example_2, second_example_3],
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
      },
      {
        id: 3,
        title: 'Second Preset',
        img: first_preset,
        //imgExamples: [second_example_1, second_example_2, second_example_3],
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar urna vel magna facilisis pharetra. Sed vestibulum accumsan neque eu accumsan. Praesent sodales urna ultricies dolor placerat ultricies. Aenean molestie, augue id mollis blandit, dui ante tristique velit, vitae pharetra nibh nunc a lorem. Sed eu dui mattis, condimentum nunc id, placerat lectus. In elit tortor, aliquet quis felis tincidunt, pharetra suscipit nibh. Duis sit amet lacinia risus, viverra laoreet enim. Cras blandit tincidunt laoreet.',
      },
    ],
  };

  componentDidMount() {
    const imageList = [first_preset];
    imageList.forEach((image) => {
      new Image().src = image;
    });
  }

  render() {

    return (
      <div className="shop">
        <div className="shop_list">
          {this.state.shopList.map((item) => (
            <div className="shop_list_item" key={item.id}>
              <div>
                <Link
                  to={{
                    pathname: '/shop-item',
                    state: { text: item.text, img: item.img},
                  }}
                >
                  <img
                    src={item.img}
                    className="shop_list_item_image"
                    alt={item.title}
                  />
                </Link>
              </div>
              <Link
                to={{
                  pathname: '/shop-item',
                  state: { text: item.text, img: item.img },
                }}
                className="shop_list_item_button"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
