
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ProductPage } from "../components/product";
import { products } from '../components/cms-data/products-data';

const pageid = products.map((element) => console.log(element.pageID))

function Product() {
  if (window.location.pathname === '/produkt-001') {
    return (
      <ProductPage name={products.map((element) => element.pageID === window.location.pathname ? 'ok' : 'zle')} />
    )
  } else {

    return (
      <>
        <ProductPage />
        <Partners />
        <Newsletter />
      </>
    )
  }
}

export default Product;