import React, { Component } from 'react';

class NewsletterForm extends Component {
  render() {
    return (
      <form action="POST">
        <label htmlFor="email"></label>
        <input type="email" name="email" id="email" placeholder='Podaj nam swój adres e-mail' />
        <input type="button" value="zapisz się" />
        <div className="accept">
          <input type="checkbox" name="" id="accept-PP" />
          <label htmlFor="accept-PP">Akceptuję politykę prywatności</label>
        </div>
      </form>
    )
  }
}

export class Newsletter extends Component {
  render() {
    return (
      <section className="newsletter">
        <div className="container">
          <div className="text">
            <h2>Zapisz się do newslettera</h2>
            <span>Bądź na bieżąco lorem ipsum dolor sit amet</span>
          </div>
          <NewsletterForm />
        </div>
      </section>
    )
  }
};
