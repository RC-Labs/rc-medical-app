import { Component } from 'react';
import { Input } from './input';
import { address } from './cms-data/footer-data';

const addressBoxes = address.map((element, index) =>
  <div key={`contact-${index}`} className="contact-section">
    <h3>{element.title}</h3>
    <div className="adress">
      <span className="contact-info">{element.street}</span>
      <span className="contact-info">{element.postal}</span>
    </div>
  </div>
);


class ContactInfo extends Component {
  render() {
    return (
      <div className="text">
        <div className="contact-section">
          <h3>RC Medical</h3>
          <div className="adress">
            <span className="contact-info">ul. Mehoffera 10</span>
            <span className="contact-info">31-322 Kraków</span>
          </div>
          <div className="numbers">
            <span className="contact-info">NIP: 123 456 78 90</span>
            <span className="contact-info">KRS 1234567890</span>
            <span className="contact-info">REGON 123456789</span>
          </div>
        </div>
        {addressBoxes}
      </div>
    )
  }
}

class ContactForm extends Component {
  render() {
    return (
      <form action="POST" className="liaison-form">
        <Input type='text' for='name' placeholder='Imię i nazwisko' />
        <Input type='text' for='email' placeholder='Adres e-mail' />
        <Input for='message' width="30" height="10" />
        <Input type='button' value='wyślij' />
      </form>
    )
  }
}


export class ContactSection extends Component {
  render() {
    return (
      <section className="contact">
        <div className="container">
          <h2>Kontakt</h2>
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    )
  }
}