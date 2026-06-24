// LoginPage.jsx
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await axios.post(
        "https://darkplanet.qzz.io/auth/login",
        {
          username,
          password,
        },
      );

      localStorage.setItem("user", JSON.stringify(response.data));

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.detail || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Desktop Only */}
      <div className="hidden md:flex w-[25%] bg-black text-white flex-col items-center justify-center px-6">
        <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-6">
          <User size={50} className="text-yellow-400" />
        </div>

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-3">
          Welcome Back
        </h1>

        <p className="text-yellow-300 text-center text-lg max-w-xs">
          Login to continue your journey.
        </p>

        <div className="w-16 h-1 bg-yellow-400 mt-6 rounded-full"></div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-[75%] flex items-center justify-center px-6 py-6">
        <div className="w-full max-w-md">
          {/* Mobile Welcome */}
          <div className="md:hidden text-center mb-6">
            <div className="w-20 h-20 rounded-full border-4 border-yellow-400 flex items-center justify-center mx-auto mb-3">
              <User size={40} className="text-yellow-400" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Welcome Back
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Login to continue your journey.
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-2">
            Login
          </h1>

          <p className="text-center text-gray-500 text-sm mb-6">
            Please enter your credentials to access your account.
          </p>

          {/* Username */}
          <div className="mb-4">
            <label className="block font-semibold text-sm mb-1">USERNAME</label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <User size={18} />

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold text-sm mb-1">PASSWORD</label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />

              <Eye size={18} className="cursor-pointer" />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex justify-between items-center mt-3 mb-5 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button className="hover:text-yellow-500">Forgot password?</button>
          </div>

          {/* Login Button */}
          <button
            onClick={loginUser}
            className="w-full bg-black text-yellow-400 font-bold text-base py-3 rounded-xl hover:opacity-90 transition"
          >
            LOGIN
          </button>

          {/* Create Account Button */}
          <Link
            to="/register"
            className="block w-full text-center border-2 border-black text-black font-bold text-base py-3 rounded-xl mt-3 hover:bg-black hover:text-white transition"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}
