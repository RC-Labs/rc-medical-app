
import { Downloads } from '../components/downloads';
import { IconBoxes } from "../components/icon-boxes";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { Counter } from '../components/counter';
import { Header } from "../components/header";
import { Footer } from "../components/footer";


function Liaison() {
  return (
    <>
      <Header />
      <Counter />
      <Downloads />
      <IconBoxes />
      <Newsletter />
      <Partners />
      <Footer />
    </>
  );
}

export default Liaison;