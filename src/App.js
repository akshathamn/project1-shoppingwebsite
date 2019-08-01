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

import Cart from "./Component/cart/Cart";



import index from './Component/index';
// import Shop from './Component/Shop';
import Products from './Component/Products';
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
      <Route exact path='/Products' component={Products}></Route>
      {/* <Route exact path='/Orders' component={Orders}></Route> */}
     
      {/* <Route exact path='/Addproduct' component={Addproduct}></Route> */}
      {/* <Route exact path='/CartItem' component={CartItem}></Route>
      <Route exact path='/Cart' component={Cart}></Route> */}
      <Route exact path='/Addproduct' component={Addproduct}></Route>
      <Route exact path='/index' component={index}></Route>
   

    
                
    <Route exact path='/cart' component={Cart}></Route> 



    </Switch>
    
    {/* <Footer /> */}
  </Router>
  </div>
   );
}

export default App;
