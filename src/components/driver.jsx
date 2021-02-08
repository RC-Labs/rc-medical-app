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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "",
    link: "",
  },
  {
    src: driverSlide2,
    alt: "2",
    heading: "Dbamy o bezpieczenstwo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "",
    link: "",
  },
  {
    src: driverSlide3,
    alt: "3",
    heading: "Zadowoleni klienci",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: 'referencje',
    link: "",
  },
  {
    src: driverSlide4,
    alt: "4",
    heading: "Szeroki asortyment",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "zobacz",
    link: "",
  },
];

class SliderButton extends Component {
  render() {
    if (this.props.text != "") {
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
    <div className="container">
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
}

// export class Driver extends Component {
//   render() {
//     return (
//       <section className='driver'>
//         <div className="swiper-container swiper-driver">
//           <div className="swiper-wrapper">

//             <div className="swiper-slide driver-image">
//               <div class="container">
//                 <div class="driver-text" data-aos="fade-right">
//                   <h1>RC Medical</h1>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//                   dolore
//                   magna
//                 aliqua.</p>
//                 </div>
//               </div>
//               <img src={driverSlide} alt="" />
//             </div>

//           </div>
//         </div>
//       </section>
//     )
//   }
// }
