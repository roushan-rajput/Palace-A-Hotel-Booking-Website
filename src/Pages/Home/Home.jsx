import { motion } from "framer-motion"
import { Link } from "react-router-dom"
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
            Book Luxury Palace
          </h1>
          <p className="text-lg mb-8">
            • Book Luxury • Feel Luxury
          </p>

          <Link
            to="/signup"
            className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Book it!!
          </Link>
        </motion.div>
      </section>

      {/*------------------------------------------------------SEARCH SECTION---------------------------------------------------------------- */}
      <section className="bg-white py-122">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-lg grid md:grid-cols-4 gap-4"
        >
          {/* <input type="text" placeholder="City" className="p-3 rounded-lg" /> */}
          <select className="p-3 rounded-lg" id="" >
            {/* <option >City</option> */}
            <option value="">Delhi</option>
            <option value="">Mumbai</option>
            <option value="">Gao</option>
            <option value="">Banglore</option>
            <option value="">Pune</option>
            <option value="">Bhopal</option>
            <option value="">Jaipur</option>
            <option value="">Udaipur</option>
            <option value="">Chennai</option>
            <option value="">Patna</option>
            <option value="">Manali</option>
          </select>
          <input type="date" className="p-3 rounded-lg" />
          <input type="date" className="p-3 rounded-lg" />
          <button className="bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700">
            Search
          </button>
        </motion.div>
      </section>

      {/*------------------------------------------------FEATURED HOTELS --------------------------------------------------------*/}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Palace
        </h2>
        <div className="flex gap-6 justify-center mt-10">

          {/* CARD 1 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src="src/assets/h1.jpg"
              alt="Hotel 1"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">Sea View Resort</h2>
              <p className="text-gray-600">Goa</p>
              <p className="text-indigo-600 font-semibold mt-2">
                ₹4500 / Night
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="Hotel 2"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">Mountain Palace</h2>
              <p className="text-gray-600">Manali</p>
              <p className="text-indigo-600 font-semibold mt-2">
                ₹3800 / night
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
              alt="Hotel 3"
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">City Grand Hotel</h2>
              <p className="text-gray-600">Delhi</p>
              <p className="text-indigo-600 font-semibold mt-2">
                ₹5200 / night
              </p>
            </div>
          </div>

        </div>



      </section>

      {/*---------------------------------------------------------------------CTA SECTION---------------------------------------------------------------------------------*/}
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
