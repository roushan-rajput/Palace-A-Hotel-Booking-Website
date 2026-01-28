import { motion } from "framer-motion"
import StaggeredMenu from "../../Components/StaggeredMenu"

export default function Contact() {
  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <StaggeredMenu />
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Get In Touch With Royal Comfort
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’re here to assist you with bookings, luxury stays, events,
            and unforgettable palace experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-xl 
          rounded-2xl shadow-2xl p-10"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Contact Our Palace Team
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-black/40 
              focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-black/40 
              focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="p-3 rounded-lg bg-black/40 
              focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="p-3 rounded-lg bg-black/40 
              focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="md:col-span-2 p-3 rounded-lg bg-black/40 
              focus:ring-2 focus:ring-pink-500 outline-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:col-span-2 bg-pink-600 py-3 rounded-lg 
              font-semibold tracking-wide hover:bg-pink-700 transition"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {[
            { title: "Palace Address", desc: "Royal Palace Road, Udaipur, Rajasthan" },
            { title: "Call Us", desc: "011 2553 2553" },
            { title: "Email Us", desc: "support@luxurypalace.com" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Experience Royal Hospitality
        </motion.h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          From luxury stays to royal events, our palace team is ready
          to craft unforgettable memories for you.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="bg-pink-600 px-10 py-3 rounded-full font-semibold hover:bg-pink-700"
        >
          Book Your Stay
        </motion.button>
      </section>

    </div>
  )
}
