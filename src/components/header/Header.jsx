import { Link } from "react-router-dom";
import { CiUser, CiPhone, CiShoppingBasket,IoCloseSharp, IoHomeOutline,RxHamburgerMenu,HiMagnifyingGlass,LuMoonStar, LuSun, FaShoppingCart } from "../../icons.js";
import { useEffect, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { productData } from "../../products";
const menuItems = [
  { icon: <CiShoppingBasket />, label: "فروشگاه", to: "/shop" },
  { icon: <IoHomeOutline />, label: "خانه", to: "/" },
  { icon: <CiUser />, label: "درباره ما", to: "/about-us" },
  { icon: <CiPhone />, label: "تماس با ما", to: "/contact-us" },
];

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [focusinput, setFocusinput] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const [resSearch, setResSearch] = useState([]);
  const handlesearch = (value) => {
    setSearch(value);
    if (value.trim() === "") {
      setResSearch([]);
      return;
    }
    const filterSearch = productData.filter((prod) =>
      prod.name.toLowerCase().includes(value.toLowerCase())
    );
    setResSearch(filterSearch);
  };
  return (
    <>
      <header
        className="bg-khakestar-100 sticky top-0 left-0 right-0 z-50 dark:bg-gray-700 mb-5 transition-colors duration-500"
      >
        {/* دسکتاپ */}
        <div className="hidden md:block cont !py-3">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="لوگو" />
            </Link>
            <div className="bg-gray-200 dark:bg-gray-500 relative flex items-center py-3 px-2 rounded-md gap-2">
              <HiMagnifyingGlass
                className={`text-xl ${focusinput ? "text-tala" : ""}`}
              />
              <input
                type="text"
                placeholder="جستجوی محصولات "
                className="outline-0 border-0 w-100"
                onChange={(e) => handlesearch(e.target.value)}
                onFocus={() => setFocusinput(true)}
                onBlur={() => setFocusinput(false)}
              />
              {resSearch.length > 0 ? (
                <div className="absolute right-0 top-15 bg-khakestar-200 w-full p-3 rounded-md flex flex-col gap-3">
                  {resSearch.map((prod) => (
                    <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-4 dark:text-khakestar-200">
              <Link to="/cart" className="dark:!text-khakestar-200">
                <FaShoppingCart
                  className="cursor-pointer hover:text-tala transition-colors"
                  size={25}
                />
              </Link>
              {theme === "light" ? (
                <LuMoonStar
                  className="cursor-pointer hover:text-tala transition-colors"
                  size={25}
                  onClick={() => setTheme("dark")}
                />
              ) : (
                <LuSun
                  className="cursor-pointer hover:text-tala transition-colors"
                  size={25}
                  onClick={() => setTheme("light")}
                />
              )}
            </div>
          </div>
          <nav className="flex mt-8">
            <ul className="flex gap-5 text-xl text-khakestar-300 dark:!text-khakestar-200">
              <Link to="/shop" className="dark:!text-khakestar-200 hover:dark:!text-tala">
                فروشگاه
              </Link>
              <span className="w-[2px] h-full bg-tala"></span>
              <Link to="/" className="dark:!text-khakestar-200 hover:dark:!text-tala">
                خانه
              </Link>
              <Link to="/about-us" className="dark:!text-khakestar-200 hover:dark:!text-tala">
                درباره ما
              </Link>
              <Link to="/contact-us" className="dark:!text-khakestar-200 hover:dark:!text-tala">
                تماس با ما
              </Link>
            </ul>
          </nav>
        </div>
        {/* موبایل */}
        <div className="block md:hidden cont !py-6">
          <div className="flex flex-col gap-7">
            <div className="flex justify-between items-center relative dark:text-khakestar-200">
              <RxHamburgerMenu
                size="25px"
                className="cursor-pointer"
                onClick={() => setMenuMobile(true)}
              />
              <img
                className="absolute right-1/2 translate-x-1/2"
                src={logo}
                alt="لوگو"
              />
              <div className="flex items-center gap-4">
                <Link to="/cart">
                  <FaShoppingCart
                    size="25px"
                    className="cursor-pointer dark:text-khakestar-200"
                  />
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 relative flex items-center py-3 px-2 rounded-md gap-2 dark:bg-khakestar-200">
              <HiMagnifyingGlass />
              <input
                type="text"
                placeholder="جستجوی محصولات "
                className="outline-0 border-0 w-100 "
                onChange={(e) => handlesearch(e.target.value)}
              />
              {resSearch.length > 0 ? (
                <div className="absolute right-0 top-15 bg-white w-full p-3 rounded-md flex flex-col gap-3">
                  {resSearch.map((prod) => (
                    <Link to={`/product/${prod.slug}`}>{prod.name}</Link>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      {/* منوی موبایل */}
      {menuMobile && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => setMenuMobile(false)}
          />
          <div className="bg-gray-200 fixed right-0 top-0 h-full w-80 px-6 py-3 z-50 dark:bg-gray-500">
            <div className="flex justify-between items-center">
              <img src={logo} alt="لوگو" />
              <IoCloseSharp
                onClick={() => setMenuMobile(false)}
                className="cursor-pointer"
                size="25px"
              />
            </div>
            <ul className="flex flex-col mt-10 gap-8 text-xl text-khakestar-300">
              {theme === "light" ? (
                <div
                  className="flex gap-2 items-center dark:!text-khakestar-200 cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <LuMoonStar size={20} /> حالت شب
                </div>
              ) : (
                <div
                  className="flex gap-2 items-center dark:!text-khakestar-200 cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <LuSun size={20} /> حالت روز
                </div>
              )}

              {menuItems.map(({ icon, label, to }, idx) => (
                <Link
                  to={to}
                  key={idx}
                  className="flex gap-2 items-center dark:!text-khakestar-200"
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
