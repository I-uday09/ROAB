import defaultProfile from "../assets/defaultProfile.png";
import { Link } from "react-router-dom";
import {
  X,
  User,
  Package,
  MapPin,
  History,
  Settings,
  Heart,
  Bell,
  CircleHelp,
  LogOut,
} from "lucide-react";

function Sidebar({ isOpen, setIsOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 md:w-80 bg-black border-r border-gray-800 z-50 transition-transform duration-500 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-800">
          <h2 className="text-white text-base md:text-xl font-semibold">
            My Account
          </h2>

          <button onClick={() => setIsOpen(false)}>
            <X
              size={22}
              className="md:w-7 md:h-7 text-white hover:text-yellow-400 transition"
            />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 p-4 md:p-6 border-b border-gray-800">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-700">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg">
              {user?.name || "Guest User"}
            </h3>

            <p className="text-gray-400 text-xs md:text-sm">
              {user?.username || "Not Logged In"}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-b border-gray-800 py-2">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-6 py-4 text-white hover:bg-gray-900 hover:text-yellow-400 transition"
          >
            HOME
          </Link>

          <Link
            to="/shop"
            onClick={() => setIsOpen(false)}
            className="flex items-center px-6 py-4 text-white hover:bg-gray-900 hover:text-yellow-400 transition"
          >
            SHOP
          </Link>

          {user?.role === "admin" && (
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center px-6 py-4 text-yellow-400 hover:bg-gray-900 transition"
            >
              ADMIN PANEL
            </Link>
          )}
        </div>

        {/* Menu */}
        <div className="py-2 md:py-4">
          {user ? (
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition"
            >
              <User size={18} />
              <span className="text-sm md:text-base">Profile</span>
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-yellow-400 hover:bg-gray-900 transition"
            >
              <User size={18} />
              <span className="text-sm md:text-base">Login</span>
            </Link>
          )}

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <Package size={18} />
            <span className="text-sm md:text-base">Orders</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <MapPin size={18} />
            <span className="text-sm md:text-base">Addresses</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <History size={18} />
            <span className="text-sm md:text-base">History</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <Settings size={18} />
            <span className="text-sm md:text-base">Settings</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <Heart size={18} />
            <span className="text-sm md:text-base">Wishlist</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <Bell size={18} />
            <span className="text-sm md:text-base">Notifications</span>
          </button>

          <button className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-white hover:bg-gray-900 transition">
            <CircleHelp size={18} />
            <span className="text-sm md:text-base">Help & Support</span>
          </button>

          {!user ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-yellow-400 hover:bg-gray-900 transition"
            >
              <User size={18} />
              <span className="text-sm md:text-base">Login</span>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 text-red-400 hover:bg-gray-900 transition"
            >
              <LogOut size={18} />
              <span className="text-sm md:text-base">Logout</span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
