import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import name from "../assets/name.png";
import { ShoppingCart, EllipsisVertical } from "lucide-react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const count = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCartCount(count);
    };

    updateCartCount();

    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        updateCartCount
      );
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <nav className="sticky top-0 z-30 bg-black border-b border-gray-800">
        <div className="h-16 md:h-20 px-4 md:px-10 flex items-center justify-between relative">
          
          {/* Left Side */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-yellow-400 transition"
          >
            <EllipsisVertical size={26} />
          </button>

          {/* Center Logo */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={name}
              alt="ROAB"
              className="
                w-28
                md:w-44
                lg:w-52
                object-contain
              "
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:gap-8">
            

            {/* Cart */}
            <Link
              to="/cart"
              className="
                relative
                text-white
                hover:text-yellow-400
                transition
              "
            >
              <ShoppingCart size={24} />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    -top-2
                    -right-3
                    bg-yellow-400
                    text-black
                    text-[10px]
                    font-bold
                    min-w-[18px]
                    h-[18px]
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;