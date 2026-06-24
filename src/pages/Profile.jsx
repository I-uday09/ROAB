// Profile.jsx

import { Link } from "react-router-dom";
import defaultProfile from "../assets/defaultProfile.png";
import logo from "../assets/logo.png";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Please Login First</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side */}
      <div className="flex w-[30%] md:w-[30%] lg:w-[30%] bg-black text-white flex-col items-center justify-center px-2 md:px-4 lg:px-6">
        <div className="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-3 md:mb-6 border-2 md:border-4 border-yellow-400 bg-white">
          <img src={logo} alt="ROAB" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-xs md:text-3xl lg:text-4xl font-bold text-yellow-400 text-center mb-2 md:mb-3">
          My Profile
        </h1>

        <p className="hidden md:block text-sm lg:text-lg text-yellow-300 text-center max-w-xs">
          Manage your personal information and account details.
        </p>

        <div className="hidden md:block w-16 h-1 bg-yellow-400 mt-6 rounded-full"></div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[70%] lg:w-[70%] p-3">
        <div className="border border-gray-200 rounded-xl p-6 min-h-[95vh]">
          {/* Mobile Header */}
          <div className="md:hidden text-center mb-8">
            

            <h1 className="text-3xl font-bold mt-4">My Profile</h1>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400">
              <img
                src={defaultProfile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 md:mt-10 space-y-4 md:space-y-6 text-sm md:text-lg max-w-xl mx-auto">
            <div>
              <p className="font-bold mb-2">Name</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                {user.name}
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Username</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                {user.username}
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Email</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                {user.email}
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">Password</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                *****
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">My Cart</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                <span>
                  {cart.length === 0 ? "Empty" : `${cart.length} Products`}
                </span>

                <Link
                  to="/cart"
                  className="text-white font-semibold hover:text-yellow-300"
                >
                  See Cart
                </Link>
              </div>
            </div>

            <div>
              <p className="font-bold mb-2">My Orders</p>

              <div className="bg-black text-yellow-400 px-4 py-3 rounded-lg w-full md:w-[500px]">
                <span>0 Orders</span>

                <Link
                  to="/orders"
                  className="text-white font-semibold hover:text-yellow-300"
                >
                  See Orders
                </Link>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 md:gap-4 mt-10">
            <button
              className="
    bg-yellow-400
    text-black
    font-bold
    text-sm
    md:text-base
    py-2.5
    md:py-3
    rounded-lg
    hover:opacity-90
    transition
    mr-3
  "
            >
              UPDATE
            </button>

            <button
              className="
    bg-black
    text-white
    font-bold
    text-sm
    md:text-base
    py-2.5
    md:py-3
    rounded-lg
    hover:bg-gray-800
    transition
  "
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
