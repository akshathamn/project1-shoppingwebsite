import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Signup.css";
import { sign } from '../Action/Signupaction';
import { signup } from './UserFunction';
import { connect } from 'react-redux';
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      emailerr: "",
      pswd: "",
      cpswd: ""
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

    const { email, password, confirmpassword } = this.state;
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
      if (email && password && confirmpassword) {
        // this.props.history.push('/login')
      }
    })

debugger
    let temp1 = 0;
    let emailerr = this.state.email.length, pswd = this.state.password.length, cpswd = this.state.confirmpassword.length;
    // let reg_name = /^[A-Za-z]{2,10}$/;
    let reg_pswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
    let reg_cpswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})/;
    let reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailerr === 0) this.setState({ emailerr: '*Email is required' });
    else if (!reg_email.test(this.state.email)) this.setState({ emailerr: '*Invalid Email' });
    else temp1++;
    if (pswd === 0) this.setState({ pswd: '*Password is required' });
    else if (!reg_pswd.test(this.state.password)) this.setState({ pswd: '*Invalid Password' });
    else temp1++;
    if (cpswd === 0) this.setState({ cpswd: '*confirmpassword is required' });
    else if (!reg_cpswd.test(this.state.confirmpassword)) this.setState({ cpswd: '*Invalid Password' });
    else temp1++;
    if (temp1 > 2) {
      this.props.history.push('/login')
    }
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
            <p className='msg'>{this.state.emailerr}</p><br></br>
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
          <FormGroup controlId="confirmpassword" bsSize="large">
            <p>ConfirmPassword</p>
            <FormControl
              value={this.state.confirmpassword}
              onChange={this.handleChange}
              type="password"
            />
            <p className='msg'>{this.state.cpswd}</p><br></br>
          </FormGroup>
          <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
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
  return { email, password, confirmpassword };

};
export default connect(mapStateToProps, { sign })(Signup);
