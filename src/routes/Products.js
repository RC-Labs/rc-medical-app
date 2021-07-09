

import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { ProductsSection } from "../components/products";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Products() {
  return (
    <>
      <Header />
      <ProductsSection />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Products;