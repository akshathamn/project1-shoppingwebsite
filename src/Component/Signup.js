import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      Confirmpassword: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length && this.state.Confirmpassword.length > 0;
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

      <div className="Login bg-signup">
        <form onSubmit={this.handleSubmit}>
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
          <FormGroup controlId="Confirmpassword" bsSize="large">
            <p>ConfirmPassword</p>
            <FormControl
              value={this.state.Confirmpassword}
              onChange={this.handleChange}
              type="Confirmpassword"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit" 
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}
