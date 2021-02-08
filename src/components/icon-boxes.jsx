import React, { Component } from 'react';
import { iconBoxesData } from './cms-data/icon-boxes-data';


class IconBox extends Component {
  render() {
    return (
      <div className="icon-box">
        <div className="icon">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
        <h3>{this.props.title}</h3>
        <span>{this.props.lead}</span>
      </div>
    )
  }
}

const iconBoxList = iconBoxesData.map((element, index) =>
  <IconBox key={index} src={element.icon} alt={element.imageAlt} title={element.title} lead={element.lead} />
)

export class IconBoxes extends Component {
  render() {
    return (
      <section className="icon-boxes">
        <div className="container">
          {iconBoxList}
        </div>
      </section>
    )
  }
}