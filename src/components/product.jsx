import { Component } from 'react';
import { products } from './cms-data/products-data';



const prod = products.reduce((a, { image, alt, name, category, type, desc, features, vendors, pageID }) => ({ ...a, [pageID]: { image, alt, name, category, type, desc, features, vendors } }), {});
let windowPathname = window.location.pathname;
let currentProduct = prod[windowPathname];

export class ProductPage extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">

          <ProductImage />
          <ProductInfo />

        </div>
      </section>
    )
  }
}

class ProductInfo extends Component {

  render() {
    return (

      <div className="product-info">
        <h2>{currentProduct.name}</h2>
        <span className="category">{currentProduct.category}</span>
        <p>{currentProduct.desc}</p>

        <Vendors />
      </div>
    )
  }
}

class Vendors extends Component {
  render() {
    return (
      <div className="vendors">
        <h3>Producenci</h3>

        { (currentProduct.vendors).map((element, index) => {
          return <span key={`vendor-${index}`}>{element}</span>
        })}
      </div>
    )
  }
}

class ProductImage extends Component {
  render() {
    return (
      <div className="product-image">
        <img src={currentProduct.image} alt={currentProduct.alt} />
      </div>
    )
  }
}
