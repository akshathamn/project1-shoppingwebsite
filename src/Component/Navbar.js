import React, { Component } from 'react';
// import shop from '../images/shop.jpeg';
import './Home.css';
import browserHistory from '../Utils/browserHistory';


class Navbar extends Component {
  handlepress = () => {
    debugger
    browserHistory.push('/Signup');
  }
  handlepress1 = () => {
    debugger
    browserHistory.push('/Login');
  }
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning ">
          <a class="nav-item ">
            <img class="img1" src={require('../images/ssite.png')} alt="Card image cap"></img>
          </a>
          <a class="navbar-brand" href="#"><h3>Shopper's Site</h3></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
           </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-danger mr-sm-2" type="submit" onClick={this.handlepress} >Signup</button>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit " onClick={this.handlepress1}>Login</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
