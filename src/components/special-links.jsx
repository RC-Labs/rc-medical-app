import { Component } from 'react';
import { specialLinksData } from './cms-data/special-links-data';



class SpecialLink extends Component {
  render() {
    return (
      <div className="special-link">
        <div className="special-link-logo">
          <img className="special-link-logo-image" src={this.props.img} alt={this.props.alt} />
        </div>
        <div className="special-link-info">

          <p>{this.props.paragraph}</p>

          <a className='special-link-download small-button' target='_blank' rel="noreferrer" href={this.props.path}>{this.props.button}</a>
        </div>
      </div>
    )
  }
}


const specialLinksSet = specialLinksData.map((element, index) =>
  < SpecialLink key={index} paragraph={element.paragraph} img={element.logo} alt={element.alt} path={element.file} button={element.button} />
)

export class SpecialLinks extends Component {
  render() {
    return (

      <section className='special-links'>
        <div className="container">
          {specialLinksSet}
        </div>
      </section>
    )
  }
}