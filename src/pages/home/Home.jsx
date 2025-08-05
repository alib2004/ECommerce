import React from "react";
import gif1 from "../../assets/imgs/v1.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productData } from "../../products";
import ProductTitleSection from "../../components/home/ProductTitleSection";
import ProductsSlider from "../../components/home/ProductsSlider";
import Product from "../../components/home/Product";
import SaleProduct from "../../components/home/SaleProduct";
import BlogSlider from "../../components/home/BlogSlider";
import { blog } from "../../blog";
import Blog from "../../components/home/Blog";
const Home = () => {
  const newProduct = productData
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 8);
    const newblog = blog
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 6);
    console.log(newblog);
    
  const saleProduct = productData.filter((prod) => prod.discountedPrice);
  return (
    <div className="cont lg:!my-10">
      <img src={gif1} className="rounded-lg hidden md:block" />
      <div className="mb-10 lg:mb-0 flex flex-col lg:flex-row gap-5 items-center ">
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
      <ProductTitleSection title={"پیشنهادات ویژه"} link={'/shop'} />
      <ProductsSlider products={saleProduct} comp={SaleProduct} />
      <img src="/src/assets/imgs/2-apple16promax.jpg" className="rounded-md mb-10" />
      <ProductTitleSection title={"جدیدترین محصولات"} link={'/shop'} />
      <ProductsSlider products={newProduct} comp={Product} />
      <img src="/src/assets/imgs/5-apple14promax.jpg" className="rounded-md mb-10" />
      <ProductTitleSection title={"جدیدترین مقالات"} link={'/blog'}/>
      <BlogSlider article={newblog} comp={Blog} />
    </div>
  );
};

export default Home;
