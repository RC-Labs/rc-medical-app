import { Component } from 'react';
import { contacts } from './cms-data/contact-data';


const persons = contacts.map((element, index) =>
  <div className="person-box">
    <span className="name">{element.name}</span>
    <span className="position">{element.position}</span>
    <a href={`tel:${element.phone}`} className="phone">{element.phone}</a>
    <a href={`mailto:${element.mail}`} className='mail'>{element.mail}</a>
  </div>
)

export class BusinessCards extends Component {
  render() {
    return (
      <section className="persons">
        <div className="container">
          {persons}
        </div>
      </section>
    )
  }
}