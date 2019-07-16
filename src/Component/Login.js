import React, { Component } from "react";
// import nature from '../images/nature.jpg';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";

export default class Login extends Component {
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
