import { motion } from "framer-motion";
import {
  ArrowRight,
  Brush,
  Check,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const treatments = [
  "Easy cleanings and checks",
  "Tips for brushing and flossing",
  "Keep gums strong and clean",
  "Find and fix small holes",
];

const carePoints = [
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    text: "Regular dental care helps keep your teeth and gums healthy and can help identify problems early.",
  },
  {
    icon: Brush,
    title: "Everyday Oral Health",
    text: "We help you understand practical brushing, flossing, and oral-care habits for maintaining a healthy smile.",
  },
  {
    icon: Stethoscope,
    title: "Dental Checkups",
    text: "Routine checks allow your dental needs to be assessed and appropriate care to be planned.",
  },
];

export default function GeneralDentistry() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#f7f0e3] pt-[110px] pb-10 md:pt-[125px] md:pb-14">
          <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-white/70 blur-3xl" />

          <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#42311d]/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[#42311d]">
                <Brush size={16} />
                General Dentistry
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Healthy Teeth.
                <span className="block text-[#42311d]">
                  Confident Smiles.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                We take care of your teeth to keep them healthy and stop
                problems before they start.
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
                  All Services
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
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85"
                  alt="General dental care"
                  className="h-[390px] w-full object-cover sm:h-[490px]"
                />
            </div>
          </motion.div>
          </div>
        </section>

        {/* Main Introduction */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                  <Sparkles size={16} />
                  Everyday Dental Care
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Care that keeps your
                  <span className="block text-[#42311d]">
                    smile healthy.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
                <p>
                  General dentistry is the foundation of a healthy smile. It
                  focuses on taking care of your teeth and gums, maintaining
                  good oral health, and identifying dental concerns before they
                  become bigger problems.
                </p>

                <p>
                  At Toothistan, our approach combines regular dental care with
                  clear guidance and a gentle experience designed to help you
                  feel comfortable throughout your visit.
                </p>

                <p className="font-medium text-[#2d2217]">
                  From routine checkups and cleanings to addressing everyday
                  dental concerns, our goal is simple — help you maintain a
                  healthy smile for the long term.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Original Treatment Content */}
        <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <Check size={16} />
                What We Help With
              </span>
          </motion.div>
          </div>
        </section>

        {/* Main Introduction */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                  <Sparkles size={16} />
                  Everyday Dental Care
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Care that keeps your
                  <span className="block text-[#42311d]">
                    smile healthy.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
                <p>
                  General dentistry is the foundation of a healthy smile. It
                  focuses on taking care of your teeth and gums, maintaining
                  good oral health, and identifying dental concerns before they
                  become bigger problems.
                </p>

                <p>
                  At Toothistan, our approach combines regular dental care with
                  clear guidance and a gentle experience designed to help you
                  feel comfortable throughout your visit.
                </p>

                <p className="font-medium text-[#2d2217]">
                  From routine checkups and cleanings to addressing everyday
                  dental concerns, our goal is simple — help you maintain a
                  healthy smile for the long term.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Original Treatment Content */}
        <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <Check size={16} />
                What We Help With
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Simple care for
                <span className="text-[#42311d]"> everyday needs.</span>
              </h2>

              <p className="mt-5 text-base leading-7 text-black sm:text-lg">
                Our general dentistry approach focuses on the fundamentals of
                maintaining healthy teeth and gums.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {treatments.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_15px_45px_rgba(23,59,53,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#42311d]/20 hover:shadow-[0_20px_55px_rgba(23,59,53,0.09)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d] transition group-hover:bg-[#42311d] group-hover:text-white">
                    <Check size={21} strokeWidth={2.5} />
                  </div>

                  <p className="text-sm font-semibold leading-6 text-[#2d2217] sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Care Points */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid gap-5 md:grid-cols-3">
              {carePoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(23,59,53,0.05)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Regular Care */}
        <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 md:py-14 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#e5b757]">
                <ShieldCheck size={16} />
                Preventive Approach
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Prevention is part of
                <span className="block text-[#e5b757]">
                  better dental care.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg">
                Taking care of your oral health regularly can help you stay
                aware of your dental needs and address concerns at an earlier
                stage.
              </p>
            </motion.div>

            <div className="space-y-3">
              {[
                "Regular dental checks",
                "Professional cleaning when needed",
                "Healthy brushing and flossing habits",
                "Early attention to dental concerns",
                "Guidance for maintaining healthy gums and teeth",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-medium text-white"
                >
                  <Check size={18} className="shrink-0 text-[#e5b757]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#f7f0e3] px-6 py-12 sm:px-10 md:py-16"
          >
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42311d]">
                  Toothistan
                </p>

                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Give your smile the
                  <span className="text-[#42311d]">
                    {" "}
                    care it deserves.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-black">
                  Take the next step towards maintaining a healthy, confident
                  smile.
                </p>
              </div>

              <Link
                to="/appointments"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
              >
                Request Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}