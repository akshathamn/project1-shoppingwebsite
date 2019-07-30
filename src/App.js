import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
// import CartItem from './Component/CartItem';
// import Cart from './Component/Cart'
import Addproduct from './Component/Addproduct';
import Products from "./Component/products/Products";
import Product from "./Component/products/Product";
import ProductForm from "./Component/products/ProductForm";
import EditProduct from "./Component/products/EditProduct";
import Cart from "./Component/cart/Cart";




// import Shop from './Component/Shop';
// import Products from './Component/Products';
// import Orders from './Component/Orders';
// import Addproduct from './Component/Addproduct';
// import Adminproduct from './Component/Adminproduct';
import Home from './Component/Home';

function App() {
  return (
    <div>
  <Router>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home}></Route> 
      <Route exact path='/Signup' component={Signup}></Route> 
      <Route exact path='/Login' component={Login}></Route>
      
      {/* <Route exact path='/Shop' component={Shop}></Route> */}
      {/* <Route exact path='/Products' component={Products}></Route> */}
      {/* <Route exact path='/Orders' component={Orders}></Route> */}
     
      {/* <Route exact path='/Addproduct' component={Addproduct}></Route> */}
      {/* <Route exact path='/CartItem' component={CartItem}></Route>
      <Route exact path='/Cart' component={Cart}></Route> */}
      {/* <Route exact path='/Addproduct' component={Addproduct}></Route> */}

    {/* <Route exact path='/Product' component={Product}></Route>  */}
    <Route exact path='/products' component={Products}></Route> 
    <Route exact path='/products' component={Product}></Route> 
    <Route exact path='/products' component={ProductForm}></Route> 
    <Route exact path='/products' component={EditProduct}></Route> 

    
                
    <Route exact path='/cart' component={Cart}></Route> 



    </Switch>
    
    <Footer />
  </Router>
  </div>
   );
}

export default App;
