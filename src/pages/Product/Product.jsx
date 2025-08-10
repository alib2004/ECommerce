import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../products";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";

const colorMap = {
  خاکستری: "#888888",
  طلایی: "#FFD700",
  نقره‌ای: "#C0C0C0",
  مشکی: "#000000",
  آبی: "#007BFF",
  سبز: "#28A745",
  قرمز: "#DC3545",
  سفید: "#FFFFFF",
  صورتی: "#FFC0CB",
  نارنجی: "#FD7E14",
};
const Product = () => {
  const { slug } = useParams();
  const product = productData.find((p) => p.slug === slug);
  const [nums, setNums] = useState(1);
  return (
    <div className="mt-10">
      <div className="cont bg-khakestar-100 rounded-md">
        <div className="flex flex-col lg:flex-row py-5 justify-between">
          <div className="lg:w-[30%]">
            <img
              src="/src/assets/imgs/1.jpg"
              alt={product.name}
              className="lg:w-2/3"
            />
          </div>
          <div className="lg:w-[40%]">
            <h1 className="font-bold !text-2xl">{product.name}</h1>
            <p>{product.slug}</p>
          </div>
          <div className="bg-white lg:w-[30%] p-3 rounded-md">
            <span>رنگ:</span>
            {product.colors.map((color) => (
              <button
                key={color}
                className="flex items-center gap-2 !bg-transparent !border !border-khakestar-200 p-1 mt-1"
              >
                <span
                  className="w-3 h-3 rounded-full block"
                  style={{ backgroundColor: colorMap[color] }}
                ></span>
                {color}
              </button>
            ))}
            <span className="mt-5 block">تعداد:</span>
            <div className="flex justify-center items-center gap-2 border border-khakestar-100 w-1/2 my-4 p-2 rounded-md">
              <button
                onClick={() => setNums(nums + 1)}
                className="w-full !text-blue-600 !cursor-pointer"
                style={{ all: "unset" }}
              >
                <FaPlus />
              </button>
              <input
                type="text"
                value={nums}
                className="text-center w-full outline-0 border-0"
                readOnly
              />
              <button
                onClick={() => setNums(nums - 1)}
                disabled={nums < 1}
                className="w-full !text-red-600 !text-xl !cursor-pointer disabled:!text-gray-500"
                style={{ all: "unset" }}
              >
                <FaMinus />
              </button>
            </div>
            <div className="flex flex-col gap-3 items-end">
              {product.discountedPrice ? (
                <span className="text-xl items-center relative before:bg-red-500 before:w-full before:h-0.5 before:absolute before:left-0 before:top-3 before:-rotate-12">
                  {product.price.toLocaleString()}
                </span>
              ) : (
                <span className="flex gap-1 font-bold text-3xl items-center">
                  {product.price.toLocaleString()}
                  <span className="text-sm">تومن</span>
                </span>
              )}

              {product.discountedPrice ? (
                <span className="flex gap-1 font-bold text-3xl items-center">
                  {product.discountedPrice.toLocaleString()}
                  <span className="text-sm">تومن</span>
                </span>
              ) : (
                ""
              )}
            </div>
            <button className="flex gap-1 items-center px-3 py-2">
              <FaShoppingCart size={25} />
              افزودن به سبدخرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
