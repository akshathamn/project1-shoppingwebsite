import React, { Component } from 'react';
import shop from '../images/womenshopping.jpg';
import './Home.css';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img className="col-md-12 col-lg-12" src={shop} alt="logo" />
      </div>
    );
  }
}
export default Home;














