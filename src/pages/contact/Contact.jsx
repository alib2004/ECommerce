const Contact = () => {
    return (
        <div className='cont bg-khakestar-100 dark:bg-gray-500 rounded-3xl'>
            <div className='p-5 mt-10'>
                <h1 className='font-bold !text-3xl dark:text-tala'>تماس با ما</h1>
                <span className='my-3 block dark:text-tala'>قبل از مطرح کردن سوال، بخش سوالات متداول را مطاله نمایید.</span>
                <div className='flex flex-col lg:flex-row gap-10 justify-between items-start'>
                    <form className='flex flex-col gap-4 mt-3 w-full lg:w-[70%]'>
                        <div className='flex flex-col lg:flex-row gap-2'>
                            <input type="text" placeholder='نام شما' className='border px-3 py-2 border-tala rounded-2xl w-full'/>
                            <input type="text" placeholder='شماره تماس شما' className='border px-3 py-2 border-tala rounded-2xl w-full'/>
                        </div>
                        <input type="email" placeholder='ایمیل شما' className='border px-3 py-2 border-tala rounded-2xl'/>
                        <textarea placeholder='پیام شما'className='border px-3 py-2 border-tala rounded-2xl' rows={4}/>
                        <button type='button' className='!bg-khakestar-300 w-fit !text-white px-3 py-2 self-end'>ارسال پیام</button>
                    </form>
                    <div className='lg:w-[30%]'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>آدرس ایمیل:</span>
                                <span className='text-tala'>aliw.b2004@gmail.com</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>تلفن تماس:</span>
                                <span className='text-tala'>09901232336</span>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-bold'>آدرس:</span>
                                <span className='text-tala'>تهران ، مهرآبادجنوبی</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;