import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";

class Addproduct extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          title: "",
          Price: "",
          Description: ""
        };
      }
    
      validateForm() {
        return this.state.title.length > 0 && this.state.Price.length && this.state.Description.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
      }
    
      render() {
        return (
    
          <div className="Login ">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="title" bsSize="large">
                <p>Title</p>
                <FormControl
                  autoFocus
                  type="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="Price" bsSize="large">
                <p>Price</p>
                <FormControl
                  value={this.state.Price}
                  onChange={this.handleChange}
                  type="Price"
                />
              </FormGroup>
              <FormGroup controlId="Description" bsSize="large">
                <p>Description</p>
                <FormControl
                  value={this.state.Description}
                  onChange={this.handleChange}
                  type="Description"
                />
              </FormGroup>
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit" 
              >
            Add Product
              </Button>
            </form>
          </div>
        );
    }
}

export default Addproduct;










// import React from 'react';
// import "./Addproduct.css";
// import PropTypes from 'prop-types';

// const Addproduct = props => {
//   return (
//     <div class="row">
//     <div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>



//     <div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//     <div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//     <div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//     <div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//    < div className="Product-Wrapper">
//     <div className="Product">
//         <div className="Product-Image-Wrapper">
//           <img src={props.photo} alt={props.name} className="Product-Image" />
//         </div>
//       <div className="Product-Title">
//         <p className="Product-Name">{props.name}</p>
//       </div>
//       <div className="Product-Description">
//         <p className="Product-Description">{props.description}</p>
//       </div>
//       <div className="Product-Data">
//         <small className="Product-Price">${props.price}</small>
//         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
//       </div>
//     </div>
//     </div>
//   </div>
//   );
// };

// Addproduct.propTypes = {
//   name: PropTypes.string.isRequired,
//   photo: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   description:PropTypes.string.isRequired,
//   addToCart: PropTypes.func.isRequired
// };

// export default Addproduct;