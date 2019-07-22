import React, { Component } from 'react';
import '../styles/App.css';

class Footer extends Component { //extend instead of extends
  render() {
    return (
      <div>
        <div className='footer-anchor'></div>
        <div className='app-footer'></div>
      </div>
    );
  }
}

export default Footer;