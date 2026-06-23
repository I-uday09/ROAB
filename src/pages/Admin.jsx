import { Package, Tags, Boxes, IndianRupee } from "lucide-react";
import { useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import axios from "axios";

function Admin() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const productsPerPage = 3;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");

      setProducts(response.data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-50 bg-black text-white flex flex-col">
          <div className="p-8">
            <h1 className="text-4xl font-bold">ROAB</h1>
            <p className="text-yellow-400 tracking-[0.3em] mt-2">STORE</p>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            <button className="w-full text-left px-4 py-3 bg-yellow-400 text-black font-semibold rounded-lg">
              Products
            </button>

            <button className="w-full text-left px-4 py-3 hover:bg-gray-900 rounded-lg">
              Orders
            </button>

            <button className="w-full text-left px-4 py-3 hover:bg-gray-900 rounded-lg">
              Categories
            </button>

            <button className="w-full text-left px-4 py-3 hover:bg-gray-900 rounded-lg">
              Customers
            </button>

            <button className="w-full text-left px-4 py-3 hover:bg-gray-900 rounded-lg">
              Reviews
            </button>

            <button className="w-full text-left px-4 py-3 hover:bg-gray-900 rounded-lg">
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}

        <main className="flex-1 p-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">PRODUCT MANAGER</h1>

              <p className="text-gray-500 mt-2">
                Manage all your products from here
              </p>
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="
    bg-yellow-400
    px-8
    py-4
    font-bold
    rounded-lg
  "
            >
              + ADD PRODUCT
            </button>
          </div>
          {/* Stats */}

          <div className="grid grid-cols-4 gap-6 mb-10">
            {/* Total Products */}
            <div className="bg-white p-6 rounded-xl border flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Products</p>

                <h2 className="text-3xl font-bold">128</h2>
              </div>

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <Package size={28} className="text-yellow-500" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl border flex items-center justify-between">
              <div>
                <p className="text-gray-500">Categories</p>

                <h2 className="text-3xl font-bold">12</h2>
              </div>

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <Tags size={28} className="text-yellow-500" />
              </div>
            </div>

            {/* Total Stock */}
            <div className="bg-white p-6 rounded-xl border flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Stock</p>

                <h2 className="text-3xl font-bold">2450</h2>
              </div>

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <Boxes size={28} className="text-yellow-500" />
              </div>
            </div>

            {/* Total Value */}
            <div className="bg-white p-6 rounded-xl border flex items-center justify-between">
              <div>
                <p className="text-gray-500">Total Value</p>

                <h2 className="text-3xl font-bold">₹24,85,000</h2>
              </div>

              <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                <IndianRupee size={28} className="text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Product Table */}

          <div className="bg-white rounded-xl border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 bg-gray-100 p-4 font-semibold">
              <div>#</div>
              <div>IMAGE</div>
              <div className="col-span-3">PRODUCT NAME</div>
              <div>PRICE</div>
              <div>STOCK</div>
              <div>COLOR</div>
              <div>SIZE</div>
              <div className="col-span-2">ACTION</div>
            </div>

            {currentProducts.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-12 items-center p-4 border-t"
              >
                <div>{startIndex + index + 1}</div>

                <img
                  src={item.images?.[0]}
                  alt=""
                  className="w-16 h-20 object-cover rounded-lg"
                />

                <div className="col-span-3">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>

                <div>₹{item.price}</div>

                <div>{item.quantity}</div>

                <div className="flex gap-2">
                  <div
                    className="w-5 h-5 rounded-full border"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                </div>

                <div>{item.size}</div>

                <div className="col-span-2 flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-yellow-400 font-bold">
                    &gt;
                  </button>

                  <button className="w-10 h-10 rounded-full bg-red-500 text-white font-bold">
                    ×
                  </button>
                </div>
              </div>
            ))}

            {/*Pra */}
            <div className="flex items-center justify-between p-6 border-t">
              {/* Left */}
              <div>
                <p className="text-gray-500">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(startIndex + productsPerPage, products.length)} of{" "}
                  {products.length} products
                </p>
              </div>

              {/* Center */}
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="w-10 h-10 border rounded-lg"
                >
                  &lt;
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === i + 1
                        ? "bg-yellow-400 font-bold"
                        : "border"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="w-10 h-10 border rounded-lg"
                >
                  &gt;
                </button>
              </div>

              {/* Right */}
              <div>
                <p className="text-gray-500 font-medium">
                  Page {currentPage} of {totalPages}
                </p>
              </div>
            </div>
          </div>
        </main>
        <AddProduct showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </>
  );
}

export default Admin;
