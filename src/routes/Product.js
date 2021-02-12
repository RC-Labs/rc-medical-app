
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ProductPage } from "../components/product";

function Product() {
  if (window.location.pathname === '/produkt-001') {
    return (
      <ProductPage />
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