import { Component } from 'react';
import { products } from './cms-data/products-data';


export class ProductPage extends Component {
  render() {
    return (
      <section className="product">
        <div className="container">
          <h2>{window.location.pathname}</h2>
          <span>{this.props.name}</span>
        </div>
      </section>
    )
  }
}



// const productImage = products.map((element) =>
//   <img src={element.image} alt="" />
// )

// const productInfo = products.map((element, index) =>
//   <div key={index} className="product-info">
//     <h1>{element.name}</h1>
//   </div>
// )
