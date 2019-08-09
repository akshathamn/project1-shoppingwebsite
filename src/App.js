import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
// import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Addproduct from './Component/Addproduct';
import index from './Component/index';
import Cart from "./Component/Cart";
import Authhome from "./Component/Authhome";
// import Shop from './Component/Shop';
import Adminproduct from './Component/Adminproduct';


function App() {
  return (
    <div>
  <Router>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path='/' component={Home}></Route> 
      <Route exact path='/Signup' component={Signup}></Route> 
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Addproduct' component={Addproduct}></Route>
      <Route exact path='/index' component={index}></Route>
      <Route exact path='/Cart' component={Cart}></Route> 
      <Route exact path='/Authhome' component={Authhome}></Route> 
      <Route exact path='/Adminproduct' component={Adminproduct}></Route> 

    </Switch>
    <Footer />
  </Router>
  </div>
   );
}

export default App;
