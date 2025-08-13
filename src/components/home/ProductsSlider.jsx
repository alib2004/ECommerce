import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const ProductsSlider = ({ products, comp: Component = null }) => {
  return (
    <div className="relative">
      <div className="swiper-buttons z-30">
        <button className="swiper-button-prev-custom absolute top-1/2 right-0 -translate-y-1/2 text-3xl !text-black hover:!text-tala !bg-transparent z-40">
          <FaRegArrowAltCircleRight size={30} />
        </button>
        <button className="swiper-button-next-custom absolute top-1/2 left-0 -translate-y-1/2 text-3xl !text-black hover:!text-tala  !bg-transparent z-40">
          <FaRegArrowAltCircleLeft size={30} />
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          100: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="!pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="">
            {Component ? <Component product={product} /> : <div>{product.name}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductsSlider;
