import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { menu } from "./cms-data/menu-data";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <Link to="/" className='logo'></Link>
          <Menu />
          <Burger />
        </div>
      </header>
    )
  }
}


class Menu extends Component {

  render() {
    return (
      <ul id='menu' className="menu">
        {menuLinks}
      </ul>
    )
  }
}

export class MenuLink extends Component {
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

export { menuLinks };