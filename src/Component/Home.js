import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import './Home.css';
import Navbar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div className='slidebody'>
        <Navbar />
        {/* <img className="col-md-12 col-lg-12" src={shop} alt="logo" /> */}
        <div id="bgimage">
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
                    <img className="d-block w-60 slide" src={require('../images/offer10.jpg')} alt="noslide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/bigday.png')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer8.jpg')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer4.jpg')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer6.jpg')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer9.webp')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer7.jpg')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer8.png')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                  <MDBView>
                    <img className="d-block w-60 slide" src={require('../images/offer3.jpg')} alt="No slide" />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
export default Home;
















