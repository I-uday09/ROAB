import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    
  };

  const updateQuantity = (index, change) => {
    const updatedCart = [...cart];

    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white min-h-screen text-black px-6 md:px-12 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold">YOUR CART</h1>

      <p className="text-gray-500 mt-3">Home / Cart</p>

      <div className="border-t border-gray-300 my-8"></div>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold">Your Cart Is Empty</h2>

          <button
            onClick={() => navigate("/")}
            className="
              mt-6
              bg-black
              text-white
              px-8
              py-3
              rounded
            "
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* Left Side */}
          <div className="lg:col-span-3">
            {/* Table Header */}
            {/* Cart Table */}
            <div className="border border-gray-300 overflow-hidden">
              {/* Header */}
              <div
                className="
      grid
      grid-cols-7
      bg-gray-200
      p-2
      font-semibold
      text-lg
    "
              >
                <div>PRODUCT</div>
                <div className="col-span-2"></div>
                <div>PRICE</div>
                <div className="col-span-2">QUANTITY</div>
                <div>TOTAL</div>
              </div>

              {/* Products */}
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="
        grid
        grid-cols-7
        items-center
        p-2
        border-t
        border-gray-400
      "
                >
                  {/* Image */}
                  <div>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="
            w-20
            h-24
            object-cover
            border
            border-gray-300
          "
                    />
                  </div>

                  {/* Product Name */}
                  <div className="col-span-2 ">
                    <h3 className="font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      Size: {item.size}
                      <span className="mx-3">|</span>
                      Color: {item.color}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="font-bold text-lg">₹{item.price}</div>

                  {/* Quantity */}
                  <div className="col-span-2 flex justify-start">
                    <div className="font-bold flex items-center border border-gray-300">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="
        w-9
        h-9
        text-xl
        border-r
        border-gray-300
        hover:bg-gray-100
      "
                      >
                        -
                      </button>

                      <span className="w-10 text-center font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="
        w-9
        h-9
        text-xl
        border-l
        border-gray-300
        hover:bg-gray-100
      "
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center ">
                    <span className="font-semibold text-lg">
                      ₹{item.price * item.quantity}
                    </span>

                    <button
                      onClick={() => removeItem(index)}
                      className="
            ml-5
            text-black
            text-3xl
            leading-none
          "
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate("/shop")}
                className="
      flex
      items-center
      gap-2
      border
      border-black
      px-8
      py-3
      font-semibold
      hover:bg-black
      hover:text-white
      transition
    "
              >
                <ArrowLeft size={18} />
                CONTINUE SHOPPING
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1">
            <div
              className="
      border
      border-gray-300
      sticky
      top-10
      bg-white
    "
            >
              {/* Header */}
              <div className="bg-gray-200 border-b border-gray-300 p-4">
                <h2 className="font-bold text-lg">CART TOTALS</h2>
              </div>

              <div className="p-6">
                {/* Subtotal */}
                <div className="flex justify-between pb-4 border-b border-gray-300">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{total}</span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <span>Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>

                {/* Payment Method */}
                <div className="py-4 border-b border-gray-300">
                  <p className="font-semibold mb-3">Payment Method</p>

                  <select
                    className="
            w-full
            border
            border-gray-300
            p-3
            bg-white
            outline-none
          "
                  >
                    <option>Cash On Delivery</option>

                    <option>Online Payment</option>

                    <option>Card Payment</option>

                    <option>Standard Payment</option>
                  </select>
                </div>

                {/* Total */}
                <div className="flex justify-between py-6 text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                {/* Checkout */}
                <button
                  onClick={() => navigate("/buy")}
                  className="
          w-full
          bg-yellow-400
          text-black
          mb-6
          py-3
          font-semibold
          hover:bg-gray-800
          transition
        "
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
