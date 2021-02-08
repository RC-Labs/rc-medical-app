import './assets/css/style.css';

import { Header } from './components/header';
import { Driver } from './components/driver';
import { Counter } from './components/counter';
import { About } from "./components/about";
import { IconBoxes } from "./components/icon-boxes";
import { Newsletter } from "./components/newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <Driver />
      <Counter />
      <About />
      <IconBoxes />
      <Newsletter />
    </div>
  );
}

export default App;
