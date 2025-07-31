import { FaAngleUp, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { Link } from "react-router-dom";
import enamad from "../../assets/imgs/enamad.png";
const Footer = () => {
  const companyLinks = [
    { title: "شرایط مرجوعی", to: "" },
    { title: "راهنمای خرید", to: "" },
    { title: "قوانین و مقررات", to: "" },
    { title: "چرا مبینو", to: "" },
  ];

  const quickAccessLinks = [
    { title: "پیگیری سفارشات", to: "" },
    { title: "تماس با ما", to: "" },
    { title: "سوالات متداول", to: "" },
    { title: "درباره ما", to: "" },
  ];
  return (
    <div className="cont">
      <div className="flex flex-col gap-7">
        {/* Back to top and contact info */}
        <div className="flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between">
          <a
            href="#top"
            className="flex items-center justify-center gap-2 border-3 border-gray-300 py-2 w-36 rounded-md"
          >
            برگشت به بالا <FaAngleUp />
          </a>
          <div className="flex flex-col gap-2 text-center text-gray-500 font-light md:flex-row">
            <p>تلفن پشتیبانی 1232336 0990</p>
            <span className="hidden md:block text-tala">|</span>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
        </div>
        {/* Email subscription and social icons */}
        <div className="flex flex-col gap-8 bg-khakestar-100 rounded-lg items-center px-10 py-7 lg:flex-row lg:justify-between">
          <span className="text-gray-500 font-light">
            از جدیدترین تخفیف ها با خبر شوید
          </span>
          <div className="relative w-full bg-white py-3 px-2 rounded-lg lg:w-1/2">
            <input type="text" placeholder="ایمیل شما" className="w-full outline-none" />
            <button type="button" className="absolute left-0.5 top-0 bottom-0 m-1 px-5 bg-tala text-white rounded-md">
              ثبت
            </button>
          </div>
          <div className="flex gap-7 items-center">
            <a href="#"><FaInstagram size={28} /></a>
            <a href="#"><FaTelegram size={28} /></a>
            <a href="#"><SiAparat size={28} /></a>
          </div>
        </div>
        {/* Links and Enamad */}
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="flex justify-evenly md:gap-10">
            {/* Company Info */}
            <div className="flex flex-col gap-6">
              <span className="text-2xl font-semibold">مبینو</span>
              <ul className="flex flex-col gap-4 text-lg">
                {companyLinks.map((link, i) => (
                  <Link to={link.to} key={i}>{link.title}</Link>
                ))}
              </ul>
            </div>
            {/* Quick Access */}
            <div className="flex flex-col gap-6">
              <span className="text-2xl font-semibold">دسترسی سریع</span>
              <ul className="flex flex-col gap-4 text-lg">
                {quickAccessLinks.map((link, i) => (
                  <Link to={link.to} key={i}>{link.title}</Link>
                ))}
              </ul>
            </div>
          </div>
          {/* Enamad Section */}
          <div className="flex justify-center gap-10 md:pl-5">
            {[1, 2].map((_, i) => (
              <img key={i} src={enamad} alt="نماد اعتماد" className="w-1/2 object-contain" />
            ))}
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex flex-col gap-5 justify-center pb-5">
          <span className="w-full h-[1px] bg-tala"></span>
          <span className="text-center">
            ساخته شده توسط{" "}
            <a
              href="https://alibeygholeh.liara.run/"
              className="!text-tala"
              target="_blank"
              rel="noopener noreferrer"
            >
              علی بیغوله
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;