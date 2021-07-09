
import { Counter } from '../components/counter';
import { References } from "../components/references";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Trusted() {
  return (
    <>
      <Header />
      <Counter />
      <References />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Trusted;