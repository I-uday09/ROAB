// RegisterPage.jsx
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye } from "lucide-react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://darkplanet.qzz.io/auth/register",
        {
          name,
          username,
          email,
          password,
        },
      );

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.detail || "Registration Failed");
    }
  };
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Desktop */}
      <div className="hidden md:flex w-[25%] bg-black text-white flex-col items-center justify-center px-6">
        <div className="w-24 h-24 rounded-full border-4 border-yellow-400 flex items-center justify-center mb-6">
          <User size={50} className="text-yellow-400" />
        </div>

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-3">
          Join ROAB
        </h1>

        <p className="text-yellow-300 text-center text-lg max-w-xs">
          Create your account and become a ROAB explorer.
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

            <h2 className="text-3xl font-bold text-black">Join ROAB</h2>

            <p className="text-gray-500 text-sm mt-2">
              Create your account and start exploring.
            </p>
          </div>

          <h1 className="text-4xl font-bold text-black text-center mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-500 text-sm mb-6">
            Fill in your details to create a new account.
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="block font-semibold text-sm mb-1">
              FULL NAME
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <User size={18} />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block font-semibold text-sm mb-1">USERNAME</label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <User size={18} />

              <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold text-sm mb-1">EMAIL</label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-semibold text-sm mb-1">PASSWORD</label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />

              <Eye size={18} className="cursor-pointer" />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-semibold text-sm mb-1">
              CONFIRM PASSWORD
            </label>

            <div className="flex items-center border rounded-xl px-4 py-3">
              <Lock size={18} />

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="ml-3 w-full outline-none text-sm"
              />

              <Eye size={18} className="cursor-pointer" />
            </div>
          </div>

          {/* Terms */}
          <div className="mt-3 mb-5 text-sm">
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>I agree to the Terms & Conditions and Privacy Policy.</span>
            </label>
          </div>

          {/* Create Account */}
          <button
            onClick={registerUser}
            className="w-full bg-black text-yellow-400 font-bold text-base py-3 rounded-xl hover:opacity-90 transition"
          >
            CREATE ACCOUNT
          </button>

          {/* Login */}
          <Link to="/login">
            <button className="w-full border-2 border-black text-black font-bold text-base py-3 rounded-xl mt-3 hover:bg-black hover:text-white transition">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
