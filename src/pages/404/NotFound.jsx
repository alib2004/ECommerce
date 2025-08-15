import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const NotFound = () => {
    return (
        <div className='cont'>
            <div className='text-center py-10 flex flex-col gap-10  rounded-md'>
                <h1 className='font-bold !text-3xl'>صفحه ای که دنبال آن بودین پیدا نشد!</h1>
                <Link to='/' className='bg-khakestar-200 inline-block w-fit px-4 py-2 rounded-lg m-auto !text-black hover:!text-khakestar-300 hover:bg-tala transition-colors dark:bg-tala'>بازگشت به صفحه اصلی</Link>
                <LazyLoadImage
                        src="/src/assets/imgs/minimal-404.jpg"
                        effect="blur"
                        className="rounded-lg"
                      />
            </div>
        </div>
    );
};

export default NotFound;