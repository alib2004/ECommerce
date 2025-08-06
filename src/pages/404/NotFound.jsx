import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='cont'>
            <div className='text-center py-10 flex flex-col gap-10'>
                <h1 className='font-bold !text-3xl'>صفحه ای که دنبال آن بودین پیدا نشد!</h1>
                <Link to='/' className='bg-khakestar-200 inline-block w-fit px-4 py-2 rounded-lg m-auto !text-black hover:!text-khakestar-300 hover:bg-tala transition-colors'>بازگشت به صفحه اصلی</Link>
                <img src="/src/assets/imgs/minimal-404.jpg" className='rounded-lg' />
            </div>
        </div>
    );
};

export default NotFound;