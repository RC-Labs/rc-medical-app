
import { Counter } from '../components/counter';
import { LiaisonSection } from "../components/liaison-form";
import { IconBoxes } from "../components/icon-boxes";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Liaison() {
  return (
    <>
      <Header />
      <Counter />
      <LiaisonSection />
      <IconBoxes />
      <Newsletter />
      <Partners />
      <Footer />
    </>
  );
}

export default Liaison;