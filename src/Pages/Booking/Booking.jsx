import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  const FetchData = () => {
    axios
      .get("http://localhost:4000/bookings")
      // 


      
      .then((res) => setBookings(res.data))
      .catch(() => console.log("Network issue"));
  };

  const DeleteBooking = (id) => {
    axios.delete(`http://localhost:4000/bookings/${id}`)
      .then(() => {
        FetchData();
        alert("Booking Deleted Successfully 🗑️");
      })
      .catch(() => alert("Delete failed"));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-6">
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
                <p>📧 <span className="font-medium">{b.email}</span></p>
                <p>📱 {b.mobile}</p>
                <p>🏙️ {b.city}</p>
                <p>👥 Persons: {b.persons}</p>
                <p>
                  📅 <span className="font-semibold">{b.checkin}</span> →{" "}
                  <span className="font-semibold">{b.checkout}</span>
                </p>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => DeleteBooking(b.id)}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
              >
                Delete Booking
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
