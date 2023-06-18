import React from "react";
import "./slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import { sliders } from "../../data";

const Slider = () => {
  return (
    <div>
      <Swiper
        speed={1500}
        navigation={true}
        pagination={false}
        slidesPerView={7}
        centeredSlides={true}
        spaceBetween={26}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className="slides">
          {sliders.map((item) => (
            <SwiperSlide className="slide_items" key={item.id}>
              <div className="slide">
                <img src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
