import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  HeartHandshake,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const visitSteps = [
  {
    number: "01",
    icon: Clock3,
    title: "Smooth Arrival & Quick Check-In",
    text: "First, you’ll be greeted by our friendly staff and enjoy a quick check-in with little waiting. You can fill out your forms easily online or on our tablet, making your arrival stress-free and simple.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Warm Welcome & Comfort Touches",
    text: "Then, relax with a refreshing drink while soft lighting and calm music help you feel at ease. You can even watch Netflix with noise-canceling headphones. At Toothistan, we make your visit feel like a peaceful spa experience, not just a dental checkup.",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "Gentle Exam & State-of-the-Art Diagnostics",
    text: "Next, our expert team will perform a gentle exam using the latest tools like digital X-rays and Intra Oral Scanner. This way, every part of your care is safe, accurate, and planned just for you.",
  },
  {
    number: "04",
    icon: Stethoscope,
    title: "Personalized Treatment Planning",
    text: "After the exam, we’ll review the results and help you understand your dental needs clearly, so you can make confident decisions about your care.",
  },
];

const comfortPoints = [
  "A calm and welcoming environment",
  "Gentle and personalized attention",
  "Modern diagnostic technology",
  "Clear communication about your care",
];

export default function FirstVisitExpectations() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#2d2217]">
        {/* HERO */}
        <section className="relative px-5 pb-10 pt-24 sm:px-8 lg:px-12 lg:pb-14 lg:pt-28">
          <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-[#e8f4ef] blur-3xl" />

          <div className="relative mx-auto max-w-[1280px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#42311d] shadow-sm"
              >
                <Sparkles size={14} />
                Your First Visit
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              >
                Welcome to a{" "}
                <span className="text-[#42311d]">Relaxed</span> First Visit
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-7 max-w-4xl text-base leading-8 text-black sm:text-lg"
              >
                At Toothistan, your first visit is all about feeling calm and
                cared for. From the moment you arrive, you will experience a
                peaceful and stress-free space. We focus on making you
                comfortable, so your visit is easy and reassuring. Plus, our
                expert team uses precise care to ensure your smile stays
                healthy and bright.
              </motion.p>
            </motion.div>

            {/* Small floating info cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3"
            >
              {[
                {
                  icon: HeartHandshake,
                  title: "Feel Comfortable",
                  text: "Care designed around you",
                },
                {
                  icon: ShieldCheck,
                  title: "Feel Confident",
                  text: "Thoughtful and precise care",
                },
                {
                  icon: Sparkles,
                  title: "Feel Welcomed",
                  text: "A calmer dental experience",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#ebdcb8] bg-white p-5 shadow-[0_15px_45px_rgba(23,59,53,0.06)]"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                      <Icon size={19} />
                    </div>

                    <h3 className="font-bold text-[#2d2217]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-black">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* MAIN FIRST VISIT SECTION */}
        <section className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* CONTENT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 flex items-center gap-3"
              >
                <span className="h-px w-10 bg-[#42311d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                  What To Expect
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl"
              >
                What to Expect on Your{" "}
                <span className="text-[#42311d]">First Visit</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-base leading-7 text-black"
              >
                Your first visit is designed to feel simple, comfortable and
                reassuring. Every step is thoughtfully planned to help you
                understand your care and feel confident moving forward.
              </motion.p>

              <motion.div
                variants={stagger}
                className="mt-9 space-y-4"
              >
                {visitSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={step.number}
                      variants={fadeUp}
                      className="group flex gap-4 rounded-2xl border border-[#ebdcb8] bg-white p-4 shadow-[0_12px_35px_rgba(23,59,53,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,59,53,0.08)]"
                    >
                      <div className="flex shrink-0 flex-col items-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d2217] text-white">
                          <Icon size={18} />
                        </div>

                        <span className="mt-2 text-[10px] font-bold tracking-widest text-[#8f621a]">
                          {step.number}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-extrabold text-[#2d2217] sm:text-lg">
                          {step.title}
                        </h3>

                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-3xl border border-[#ebdcb8] bg-[#f7f0e3] lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white shadow-[0_30px_80px_rgba(23,59,53,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=85"
                  alt="Modern dental treatment room"
                  className="h-[430px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMFORT STRIP */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="overflow-hidden rounded-[2rem] bg-[#2d2217]">
              <div className="grid lg:grid-cols-[1fr_1.15fr]">
                <div className="relative min-h-[300px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85"
                    alt="Comfortable dental care"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="p-8 sm:p-10 lg:p-12 text-white">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                    Patient Comfort Promise
                  </span>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Your Comfort Is Always Our Highest Priority
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/90">
                    From gentle care to transparent explanations, we ensure your first visit and every visit afterwards feels relaxed and reassuring.
                  </p>
                  <Link
                    to="/appointments"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c48f32] px-6 py-3 text-sm font-bold text-[#2d2217] transition hover:bg-[#d69e3d]"
                  >
                    Book Your First Visit
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}