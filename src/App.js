import './assets/css/style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from './components/cms-data/products-data';


import { Header } from './components/header';
import Home from "./routes/Home";
import Trusted from "./routes/Trusted";
import Liaison from "./routes/Liaison";
import Contact from "./routes/Contact";
import Products from "./routes/Products";
import Product from "./routes/Product";
import CMS from "./routes/CMS"
import { Footer } from "./components/footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const productIndex = products.map((element) =>
  element.pageID
)
console.log(productIndex)
console.log(window.location.pathname)
AOS.init();

function App() {

  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produkty" exact component={Products} />

          <Route path="" component={Product} />
          <Route path="/zaufali-nam" component={Trusted} />
          <Route path="/współpraca" exact component={Liaison} />
          <Route path="/kontakt" exact component={Contact} />
          <Route path="/cms" exact component={CMS} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
