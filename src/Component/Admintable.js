import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Admintable extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    };
    delete() {
        axios.get('http://localhost:3008/adminproduct/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
//   state = {
//     redirect: false
//   }
//   setRedirect = () => {
//     this.setState({
//       redirect: true
//     })
//   }
//   renderRedirect = () => {
//     if (this.state.redirect) {
//       return <Redirect to='/index' />
//     }
//   }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle> {this.props.obj.title}</CardTitle>
          <CardTitle> {this.props.obj.price}</CardTitle>
          <CardTitle>  {this.props.obj.image}</CardTitle>
          <CardTitle> {this.props.obj.description}</CardTitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* {this.renderRedirect()} */}
          {/* <Button onClick={this.setRedirect} className="btn btn-danger">Edit</Button> */}
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          <button onClick={this.delete} className="btn btn-primary">Delete</button>
        </CardBody>

      </Card>

    );
  }
}

export default Admintable;