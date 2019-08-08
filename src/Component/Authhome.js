import React, { Component } from 'react';
import shop from '../images/shop.jpeg';
import './Home.css';
import AuthNavbar from './AuthNavbar';

class Authhome extends Component {
  render() {
    return (
      <div>
          <AuthNavbar/>
        <img className="col-md-12 col-lg-12" src={shop} alt="logo" />
      </div>
    );
  }
}
export default Authhome;