
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ProductPage } from "../components/product";
import { Header } from "../components/header";
import { Footer } from "../components/footer";


function Product() {
  return (
    <>
      <Header />
      <ProductPage />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Product;