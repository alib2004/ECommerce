import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Product = ({product}) => {
  return (
    <div className="card border border-tala rounded-md dark:bg-gray-500 flex flex-col gap-4 overflow-hidden p-5">
      <LazyLoadImage
        src="/imgs/1.png"
        effect="blur"
        className="rounded-md"
      />
      <Link to={`/product/${product.slug}`} className="!font-bold text-sm truncate dark:!text-khakestar-200">{product.name}</Link>
      <div className="w-full h-[1px] bg-tala"></div>
      <div className="flex flex-col items-end font-bold">
        <p className="dark:text-khakestar-200">
          {Number(product.price).toLocaleString()} <span className="text-tala">تومن</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
