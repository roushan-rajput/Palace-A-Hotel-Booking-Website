import React from "react";
import Navbar from "../../Components/Navbar"

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      <Navbar/>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            About Palace Hotels
          </h1>
          <p className="text-gray-200 text-lg md:text-xl animate-slideUp">
            Where luxury meets comfort, and every stay becomes a royal memory.
          </p>
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
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "50K+", label: "Happy Guests" },
            { value: "25+", label: "Luxury Hotels" },
            { value: "100+", label: "Awards Won" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-4xl font-bold text-indigo-600">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ================= HAPPY CUSTOMERS ================= */}


      {/* ====================== HAPPY GUESTS ====================== */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Guests Who Trust Palace
            </h2>
            <p className="text-gray-600 text-lg">
              Every guest who stays with us leaves with memories, comfort, and a
              promise to return. Here’s what some of them shared about their stay.
            </p>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Card 1 */}
            <div className="group bg-gray-50 rounded-3xl p-10 border 
                      hover:border-indigo-600 hover:bg-white 
                      transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-20 h-20 rounded-full object-cover"
                  alt="Vikas Sharma"
                />
                <div>
                  <h4 className="text-xl font-semibold">Vikas Sharma</h4>
                  <p className="text-sm text-gray-500">Jaipur, India</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                I booked Palace Hotels for a family vacation and honestly didn’t expect
                this level of comfort. The rooms were spacious, the staff was helpful,
                and everything felt well managed. My parents loved it.
              </p>

              <div className="flex gap-1 text-yellow-400">
                ★★★★★
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-50 rounded-3xl p-10 border 
                      hover:border-indigo-600 hover:bg-white 
                      transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/48.jpg"
                  className="w-20 h-20 rounded-full object-cover"
                  alt="Ananya Roy"
                />
                <div>
                  <h4 className="text-xl font-semibold">Ananya Roy</h4>
                  <p className="text-sm text-gray-500">Kolkata, India</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                I travel frequently for work and Palace Hotels gave me a calm and
                peaceful experience after long meetings. Clean rooms, good food,
                and very professional staff. Worth every rupee.
              </p>

              <div className="flex gap-1 text-yellow-400">
                ★★★★★
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-50 rounded-3xl p-10 border 
                      hover:border-indigo-600 hover:bg-white 
                      transition-all duration-300">
              <div className="flex items-center gap-5 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/men/71.jpg"
                  className="w-20 h-20 rounded-full object-cover"
                  alt="Rohit Malhotra"
                />
                <div>
                  <h4 className="text-xl font-semibold">Rohit Malhotra</h4>
                  <p className="text-sm text-gray-500">Chandigarh, India</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                We booked Palace Hotels during my sister’s wedding. The arrangements,
                staff coordination, and hospitality were excellent. Guests were really
                impressed and so were we.
              </p>

              <div className="flex gap-1 text-yellow-400">
                ★★★★☆
              </div>
            </div>

          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-24 bg-indigo-600 text-white rounded-3xl p-14 
                    flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-3xl font-bold mb-3">
                Trusted by Thousands of Guests
              </h3>
              <p className="text-indigo-100 max-w-xl">
                From family vacations to business trips and special occasions,
                Palace Hotels continues to be a preferred choice for comfort and luxury.
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-10 py-4 rounded-full 
                         font-semibold hover:scale-105 transition">
              Book Your Experience
            </button>
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why Choose Palace Hotels
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "Royal Luxury Rooms",
            "World-Class Hospitality",
            "Prime Locations",
            "Premium Dining Experience",
            "24/7 Guest Support",
            "Unmatched Comfort",
          ].map((text, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{text}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We ensure every guest experiences the finest comfort, service,
                and luxury during their stay with us.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HAPPY CUSTOMERS ================= */}
      {/* <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Happy Guests & Success Stories
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "https://randomuser.me/api/portraits/men/45.jpg",
              "https://randomuser.me/api/portraits/women/56.jpg",
              "https://randomuser.me/api/portraits/men/67.jpg",
            ].map((img, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-2xl transition"
              >
                <img
                  src={img}
                  alt="Guest"
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-3">
                  “Palace Hotels gave us a truly royal experience. The service
                  and ambience were exceptional.”
                </p>
                <h4 className="font-semibold">Satisfied Guest</h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* ================= CTA ================= */}
      <section className="relative bg-indigo-600 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Experience Royal Hospitality
          </h2>
          <p className="text-indigo-100 mb-8">
            Book your stay with Palace Hotels and create memories that last a
            lifetime.
          </p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
