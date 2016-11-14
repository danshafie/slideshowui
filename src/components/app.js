import React, { Component } from 'react';
import Carousel from './carousel';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className='app_container'>
        <Header />
        <Carousel />
      </div>
    );
  }
}
