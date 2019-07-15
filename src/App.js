import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Signup from './Component/Signup';
// import Login from './Component/Login';
// import Shop from './Component/Shop';
// import Cart from './Component/Cart';
// import Addproduct from './Component/Addproduct';
// import Adminproduct from './Component/Adminproduct';
// import Logout from './Component/Logout';
import Home from './Component/Home';
function App() {
  return (
    <div>
  <Router>
    <Switch>
    <Route exact path='/' component={Home}></Route> 
      <Route exact path='/Signup' component={Signup}></Route> 
      {/* <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Shop' component={Shop}></Route>
      <Route exact path='/Cart' component={Cart}></Route>
      <Route exact path='/Addproduct' component={Addproduct}></Route>
      <Route exact path='/Adminproduct' component={Adminproduct}></Route>
      <Route exact path='/Logout' component={Logout}></Route> */}
    </Switch>
  </Router>
  </div>
   );
}

export default App;
