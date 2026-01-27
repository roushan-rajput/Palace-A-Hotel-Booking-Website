import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginVideo from "../../assets/Lvideo1.mp4";


const Login = () => {
  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please register first!");
      return;
    }

    if (email !== user.email || pass !== user.password) {
      alert("Invalid email or password");
      setPass("");
      return;
    }

    // alert("Login Successful ✅");
    navigate("/Loginhome");
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={loginVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 📄 Login Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl shadow-2xl p-6 border border-white/30">

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Login Here!!
          </h1>
          <p className="text-center text-gray-600 mb-5">
            Welcome back! Please login to your account
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-black transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-700 mt-6">
            © 2026 Admin Panel. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
