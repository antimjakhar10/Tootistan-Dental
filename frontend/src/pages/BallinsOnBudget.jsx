import { motion } from "framer-motion";
import { ArrowRight, Check, Gem, Heart, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const highlights = [
  {
    icon: Gem,
    title: "Premium Experience",
    text: "A thoughtfully designed dental experience where comfort and quality remain at the heart of every visit.",
  },
  {
    icon: Sparkles,
    title: "Precision-Driven Care",
    text: "Modern technology and thoughtful treatment planning come together for a refined dental experience.",
  },
  {
    icon: Heart,
    title: "Feel Valued",
    text: "True luxury is about feeling cared for, respected, comfortable, and confident throughout your journey.",
  },
  {
    icon: ShieldCheck,
    title: "Care You Can Trust",
    text: "From hygiene to patient comfort, every detail is approached with care and attention.",
  },
];

export default function BallinsOnBudget() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f0e3] pt-[110px] pb-10 md:pt-[125px] md:pb-14">
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[#42311d]">
              <WalletCards size={16} />
              Luxury Without The Big Price
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Premium Dentistry.
              <span className="block text-[#42311d]">Thoughtful Spending.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              At Toothistan, we believe every visit should feel special. From our beautiful, comfortable space to the little details you take home, we focus on delivering a premium experience without making quality feel out of reach.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
              >
                Make An Appointment
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#2d2217]/15 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#42311d]/30 hover:text-[#42311d]"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="overflow-hidden rounded-[34px] shadow-2xl shadow-[#2d2217]/10">
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
                alt="Premium dental care experience"
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ballin' On a Budget Feature Section */}
      <section className="bg-[#faf8f4] py-12 lg:py-16 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-center text-center items-center border border-[#ebdcb8]/40"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#9e6f21] tracking-tight">
              Ballin’ On a Budget
            </h2>

            <p className="mt-3 text-base sm:text-lg text-gray-500 font-medium">
              Who says a beautiful smile can't be smart spending?
            </p>

            <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-gray-700 max-w-xl">
              <p>
                True luxury isn't about spending more — it's about{" "}
                <strong className="font-extrabold text-[#2d2217]">feeling valued.</strong>
              </p>

              <p>
                At <strong className="font-extrabold text-[#2d2217]">Toothistan</strong>, every detail — from precision-driven technology to tranquil design — delivers a premium experience without inflated costs.
              </p>

              <p>
                Because excellence should feel{" "}
                <strong className="font-extrabold text-[#2d2217]">exclusive</strong>, not expensive.{" "}
                <strong className="font-extrabold text-[#2d2217]">World-class Dentistry, yet at an Affordable Price.</strong>
              </p>
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem] shadow-sm min-h-[350px] lg:min-h-[440px] relative"
          >
            <img
              src="/image5.png"
              alt="Clean & Safe Spaces"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-2xl border border-[#ebdcb8] bg-[#faf8f4] p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b88228] shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-bold text-[#2d2217]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
