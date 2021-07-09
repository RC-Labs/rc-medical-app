import { Driver } from '../components/driver';
import { Counter } from '../components/counter';
import { About } from "../components/about";
import { IconBoxes } from "../components/icon-boxes";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { SpecialLinks } from "../components/special-links";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function Home() {
  return (
    <>
      <Header />
      <Driver />
      <Counter />
      <About />
      <SpecialLinks />
      <IconBoxes />
      <Newsletter />
      <Partners />
      <Footer />
    </>
  );
}

export default Home;