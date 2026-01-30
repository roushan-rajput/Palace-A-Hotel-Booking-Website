import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Bookingform() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    checkin: "",
    checkout: "",
    persons: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (formData.name.trim() === "") {
      alert("Name is required");
      valid = false;
    }

    if (valid) {
      let api = "http://localhost:4000/bookings";
      let loggedemail = localStorage.getItem("email");

      axios
        .post(api, { ...formData, loggedemail })
        .then(() => {
          alert("🎉 Booking Confirmed!!");
        })
        .catch(() => {
          alert("❌ Booking Failed");
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-xl 
        p-8 rounded-2xl shadow-2xl w-full max-w-xl text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Luxury Palace Booking
        </h2>

        <NavLink 
          to="/Loginhome"
          className="bg-yellow-500 text-black px-4 py-1 rounded-lg"
        >
          Go Back....
        </NavLink>

        <br /><br />

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-black/40"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email ID"
            className="w-full p-3 rounded-lg bg-black/40"
          />

          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-lg bg-black/40"
          />

          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="w-full p-3 rounded-lg bg-black/40"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              type="date"
              className="p-3 rounded-lg bg-black/40"
            />

            <input
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              type="date"
              className="p-3 rounded-lg bg-black/40"
            />
          </div>

          <input
            name="persons"
            value={formData.persons}
            onChange={handleChange}
            type="number"
            placeholder="No. of Persons"
            className="w-full p-3 rounded-lg bg-black/40"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-pink-600 py-3 rounded-lg"
          >
            Book Palace
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
}
