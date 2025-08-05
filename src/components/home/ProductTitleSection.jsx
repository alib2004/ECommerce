import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ProductTitleSection = ({title,link}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="text-xl relative font-semibold before:absolute before:-right-2 before:top-0 before:h-full before:bg-tala before:w-1">
        {title}
      </span>
      <Link className="flex items-center gap-2 text-lg" to={link} >
        مشاهده همه <MdKeyboardArrowLeft />
      </Link>
    </div>
  );
};

export default ProductTitleSection;
