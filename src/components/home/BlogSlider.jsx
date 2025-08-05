import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BlogSlider = ({ article, comp: Component = null }) => {
  return (
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          100: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        className="!pb-10"
      >
        {article.map((art) => (
          <SwiperSlide key={art.id}>
            {Component ? <Component articles={art} /> : <div>{art.name}</div>}
          </SwiperSlide>
        ))}
      </Swiper>
  );
};
export default BlogSlider;
