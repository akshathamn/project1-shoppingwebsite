import React, { Component } from 'react';
import axios from 'axios';
import TableRows from './TableRows';
import AuthNavbar from './AuthNavbar';
import { Redirect } from 'react-router-dom'

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/CheckoutForm' />
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3008/product/getproduct')
      .then(response => {
        this.setState({ product: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  tabRow() {
    return this.state.product.map(function (object, i) {
      return <TableRows obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div style={{ marginTop: 120 }}>
        <AuthNavbar />
        <h3 align="center">Cart List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <tbody>
            {this.tabRow()}
            {this.renderRedirect()}
            <button onClick={this.setRedirect} className="btn btn-danger">Order Now!</button>
          </tbody>
        </table>
      </div>
    );
  }
}











