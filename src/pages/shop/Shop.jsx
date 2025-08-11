import React, { useState } from "react";
import { productData } from "../../products";
import { Link } from "react-router-dom";
const colorMap = {
  خاکستری: "#888888",
  طلایی: "#FFD700",
  نقره‌ای: "#C0C0C0",
  مشکی: "#000000",
  آبی: "#007BFF",
  سبز: "#28A745",
  قرمز: "#DC3545",
  سفید: "#FFFFFF",
  صورتی: "#FFC0CB",
  نارنجی: "#FD7E14",
};
const Shop = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const brands = [...new Set(productData.map((p) => p.brand))];
  const categories = [...new Set(productData.map((p) => p.category))];
  const colors = [...new Set(productData.flatMap((p) => p.colors))];
  const filteredProducts = productData.filter((product) => {
    return (
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedColor ? product.colors.includes(selectedColor) : true)
    );
  });
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const onFilterChange = (setter) => (value) => {
    setter(value);
    setCurrentPage(1);
  };
  return (
    <div className=" mt-10">
      <div className="cont p-5">
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <div className="w-full lg:w-[25%] bg-khakestar-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4 text-tala">فیلتر محصولات</h2>
            <div className="mb-3">
              <label className="block mb-1">برند:</label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-2 border-0 rounded outline outline-tala"
              >
                <option value="">همه برندها</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="block mb-1">دسته‌بندی:</label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-2 border-0 rounded  outline outline-tala"
              >
                <option value="">همه دسته‌بندی‌ها</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2">رنگ:</label>
              <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                {/* گزینه همه رنگ‌ها */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="colorFilter"
                    value=""
                    checked={selectedColor === ""}
                    onChange={() => onFilterChange(setSelectedColor)("")}
                    className="hidden"
                  />
                  <span
                    className="w-5 h-5 rounded-full border bg-gray-300"
                    title="همه رنگ‌ها"
                  ></span>
                  <span>همه رنگ‌ها</span>
                </label>

                {colors.map((color) => (
                  <label
                    key={color}
                    className="flex items-center gap-2 cursor-pointer select-none"
                  >
                    <input
                      type="radio"
                      name="colorFilter"
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => onFilterChange(setSelectedColor)(color)}
                      className="hidden"
                    />
                    <span
                      className="w-5 h-5 rounded-full border"
                      style={{ backgroundColor: colorMap[color] || "#ccc" }}
                      title={color}
                    ></span>
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* محصولات */}
          <div className="w-full lg:w-[75%]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              {currentProducts.length ? (
                currentProducts.map((product, index) => (
                  <div
                    key={index}
                    className="border p-4 rounded-lg shadow hover:shadow-lg transition relative"
                  >
                    <img
                      src="/src/assets/imgs/1.png"
                      alt=""
                      className="w-full rounded-md"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-1">
                      {product.colors?.map((color, i) => (
                        <span
                          key={i}
                          className="w-3 h-3 rounded-full border-0"
                          style={{
                            backgroundColor: colorMap[color] || "#ccc",
                            border: "1px solid",
                          }}
                          title={color}
                        ></span>
                      ))}
                    </div>
                    <h3 className="font-bold mt-5 text-lg mb-2 truncate">
                      <Link to={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    {product.discountedPrice ? (
                      <div className="flex flex-col gap-2 items-end font-bold">
                        <p className="relative before:absolute before:top-1/2  before:right-0 before:bg-tala before:w-full before:h-0.5 before:-rotate-12">
                          {Number(product.price).toLocaleString()}{" "}
                          <span className="text-tala">تومن</span>
                        </p>
                        <p>
                          {Number(product.discountedPrice).toLocaleString()}{" "}
                          <span className="text-tala">تومن</span>
                        </p>
                      </div>
                    ) : (
                      <p className="font-bold flex gap-2 justify-end">
                        {Number(product.price).toLocaleString()}{" "}
                        <span className="text-tala">تومن</span>
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center">هیچ محصولی یافت نشد</p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({top:0,behavior:'smooth'})
                    }}
                    className={`px-4 py-2 border border-tala outline-0  rounded`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
