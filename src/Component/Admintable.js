import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Admintable extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    };
    delete() {
      axios.get('http://localhost:3008/product/delete/' + this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle> {this.props.obj.title}</CardTitle>
          <CardTitle> {this.props.obj.price}</CardTitle>
          <CardTitle>  {this.props.obj.image}</CardTitle>
          <CardTitle> {this.props.obj.description}</CardTitle>
         <Link to={"/edit/"} className="btn btn-primary">Edit</Link>
          <Button onClick={this.delete} className="btn btn-primary">Delete</Button>
         </CardBody>
      </Card>

    );
  }
}

export default Admintable;



