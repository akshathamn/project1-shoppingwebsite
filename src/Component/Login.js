import React, { Component } from "react";
// import nature from '../images/nature.jpg';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";
import { login } from './UserFunction';
import { connect } from 'react-redux';
import { log } from '../Action/Loginaction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailerr: "",
      pswd: ""
      // submitted: false
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
    const { email, password } = this.state;
    this.setState({ submitted: true });
   
    const user = {
      email: this.state.email,
      password: this.state.password,

    }
    login(user).then(res => {
      if (email && password) {
        this.props.history.push('/Authhome')
      }
    })
    let temp1 = 0;
    let emailerr = this.state.email.length, pswd = this.state.password.length;
    // let reg_name = /^[A-Za-z]{2,10}$/;
    let reg_pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
    let reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // let reg_phn = /^[0-9]{10}$/;

    if (emailerr === 0) this.setState({ emailerr: '*Email is required' });
    else if (!reg_email.test(this.state.email)) this.setState({ emailerr: '*Invalid Email' });
    else temp1++;
    if (pswd === 0) this.setState({ pswd: '*Password is required' });
    else if (!reg_pswd.test(this.state.password)) this.setState({ pswd: '*Invalid Password' });
    else temp1++;
    if (temp1 > 3) {
      this.props.history.push('/login')
    }
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
            <p className='msg'>{this.state.emailerr}</p><br></br>
            {/* {submitted && !email &&
                    <div className="help-block">email is required</div>
                  } */}
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <p>Password</p>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <p className='msg'>{this.state.pswd}</p><br></br>
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
  return { email, password };

};
export default connect(mapStateToProps, { log })(Login);











