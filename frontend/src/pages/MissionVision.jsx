import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
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

const visionItems = [
  {
    icon: Lightbulb,
    number: "01",
    title: "The Birth of an Idea",
    text: "Toothistan was imagined as more than a clinic — it’s an idea born out of courage and crafted with conviction. A daring step to redefine what dentistry feels like — to make it calm, comforting, and beautifully human.",
  },
  {
    icon: Compass,
    number: "02",
    title: "The Road Less Taken",
    text: "In a world used to routine care, we chose the road less taken — blending world-class digital precision with serene luxury and heartfelt empathy.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "A City’s First — A New Way to Smile",
    text: "It’s an out-of-the-box vision — one that demanded risk, resilience, and belief — to create something this city has never seen before. Here, anxiety fades, trust deepens, and smiles are not just treated — they’re nurtured, protected, and celebrated.",
  },
];

export default function MissionVision() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">
      
      <Navbar/>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f0e3] pt-[150px] pb-20 md:pt-[175px] md:pb-28">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#42311d]/10 blur-3xl" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#42311d]">
              <Target size={16} />
              Mission & Vision
            </span>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Where Vision
              <span className="block text-[#42311d]">
                Becomes Experience
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              At Toothistan, our mission and vision shape every part of the
              experience — from advanced dental care to the warmth and comfort
              patients feel when they walk through our doors.
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
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#2d2217]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#2d2217] transition hover:border-[#42311d]/30 hover:text-[#42311d]"
              >
                About Toothistan
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl shadow-[#2d2217]/10">
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=85"
                alt="Premium dental care"
                className="h-[380px] w-full object-cover sm:h-[470px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
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
                <Target size={16} />
                Our Mission
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Care that feels
                <span className="block text-[#42311d]">
                  personal & reassuring.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
              <p>
                Every day at Toothistan, we strive to turn our belief into
                reality — by offering dentistry that feels gentle, personal,
                and deeply reassuring.
              </p>

              <p>
                Our mission is to blend advanced digital precision with human
                warmth, creating an atmosphere where patients feel calm, cared
                for, and confident.
              </p>

              <p>
                From a child’s first visit to complex full-mouth restorations,
                every treatment is guided by empathy, integrity, and meticulous
                attention to detail.
              </p>

              <p>
                We promise to stay ahead of time — embracing innovation,
                mastering technology, and setting new standards of hygiene,
                aesthetics, and comfort.
              </p>

              <p className="font-medium text-[#2d2217]">
                Because at Toothistan, we don’t just treat smiles — we build
                relationships, trust, and lasting confidence.
              </p>

              <p className="font-semibold text-[#42311d]">
                Toothistan — Smile Building Nation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Values */}
      <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 md:py-12 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#f4ebd5]">
              <ShieldCheck size={16} />
              What Guides Us
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              More than treatment.
              <span className="block text-[#e5b757]">
                A complete experience.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Human Warmth",
                text: "Creating an environment where patients feel heard, respected, calm, and cared for.",
              },
              {
                icon: Sparkles,
                title: "Modern Precision",
                text: "Combining advanced digital precision with thoughtful and comfortable dental care.",
              },
              {
                icon: ShieldCheck,
                title: "Trust & Integrity",
                text: "Building lasting confidence through empathy, transparency, hygiene, and attention to detail.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Vision */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
              <Compass size={16} />
              Our Vision Beyond Dentistry
            </span>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Unconventional.
              <span className="block text-[#42311d]">
                Unapologetically Bold.
              </span>
              Unmistakably Toothistan.
            </h2>

            <p className="mt-5 text-base leading-8 text-black sm:text-lg">
              Our vision is to create a dental experience that feels
              fundamentally different — calm, comforting, beautifully human,
              and driven by a belief that dentistry can become part of
              self-care.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {visionItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(23,59,53,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#42311d]/20 hover:shadow-[0_25px_65px_rgba(23,59,53,0.12)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d] transition group-hover:bg-[#42311d] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-4xl font-semibold text-slate-100">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#2d2217]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-10 sm:px-8 md:pb-14 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#f7f0e3] px-6 py-12 sm:px-10 md:py-16"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/70 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42311d]">
                Toothistan
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Redefining Dental Care
                <span className="text-[#42311d]"> with Heart & Precision</span>
              </h2>
            </div>

            <Link
              to="/appointments"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
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