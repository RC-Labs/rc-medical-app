import { Component } from "react"
import { references, referencesIntro } from './cms-data/references-data';


class CtaParagraph extends Component {
  render() {
    return (
      <>
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
        <a className='button' href={this.props.link}>{this.props.button}</a>
      </>
    )
  }
};


const quotes = references.map((element, index) =>
  <div key={`quote-${index}`} className="quote">
    <p>{element.quote}</p>
    <span className="author">{element.author}</span>
    <span className="company">{element.company}</span>
  </div>
);

class Testimonials extends Component {

  render() {
    return (
      <div className='testimonials'>
        <span className="button small-button more">pokaż więcej</span>
        {quotes}
      </div>
    )
  }
}

export class References extends Component {
  render() {
    return (
      <section className="trusted">
        <div className="container">
          <CtaParagraph heading={referencesIntro.heading} text={referencesIntro.text} button={referencesIntro.button} link={referencesIntro.link} />
          <Testimonials />
        </div>
      </section>
    )
  }
}
