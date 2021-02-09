import React, { Component } from 'react';
import CountUp from 'react-countup';

let counterData = [
  {
    number: 365,
    text: 'Zadowolonych klientów'
  }, {
    number: 82,
    text: 'Zadowolonych klientów'
  }, {
    number: 24,
    text: 'Zadowolonych klientów'
  }, {
    number: 36,
    text: 'Zadowolonych klientów'
  }, {
    number: 489,
    text: 'Zadowolonych klientów'
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
