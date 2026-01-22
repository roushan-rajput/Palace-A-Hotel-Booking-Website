import { motion } from "framer-motion"
import { Link } from "react-router-dom"
// import bgVideo from "../assets/videos/hotel-bg.mp4"
// import Hvideo1 from "../assets/Hvideo1.mp4"
import Hvideo1 from "../../assets/Hvideo1.mp4"



export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION WITH VIDEO */}
      <section className="relative min-h-screen overflow-hidden">

        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Hvideo1}
          autoPlay
          loop
          muted
          playsInline
        />


        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 text-white flex flex-col items-center justify-center min-h-screen"
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Book Luxury Hotels
          </h1>
          <p className="text-lg mb-8">
            Best prices • Best locations • Best comfort
          </p>

          <Link
            to="/signup"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Book Now
          </Link>
        </motion.div>
      </section>

      {/* SEARCH SECTION */}
      <section className="bg-white py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg grid md:grid-cols-4 gap-4"
        >
          <input type="text" placeholder="City" className="p-3 rounded-lg" />
          <input type="date" className="p-3 rounded-lg" />
          <input type="date" className="p-3 rounded-lg" />
          <button className="bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700">
            Search
          </button>
        </motion.div>
      </section>

      {/* FEATURED HOTELS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Hotels
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {["Luxury Palace", "Ocean View", "City Lights"].map((hotel, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{hotel}</h3>
                <p className="text-gray-600 mt-2">
                  Starting from ₹4999 / night
                </p>
                <button className="mt-4 text-pink-600 font-semibold">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Ready to book your stay?
        </motion.h2>

        <Link
          to="/signup"
          className="bg-pink-600 px-10 py-3 rounded-full font-semibold hover:bg-pink-700"
        >
          Create Account
        </Link>
      </section>

    </div>
  )
}
