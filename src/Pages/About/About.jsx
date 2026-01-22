import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="h-[60vh] bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          About Our Hotel
        </motion.h1>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-6">
          Who We Are
        </motion.h2>
        <p className="text-gray-600 leading-7">
          We provide luxury hotel booking experiences with the best prices,
          premium locations, and trusted services across the world.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
          {["Best Price", "Luxury Hotels", "24/7 Support", "Secure Booking"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <h3 className="font-bold text-lg">{item}</h3>
                <p className="text-gray-500 mt-2">
                  High quality service guaranteed.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Journey With Us
        </h2>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold">
          Book Now
        </button>
      </section>

    </div>
  );
};

export default About;
