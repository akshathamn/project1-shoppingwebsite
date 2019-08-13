import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
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
         {/* <Row>
      <Col sm="6"> */}
        <CardBody >
          <CardTitle> {this.props.obj.title}</CardTitle>
          <CardTitle> {this.props.obj.price}</CardTitle>
          <CardTitle>  {this.props.obj.image}</CardTitle>
          <CardTitle> {this.props.obj.description}</CardTitle>
         {this.renderRedirect()}
          <Button onClick={this.setRedirect} className="btn btn-danger">Add To Cart</Button>
        </CardBody>
      
      {/* </Col>
      </Row> */}
      </Card>
    );
  }
}

export default TableRow;