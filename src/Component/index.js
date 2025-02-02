import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import AuthNavbar from './AuthNavbar';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
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
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <AuthNavbar />
        <h3 align="center">Product List</h3>
        <table className="table table-striped" style={{ marginTop: 80 }}>
          <thead>
            <tr>
              <th>Welcome,Add Your Products to Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}