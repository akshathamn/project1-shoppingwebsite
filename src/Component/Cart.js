import React, { Component } from 'react';
import axios from 'axios';
import TableRows from './TableRows';

export default class Cart extends Component {

  constructor(props) {
      super(props);
      this.state = {product: []};
    }
    componentDidMount(){
        // debugger;
      axios.get('http://localhost:3008/product/getproduct')
        .then(response => {
          this.setState({ product: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }



    tabRow(){
      return this.state.product.map(function(object, i){
          return <TableRows obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Cart List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                {/* <th>Welcome,Add Your Products to Cart</th> */}
                {/* <th>Price</th>
                <th>Image</th>
                <th>Description</th>
                <th colSpan="2">Action</th> */}
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
              <button className="btn btn-danger">Order Now!</button>
            </tbody>
          </table>
        </div>
      );
    }
  }