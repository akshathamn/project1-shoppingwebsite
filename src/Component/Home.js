import React, { Component } from 'react';
import shop from '../images/womenshopping.jpg';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import './Home.css';
import Navbar from './Navbar';

class Home extends Component {
  // render() {
  //   return (
      // <div>
       
      //   <img className="col-md-12 col-lg-12" src={shop} alt="logo" />
      // </div>


      render() {

        return (
    

            <div className='slidebody'>
                <Navbar />
                {/* <img className="col-md-12 col-lg-12" src={shop} alt="logo" /> */}
                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={10}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../images/offer1.jpg')} alt="First slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../images/offer2.jpg')} alt="Second slide" />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img className="d-block w-60 slide" src={require('../images/offer3.jpg')} alt="Third slide"/>
                                </MDBView>
                            </MDBCarouselItem>
                            
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        );
    }
}

export default Home;
















