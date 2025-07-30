import React from "react";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { LuMoonStar } from "react-icons/lu";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="cont !mt-3">
      <div className="flex justify-between items-center">
        <h1>مبینو</h1>
        <div className="bg-gray-100 relative flex items-center py-3 px-2 rounded-md gap-2">
          <HiMagnifyingGlass />
          <input
            type="text"
            placeholder="جستجوی محصولات "
            className=" outline-0 border-0 w-100"
          />
        </div>
        <div className="flex items-center gap-4">
          <FaRegUser size="25px" className="cursor-pointer"/>
          <FaShoppingCart size="25px" className="cursor-pointer" />
          <LuMoonStar size="25px" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex mt-8">
        <ul className="flex gap-5 text-xl">
            <Link to=''>فروشگاه</Link>
            <span className="w-[1px] h-full bg-red-600"></span>
            <Link to=''>خانه</Link>
            <Link to=''>درباره ما</Link>
            <Link to=''>تماس با ما</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
