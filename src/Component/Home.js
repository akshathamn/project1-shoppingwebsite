import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../Action/Productasction';
import Productss from '../Component/Productss';





// import React, { Component } from 'react';
// import shop from '../images/shop.jpeg';
// import './Home.css';
// import browserHistory from '../Utils/browserHistory';
// import { SocialIcon } from 'react-social-icons';

// class Home extends Component {
//   // handlepress = () => {
  //   debugger
  //   browserHistory.push('/Signup');
  //   }
  //   handlepress1 = () => {
  //     debugger
  //     browserHistory.push('/Login');
  //     }
  // render() {
  //   return (
  //     <div  >
{/*        
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-warning ">
        <a class="nav-item ">
        <img class="img1"   src={require('../images/brand1.png')} alt="Card image cap"></img>
              </a>
          <a class="navbar-brand" href="#">Henry</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <a class="nav-link" href="./Products">Shop<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./Addproduct">AddProducts</a>
              </li>
              
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn btn-outline-secondary mr-sm-2" type="submit" onClick={this.handlepress} >Signup</button>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit "onClick={this.handlepress1}>Login</button>
            
            </form>
            
          </div>
        </nav> */}

{/* <img className="col-md-12 col-lg-12" src={shop} alt="logo"/> */}



  {/* <div className="footer bgcol">
 <div className="row footer">
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 color">
 <p><strong class="contact-title">Contact Us</strong><p>Need help? Call us at <a href="tel:18004617960" class="tel link" itemprop="telephone">1-800-461–7960</a>, send us an <a href="mailto:info@henrys.com" itemprop="email" class="link">email</a> or visit <a href="/customer-care.aspx" class="link">customer care</a> for more information.</p>
 </p>
 </div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
   
 <div className="row">
 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
   
 </div>
 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
 <div className="row">
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 </div ><h5  className="color"><b>Hennry Shopping</b></h5>
 <p  className="color">1021 Park Street, Regina, SK S4N 5H4, Canada</p>
 </div>
 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
 </div>
 </div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
 <div id="icon" className="row">
 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
 <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
 <SocialIcon url="https://twitter.com/" />
 <SocialIcon url="https://www.facebook.com/" />
 <SocialIcon url="https://www.email.com/" />
 <SocialIcon url="https://www.whatsapp.com/" />
 <SocialIcon url="https://www.skype.com/" />
 <SocialIcon url="http://linkedin.com/" /> <br/> <p>Copyright @ All rights reserved</p></div>
 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
 </div>
 </div>
 </div>
 </div> */}
 

{/* 
      </div>
    );
  }
}

export default Home; */}









// <div className="footer">
// <div className="row footer">
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
// <div className="row">
// <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
// <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
// <div className="row">
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
// </div><h5 className="qwinix"><b>Jk Technologies</b></h5>
// <p>Horizon, HIEMA Convention Center Road,Hebbal Industrial Estate 5,Mysuru,Karnataka.</p>
// </div>
// <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
// </div>
// </div>
// <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
// <div id="icon" className="row">
// <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
// <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
// <SocialIcon url="https://twitter.com/" />
// <SocialIcon url="https://www.facebook.com/" />
// <SocialIcon url="https://www.email.com/" />
// <SocialIcon url="https://www.whatsapp.com/" />
// <SocialIcon url="https://www.skype.com/" />
// <SocialIcon url="http://linkedin.com/" /> <br/> <p>Copyright @ All rights reserved</p></div>
// <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
// </div>
// </div>
// </div>
// </div>




// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchProducts } from '../Action/Productasction';
// import Productss from '../Component/Productss';

class Home extends Component {

  componentDidMount() {
    this.props.fetchProducts();   
  }

  render() {
    return (
      <main>
        <Productss products={ this.props.products } />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  // cart: state.cart
});

export default connect(mapStateToProps, {fetchProducts})(Home);