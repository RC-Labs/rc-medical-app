import { Component } from 'react';
import { Input } from "./input";

const liaisonText = {
  heading: 'Skontaktuj się z naszym działem handlowym',
  text: 'Zapraszamy do współpracy klientów indywidualnych oraz klientów biznesowych. Realizujemy zamówienia hurtowe oraz detaliczne. Oferujemy możliwość współpracy partnerskiej w Polsce i za granicą.',
};


class LiaisonText extends Component {
  render() {
    return (
      <div className="text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class LiaisonForm extends Component {
  render() {
    return (
      <form action="POST" className="liaison-form">
        <Input type='text' for='name' placeholder='Imię i nazwisko' />
        <Input type='text' for='email' placeholder='Adres e-mail' />
        <Input type='text' for='phone-number' placeholder='Numer telefonu' />
        <Input type='text' for='topic' placeholder='Temat' />
        <Input for='message' width="30" height="10" />
        <Input type='button' value='wyślij' />
      </form>
    )
  }
}


export class LiaisonSection extends Component {
  render() {
    return (
      <section className="liaison">
        <div className="container">
          <LiaisonText heading={liaisonText.heading} text={liaisonText.text} />
          <LiaisonForm />
        </div>
      </section>
    )
  }
}