import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Hvideo1 from "../../assets/Hvideo1.mp4"
import fh from "../../assets/fh.mp4"
import b from "../../assets/b.mp4"
import r from "../../assets/r.mp4"
import v from "../../assets/v.mp4"
import logo from '../../Assets/Palace.png';


export default function Home() {
  return (
    <div className="w-full">
      <header
        className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20"
        aria-label="Main navigation header"
      >
        <div className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">
          <img
            src={logo}
            alt="Logo"
            className="sm-logo-img block h-55 w-55 object-contain"
            draggable={false}
            width={110}
            height={24}
          />
        </div>
      </header>
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
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get Started!!
          </Link>
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
                  hover:scale-105 hover:shadow-2xl relative transition duration-300">
            <div>
              <video
                className="absolute bottom-20 left-0 h-full  object-cover"
                src={fh}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="p-4 relative top-[190px] z-10">
              <h2 className="text-xl font-bold">Peaceful Stay</h2>
              <p className="text-gray-600">Manali</p>
              {/* <p className="text-indigo-600 font-semibold mt-2">
                ₹4500 / Night
              </p> */}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300 relative">
            <div>
              <video
                className="absolute bottom-20 left-0 h-full  object-cover"
                src={r}
                autoPlay
                loop
                muted
                playsInline
              /></div>

            <div className="p-4 relative top-[190px] z-10">
              <h2 className="text-xl font-bold">Sea View Resort</h2>
              <p className="text-gray-600">Goa</p>
              {/* <p className="text-indigo-600 font-semibold mt-2">
                ₹3800 / night
              </p> */}
            </div>
          </div>

          {/* CARD 3 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300 relative">
            <div>
              <video
                className="absolute bottom-20 left-0 h-full  object-cover"
                src={b}
                autoPlay
                loop
                muted
                playsInline
              /></div>
            <div className="p-4 relative top-[190px] z-10">
              <h2 className="text-xl font-bold">Grand  Banquet</h2>
              <p className="text-gray-600">Dehradun</p>

            </div>
          </div>
          {/* CARD 4 */}
          <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden 
                  hover:scale-105 hover:shadow-2xl transition duration-300">
            <video
              src={v}
              className="w-full h-44 object-cover"
              autoPlay
              loop
              muted
              playsInline>

            </video>
            <div className="p-4">
              <h2 className="text-xl font-bold">Let's Go On Trip</h2>
              <p className="text-gray-600"><select name="City" id=" " ></select></p>

            </div>
          </div>
        </div>
      </section>



      {/* ================= LUXURY EXPERIENCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
            className="rounded-3xl shadow-xl hover:scale-105 transition"
            alt="Luxury"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              A Royal Experience Awaits You
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Every Palace is designed to reflect royalty, elegance and comfort.
              From hand-picked interiors to world-class service, we take care of
              every little detail.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's a vacation, honeymoon or business stay — Palace
              promises unforgettable memories.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= STORY SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Journey of Excellence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Palace Hotels began with a vision to redefine luxury hospitality.
            From a single property to multiple iconic destinations, our journey
            has been driven by passion, dedication, and trust of our guests.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every corner of our hotels is designed to reflect elegance, comfort,
            and unforgettable experiences.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            alt="Hotel Interior"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section

        className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50K+", label: "Happy Guests" },
            { value: "25+", label: "Luxury Hotels" },
            { value: "100+", label: "Awards Won" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white-200 p-8 rounded-xl shadow hover:-translate-y-2 transition bg-pink-200"
            >
              <h3 className="text-4xl font-bold text-indigo-600">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-gray-10">
        <h2 className="text-3xl font-bold text-center mb-14">
          Why Choose Palace
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-24 ">
          {[
            ["Luxury Rooms", "Designed for royal comfort"],
            ["Prime Locations", "Heart of every city"],
            ["Fine Dining", "Taste curated by experts"],
            ["24x7 Service", "Hospitality at its best"],
            ["Event Friendly", "Perfect for celebrations"],
            ["Safe & Secure", "Your safety first"],
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-blue-00 p-8 rounded-3xl shadow-lg 
                   hover:-translate-y-2 hover:shadow-2xl transition  bg-blue-200"
            >
              <h3 className="text-xl font-semibold mb-3">{item[0]}</h3>
              <p className="text-gray-800">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-10">
          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="mt-2">Luxury Palaces</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="mt-2">Happy Guests</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="mt-2">Events Hosted</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">24x7</h3>
            <p className="mt-2">Support</p>
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