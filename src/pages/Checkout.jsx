import { useEffect, useState } from "react";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Order Placed Successfully!\n\nPayment Method: ${paymentMethod}`);
  };

  return (
    <div className="bg-white min-h-screen text-black px-6 md:px-12 py-10">
      {" "}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <h1 className="text-3xl font-bold">CHECKOUT</h1>

        <p className="text-gray-500 mt-2">Home / Checkout</p>

        <div className="border-t border-gray-300 my-8"></div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Billing Details */}

            <div>
              <h2 className="text-2xl font-bold mb-3">BILLING DETAILS</h2>

              <div className="space-y-4 p-3 border border-black">
                <div className="space-y-5">
                  <div>
                    <label className="block mb-2 font-medium">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      House / Street Address *
                    </label>

                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your street address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Apartment, Suite, Unit
                    </label>

                    <input
                      type="text"
                      name="apartment"
                      placeholder="Apartment, suite, unit (optional)"
                      value={formData.apartment}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Town / City *
                    </label>

                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">State *</label>

                    <input
                      type="text"
                      name="state"
                      placeholder="Enter your state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">Pin Code *</label>

                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter your pin code"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-4 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment + Summary */}

            <div>
              {/* Payment Method */}
              <div className="border border-gray-300">
                <div className="bg-gray-200 p-4 border-b border-gray-300">
                  <h2 className="font-bold text-lg">PAYMENT METHOD</h2>
                </div>

                <div className="p-6 space-y-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "Net Banking (UPI / Card)"}
                      onChange={() =>
                        setPaymentMethod("Net Banking (UPI / Card)")
                      }
                    />
                    Net Banking (UPI / Card)
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "Cash On Delivery"}
                      onChange={() => setPaymentMethod("Cash On Delivery")}
                    />
                    Cash On Delivery
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border border-gray-300 mt-8">
                <div className="bg-gray-200 p-4 border-b border-gray-300">
                  <h2 className="font-bold text-lg">ORDER SUMMARY</h2>
                </div>

                <div className="p-6">
                  <div className="flex justify-between pb-4">
                    <span>Subtotal</span>

                    <span className="font-semibold">₹{total}</span>
                  </div>

                  <div className="flex justify-between py-4 border-t border-gray-300">
                    <span>Shipping</span>

                    <span className="font-semibold">Free</span>
                  </div>

                  <div className="border-t border-gray-300 my-4"></div>

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>

                    <span>₹{total}</span>
                  </div>

                  <button
                    type="submit"
                    className="
          w-full
          mt-6
          bg-yellow-400
          text-black
          py-4
          font-bold
          hover:bg-yellow-500
          transition
        "
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
