import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";
import { sign } from '../Action/Signupaction';
import {signup} from './UserFunction';
import {connect} from 'react-redux'; 
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmpassword: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length && this.state.confirmpassword.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  // }
 
    const {  email, password, confirmpassword } = this.state;
    this.setState({ submitted: true });
    // if (firstName && username && email && password && confirmPassword && mobileNumber) {
    // this.props.history.push('/login');
    
    // }
    const user = {
    
    email: this.state.email,
    password: this.state.password,
    confirmpassword: this.state.confirmpassword,
     }
     signup(user).then(res => {
    if (email&&password && confirmpassword) {
    this.props.history.push('/login')
    }
    })
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
          <FormGroup controlId="confirmpassword" bsSize="large">
            <p>ConfirmPassword</p>
            <FormControl
              value={this.state.confirmpassword}
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
            Signup
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { email } = state.Signupreducer;

  const { password } = state.Signupreducer;
  const { confirmpassword } = state.Signupreducer;
  // const{message}=state.Registerreducer;
  return {  email, password,confirmpassword };

};
export default connect(mapStateToProps, { sign })(Signup);
