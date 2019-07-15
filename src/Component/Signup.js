import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { signup } from '../Action/Signupaction';
// import {register} from '../Action/Registeraction';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      Password: ''
      // namerequired: '',
      // pwrequired: ''

    }
  }
  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });

  }
  handleSubmit = (e) => {
    
    const signupDetails = { username: this.state.username, Password: this.state.Password };
    this.props.submitLogin(signupDetails);
  }

  render() {
    return (
      <div className="center">
        <div class="container">
          <div class="row">
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4">
              <form>
                <h3 className="left">Login</h3>
                <label className="left"><b>Username</b></label><br></br>
                <input className="height" type='text' name='username' onChange={this.handleChange} /><br></br>
                <p>{this.state.namerequired}</p>
                <label className="left"><b>Password</b></label><br></br>
                <input className="height" type='text' name='Password' onChange={this.handleChange} /><br></br>
                <p>{this.state.pwrequired}</p>
              </form><br></br>
              <button className="login" onClick={this.handleSubmit}>Login</button>
              <a href='/Register' className="register">Register</a>
            </div>
            <div class="col-sm-4 col-lg-4 col-md-4 col-xs-4"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { username } = state.Signupreducer;
  const { Password } = state.Signupreducer;
  // const{message}=state.Registereducer;

  return { username, Password };


};
export default connect(mapStateToProps, { signup })(Signup);

