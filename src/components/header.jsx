import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

let menu = [
  {
    name: "Produkty",
    link: "",
  },
  {
    name: "Zaufali nam",
    link: "",
  },
  {
    name: "Współpraca",
    link: "",
  },
  {
    name: "Do pobrania",
    link: "",
  },
  {
    name: "Kontakt",
    link: "",
  },

];

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Router><Link to="" className='logo'></Link></Router>
          <Menu />
          <Burger />
        </div>
      </header>
    )
  }
}


class Menu extends Component {
  state = { isOpen: false };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const isOpen = this.state.isOpen;

    return (
      <Router>
        <ul id='menu' className={isOpen ? 'menu mobile-open' : 'menu'}>
          {menuLinks}
        </ul>
      </Router>
    )
  }
}

class MenuLink extends Component {
  render() {
    return (
      <Link to={this.props.link}><li>{this.props.name}</li></Link>
    )
  }
}

const menuLinks = menu.map((element, index) =>
  <MenuLink key={index} link={element.link} name={element.name} />
);

class Burger extends Component {

  state = { isOpen: false };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const isOpen = this.state.isOpen;
    return (
      <button onClick={this.handleToggle} className={isOpen ? 'burger open' : 'burger'}>
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </ button>
    )
  }
};

