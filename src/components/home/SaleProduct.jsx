import { Link } from "react-router-dom";
const SaleProduct = ({product}) => {
    return (
        <div className="card border border-tala rounded-md   p-5 flex flex-col gap-4">
      <img src="/src/assets/imgs/1.png"/>
      <Link to={`/product/${product.slug}`} className="!font-bold text-sm truncate">{product.name}</Link>
      <div className="w-full h-[1px] bg-tala"></div>
      <div className="flex justify-between items-start">
        <span className='bg-red-400 px-1 py-0.5 rounded-md text-white text-sm'>{Math.floor((product.price - product.discountedPrice) / product.price * 100)}%</span>
        <div className="flex flex-col gap-2 items-end font-bold">
        <p className='relative before:absolute before:top-1/2  before:right-0 before:bg-tala before:w-full before:h-0.5 before:-rotate-12'>
          {Number(product.price).toLocaleString()} <span className="text-tala">تومن</span>
        </p>
        <p>
          {Number(product.discountedPrice).toLocaleString()} <span className="text-tala">تومن</span>
        </p>
      </div>
      </div>
      
    </div>
    );
};

export default SaleProduct;