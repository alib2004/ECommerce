import React from "react";
import gif1 from "../../assets/imgs/v1.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Home = () => {
  return (
    <div className="cont lg:!my-10">
      <img src={gif1} className="rounded-lg hidden md:block" />
      <div className="flex flex-col lg:flex-row gap-5 items-center ">
        <div className="lg:w-[70%] w-full mx-auto mt-10 lg:h-[500px]">
          <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
            <SwiperSlide>
              <img
                src="/src/assets/imgs/slider-1.jpg"
                alt="Slide 1"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/assets/imgs/slider-2.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/src/assets/imgs/slider-3.jpg"
                alt="Slide 3"
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex lg:flex-col w-full lg:w-[30%] gap-1 lg:gap-5 lg:h-[455px] justify-between">
          <img
            src="/src/assets/imgs/banner-md-2.jpg"
            className="lg:h-full lg:w-full w-[49%] lg:object-cover rounded-xl"
          />
          <img
            src="/src/assets/imgs/banner-md-03.gif"
            className="lg:h-full lg:w-full w-[49%] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
