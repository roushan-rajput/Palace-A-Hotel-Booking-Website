import { motion } from "framer-motion"
import Hvideo1 from "../../assets/Hvideo1.mp4"
import Navbarlogin from "../../Components/Navbarlogin"

export default function Dashboard() {
  return (
    <div className="w-full bg-[#ffffff] text-white overflow-hidden">
      <Navbarlogin/>

      {/* ================= CINEMATIC HERO ================= */}
      <section className="relative h-screen flex items-center justify-center">

        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src={Hvideo1}
        />

        <div className="absolute inset-0 bg-black/10" />

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-6xl font-extrabold tracking-wide text-yellow-400"
          >
            Now! Book your Palace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-lg text-gray-300"
          >
            This private space is reserved only for our royal guests.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= ROYAL MOODS ================= */}
      <section className="py-32 px-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-20 text-yellow-400"
        >
          Choose Your Royal Mood
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "The Royal Rest",
              img: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
            },
            {
              title: "The Grand Escape",
              img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            },
            {
              title: "The Celebration Hall",
              img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-8">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ROYAL RECOMMENDATIONS ================= */}
      <section className="bg-[#0c0c0c] py-32 px-10">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold mb-16 text-yellow-400"
          >
            Curated Just For You
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Maharaja Heritage Suite",
              "Lakefront Marble Palace",
              "Private Garden Villa"
            ].map((room, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#141414] rounded-2xl p-8 border border-yellow-500/10 hover:border-yellow-500/40 transition"
              >
                <h4 className="text-xl font-semibold mb-4 text-yellow-300">
                  {room}
                </h4>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Designed for guests who appreciate silence, luxury
                  and royal comfort beyond imagination.
                </p>
                <button className="text-yellow-400 hover:underline">
                  Unlock Experience →
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL ROYAL MESSAGE ================= */}
      <section className="py-40 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 italic text-lg"
        >
          “Not a hotel. Not a stay.  
          This is a royal lifestyle.”
        </motion.p>
      </section>

    </div>
  )
}
