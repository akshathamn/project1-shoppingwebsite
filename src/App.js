import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/Login';
// import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Addproduct from './Component/Addproduct';
// import index from './Component/Shop';
import Cart from "./Component/Cart";
import Authhome from "./Component/Authhome";
import index from './Component/index';
import Adminproduct from './Component/Adminproduct';
import edit from './Component/edit';


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
      <Route exact path='/edit' component={edit}></Route> 


      {/* <PrivateRoute exact path='/Addproduct' component={Addproduct}></PrivateRoute>
      <PrivateRoute exact path='/index' component={index}></PrivateRoute>
      <PrivateRoute exact path='/Cart' component={Cart}></PrivateRoute> 
      <PrivateRoute exact path='/Authhome' component={Authhome}></PrivateRoute> 
      <PrivateRoute exact path='/Adminproduct' component={Adminproduct}></PrivateRoute> 
      <PrivateRoute exact path='/edit' component={edit}></PrivateRoute>  */}
    </Switch>
    <Footer />
  </Router>
  </div>
   );
}

export default App;
