import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import axios from 'axios';
class TableRow extends Component {
//   constructor(props) {
//     super(props);
//   this.onSubmit = this.onSubmit.bind(this);
//   this.state = {
//     title: '',
//     price: '',
//     image: '',
//     description: ''
//   }
// }
//   onSubmit(e) {
//     e.preventDefault();
//     const obj = {
//       title: this.state.title,
//       price: this.state.price,
//       image: this.state.image,
//       description: this.state.description
//     };
//     axios.post('http://localhost:3008/product/addproduct', obj)
//       .then(res => console.log(res.data));
//     this.props.history.push('/Cart')
//   }
  render() {
    return (
        <Card>
     
        <CardBody>
          <CardTitle> {this.props.obj.title}</CardTitle>
          
          <CardTitle> {this.props.obj.price}</CardTitle>
          
          <CardTitle>  {this.props.obj.image}</CardTitle>
          <CardTitle> {this.props.obj.description}</CardTitle>
         
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button onSubmit={this.onSubmit} className="btn btn-danger">Add To Cart</Button>
        </CardBody>
       
      </Card>
     
    );
  }
}

export default TableRow;