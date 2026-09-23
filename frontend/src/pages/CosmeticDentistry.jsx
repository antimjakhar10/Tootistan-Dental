import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Gem,
  HeartHandshake,
  Sparkles,
  Smile,
  WandSparkles,
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
  "Whiter teeth that shine",
  "Smile designed just for you",
  "Fix broken or small teeth",
  "Remove spots or gaps",
];

const benefits = [
  {
    icon: Smile,
    title: "A More Confident Smile",
    text: "Cosmetic dental care can help improve the appearance of your smile and help you feel more confident.",
  },
  {
    icon: WandSparkles,
    title: "Personalized Approach",
    text: "We consider your individual smile and treatment needs rather than taking a one-size-fits-all approach.",
  },
  {
    icon: Gem,
    title: "Thoughtful Aesthetics",
    text: "Our focus is on creating natural-looking improvements that complement your overall appearance.",
  },
];

export default function CosmeticDentistry() {
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
                <Sparkles size={16} />
                Cosmetic Dentistry
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                A Smile Designed
                <span className="block text-[#42311d]">
                  Around You
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                We help your smile look better using safe and gentle
                treatments that fit your face.
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
                  src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1200&q=85"
                  alt="Confident smile"
                  className="h-[390px] w-full object-cover sm:h-[490px]"
                />
            </div>
          </motion.div>
          </div>
        </section>

        {/* Introduction */}
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
                  <Sparkles size={16} />
                  Smile Enhancement
                </span>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Helping your smile
                  <span className="block text-[#42311d]">
                    feel like you.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
                <p>
                  Cosmetic dentistry focuses on improving the appearance of
                  your smile through treatments selected around your individual
                  needs.
                </p>

                <p>
                  At Toothistan, we believe a beautiful smile should still feel
                  natural and personal. Our approach combines thoughtful
                  treatment planning with a gentle and comfortable experience.
                </p>

                <p className="font-medium text-[#2d2217]">
                  The goal isn't simply to change a smile — it is to help you
                  feel more confident about the smile you already have.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Original Content */}
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
                <WandSparkles size={16} />
                What We Can Help With
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Small changes can make
                <span className="text-[#42311d]">
                  {" "}
                  a big difference.
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-black sm:text-lg">
                Our cosmetic dentistry services focus on common smile concerns
                while keeping the treatment approach personalized.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
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

        {/* Benefits */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <HeartHandshake size={16} />
                The Toothistan Approach
              </span>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Cosmetic care with
                <span className="text-[#42311d]"> a personal touch.</span>
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {benefits.map((item, index) => {
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

        {/* Personalized */}
        <section className="bg-[#2d2217] px-5 py-10 text-white sm:px-8 md:py-14 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#e5b757]">
                <Gem size={16} />
                Designed For Your Smile
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Your smile should look
                <span className="block text-[#e5b757]">
                  naturally yours.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/90 sm:text-lg">
                Every smile is different. That is why cosmetic dental care
                should begin with understanding what you want and what works
                for you.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Understand your smile goals",
                  "Discuss suitable treatment options",
                  "Create a personalized approach",
                  "Focus on comfort throughout treatment",
                  "Work towards a confident smile",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e5b757]">
                      <Check size={14} strokeWidth={3} />
                    </div>

                    <span className="text-sm text-white/75">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-[32px]">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85"
                  alt="Cosmetic dental care"
                  className="h-[430px] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comfort */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                <HeartHandshake size={26} />
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
                Your comfort matters
                <span className="block text-[#42311d]">
                  at every step.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black sm:text-lg">
                From your first conversation to your treatment journey, our
                goal is to make cosmetic dental care feel clear, calm, and
                comfortable.
              </p>

              <Link
                to="/patients-comfort"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#2d2217]/15 px-6 py-3.5 text-sm font-semibold transition hover:border-[#42311d]/30 hover:text-[#42311d]"
              >
                Explore Patient Comfort
                <ArrowRight size={17} />
              </Link>
            </motion.div>
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
                  Ready to feel more confident
                  <span className="block text-[#42311d]">
                    about your smile?
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-7 text-black">
                  Start with a conversation about your smile and the care that
                  may be right for you.
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