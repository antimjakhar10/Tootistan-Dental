import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Coffee,
  Headphones,
  Heart,
  ShieldCheck,
  Sparkles,
  Smile,
  Volume2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const comfortFeatures = [
  {
    icon: Headphones,
    title: "Entertainment",
    text: "Enjoy Netflix with personal headphones in every suite for a private experience. Relax with calming background music for a stress-free dental visit.",
  },
  {
    icon: Sparkles,
    title: "Pampering Touches",
    text: "Soothing aromatherapy scents, warm lavender-scented towels and spa-style dental chairs designed to help you relax.",
  },
  {
    icon: Coffee,
    title: "Sips & Snacks",
    text: "Complimentary hot or cold drinks, fresh fruit-infused water and light snacks to make your visit more pleasant.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    text: "Surgical-grade cleaning and hygiene standards, gentle dental techniques and clear treatment plans with attentive aftercare.",
  },
];

const promises = [
  "A calm and welcoming environment",
  "Gentle, pain-free dental techniques",
  "Personal attention throughout your visit",
  "Clear communication before treatment",
  "High standards of hygiene and safety",
  "Comfort-focused patient experience",
];

const PatientsComfort = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px] bg-[#faf8f4] text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-sm font-semibold text-[#42311d] shadow-sm">
                <Heart size={16} />
                Patient Comfort
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                We Understand.
                <span className="block text-[#42311d]">
                  Not Everyone Loves The Dentist.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                We understand that visiting the dentist can feel stressful.
                That is why Toothistan focuses on creating a calm, comfortable
                and reassuring experience from the moment you walk through the
                door.
              </p>

              <p className="mt-4 max-w-2xl leading-8 text-black">
                Our goal is simple — to help you feel relaxed, cared for and
                confident throughout your dental journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Book An Appointment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
                >
                  Why Toothistan?
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-[0_25px_70px_rgba(23,59,53,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90"
                  alt="Comfortable dental clinic"
                  className="h-[420px] w-full rounded-[25px] object-cover sm:h-[520px]"
                />
              </div>

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#ebdcb8] bg-white p-4 shadow-xl sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                    <Smile size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-bold">
                      Your Comfort Matters
                    </p>
                    <p className="text-xs text-black">
                      Every step of your visit
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comfort intro */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                The Toothistan Difference
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Where dentistry feels
                <span className="text-[#42311d]"> like self-care.</span>
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="leading-8 text-black">
                We have designed the Toothistan experience around more than
                treatment. We want you to feel comfortable before, during and
                after your appointment.
              </p>

              <p className="mt-5 leading-8 text-black">
                From calming touches and entertainment to thoughtful hygiene
                practices and attentive care, every detail is intended to make
                your visit easier.
              </p>
            </div>
          </div>
        </section>

        {/* Ease My Smile Menu */}
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
              Ease My Smile Menu
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Comfort in the
              <span className="text-[#42311d]"> little details.</span>
            </h2>

            <p className="mt-5 leading-8 text-black">
              Toothistan's Ease My Smile Menu brings together thoughtful
              touches designed to help you feel relaxed during your visit.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {comfortFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[28px] border border-[#dfece8] bg-white p-7 shadow-[0_10px_35px_rgba(23,59,53,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(23,59,53,0.11)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d] transition group-hover:bg-[#2d2217] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-black">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Comfort visual section */}
        <section className="bg-[#2d2217] text-white">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[30px]"
            >
              <img
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=90"
                alt="Modern dental treatment"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
                <Heart size={26} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                Our Comfort Promise
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                You should never feel
                <span className="text-[#e5b757]"> rushed or ignored.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/85">
                We want you to understand your treatment, feel comfortable
                asking questions and know that your concerns are being heard.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {promises.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e5b757]/15 text-[#e5b757]">
                      <Check size={16} />
                    </div>

                    <span className="text-sm font-semibold text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gentle care */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Gentle Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                A calmer way to
                <span className="text-[#42311d]"> experience dentistry.</span>
              </h2>

              <p className="mt-5 leading-8 text-black">
                Whether you are visiting for a routine appointment or need more
                involved dental care, our aim is to make the experience as
                comfortable and reassuring as possible.
              </p>

              <p className="mt-5 leading-8 text-black">
                Our team takes the time to listen, explain and guide you
                through the process so you can make informed decisions about
                your dental care.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Listen",
                  "Explain",
                  "Comfort",
                  "Care",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-bold text-[#42311d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[30px]"
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1100&q=90"
                alt="Comfortable dental care"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#faf8f4] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#f7f0e3] px-6 py-12 text-center sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <Smile size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Your comfort is part of your care.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-black">
              Come experience a dental visit designed to feel calm,
              comfortable and personal.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Request An Appointment
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PatientsComfort;