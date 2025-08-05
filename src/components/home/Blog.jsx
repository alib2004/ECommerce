import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ articles }) => {
  return (
    <div className="card border border-tala rounded-md flex flex-col gap-4 overflow-hidden">
      <img src={articles.image} className="" />
      <div className="flex flex-col gap-3 pb-3">
        <Link className="!font-bold text-sm truncate px-2" to={articles.url}>
            {articles.title}
        </Link>
        <span className="w-[90%] mx-auto h-[1px] bg-tala  px-2"></span>
        <span className="text-tala flex flex-col items-end font-bold px-4">
          {articles.publishedAt}
        </span>
      </div>
    </div>
  );
};

export default Blog;
