import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/swiper.scss';
import './Carousel.css'; // Import your custom Carousel CSS

const Carousel = ({ items }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        waitForTransition: true,
        stopOnLastSlide: false,
        reverseDirection: true,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // When window width is >= 640px
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          {item.type === 'image' ? (
            <img className="carouselItem" src={item.src} alt={`Item ${item.id}`} />
          ) : (
            <video className="carouselItem" controls src={item.src} autoPlay
            muted
            loop>
              Your browser does not support the video tag.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
