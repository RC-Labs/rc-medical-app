import './assets/css/style.css';

import { Header } from './components/header';
import Home from "./routes/Home";
import Trusted from "./routes/Trusted";
import Liaison from "./routes/Liaison";
import { Footer } from "./components/footer";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/zaufali-nam" component={Trusted} />
          <Route path="/współpraca" exact component={Liaison} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
