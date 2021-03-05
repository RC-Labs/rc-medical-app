import './assets/css/style.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import { Header } from './components/header';
import Home from "./routes/Home";
import Trusted from "./routes/Trusted";
import Liaison from "./routes/Liaison";
import Contact from "./routes/Contact";
import Products from "./routes/Products";
import Product from "./routes/Product";
import Downloads from "./routes/Downloads";
import PrivacyPolicy from './routes/PrivacyPolicy';
import { Footer } from "./components/footer";

import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';

import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-WFBLRDM',
  dataLayerName: 'PageDataLayer',
  events: {
    sendUserInfo: 'userInfo'
  }
}

TagManager.initialize(tagManagerArgs)

AOS.init();

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
function App() {
  return (
    <div>

      <Router basename="/" hashType="noslash">
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/polityka-prywatnosci" exact component={PrivacyPolicy} />
            <Route path="/produkty" exact component={Products} />
            <Route path="/produkty/" component={Product} />
            <Route path="/zaufali-nam" exact component={Trusted} />
            <Route path="/współpraca" exact component={Liaison} />
            <Route path="/do-pobrania" exact component={Downloads} />
            <Route path="/kontakt" exact component={Contact} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div >
  );
}

export default App;
