import { Link } from "react-router-dom";
const Product = ({product}) => {
  return (
    <div className="card border border-tala rounded-md   p-5 flex flex-col gap-4">
      <img src="/src/assets/imgs/1.png" className="" />
      <Link to={`/product/${product.slug}`} className="!font-bold text-sm truncate">{product.name}</Link>
      <div className="w-full h-[1px] bg-tala"></div>
      <div className="flex flex-col items-end font-bold">
        <p>
          {Number(product.price).toLocaleString()} <span className="text-tala">تومن</span>
        </p>
      </div>
    </div>
  );
};

export default Product;
