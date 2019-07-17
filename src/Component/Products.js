import React, { Component } from 'react';
import './Home.css';

class Products extends Component {
  render() {
    return (
      <div class="container">
       <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning ">
         <a class="nav-item ">
            <img class="img1" src={require('../images/brand1.png')} alt="Card image cap"></img>
          </a>
         <a class="navbar-brand" href="#">Henry</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active ">
                <a class="nav-link" href="#">Shop<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item ">
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
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit " onClick={this.handlepress1}>Login</button>
            </form>
            </div>
        </nav>

        <div class="row text-center ">
          <div class="card-deck">
            <div class="card  ">
              <h5 class="card-header">Doll</h5>
              <img class="card-img-top" src={require('../images/ring.jpg')} alt="Card image cap"></img>
              <div class="card-body ">
                <h5 class="card-title">$250</h5>
                <p class="card-text">This is a longer card It's a broader card with text below as a natural lead-in to extra content. This content is a little longer. This content is a little bit longer.</p>
                <button>Details</button>
                <button>Add to cart</button>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">Christmas Bells</h5>
              <img class="card-img-top" src={require('../images/image2.jpg')} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">$25</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button>Details</button>
                <button>Add to cart</button>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div class="card">
              <h5 class="card-header">Shirt</h5>
              <img class="card-img-top" src={require('../images/shirt.jpeg')} alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">$100</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <button>Details</button>
                <button>Add to cart</button>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card-deck">
              <div class="card">
                <h5 class="card-header">Shoe</h5>
                <img class="card-img-top" src={require('../images/shoe.jpg')} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">$300</h5>
                  <p class="card-text">This is a longer card It's a broader card with text below as a natural lead-in to extra content. This content is a little longer. This content is a little bit longer.</p>
                  <button>Details</button>
                  <button>Add to cart</button>
                  {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
              <div class="card">
                <h5 class="card-header">Frame</h5>
                <img class="card-img-top" src={require('../images/wall.jpg')} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">$100</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <button>Details</button>
                  <button>Add to cart</button>
                  {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
              <div class="card">
                <h5 class="card-header">Bed Sheet</h5>
                <img class="card-img-top" src={require('../images/bed.jpeg')} alt="Card image cap"></img>
                <div class="card-body">
                  <h5 class="card-title">$300</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  <button>Details</button>
                  <button>Add to cart</button>
                  {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;