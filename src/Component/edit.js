import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      price: '',
      image: '',
      description: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/adminproduct/editadminproduct/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
          description: response.data.description
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }
  onChangeImage(e) {
    this.setState({
      image: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      price: this.state.price,
      image: this.state.image,
      description: this.state.description
    };
    axios.post('http://localhost:4000/adminproduct/updateadminproduct/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data));
    this.props.history.push('/Cart')
    console.log(`The values are ${this.state.title}, ${this.state.price},  ${this.state.image}and  ${this.state.description}`)
    this.setState({
      title: '',
      price: '',
      image: '',
      description: ''
    })
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Product</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              required
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input type="number"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              required
            />
          </div>
          <div className="form-group">
            <label>Image: </label>
            <input type="text"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeImage}
              required
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              required
            />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Update product"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}