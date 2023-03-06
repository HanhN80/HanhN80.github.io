import React from "react";
import "./testimonials.css";
import me from "../../image/snow.jpg";
import me1 from "../../image/snow.jpg";
import me2 from "../../image/snow.jpg";
import me3 from "../../image/snow.jpg";
import me4 from "../../image/snow.jpg";
import me5 from "../../image/snow.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    avatar: me,
    name: "Fred Nguyen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
  {
    avatar: me1,
    name: "Tina Lee",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
  {
    avatar: me2,
    name: "David Chung",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
  {
    avatar: me3,
    name: "Fred Nguyen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
  {
    avatar: me4,
    name: "Fred Nguyen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
  {
    avatar: me5,
    name: "Fred Nguyen",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae iure delectus consectetur illo, voluptatum corporis nesciunt nulla ipsam dolor quisquam quaerat exercitationem obcaecati debitis culpa labore architecto eius amet?",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
