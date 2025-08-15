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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Home = () => {
  const newProduct = productData
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 8);
  const newblog = blog
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 6);
  const saleProduct = productData.filter((prod) => prod.discountedPrice);
  return (
    <div className="cont lg:!my-10">
      <LazyLoadImage
        src="/imgs/v1.gif"
        effect="blur"
        className="rounded-lg hidden md:block"
      />
      <div className="mb-10 lg:mt-10 lg:mb-0 flex flex-col lg:flex-row gap-5">
        <div className="lg:w-[70%] w-full mx-auto lg:h-[500px]">
          <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
            <SwiperSlide>
              <img
                src="/imgs/slider-1.jpg"
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
        <div className="flex lg:flex-col w-full lg:w-[30%] gap-1 lg:h-[455px] justify-between">
          <LazyLoadImage
            src="/imgs/banner-md-2.jpg"
            effect="blur"
            className="lg:h-[220px] w-full object-cover rounded-xl"
          />
          <LazyLoadImage
            src="/imgs/banner-md-03.gif"
            effect="blur"
            className="lg:h-[220px] w-full object-cover rounded-xl"
          />
        </div>
      </div>
      <ProductTitleSection title={"پیشنهادات ویژه"} link={"/shop"} />
      <ProductsSlider products={saleProduct} comp={SaleProduct} />
      <LazyLoadImage
        src="/imgs/2-apple16promax.jpg"
        effect="blur"
        className="rounded-md mb-10"
      />
      <ProductTitleSection title={"جدیدترین محصولات"} link={"/shop"} />
      <ProductsSlider products={newProduct} comp={Product} />
      <LazyLoadImage
        src="/imgs/5-apple14promax.jpg"
        effect="blur"
        className="rounded-md mb-10"
      />
      <ProductTitleSection title={"جدیدترین مقالات"} link={"/blog"} />
      <BlogSlider article={newblog} comp={Blog} />
    </div>
  );
};

export default Home;
