import React from "react";

const Product = ({product}) => {
  return (
    <div className="card border border-tala rounded-md   p-5 flex flex-col gap-4">
      <img src="/src/assets/imgs/1.png" className="" />
      <span className="font-bold text-sm truncate">{product.name}</span>
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
