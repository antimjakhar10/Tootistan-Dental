import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Coffee, Headphones, Heart, HeartHandshake, Moon, ShieldCheck, Sparkles, Star, Stethoscope, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicTestimonials, getImageUrl } from "../services/api";
import { ToothDoctorMascot, ToothLoveMascot, FloatingMascotSticker } from "../components/DentalMascots";

const aboutFeatures = [
  {
    icon: Stethoscope,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Expert Team",
    text: "Our skilled dentists have gentle hands and years of experience. They work with care to keep your smile bright and make every visit comfortable.",
  },
  {
    icon: Sparkles,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Clean Space",
    text: "We keep our clinic spotless and fresh. From tools to treatment rooms, everything is cleaned to the highest hygiene and safety standards.",
  },
  {
    icon: Wrench,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Modern Methods",
    text: "We use the latest dental technology to make treatments smooth and stress-free. Our advanced tools help you feel relaxed at every step.",
  },
  {
    icon: HeartHandshake,
    iconBg: "bg-amber-50 text-amber-600",
    title: "Lasting Care",
    text: "We create custom plans to keep your teeth healthy for life. With the right care, your smile stays strong and beautiful for many years.",
  },
];

const About = () => {
  const [testimonialsList, setTestimonialsList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getPublicTestimonials();
        if (Array.isArray(data)) {
          setTestimonialsList(data);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials in About page:", err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-[100px] bg-[#faf8f4] text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute left-6 top-10 z-20 hidden lg:block opacity-90">
            <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-24 w-24" glowColor="rgba(20, 184, 166, 0.25)" badgeText="Toothistan Expert" />
          </div>

          <div className="pointer-events-none absolute right-8 top-10 z-20 hidden lg:block opacity-90">
            <FloatingMascotSticker MascotComponent={ToothLoveMascot} sizeClassName="h-24 w-24" glowColor="rgba(244, 63, 94, 0.25)" badgeText="Care & Trust" />
          </div>

          <div className="mx-auto max-w-[1400px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c48f32]">
              <Sparkles size={14} />
              About Toothistan
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Redefining Dentistry with <span className="text-[#c48f32]">Comfort & Precision</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black sm:text-lg">
              Welcome to Toothistan — an empire beyond dentistry. We bring painless care, serene surroundings, world-class sterilization and modern digital precision together to create a dental experience that feels completely different from the moment you walk in.
            </p>
          </div>
        </section>

        {/* Toothistan Began With A Big Dream Section */}
        <section className="bg-white py-10 sm:py-12 lg:py-14 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Toothistan Began With A Big Dream.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
                Not just a small idea, but a bold, different, "we-can-change-things" kind of dream. A dream where patients and dentists get more than just the basics—because everyone deserves better care, and better care means healthier, happier smiles. Our founder, wanted to make dentistry exciting again. He could have followed the usual way of doing things... but instead, he saw a chance to make going to the dentist feel different. What if visiting the dentist could make patients feel calm and happy instead of nervous? What if it could inspire our team every single day? What if dental care became part of self-care—a lifestyle you look forward to? And most importantly... would others believe in this idea too?
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-2xl shadow-md h-[380px] sm:h-[460px] relative"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Toothistan Founder & Dentist"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Toothistan Comfort Menu Section */}
        <section className="bg-white py-10 sm:py-12 lg:py-14 px-5 sm:px-8 lg:px-12 border-t border-gray-100">
          <div className="mx-auto max-w-[1280px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Toothistan Comfort Menu
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column - 4 Feature Lists */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-6"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                    Entertainment
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                    Enjoy Netflix with personal headphones in every suite for a private experience. Relax with calming background music for a stress-free dental visit. Kids can have fun in The Giggles Ground while they wait.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                    Pampering Touches
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                    Soothing aromatherapy scents to help you feel calm and refreshed. Warm lavender-scented towels for instant relaxation and comfort. Spa-style dental chairs designed for maximum ease and support.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                    Sips & Snacks
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                    Complimentary hot or cold drinks to keep you refreshed anytime. Fresh fruit-infused water for a light and healthy refreshment. Light snacks available to make your visit more pleasant.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2">
                    Peace of Mind
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                    Surgical-grade cleaning and hygiene standards in every room. Gentle, pain-free dental techniques for a worry-free experience. Clear treatment plans with attentive aftercare for every patient.
                  </p>
                </div>
              </motion.div>

              {/* Right Column - Menu Flyer Poster Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="w-full max-w-[420px] bg-[#ba5d23] text-white rounded-xl shadow-xl p-6 sm:p-8 flex relative overflow-hidden">
                  {/* Vertical left label */}
                  <div className="flex flex-col justify-center items-center border-r border-white/20 pr-4 mr-5 select-none shrink-0">
                    <span
                      className="text-lg font-bold tracking-[0.25em] text-[#f4cfb7] uppercase whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      EMS MENU
                    </span>
                  </div>

                  {/* Main poster content */}
                  <div className="flex-1 space-y-5 text-xs sm:text-sm">
                    {/* Header */}
                    <div className="text-center pb-2 border-b border-white/20">
                      <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider text-[#fde3d2]">
                        EASE MY SMILE MENU
                      </h4>
                      <p className="mt-1 text-[11px] sm:text-xs text-white/80 leading-tight">
                        We get it. The dental office isn't usually a place you'd look forward to...
                      </p>
                      <p className="mt-1 text-[11px] sm:text-xs font-semibold text-white">
                        We're here to change that.
                      </p>
                    </div>

                    {/* Block 1 */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-sm text-[#fde3d2]">Entertainment</h5>
                        <ul className="mt-1 space-y-0.5 text-white/90 text-[11px] sm:text-xs list-disc list-inside">
                          <li>Noise-Canceling Headphones</li>
                          <li>Netflix</li>
                          <li>Music Choices</li>
                        </ul>
                      </div>
                      <Headphones size={22} className="text-[#fde3d2] shrink-0 mt-1" />
                    </div>

                    {/* Block 2 */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-sm text-[#fde3d2]">Pampering</h5>
                        <ul className="mt-1 space-y-0.5 text-white/90 text-[11px] sm:text-xs list-disc list-inside">
                          <li>Hand Cream</li>
                          <li>Sleep Mask</li>
                          <li>Neck Pillow</li>
                        </ul>
                      </div>
                      <Moon size={22} className="text-[#fde3d2] shrink-0 mt-1" />
                    </div>

                    {/* Block 3 */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-sm text-[#fde3d2]">Calmness</h5>
                        <ul className="mt-1 space-y-0.5 text-white/90 text-[11px] sm:text-xs list-disc list-inside">
                          <li>Aroma Diffusing Scents</li>
                          <li>Oral Sedation</li>
                          <li>Serene Environment</li>
                        </ul>
                      </div>
                      <Sparkles size={22} className="text-[#fde3d2] shrink-0 mt-1" />
                    </div>

                    {/* Block 4 */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-sm text-[#fde3d2]">Dental Bar</h5>
                        <ul className="mt-1 space-y-0.5 text-white/90 text-[11px] sm:text-xs list-disc list-inside">
                          <li>Tea / Coffee</li>
                          <li>Cookies</li>
                          <li>Soft Drink</li>
                          <li>Beverages</li>
                        </ul>
                      </div>
                      <Coffee size={22} className="text-[#fde3d2] shrink-0 mt-1" />
                    </div>

                    {/* Footer logo */}
                    <div className="pt-2 text-right border-t border-white/20">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#fde3d2]">
                        TOOTHISTAN
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Built on Trust Feature Section */}
        <section className="bg-[#faf8f4] py-10 sm:py-12 lg:py-14 px-5 sm:px-8 lg:px-12 relative overflow-hidden border-t border-[#ebdcb8]/30">
          <div className="mx-auto max-w-[1380px] relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-10 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                <ShieldCheck size={16} className="text-[#9e6f21]" />
                <span>BUILT ON TRUST. DESIGNED FOR COMFORT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#9e6f21] leading-tight tracking-tight">
                Delivering Dental Care That Blends Precision, Luxury, And Personal Connection.
              </h2>
            </motion.div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {aboutFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="rounded-3xl bg-white p-7 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-[#ebdcb8]/30 flex flex-col items-center justify-between"
                  >
                    <div>
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto ${item.iconBg}`}
                      >
                        <Icon size={28} />
                      </div>

                      <h3 className="text-xl font-bold text-[#9e6f21] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="rounded-[32px] bg-[#2d2217] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                Our Vision Beyond Dentistry
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Unconventional. <span className="text-[#e5b757]">Unapologetically Bold.</span>
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "The Birth of an Idea",
                    text: "Toothistan was imagined as more than a clinic — an idea born out of courage to make dentistry calm, comforting, and beautifully human.",
                  },
                  {
                    title: "The Road Less Taken",
                    text: "Blending world-class digital precision with serene luxury and heartfelt empathy for every patient.",
                  },
                  {
                    title: "A City’s First — A New Way to Smile",
                    text: "It’s an out-of-the-box vision — one that demanded risk, resilience, and belief — to create something this city has never seen before. Here, anxiety fades, trust deepens, and smiles are not just treated — they’re nurtured, protected, and celebrated.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm font-bold text-[#e5b757]">0{idx + 1}</span>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/85">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-10 sm:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c48f32]">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                What Our Patients <span className="text-[#c48f32]">Say</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonialsList.length === 0 ? (
                <div className="col-span-2 text-center text-sm text-black py-8">
                  No patient testimonials available at the moment.
                </div>
              ) : (
                testimonialsList.map((item, index) => (
                  <div key={item._id || index} className="rounded-[26px] border border-[#ebdcb8] bg-[#faf8f4] p-7">
                    <div className="text-4xl leading-none text-[#e5b757]">“</div>
                    <p className="mt-3 leading-8 text-black">{item.review || item.text}</p>
                    <div className="mt-6 flex items-center gap-3">
                      {item.image ? (
                        <img src={getImageUrl(item.image)} alt={item.name} className="h-11 w-11 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4ebd5] text-sm font-bold text-[#2d2217]">
                          {item.name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-[#2d2217]">{item.name}</h3>
                        <p className="text-xs text-black">{item.role || "Patient"}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#faf8f4] px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#2d2217] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
              <Sparkles size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Redefining Dental Care with Heart & Precision.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90">
              Experience advanced dental care that blends expertise, comfort, and trust.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#c48f32] px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#d69e3d]"
              >
                Make An Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
