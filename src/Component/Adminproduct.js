import React, { Component } from 'react';
import axios from 'axios';
import Admintable from './Admintable';
import AuthNavbar from './AuthNavbar';

export default class Adminproduct extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  componentDidMount() {
    // debugger;
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
      return <Admintable obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <AuthNavbar />
        <div>
          <h3 align="center">Product List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Buy,Your Products Now!</th>
              </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}



