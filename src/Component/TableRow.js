import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class TableRow extends Component {
    
  render() {
    return (
        <Card>
       
        <CardBody>
          <CardTitle> {this.props.obj.title}</CardTitle>
          
          <CardTitle> {this.props.obj.price}</CardTitle>
          
          {/* <CardTitle>  {this.props.obj.image}</CardTitle> */}
          <CardTitle> {this.props.obj.description}</CardTitle>
         
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button className="btn btn-danger">Add To Cart</Button>
        </CardBody>
      </Card>
        // <tr>
        //   <td>
        //     {this.props.obj.title}
        //   </td>
        //   <td>
        //     {this.props.obj.price}
        //   </td>
        //   <td>
        //     {this.props.obj.image}
        //   </td>
        //   <td>
        //     {this.props.obj.description}
        //   </td>
        //   <td>
        //     <button className="btn btn-primary">Details</button>
        //   </td>
        //   <td>
        //     <button onClick={this.submit} className="btn btn-danger">Add To Cart</button>
        //   </td>
        // </tr>
    );
  }
}

export default TableRow;