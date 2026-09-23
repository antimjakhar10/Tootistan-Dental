import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cpu,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
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

const technologyPoints = [
  {
    icon: ScanLine,
    title: "Digital Precision",
    text: "Modern digital tools help make treatment planning more precise, streamlined, and comfortable.",
  },
  {
    icon: Microscope,
    title: "Detailed Care",
    text: "Technology supports our team in understanding dental needs carefully and planning treatment around each patient.",
  },
  {
    icon: Workflow,
    title: "Smarter Workflows",
    text: "Digital processes help bring greater efficiency and clarity to different stages of your dental journey.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Hygiene",
    text: "Technology works alongside rigorous hygiene practices to support a clean and reassuring clinical environment.",
  },
];

const benefits = [
  "More precise treatment planning",
  "A smoother and more comfortable experience",
  "Modern digital precision",
  "Clearer understanding of treatment",
  "Efficient clinical workflows",
  "Technology combined with human care",
];

export default function DentalTechnology() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">
        <Navbar/>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f0e3] pt-[110px] pb-10 md:pt-[125px] md:pb-14">
        <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#42311d]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[#42311d]">
              <Cpu size={16} />
              Dental Technology
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Where Modern
              <span className="block text-[#42311d]">
                Precision Meets Care
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              At Toothistan, modern technology is part of a bigger goal — to
              make dental care more precise, efficient, comfortable, and
              reassuring for every patient.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[34px] shadow-2xl shadow-[#2d2217]/10">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85"
                alt="Modern dental technology"
                className="h-[380px] w-full object-cover sm:h-[480px]"
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
            className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <Sparkles size={16} />
                Technology That Cares
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Technology should make
                <span className="block text-[#42311d]">
                  dentistry feel easier.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
              <p>
                At Toothistan, technology feels like care. Our approach brings
                advanced digital tools and smooth techniques together to create
                dental experiences that are accurate, gentle, and relaxing.
              </p>

              <p>
                Modern technology is not used simply because it is new. It is
                used when it can help our team deliver better-planned,
                more comfortable, and more efficient care.
              </p>

              <p className="font-medium text-[#2d2217]">
                The goal is simple — combine digital precision with the human
                warmth that makes every Toothistan visit feel different.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 md:py-14 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#e5b757]">
              <Cpu size={16} />
              The Technology Advantage
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Digital tools.
              <span className="block text-[#e5b757]">
                Human-centered care.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg">
              Every technological advantage matters only when it improves the
              patient experience.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {technologyPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/90">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[30px]"
          >
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85"
              alt="Comfortable dental treatment"
              className="h-[420px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42311d]">
              Built Around You
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Better technology.
              <span className="block text-[#42311d]">
                Better experience.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-black">
              Technology becomes meaningful when it helps reduce uncertainty,
              supports precise planning, and makes your dental journey feel
              more comfortable.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Precise planning",
                "Comfort-focused care",
                "Modern digital workflow",
                "Patient-first approach",
                "Clear treatment journey",
                "Attention to detail",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-[#42311d]">
                    <Check size={14} strokeWidth={3} />
                  </span>

                  <span className="text-sm font-medium text-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f7f0e3] px-5 py-10 sm:px-8 md:py-12 lg:px-10">
        <div className="mx-auto max-w-[1000px] text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <ShieldCheck size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
              Precision is powerful.
              <span className="block text-[#42311d]">
                Comfort makes it meaningful.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black sm:text-lg">
              Our philosophy is to use modern methods thoughtfully — pairing
              technology with empathy, communication, hygiene, and a calm
              environment so that every patient feels confident throughout
              their treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#2d2217] px-6 py-12 text-white sm:px-10 md:py-16"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#42311d]/30 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e5b757]">
                Toothistan
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Experience modern dentistry
                <span className="block text-[#e5b757]">
                  designed around you.
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