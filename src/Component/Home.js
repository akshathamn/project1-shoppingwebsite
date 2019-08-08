import React, { Component } from 'react';
import shop from '../images/shop.jpeg';
import './Home.css';
import Navbar from './Navbar';

class Home extends Component {


  render() {
   
    return (
  
      <div>
         <Navbar/>
        <img className="col-md-12 col-lg-12" src={shop} alt="logo" />
      </div>
//       <div class="row">
// <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
// <div id="myCarousel" className="carousel slide" data-ride="carousel">
// <ol class="carousel-indicators">
// <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
// <li data-target="#myCarousel" data-slide-to="1"></li>
// <li data-target="#myCarousel" data-slide-to="2"></li>
// </ol>
// <div className="carousel-inner">
// <div className="item active">
// <img className="slide1" src={require('../images/image5.jpeg')} alt="no image" />
// </div>
// <div className="item">
// <img className="slide1" src={require('../images/image6.jpg')} alt="no image" />
// </div>
// <div className="item">
// <img className="slide1" src={require('../images/image7.jpg')} alt="no image" />
// </div>
// </div>
// <a id="slide" class="left carousel-control" href="#myCarousel" data-slide="prev">
// <span class="glyphicon glyphicon-chevron-left"></span>
// <span class="sr-only">Previous</span>
// </a>
// <a id="slide" class="right carousel-control" href="#myCarousel" data-slide="next">
// <span class="glyphicon glyphicon-chevron-right"></span>
// <span class="sr-only">Next</span>
// </a>
// </div>
// </div>
// </div>



    );
  }
}
export default Home;














