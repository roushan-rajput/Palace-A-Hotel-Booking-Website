import { motion } from "framer-motion"
import logo from '../../assets/Palace.png';

export default function About() {
  return (
    <div className="w-full bg-[#0b0b0b] text-white overflow-hidden">
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
            width={11}
            height={24} 
          />
        </div>
      </header>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl font-extrabold mb-6">
            Where Royalty Meets Reality
          </h1>
          <p className="text-gray-300 text-lg">
            Our palace hotels are not just destinations — they are
            stories of legacy, passion, and unforgettable experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= SUCCESS STORY ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-[#111]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Success Story
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              What began as a single heritage palace has now grown into
              one of India’s most admired luxury hotel brands.
              Our vision was simple — preserve royal architecture
              while delivering world-class comfort.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over the years, we restored forgotten palaces,
              transformed them into living experiences, and welcomed
              guests from all corners of the world.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="py-24 px-6 bg-black/80">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Journey Through Time
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {[
            { year: "2010", text: "First heritage palace restored and opened for guests." },
            { year: "2014", text: "Expanded to luxury destinations across Rajasthan." },
            { year: "2018", text: "Recognized as one of India’s finest palace stays." },
            { year: "2023", text: "Serving over 1 lakh happy royal guests worldwide." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6 items-start"
            >
              <span className="text-pink-500 text-2xl font-bold">
                {item.year}
              </span>
              <p className="text-gray-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HAPPY CUSTOMERS ================= */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#111] to-black">
        <h2 className="text-4xl font-bold text-center mb-16">
          Happy Royal Guests
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Aarav Mehta",
              quote: "Staying here felt like living inside history. Truly unforgettable.",
              img: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              name: "Nisha Kapoor",
              quote: "Luxury, peace and elegance — every detail was perfect.",
              img: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              name: "Rohan Singh",
              quote: "The hospitality made us feel like royalty from day one.",
              img: "https://randomuser.me/api/portraits/men/65.jpg"
            },
          ].map((guest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 p-6 rounded-2xl shadow-xl 
              hover:scale-105 transition"
            >
              <img
                src={guest.img}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-300 italic mb-3">
                “{guest.quote}”
              </p>
              <h4 className="font-semibold">
                {guest.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="py-24 px-6 bg-black/90">
        <h2 className="text-4xl font-bold text-center mb-14">
          Awards & Recognition
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            "Best Luxury Palace Hotel – India",
            "Excellence in Heritage Hospitality",
            "Top Royal Stay Experience Award"
          ].map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="border border-white/20 p-8 rounded-2xl
              hover:border-pink-500 transition"
            >
              <h3 className="text-lg font-semibold">
                {award}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center px-6 bg-gradient-to-t from-black to-[#111]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Experience the Legacy Yourself
        </motion.h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Come, be part of a story where luxury meets history
          and every stay becomes a memory.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-pink-600 px-12 py-4 rounded-full 
          font-semibold hover:bg-pink-700"
        >
          Book Royal Stay
        </motion.button>
      </section>

    </div>
  )
}
