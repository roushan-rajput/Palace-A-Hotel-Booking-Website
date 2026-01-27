import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import signupVideo from "../../assets/Signup1.mp4";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    if (form.password !== form.cpassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful ✅");

    setForm({
      name: "",
      email: "",
      contact: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={signupVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* 📄 Signup Card */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md rounded-2xl backdrop-blur-xl shadow-2xl p-6 border border-black/100"

        >
          <h2 className="text-3xl font-bold text-center text-gray-1000">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mt-2 mb-6">
            Join us and get started 🚀
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="contact"
              placeholder="Phone Number"
              value={form.contact}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              value={form.cpassword}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full rounded-xl bg-yellow-300 py-3 font-semibold text-black hover:bg-black hover:text-yellow-300 transition-colors duration-300"
            >
              Sign Up
            </motion.button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-yellow-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
