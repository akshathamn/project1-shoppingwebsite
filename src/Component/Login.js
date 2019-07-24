import React, { Component } from "react";
// import nature from '../images/nature.jpg';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";
import {login} from './UserFunction';
import {connect} from 'react-redux'; 
import { log } from '../Action/Loginaction';

 class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  // }
  const {  email, password } = this.state;
    this.setState({ submitted: true });
    // if (firstName && username && email && password && confirmPassword && mobileNumber) {
    // this.props.history.push('/login');
    
    // }
    const user = {
    
    email: this.state.email,
    password: this.state.password,
    
     }
    login(user).then(res => {
    if (email&&password ) {
    this.props.history.push('/Home')
    }
    })
    }

  render() {
    return (
      <div className="Login bg-img">
          <form onSubmit={this.handleSubmit}>
          {/* <img className="col-md-12 col-lg-12" src={nature} alt="logo"/> */}
        
          <FormGroup controlId="email" bsSize="large">
            <p>Email</p>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>Password</p>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
         
        </form>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { email } = state.Loginreducer;
  const { password } = state.Loginreducer;
  return {  email, password };

};
export default connect(mapStateToProps, { log })(Login);
