import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class TableRow extends Component {
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
      return <Redirect to='/Cart' />
    }
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle> {this.props.obj.title}</CardTitle>
          <CardTitle> {this.props.obj.price}</CardTitle>
          <CardTitle>  {this.props.obj.image}</CardTitle>
          <CardTitle> {this.props.obj.description}</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect} className="btn btn-danger">Add To Cart</Button>
        </CardBody>

      </Card>

    );
  }
}

export default TableRow;