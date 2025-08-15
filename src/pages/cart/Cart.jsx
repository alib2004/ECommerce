import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);
  const handleQuantity = (id, color, qnt) => {
    const newcart = cart.map((item) => {
      if (item.id === id && item.color === color) {
        const newqnt = qnt > 0 ? qnt : 1;
        return {
          ...item,
          quantity: newqnt,
        };
      } else return item;
    });
    setCart(newcart);
    localStorage.setItem("cart", JSON.stringify(newcart));
  };
  const handleDelProduct = (id, color) => {
    const filterProd = cart.filter(
      (item) => !(item.id === id && item.color === color)
    );
    setCart(filterProd);
    localStorage.setItem("cart", JSON.stringify(filterProd));
  };
  let totalprice = 0;
  for (const item of cart) {
    totalprice += item.price * item.quantity;
  }
  if (cart.length === 0) {
    return (
      <div className="cont bg-khakestar-100 lg:rounded-3xl dark:bg-gray-500 rounded-md">
        <div className="py-5 my-10">
          <h1 className="!text-xl font-bold text-tala !text-center">
            سبد خرید خالی است
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="cont bg-khakestar-100 rounded-3xl dark:bg-gray-500">
      <div className="py-5 mt-10">
        <h1 className="!text-xl font-bold mb-4 text-tala">سبد خرید</h1>
        {cart.length > 0 && (
          <>
            <table className="w-full">
              <thead className="border-b-8 border-transparent">
                <tr className="border-b !text-xs lg:!text-lg dark:text-khakestar-200">
                  <th>تصویر</th>
                  <th>نام محصول</th>
                  <th>رنگ محصول</th>
                  <th>قیمت</th>
                  <th>تعداد</th>
                  <th>مجموع</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={`${item.id} - ${item.color}`}
                    className=" text-center border-b-[20px] border-transparent !text-xs lg:!text-lg dark:text-khakestar-200"
                  >
                    <td>
                      <LazyLoadImage
                        src="/imgs/1.png"
                        alt={item.name}
                        effect="blur"
                        className="m-auto rounded-md w-14 lg:w-[100px]"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.color}</td>
                    <td>{item.price.toLocaleString()}</td>
                    <td>
                      <input
                        type="number"
                        className="w-12 border border-tala rounded-md p-2"
                        value={item.quantity}
                        min={1}
                        max={5}
                        onChange={(e) =>
                          handleQuantity(
                            item.id,
                            item.color,
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </td>
                    <td>{(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button
                        className="!bg-transparent"
                        onClick={() => handleDelProduct(item.id, item.color)}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="dark:text-tala">
              مبلغ کل : {totalprice.toLocaleString()} تومن
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
