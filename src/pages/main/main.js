import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css'
import api from '../../services/api';


export default class Main extends Component {
  state = {
    page: 1,
    productInfo: {},
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;

    this.setState({
      page,
      products: docs,
      productInfo
    });
  };

  prevPage = () => {
    const { page } = this.state;
    
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;
    
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }

  render() {
    const { page, productInfo, products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link
              to={`/products/${product._id}`}>
              Acessar
            </Link>
          </article>
        ))}
        <div className="actions">
          <button
            disabled={page === 1}
            onClick={this.prevPage}>
              Anterior
          </button>
          <span>
            {page}/<b>{productInfo.pages}</b>
          </span>
          <button
            disabled={page === productInfo.pages}
            onClick={this.nextPage}>
              Próxima
          </button>
        </div>
      </div>
    )  
  }
}