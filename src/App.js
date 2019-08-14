import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Addproduct from './Component/Addproduct';
import Cart from "./Component/Cart";
import Authhome from "./Component/Authhome";
import index from './Component/index';
import Adminproduct from './Component/Adminproduct';
import edit from './Component/edit';
import CheckoutForm from './Component/CheckoutForm';


function App() {
  return (
    <div>
      <Router>
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

          <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
            <div className="example">
              <h1>Shopper's Site</h1>
              <Elements>
                <CheckoutForm />
              </Elements>
            </div>
          </StripeProvider>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
