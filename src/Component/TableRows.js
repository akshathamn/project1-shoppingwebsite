import React, { Component } from 'react';
import axios from 'axios';

class TableRows extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      qty: 1
    };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    // this.showInfo = this.showInfo.bind(this);
  }
  add() {
    this.setState({
      qty: this.state.qty + 1
    });
    // this.props.handleTotal(this.props.price);
  }

  subtract() {
    this.setState({
      qty: this.state.qty - 1
    });
    // this.props.handleTotal(-this.props.price);
  }
  delete() {
      axios.get('http://localhost:3008/product/delete/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.obj.title}
        </td>
        <td>
          <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
          <div className="col-6 text-right">
            <button className="btn btn-outline-primary" onClick={this.add}>+1</button>
            <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>-1</button>
          </div>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-primary">Delete</button>
        </td>
      </tr>

    );
  }
}

export default TableRows;