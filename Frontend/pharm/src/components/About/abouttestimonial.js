import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./abouttestimonial.css";

const testimonials = [
  {
    image: "/images/aboutdetail.png",
    text: " Refers to the information and materials used to educate patients, healthcare providers, and the public about medications, conditions, and pharmacy services, often through various channels like websites, social media, and educational materials. ",
    name: "John Doe",
  },
  {
    image: "/images/aboutdetail.png",
    text: "Refers to the information and materials used to educate patients, healthcare providers, and the public about medications, conditions, and pharmacy services, often through various channels like websites, social media, and educational materials. ",
    name: "Jane Smith",
  },
  {
    image: "/images/aboutdetail.png",
    text: "Refers to the information and materials used to educate patients, healthcare providers, and the public about medications, conditions, and pharmacy services, often through various channels like websites, social media, and educational materials. ",
    name: "Robert Brown",
  },
];

const AboutTestimonial = () => {
  return (
    <div className="testimonial-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="testimonial-slide"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            >
              <div className="test-overlay"></div> 
              <div className="testimonial-content">
                {testimonial.text} 
                <div className="testimonial-line"></div>
                <p className="testimonial-author"> {testimonial.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutTestimonial;
