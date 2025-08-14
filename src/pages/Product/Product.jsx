/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../products";
import { FaMinus, FaPlus, FaShoppingCart, FaRegClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { MdVerifiedUser } from "react-icons/md";
import { AiOutlineTruck } from "react-icons/ai";
import { ToastContainer, toast, Bounce } from "react-toastify";
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
  const [activeTab, setActiveTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const tabs = [
    { id: "description", label: "توضیحات" },
    { id: "specs", label: "مشخصات فنی" },
    { id: "reviews", label: "نظرات" },
  ];
  const tabContent = {
    description: (
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    ),
    specs: (
      <div>
        <h2 className="text-lg font-bold mb-2 dark:text-tala">مشخصات فنی</h2>
        <ul className="list-disc pr-5 dark:text-khakestar-200">
          <li>وزن: 250 گرم</li>
          <li>رنگ: مشکی</li>
          <li>جنس: فلز</li>
        </ul>
      </div>
    ),
    reviews: (
      <div>
        <h2 className="text-lg font-bold mb-2 dark:text-tala">نظرات کاربران</h2>
        <p className=" dark:text-khakestar-200">اینجا بخش ثبت و نمایش نظرات کاربران هست.</p>
      </div>
    ),
  };
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const exitProduct = cart.findIndex(
      (item) => item.id === product.slug && item.color === selectedColor
    );
    if (exitProduct > -1) {
      cart[exitProduct].quantity += nums;
      toast.info("محصول از قبل در سبدخرید بود یکی به آن اضافه شد", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      cart.push({
        id: product.slug,
        name: product.name,
        color: selectedColor,
        price: product.discountedPrice || product.price,
        quantity: nums,
        image:'/src/assets/imgs/1.png'
      });
      toast.success("محصول به سبد خرید اضافه شد", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div className="mt-10">
      <div className="cont bg-khakestar-100 rounded-md !py-7 dark:bg-gray-500">
        <ToastContainer />
        <div className="flex gap-5 lg:gap-20 flex-col lg:flex-row py-5 justify-between">
          <div className="lg:w-[20%]">
            <img
              src="/src/assets/imgs/1.jpg"
              alt={product.name}
              className="w-1/2 lg:w-full m-auto rounded-md"
            />
          </div>
          <div className="lg:w-[50%]">
            <h1 className="font-bold !text-2xl dark:text-tala">{product.name}</h1>
            <p>{product.slug}</p>
            <span className="w-full bg-tala h-[1px] block my-4"></span>
            <ul className="my-5 flex flex-col gap-2">
              <li>برند: {product.brand}</li>
              <li>گارانتی : 24 ماهه</li>
            </ul>
            <span className="block my-2 text-xl">ویژگی های محصول:</span>
            <ul className="flex flex-col gap-2">
              <li>حافظه داخلی : 128 گیگ</li>
              <li>اندازه : 6.4 اینچ</li>
              <li>تعداد سیم کارت : دو سیم کارت</li>
            </ul>
            <div className="bg-orange-200 px-4 py-2 rounded-md mt-10">
              <p className=" flex gap-2 items-center text-red-600 ">
                <FaClockRotateLeft />
                حداکثر تا 3 روز تحویل داده میشود
              </p>
            </div>
          </div>
          <div className="bg-white lg:w-[30%] p-3 rounded-md dark:bg-gray-400">
            <span>رنگ:</span>
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`flex items-center gap-2 !bg-transparent !border p-1 mt-1 !otline-0 ${
                  selectedColor === color
                    ? "!border-blue-600"
                    : "!border-khakestar-200"
                }`}
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
            <button
              className="flex gap-1 items-center px-3 py-2"
              onClick={handleAddToCart}
            >
              <FaShoppingCart size={25} />
              افزودن به سبدخرید
            </button>
          </div>
        </div>
        <span className="w-full bg-tala h-[1px] block"></span>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 mt-7">
          <div className="border border-khakestar-200 rounded-md p-3 flex items-center gap-2 flex-1">
            <FaClockRotateLeft size={20} />
            <p>هفت روز ضمانت بازگشت کالا</p>
          </div>
          <div className="border border-khakestar-200 rounded-md p-3 flex items-center gap-2 flex-1">
            <MdVerifiedUser size={20} />
            <p>تضمین اصالت کالا</p>
          </div>
          <div className="border border-khakestar-200 rounded-md p-3 flex items-center gap-2 flex-1">
            <FaRegClock size={20} />
            <p>هفت روز هفته</p>
          </div>
          <div className="border border-khakestar-200 rounded-md p-3 flex items-center gap-2 flex-1">
            <AiOutlineTruck size={25} />
            <p>تحویل اکسپرس در تهران, کرج</p>
          </div>
        </div>
      </div>
      <div className="cont bg-khakestar-100 dark:bg-gray-500 rounded-md !py-3 !mt-5">
        <div className="w-full mx-auto mt-6">
          <div className="flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 transition-colors !border-b-2 !outline-0 dark:!bg-tala  ${
                  activeTab === tab.id
                    ? "!border-b-2 !border-tala !font-bold !text-tala dark:!text-white"
                    : "!text-gray-500 !hover:text-blue-500 "
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
