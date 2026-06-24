import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("Featured");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://darkplanet.qzz.io/products");

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");
  };

  const [productsPerPage, setProductsPerPage] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(window.innerWidth < 768 ? 20 : 30);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sortedProducts = [...products];

  if (sortBy === "Price Low") {
    sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (sortBy === "Price High") {
    sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
  }

  if (sortBy === "Newest") {
    sortedProducts.reverse();
  }

  const startIndex = (page - 1) * productsPerPage;

  const visibleProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const totalPages = Math.max(
    1,
    Math.ceil(sortedProducts.length / productsPerPage),
  );

  return (
    <div className="bg-white min-h-screen px-6 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mt-4 flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side */}
          <div>
            <h1 className="text-3xl font-bold text-black">SHOP</h1>

            <p className="text-gray-500 mt-3">
              Home / <span className="text-black font-medium">Shop</span>
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-700">Sort by:</span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
                className="
    appearance-none
    border
    border-gray-300
    rounded-md
    pl-5
    pr-10
    py-2
    bg-white
    text-gray-700
    font-bold
    outline-none
    focus:border-gray-400
    cursor-pointer
  "
              >
                <option value="Featured">Featured</option>

                <option value="Newest">Newest</option>

                <option value="Price Low">Price: Low to High</option>

                <option value="Price High">Price: High to Low</option>
              </select>

              <ChevronDown
                size={18}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-600
                  pointer-events-none
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-b border-gray-300 mt-8"></div>

      {/* Categories + Products */}
      <div className="max-w-7xl mx-auto mt-6 flex gap-4">
        {/* Categories */}
        <div className="w-[20%] mt-4">
          <h3 className="text-xs md:text-xl font-bold text-black mb-3 md:mb-6">
            CATEGORIES
          </h3>

          <div className="flex flex-col gap-4">
            <button className="text-left text-xs md:text-base font-semibold text-gray-600 hover:text-black">
              All Products
            </button>

            <button className="text-left text-xs md:text-base font-semibold text-gray-600 hover:text-black">
              T-Shirts
            </button>

            <button className="text-left text-xs md:text-base font-semibold text-gray-600 hover:text-black">
              Hoodies
            </button>

            <button className="text-left text-xs md:text-base font-semibold text-gray-600 hover:text-black">
              Oversized
            </button>

            <button className="text-left text-xs md:text-base font-semibold text-gray-600 hover:text-black">
              New Arrivals
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="w-[80%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="
    border
    border-gray-300
    rounded-lg
    p-2 md:p-4
    flex
    flex-col
  "
              >
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  onClick={() => navigate(`/item/${product.id}`)}
                  className="
  w-full
  h-40
  md:h-56
  lg:h-72
  object-cover
  rounded-lg
  cursor-pointer
"
                />

                <h3 className="mt-2 text-xs md:text-base font-bold text-black min-h-[40px] md:min-h-[50px]">
                  {product.name}
                </h3>

                <p className="font-bold text-black mt-1 text-sm md:text-base">
                  ₹{product.price}
                </p>

                <button
                  onClick={() => navigate(`/item/${product.id}`)}
                  className="
  mt-2
  w-full
  bg-yellow-400
  text-black
  py-2
  md:py-3
  rounded-md
  font-bold
  text-xs
  md:text-sm
"
                >
                  VIEW PRODUCT
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10 mb-10">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="
                  px-4
                  py-2
                  border
                  border-gray-300
                  rounded-md
                  disabled:opacity-40
                "
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`
                      px-4
                      py-2
                      rounded-md
                      font-bold
                      ${
                        page === i + 1
                          ? "bg-yellow-400 text-black"
                          : "border border-gray-300"
                      }
                    `}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="
                  px-4
                  py-2
                  border
                  border-gray-300
                  rounded-md
                  disabled:opacity-40
                "
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
