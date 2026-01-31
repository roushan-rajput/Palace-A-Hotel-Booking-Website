import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    checkin: "",
    checkout: "",
    persons: "",
    loggedemail: localStorage.getItem("email")
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const FetchData = () => {
    axios
      .get("http://localhost:4000/bookings")
      .then((res) => {
        const finalData = res.data.filter(
          (e) => e.loggedemail === localStorage.getItem("email")
        );
        setBookings(finalData);
      })
      .catch(() => console.log("Network issue"));
  };

  useEffect(() => {
    FetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/bookings/${editId}`, formData)
      .then((res) => {
        alert("🎉 Booking Updated Successfully!!");

        //  FORM STATE KO UPDATED DATA SE SET KARO
        setFormData(res.data);
        setEditId(null);
        //  LIST REFRESH
        FetchData();
      });

    // .catch (() => alert("Failed to update booking"))
  };

const DeleteBooking = (id) => {
  axios
    .delete(`http://localhost:4000/bookings/${id}`)
    .then(() => {
      FetchData();
      alert("Booking Deleted Successfully 🗑️");
    })
    .catch(() => alert("Delete failed"));
};

const formopen = (b) => {
  setEditId(b.id);
  setFormData({
    name: b.name,
    email: b.email,
    mobile: b.mobile,
    city: b.city,
    checkin: b.checkin,
    checkout: b.checkout,
    persons: b.persons,
    loggedemail: b.loggedemail   // 🔥 VERY IMPORTANT
  });
};


return (
  <>
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
      <NavLink
        to="/Loginhome"
        className="bg-yellow-500 text-black px-6 py-4 rounded-lg"
      >
        Go Back....
      </NavLink>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-10"
      >
        📑 My Bookings
      </motion.h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No bookings found 😔
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b, index) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold mb-2 text-indigo-600">
                {b.name}
              </h3>

              <div className="space-y-1 text-sm text-gray-700">
                <p>📧 {b.email}</p>
                <p>📱 {b.mobile}</p>
                <p>🏙️ {b.city}</p>
                <p>👥 Persons: {b.persons}</p>
                <p>
                  📅 {b.checkin} → {b.checkout}
                </p>
              </div>

              <button
                onClick={() => formopen(b)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
              >
                Edit Booking
              </button>

              <button
                onClick={() => DeleteBooking(b.id)}
                className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg"
              >
                Delete Booking
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>

    {editId && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.form
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl w-[90%] max-w-md space-y-4"
        >
          <h2 className="text-xl font-bold text-center">✏️ Edit Booking</h2>

          <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" />

          <div className="flex gap-2">
            <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} className="w-full p-2 border rounded" />
            <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>

          <input name="persons" value={formData.persons} onChange={handleChange} className="w-full p-2 border rounded" />

          <div className="flex gap-3">
            <button type="submit" className="flex-1 bg-green-600 text-white py-2 rounded">
              Update
            </button>
            <button
              type="button"
              onClick={() => Navigate("/Navbar")}
              className="flex-1 bg-gray-400 text-white py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      </div>
    )}

  </>
);
};

export default Booking;
