import { motion } from "framer-motion"
import { div } from "framer-motion/client"
import { NavLink } from "react-router-dom"


export default function BookingForm() {

  return (

    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-black via-gray-900 to-black px-4">

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-xl 
        p-8 rounded-2xl shadow-2xl w-full max-w-xl text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Luxury Palace Booking
        </h2>
        <NavLink to="/Loginhome"
          className="bg-yellow-500 text-black px-4 py-1 rounded-lg"
        >
          Go Back....
        </NavLink>

        {/* FORM */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-black/40 
            focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email ID"
            className="w-full p-3 rounded-lg bg-black/40 
            focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-lg bg-black/40 
            focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <input
            type="text"
            placeholder="City"
            className="w-full p-3 rounded-lg bg-black/40 
            focus:ring-2 focus:ring-pink-500 outline-none"
          />

          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="p-3 rounded-lg bg-black/40" />
            <input type="date" className="p-3 rounded-lg bg-black/40" />
          </div>

          <input
            type="number"
            placeholder="No. of Persons"
            className="w-full p-3 rounded-lg bg-black/40 
            focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-pink-600 py-3 rounded-lg 
            font-semibold tracking-wide hover:bg-pink-700 transition"
          >
            Book Palace
          </motion.button>

        </form>
      </motion.div>
    </div>
  )
}
