import React from "react";
import "./Productss.css";
import PropTypes from 'prop-types';
import Addproduct from './Addproduct';
import { connect } from "react-redux";
// import Addproduct from '../Component/Addproduct';

// Actions
// import { addToCart } from "../../store/actions/cart";

const Productss = props => {
  const productList = props.products.map( ({product= []},i) => (
    <Addproduct
      key={product._id}
      {...product}
    //   addToCart={() => props.addToCart(product, i)}
    />
  ));
  return <div className="Products-Container">
    <div className="Products-Wrapper">
      {productList}
    </div>
  </div>;
};

Productss.propTypes = {
  products: PropTypes.array.isRequired,
//   addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
//   { addToCart }
)(Productss);











// const CountryList = ({countries = []}) => (
//     <div>
//       This is the country list: <br/>
//       <ul>
//         {countries.map((_id, country) => (
//           <li key={_id}>
//             <h3>{country}</h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
