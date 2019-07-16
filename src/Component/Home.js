import React, { Component } from 'react';
import shop from '../images/shop.jpeg';
import './Home.css';
import browserHistory from '../Utils/browserHistory';


class Home extends Component {
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
        {/* <img src="%image_path(../images/shop.jpeg)%" /> */}
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning ">
       
          <a class="navbar-brand" href="#">Henry</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="#">Shop<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Orders</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Addproduct</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Adminproduct</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-secondary mr-sm-2" type="submit" onClick={this.handlepress} >Signup</button>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit "onClick={this.handlepress1}>Login</button>
              {/* <button class="btn btn-outline-secondary my-2 mr-sm-0" type="submit ">Logout</button> */}
            
            </form>
            
          </div>
        </nav>

        <img className="col-md-12 col-lg-12" src={shop} alt="logo"/>
      </div>
    );
  }
}

export default Home;
