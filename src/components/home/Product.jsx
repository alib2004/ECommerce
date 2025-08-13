import { Link } from "react-router-dom";
const Product = ({product}) => {
  return (
    <div className="card border border-tala rounded-md dark:bg-gray-500 flex flex-col gap-4 overflow-hidden p-5">
      <img src="/src/assets/imgs/1.png" className="rounded-md" />
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
