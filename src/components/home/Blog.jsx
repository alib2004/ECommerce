import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Blog = ({ articles }) => {
  return (
    <div className="card border border-tala dark:bg-gray-500 rounded-md flex flex-col gap-4 overflow-hidden">
      <LazyLoadImage
        src={articles.image}
        effect="blur"
      />
      <div className="flex flex-col gap-3 pb-3">
        <Link className="!font-bold text-sm truncate px-2 dark:!text-khakestar-200" to={articles.url}>
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
