import React, { Component } from 'react';
import CountUp from 'react-countup';

let counterData = [
  {
    number: 506,
    text: 'Zadowolonych klientów'
  }, {
    number: 30,
    text: 'obsługiwanych szpitali w Polsce'
  }, {
    number: 15,
    text: 'zrealizowanych zamówień publicznych'
  }, {
    number: 8,
    text: 'obsługiwanych krajów'
  }, {
    number: 150,
    text: 'milionów sprzedanych rękawiczek'
  }
];

const counters = counterData.map((element, index) =>
  <div className="counter-box" key={index}>
    <div className="counter-content">
      <CountUp className='count' start={0} end={element.number} />
      <span className="title">{element.text}</span>
    </div>
    <div className="spinner"></div>
  </div>
);

export class Counter extends Component {
  render() {
    return (
      <section className="counter">
        <div className="container">
          {counters}
        </div>
      </section>
    )
  }
}
