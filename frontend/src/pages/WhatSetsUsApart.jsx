import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waves,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const differentiators = [
  {
    icon: Waves,
    number: "01",
    title: "A Calm, Spa-Like Experience",
    text: "We have reshaped the dental environment to feel calm and reassuring rather than clinical and intimidating.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Gentle, Personal Care",
    text: "Every patient is different. We listen, explain, reassure, and shape the experience around individual comfort.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Modern Digital Precision",
    text: "Advanced digital tools and modern techniques help support accurate planning and a smoother treatment journey.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Hygiene You Can Trust",
    text: "Cleanliness and sterilization are treated as an essential part of patient care and peace of mind.",
  },
  {
    icon: Stethoscope,
    number: "05",
    title: "Comprehensive Dental Care",
    text: "From everyday oral care to aesthetic and more complex treatments, our approach is designed around your dental needs.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Dentistry as Self-Care",
    text: "We believe visiting the dentist can be something you look forward to — comfortable, thoughtful, and confidence-building.",
  },
];

const experiencePoints = [
  "Warm and welcoming environment",
  "Comfort-focused dental visits",
  "Modern technology and techniques",
  "Strong focus on hygiene",
  "Personalized treatment approach",
  "Clear communication and guidance",
];

export default function WhatSetsUsApart() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">

        <Navbar/>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f0e3] pt-[110px] pb-10 md:pt-[125px] md:pb-14">
        <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-[#42311d]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[#42311d]">
              <Sparkles size={16} />
              What Sets Us Apart
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Dentistry That Feels
              <span className="block text-[#42311d]">
                Different
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Toothistan brings together modern dental expertise, thoughtful
              technology, a calm environment, and genuine human connection to
              create an experience beyond traditional dentistry.
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
                to="/patients-comfort"
                className="inline-flex items-center gap-2 rounded-full border border-[#2d2217]/15 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#42311d]/30 hover:text-[#42311d]"
              >
                Explore Patient Comfort
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[34px] shadow-2xl shadow-[#2d2217]/10">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                alt="Modern dental clinic"
                className="h-[390px] w-full object-cover sm:h-[490px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <HeartHandshake size={16} />
                The Toothistan Experience
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                We changed the way
                <span className="block text-[#42311d]">
                  dentistry feels.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
              <p>
                At Toothistan, we care for your smile in every way. That means
                bringing together expert dental care and a calm, relaxing
                environment.
              </p>

              <p>
                We use modern dental technology while maintaining a strong
                focus on hygiene and patient safety. From the moment you enter,
                the goal is to help you feel comfortable and confident.
              </p>

              <p>
                Our approach is designed to make dental visits feel less
                stressful and more personal — because your comfort matters just
                as much as the treatment itself.
              </p>

              <p className="font-semibold text-[#2d2217]">
                It’s not just about teeth. It’s about how you feel throughout
                your dental journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 md:py-14 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#e5b757]">
              <Sparkles size={16} />
              Why Toothistan
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Six things that make
              <span className="block text-[#e5b757]">
                the experience different.
              </span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757] transition group-hover:bg-[#e5b757] group-hover:text-[#2d2217]">
                      <Icon size={22} />
                    </div>

                    <span className="text-3xl font-semibold text-white/10">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/90">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient First */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px]"
          >
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1100&q=85"
              alt="Comfort-focused dental care"
              className="h-[440px] w-full object-cover"
            />

            
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42311d]">
              Designed Around You
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Every detail has one
              <span className="block text-[#42311d]">
                purpose — your comfort.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-black">
              We believe a better dental experience comes from many small
              details working together — from the environment and hygiene to
              communication, technology, and gentle care.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {experiencePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-[#42311d]">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium text-black">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#f7f0e3] px-5 py-10 sm:px-8 md:py-12 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-[1000px] text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
            <Sparkles size={25} />
          </div>

          <blockquote className="mt-7 text-2xl font-semibold leading-relaxed tracking-tight sm:text-4xl">
            “Because feeling comfortable at the dentist shouldn’t be rare —
            <span className="text-[#42311d]">
              {" "}
              at Toothistan, it’s the norm.
            </span>
            ”
          </blockquote>

          <p className="mt-6 text-sm font-semibold text-[#2d2217]">
            Toothistan — Smile Building Nation
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#2d2217] px-6 py-12 text-white sm:px-10 md:py-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#42311d]/30 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e5b757]">
                Experience The Difference
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Where dentistry feels more like
                <span className="block text-[#e5b757]">
                  self-care.
                </span>
              </h2>
            </div>

            <Link
              to="/appointments"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#2d2217] transition hover:bg-[#e5b757]"
            >
              Make An Appointment
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer/>
    </div>
  );
}