import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import driverSlide1 from '../assets/images/driver/driver-slide1.jpg';
import driverSlide2 from '../assets/images/driver/driver-slide2.jpg';
import driverSlide3 from '../assets/images/driver/driver-slide3.jpg';
import driverSlide4 from '../assets/images/driver/driver-slide4.jpg';

SwiperCore.use([Pagination, Autoplay]);

const driverImages = [
  {
    src: driverSlide1,
    alt: "1",
    heading: "RC Medical",
    text: "Marka stworzona w odpowiedzi na potrzeby rynku podyktowane pandemią COVID-19.",
    button: "",
    link: "",
  },
  {
    src: driverSlide2,
    alt: "2",
    heading: "Dbamy o bezpieczenstwo",
    text: "Bezpieczeństwo naszych klientów to priorytet, dbamy aby nasze produkty były najwyższej jakości.",
    button: "",
    link: "",
  },
  {
    src: driverSlide3,
    alt: "3",
    heading: "Zadowoleni klienci",
    text: "Profesjonalna obsługa oraz indywidualne podejście do klienta gwarantuje sukces i długoterminową współpracę.",
    button: 'referencje',
    link: "/zaufali-nam",
  },
  {
    src: driverSlide4,
    alt: "4",
    heading: "Szeroki asortyment",
    text: "Nieustanne uzupełnianie asortymentu medycznego w odpowiedzi na potrzeby naszych klientów. ",
    button: "zobacz",
    link: "/produkty",
  },
];

class SliderButton extends Component {
  render() {
    if (this.props.text !== "") {
      return (
        <a href={this.props.href} className="button">{this.props.text}</a>
      )
    } else {
      return (null)
    }
  }
};


const slides = driverImages.map((element, index) =>
  <SwiperSlide key={`slide-${index}`} className='driver-image'>
    <div className="container" data-aos='flip-up' data-aos-duration='600'>
      <div className="driver-text">
        <h1>{element.heading}</h1>
        <p>{element.text}</p>
        <SliderButton href={element.link} text={element.button}></SliderButton>
      </div>
    </div>
    <img src={element.src} alt={element.alt}></img>
  </SwiperSlide>
);

export class Driver extends Component {
  render() {
    return (
      <section className="driver">
        <Swiper className="swiper-driver" pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1} autoplay={{ delay: 8000 }}> {slides} </Swiper>
      </section>
    )
  }
};
