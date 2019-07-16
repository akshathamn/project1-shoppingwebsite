// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class Products extends Component {
//     handleClick = () => {
//         const { id, addToCart, removeFromCart, isInCart } = this.props;

//         if (isInCart) {
//             removeFromCart(id);
//         } else {
//             addToCart(id);
//         }
//     }

//     render() {
//         const { name, price, currency, image, isInCart } = this.props;

//         return (
//             <div className="product thumbnail">
//                 <img src={image} alt="product" />
//                 <div className="caption">
//                     <h3>{name}</h3>
//                     <div className="product__price">{price} {currency}</div>
//                     <div className="product__button-wrap">
//                         <button
//                             className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
//                             onClick={this.handleClick}
//                         >
//                             {isInCart ? 'Remove' : 'Add to cart'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// Products.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number,
//     currency: PropTypes.string,
//     image: PropTypes.string,
//     isInCart: PropTypes.bool.isRequired,
//     addToCart: PropTypes.func.isRequired,
//     removeFromCart: PropTypes.func.isRequired,
// }

// export default Products;



import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={require("../images/basket.jpg")} waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;