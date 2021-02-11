import { Component } from 'react';
import { Link } from "react-router-dom";
import { products, categories } from './cms-data/products-data';
import Product from "../routes/Product";



export class ProductsSection extends Component {
  render() {
    return (
      <section className="products">
        <div className="container">
          <Categories />
          <ProductsList />
        </div>
      </section>
    )
  }
}

class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <div className="cat-sticky">
          <span className="cat-heading">Kategorie</span>
          {categoryList}
        </div>
      </div>
    )
  }
}

const categoryList = categories.map((element, index) =>
  <Link to='/produkt' key={`cat-${index}`} className="cat">{element}</Link>
)

class ListedProduct extends Component {
  render() {
    return (
      <Link to={this.props.link} className="listed-product">
        <div className="image">{this.props.image}</div>
        <div className="product-info">
          <span className="product-name">{this.props.name}</span>
          <span className="product-detail">{this.props.detail}</span>
        </div>
      </Link>
    )
  }
}

class ProductsList extends Component {
  render() {
    return (
      <div className="product-list">
        {Products}
      </div>
    )
  }
}

const Products = products.map((element, index) =>
  <ListedProduct link={`produkt-${element.pageID}`} key={`product-${index}`} name={element.name} detail={element.category} />
)

// link = {`produkt-${element.pageID}`}