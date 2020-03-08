import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './product.css'

export default class product extends Component {
  state = {
    product: {}
  }

  goHome = () => {
    console.log(this.props);
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`)

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="product-page">
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>URL: <a href={product.url}>{product.url}</a></p>
          <p><Link id="link-to-home" to={'/'}>Home</Link></p>
        </div>
      </div>
    );
  }
}

