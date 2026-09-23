import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  Heart,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const expertise = [
  "Patient-focused dental care",
  "Gentle and comfortable treatment approach",
  "Modern dental technology",
  "Personalized treatment planning",
  "Clear patient communication",
  "High standards of hygiene",
];

const approach = [
  {
    icon: HeartHandshake,
    title: "Listen First",
    text: "Understanding your concerns is the first step toward creating a treatment experience that feels comfortable and personal.",
  },
  {
    icon: Stethoscope,
    title: "Treat Precisely",
    text: "Modern dental methods and careful planning help deliver thoughtful and precise treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Care Completely",
    text: "From consultation to aftercare, every part of your dental journey deserves attention and care.",
  },
];

const MeetTheDoctor = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px] bg-[#faf8f4] text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-12 lg:py-14">
            {/* Doctor image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_25px_70px_rgba(23,59,53,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=90"
                  alt="Dental professional"
                  className="h-[460px] w-full rounded-[27px] object-cover sm:h-[560px]"
                />
            </div>
          </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-sm font-semibold text-[#42311d] shadow-sm">
                <Stethoscope size={16} />
                Meet The Doctor
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Expertise That Puts
                <span className="block text-[#42311d]">
                  Your Smile First.
                </span>
              </h1>

              <p className="mt-6 text-base leading-8 text-black sm:text-lg">
                At Toothistan, our approach to dentistry begins with people.
                Every consultation is an opportunity to listen carefully,
                understand your concerns and create a treatment experience
                built around your individual needs.
              </p>

              <div className="mt-7 rounded-2xl border border-[#ebdcb8] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#42311d]">
                  Doctor Profile
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Toothistan Dental Professional
                </h2>

                <p className="mt-2 text-sm text-black">
                  Detailed verified doctor information can be maintained
                  dynamically through the Toothistan admin panel.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Book an Appointment
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                A Different Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Dentistry with
                <span className="text-[#42311d]"> empathy.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black">
                We believe patients deserve more than technically good
                treatment. They deserve to feel heard, informed, respected
                and comfortable throughout the process.
              </p>

              <p className="mt-5 max-w-xl leading-8 text-black">
                That philosophy shapes every consultation and every treatment
                decision at Toothistan.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-3">
              {approach.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[25px] border border-[#dfece8] bg-[#faf8f4] p-6"
                  >
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-[#2d2217] text-white">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
                <Sparkles size={26} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                Expertise & Care
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Modern dentistry,
                <span className="text-[#e5b757]">
                  {" "}
                  human connection.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/85">
                Technology gives us better tools. Experience gives us better
                judgment. And empathy helps us deliver care that patients can
                feel confident about.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <p className="mb-5 text-sm font-bold uppercase tracking-wider text-white/90">
                Our Approach
              </p>

              <div className="grid gap-3">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5b757]/15 text-[#e5b757]">
                      <Check size={17} />
                    </div>

                    <span className="text-sm font-semibold text-white/85">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Doctor profile / dynamic-ready */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[30px]"
            >
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1100&q=90"
                alt="Dental professional"
                className="h-[430px] w-full object-cover sm:h-[520px]"
              />

              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                <Award size={26} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Professional Care
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Experience you can
                <span className="text-[#42311d]"> trust.</span>
              </h2>

              <p className="mt-5 leading-8 text-black">
                Your dental treatment should never feel rushed or confusing.
                Our goal is to give you the information, attention and
                confidence you need before moving forward with treatment.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "Detailed consultation",
                  "Clear treatment discussions",
                  "Personalized care",
                  "Comfort-focused experience",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-[#f8f3e8] px-4 py-3"
                  >
                    <Check
                      size={17}
                      className="shrink-0 text-[#42311d]"
                    />

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-[#faf8f4] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
              <Heart size={25} />
            </div>

            <blockquote className="mt-7 text-2xl font-semibold leading-relaxed sm:text-3xl lg:text-4xl">
              “Every smile has a story. Our job is to listen to it, care for
              it and help you feel confident about sharing it.”
            </blockquote>

            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-[#42311d]">
              Toothistan
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#f7f0e3] px-6 py-12 text-center sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <HeartHandshake size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Ready to meet your dental care team?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-black">
              Schedule a consultation and experience the Toothistan approach
              for yourself.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Book an Appointment
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
              >
                <Mail size={17} />
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

export default MeetTheDoctor;