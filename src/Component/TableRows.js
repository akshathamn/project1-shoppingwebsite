import React, { Component } from 'react';
import axios from 'axios';


class TableRows extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/product/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    
  render() {
    return (
    //     <Card>
       
    //     <CardBody>
    //       <CardTitle> {this.props.obj.title}</CardTitle>
          
    //       <CardTitle> {this.props.obj.price}</CardTitle>
          
    //       <CardTitle>  {this.props.obj.image}</CardTitle>
    //       <CardTitle> {this.props.obj.description}</CardTitle>
         
    //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    //       <Button className="btn btn-danger">Add To Cart</Button>
    //     </CardBody>
    //   </Card>
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          
          <td>
            Quantity:1
          </td>
         
          <td>
            <button onClick={this.delete} className="btn btn-primary">Delete</button>
          </td>
          {/* <td>
            <button onClick={this.submit} className="btn btn-danger">Add To Cart</button>
          </td> */}
        </tr>
    );
  }
}

export default TableRows;