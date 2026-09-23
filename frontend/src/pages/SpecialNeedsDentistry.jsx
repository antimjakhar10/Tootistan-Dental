import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const carePoints = [
  {
    icon: HeartHandshake,
    title: "Patient & compassionate",
    text: "We take time to listen, understand individual needs, and create a more reassuring dental experience.",
  },
  {
    icon: Smile,
    title: "Comfort-focused",
    text: "Our approach is centered around making dental visits feel calm, respectful, and comfortable.",
  },
  {
    icon: UsersRound,
    title: "Individual attention",
    text: "Every patient has different needs, so care is approached with patience and personalization.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & trust",
    text: "We maintain a careful approach to hygiene, communication, and patient comfort throughout treatment.",
  },
];

const journey = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding the patient's needs, concerns, preferences, and comfort level.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "The visit and treatment approach are planned thoughtfully around the patient's individual requirements.",
  },
  {
    number: "03",
    title: "Care",
    text: "Treatment is delivered with patience, clear communication, and a focus on creating a positive experience.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
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

const SpecialNeedsDentistry = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-white text-[#2d2217]">
        {/* HERO */}
        <section className="relative bg-[#f4faf8] px-5 pb-10 pt-[115px] sm:px-8 lg:px-12 lg:pb-14">
          <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            {/* LEFT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f4ebd5] bg-white px-4 py-2 text-sm font-semibold text-[#42311d]"
              >
                <Heart size={16} />
                Special Needs Dentistry
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-7xl"
              >
                Dentistry built around{" "}
                <span className="text-[#42311d]">your needs.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-2xl text-base leading-8 text-black sm:text-lg"
              >
                Every patient deserves dental care that feels respectful,
                comfortable, and personal. Our approach focuses on
                understanding individual needs and creating a calmer dental
                experience.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <Link
                  to="/appointments"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
                >
                  Book an Appointment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#ebdcb8] bg-white px-6 py-3.5 text-sm font-semibold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
                >
                  Talk to Us
                </Link>
              </motion.div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#f7f0e3]/70 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-[0_25px_80px_rgba(23,59,53,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                  alt="Comfortable dental care"
                  className="h-[430px] w-full rounded-[1.5rem] object-cover sm:h-[520px]"
                />
            </div>
          </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                A more understanding approach
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Dental care should never feel intimidating.
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-2xl text-base leading-8 text-black sm:text-lg"
            >
              Some patients need additional time, communication, preparation,
              or reassurance during a dental visit. At Toothistan, we believe
              those needs deserve to be understood rather than rushed.
            </motion.p>
          </div>
        </section>

        {/* CARE FEATURES */}
        <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-14">
          <div className="mx-auto max-w-[1400px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                Our approach
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                More patience. More understanding. More comfort.
              </h2>

              <p className="mt-5 leading-8 text-white/90">
                We create an environment where patients can communicate their
                concerns and feel supported throughout their dental journey.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {carePoints.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5b757]/10 text-[#e5b757]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/90">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* COMFORT SECTION */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-[2rem]"
            >
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"
                alt="Patient-focused dental environment"
                className="h-[460px] w-full object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Your comfort matters
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                A dental visit shaped around the person, not just the
                treatment.
              </h2>

              <p className="mt-6 text-base leading-8 text-black">
                We take a patient-first approach by creating space for
                questions, concerns, preferences, and individual comfort
                levels.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Patient and respectful communication",
                  "Individualized appointment planning",
                  "Calm and supportive environment",
                  "Clear explanation before treatment",
                  "Comfort-focused dental care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-[#42311d]">
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    <span className="text-sm font-semibold text-[#2d2217] sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="bg-[#f4faf8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Your experience
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Care begins before treatment does.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-14 grid gap-5 md:grid-cols-3"
            >
              {journey.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="rounded-[1.75rem] border border-[#ebdcb8] bg-white p-7 shadow-[0_15px_50px_rgba(23,59,53,0.06)]"
                >
                  <span className="text-sm font-bold tracking-widest text-[#42311d]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#42311d] px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#2d2217]/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/85">
                  You deserve to feel comfortable
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Let&apos;s make your dental experience feel different.
                </h2>

                <p className="mt-4 leading-7 text-white/75">
                  Connect with Toothistan and share your dental needs with our
                  team.
                </p>
              </div>

              <Link
                to="/appointments"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#f7f0e3]"
              >
                Make An Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SpecialNeedsDentistry;