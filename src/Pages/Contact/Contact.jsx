import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Play } from "lucide-react";

export default function RoyalHotelContactPageV2() {
  return (
    <div className="bg-[#0b0a08] text-[#f5e6c8]">

      {/* 1. ROYAL HERO WITH VIDEO */}
      <section className="relative h-[90vh]">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-palace-courtyard-9714/1080p.mp4"
        />
        <div className="absolute inset-0 bg-black/65" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-6">
            Welcome To The Royal Palace
          </h1>
          <p className="max-w-2xl text-lg text-gray-200">
            Experience heritage luxury & timeless hospitality
          </p>
        </motion.div>
      </section>

      {/* 2. ROYAL CONTACT CARDS */}
      <section className="-mt-20 relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <Info title="Call" value="+91 98765 43210" icon={<Phone />} />
        <Info title="Email" value="royal@palacehotel.com" icon={<Mail />} />
        <Info title="Location" value="Udaipur, Rajasthan" icon={<MapPin />} />
        <Info title="Service" value="24x7 Royal Care" icon={<Clock />} />
      </section>

      {/* 3. ROYAL PHOTO GALLERY */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-center text-[#d4af37] mb-14"
        >
          Glimpses of Royalty
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map((img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              src={img}
              className="rounded-2xl shadow-2xl object-cover h-72 w-full"
            />
          ))}
        </div>
      </section>

      {/* 4. ROYAL EXPERIENCE VIDEO */}
      <section className="py-28 bg-[#11100d]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="relative rounded-3xl overflow-hidden border-4 border-[#d4af37]">
            <video
              controls
              className="w-full h-[450px] object-cover"
              src="https://cdn.coverr.co/videos/coverr-royal-hotel-interior-8832/1080p.mp4"
            />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-xl">
              <Play className="text-[#d4af37]" />
              <span className="text-sm">Royal Experience Tour</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. MAP IN ROYAL FRAME */}
      <section className="py-28 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-4 border-[#d4af37] rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps?q=Udaipur%20Rajasthan&output=embed"
            className="w-full h-[380px]"
          />
        </motion.div>
      </section>

      {/* 6. ROYAL CONTACT FORM */}
      <section className="py-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-[#11100d] border border-[#d4af37]/40 p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-serif text-center text-[#d4af37] mb-8">
            Send Your Royal Message
          </h2>
          <form className="space-y-6">
            <input className="w-full bg-transparent border border-[#d4af37]/40 p-3 rounded-xl" placeholder="Full Name" />
            <input className="w-full bg-transparent border border-[#d4af37]/40 p-3 rounded-xl" placeholder="Email Address" />
            <textarea rows="4" className="w-full bg-transparent border border-[#d4af37]/40 p-3 rounded-xl" placeholder="Your Message" />
            <button className="w-full bg-[#d4af37] text-black py-3 rounded-xl font-semibold hover:opacity-90 transition">
              Submit Message
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 Royal Palace Hotel • Heritage Luxury Since 1890
      </footer>
    </div>
  );
}

const gallery = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", // Udaipur palace style
  "https://images.unsplash.com/photo-1548013146-72479768bada", // Rajasthan palace interior
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b", // Heritage luxury palace
];

function Info({ title, value, icon }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-[#11100d] border border-[#d4af37]/40 rounded-2xl p-6 text-center shadow-xl"
    >
      <div className="text-[#d4af37] mx-auto mb-4">{icon}</div>
      <h3 className="font-serif text-lg">{title}</h3>
      <p className="text-gray-300 text-sm">{value}</p>
    </motion.div>
  );
}
