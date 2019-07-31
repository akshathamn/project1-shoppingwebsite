// import React, { Component } from 'react';
// import { Button, FormGroup, FormControl } from "react-bootstrap";
// import "./Signup.css";

// class Addproduct extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//           title: "",
//           Price: "",
//           Description: "",
//           image:""
//         };
//       }
    
//       validateForm() {
//         return this.state.title.length > 0 && this.state.Price.length >0 && this.state.Description.length > 0 && this.state.image.length > 0;
//       }
    
//       handleChange = event => {
//         this.setState({
//           [event.target.id]: event.target.value
//         });
//       }
    
//       handleSubmit = event => {
//         event.preventDefault();
//       }
//       // delete(id) {
//       //   debugger;
//       //   console.log(id)
//       //   alert(id);
        
//       //   // let url = 'http://localhost:8000/users/studentProfile/:id';
//       //   fetch('/product', 
//       //   {
//       //   method: 'GET', 
//       //   headers: {'Content-Type': 'application/json'},
        
//       //   body: JSON.stringify({
//       //   id: id,
//       //   })
//       //   })
//       //   .then((response) => response.text()
//       //   )
//       // }
    
//       render() {
//         return (
    
//           <div className="Login ">
//             <form onSubmit={this.handleSubmit}>
//               <FormGroup controlId="title" bsSize="large">
//                 <p>Title</p>
//                 <FormControl
//                   autoFocus
//                   type="title"
//                   value={this.state.title}
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup controlId="Price" bsSize="large">
//                 <p>Price</p>
//                 <FormControl
//                   value={this.state.Price}
//                   onChange={this.handleChange}
//                   type="Price"
//                 />
//               </FormGroup>
//               <FormGroup controlId="Description" bsSize="large">
//                 <p>Description</p>
//                 <FormControl
//                   value={this.state.Description}
//                   onChange={this.handleChange}
//                   type="Description"
//                 />
//               </FormGroup>
//               <FormGroup controlId="image" bsSize="large">
//                 <p>image</p>
//                 <FormControl
//                   value={this.state.image}
//                   onChange={this.handleChange}
//                   type="text"
//                 />
//               </FormGroup>
//               <Button
//                 block
//                 bsSize="large"
//                 disabled={!this.validateForm()}
//                 type="submit" 
                
//               >
//             Add Product
//               </Button>
//             </form>
//           </div>
//         );
//     }
// }

// export default Addproduct;










// // import React from 'react';
// // import "./Addproduct.css";
// // import PropTypes from 'prop-types';

// // const Addproduct = props => {
// //   return (
// //     <div class="row">
// //     <div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>



// //     <div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>
// //     <div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>
// //     <div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>
// //     <div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>
// //    < div className="Product-Wrapper">
// //     <div className="Product">
// //         <div className="Product-Image-Wrapper">
// //           <img src={props.photo} alt={props.name} className="Product-Image" />
// //         </div>
// //       <div className="Product-Title">
// //         <p className="Product-Name">{props.name}</p>
// //       </div>
// //       <div className="Product-Description">
// //         <p className="Product-Description">{props.description}</p>
// //       </div>
// //       <div className="Product-Data">
// //         <small className="Product-Price">${props.price}</small>
// //         <button onClick={ props.addToCart } className="product-button Product-Add">Add to Cart</button>
// //       </div>
// //     </div>
// //     </div>
// //   </div>
// //   );
// // };

// // Addproduct.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   photo: PropTypes.string.isRequired,
// //   price: PropTypes.number.isRequired,
// //   description:PropTypes.string.isRequired,
// //   addToCart: PropTypes.func.isRequired
// // };

// // export default Addproduct;







import React, { Component } from 'react';
import axios from 'axios';

export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        title: '',
        price: '',
       image:'',
       description:''
    }
}
onChangeTitle(e) {
  this.setState({
    title: e.target.value
  });
}
onChangePrice(e) {
  this.setState({
    price: e.target.value
  })  
}
onChangeImage(e) {
  this.setState({
    image: e.target.value
  })
}
onChangeDescription(e) {
  this.setState({
    description: e.target.value
  })
}

onSubmit(e) {
  e.preventDefault();
  const obj = {
    title: this.state.title,
    price: this.state.price,
    image: this.state.image,
    description:this.state.description
  };
  axios.post('http://localhost:3008/product/addproduct', obj)
      .then(res => console.log(res.data));
  
  console.log(`The values are ${this.state. title}, ${this.state.price},  ${this.state.image}and  ${this.state.description}`)
  this.setState({
    title: '',
    price: '',
    image: '',
    description:''
  })
}

    render() {
        return (
          <div style={{ marginTop: 10 }}>
          <h3>Add New Product</h3>
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label>Title:  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
              </div>
              <div className="form-group">
                  <label>Price: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}
                    />
              </div>
              <div className="form-group">
                  <label>Image: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.image}
                    onChange={this.onChangeImage}
                    />
              </div>
              <div className="form-group">
                  <label>Description: </label>
                  <input type="text" 
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                  <input type="submit" value="Add Product" className="btn btn-primary"/>
              </div>
          </form>
      </div>
        )
    }
}