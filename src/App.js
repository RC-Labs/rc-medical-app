import './assets/css/style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from './components/header';
import Home from "./routes/Home";
import Trusted from "./routes/Trusted";
import Liaison from "./routes/Liaison";
import Contact from "./routes/Contact";
import CMS from "./routes/CMS"
import { Footer } from "./components/footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
AOS.init();
function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
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
