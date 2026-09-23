import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  HeartHandshake,
  Mail,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamValues = [
  {
    icon: HeartHandshake,
    title: "Patient First",
    text: "Every member of our team works together to create a welcoming, comfortable and reassuring patient experience.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Excellence",
    text: "Our team is committed to thoughtful dental care supported by experience, precision and modern clinical methods.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Safe",
    text: "High standards of hygiene, sterilization and clinical safety remain an essential part of the Toothistan experience.",
  },
  {
    icon: Sparkles,
    title: "Warm Experience",
    text: "We believe excellent dentistry should feel personal, calm and comfortable from the moment you arrive.",
  },
];

const teamPrinciples = [
  "Friendly communication",
  "Personalized patient care",
  "Modern clinical approach",
  "Strict hygiene standards",
  "Continuous learning",
  "Collaborative teamwork",
];

const MeetTheTeam = () => {
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
                <Users size={16} />
                Meet The Team
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                The People Behind
                <span className="block text-[#42311d]">
                  Your Smile.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                Great dentistry is not just about technology or treatment. It
                is about the people who listen, understand and care. Our team
                works together to make every Toothistan visit comfortable,
                professional and personal.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Meet Us At Toothistan
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
                >
                  About Toothistan
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
                  src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=90"
                  alt="Dental care team"
                  className="h-[420px] w-full rounded-[25px] object-cover sm:h-[520px]"
                />
            </div>
          </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Our People
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Expertise with a
                <span className="text-[#42311d]"> human touch.</span>
              </h2>
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="leading-8 text-black">
                At Toothistan, every patient interaction matters. Our
                professionals and support team work as one to create a dental
                experience that combines clinical care with genuine warmth.
              </p>

              <p className="mt-5 leading-8 text-black">
                We believe that listening carefully, communicating clearly and
                treating every patient with respect are just as important as
                the treatment itself.
              </p>
            </div>
          </div>
        </section>

        {/* Team cards */}
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Meet the professionals
              <span className="text-[#42311d]"> who care.</span>
            </h2>

            <p className="mt-5 leading-8 text-black">
              Our team profiles will be managed dynamically so that current
              doctors and professionals can be added, updated and maintained
              without changing the website code.
            </p>
          </div>

          {/* Dynamic-ready team area */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dental Professionals",
                text: "Experienced dental professionals focused on precision, comfort and personalized treatment.",
                icon: Stethoscope,
              },
              {
                title: "Patient Care Team",
                text: "A welcoming support team helping patients feel comfortable throughout their Toothistan journey.",
                icon: HeartHandshake,
              },
              {
                title: "Clinic Support",
                text: "Dedicated professionals supporting smooth operations, hygiene and a high-quality clinic experience.",
                icon: ShieldCheck,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[28px] border border-[#dfece8] bg-white shadow-[0_10px_35px_rgba(23,59,53,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_50px_rgba(23,59,53,0.11)]"
                >
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#f7f0e3]">
                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/50" />
                    <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#f4ebd5]/60" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white text-[#42311d] shadow-lg">
                      <Icon size={40} />
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#42311d]">
                        Toothistan
                      </span>

                      <Award size={18} className="text-[#e5b757]" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-black">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Team principles */}
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
                How We Work
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Care is a
                <span className="text-[#e5b757]"> team effort.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/85">
                Every role at Toothistan contributes to the experience our
                patients receive. From clinical care to the smallest details
                of your visit, we work together with one goal — making you
                feel cared for.
              </p>

              <Link
                to="/patients-comfort"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#e5b757]"
              >
                Discover Patient Comfort
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {teamPrinciples.map((item) => (
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

        {/* Experience */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[30px]"
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
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                The Toothistan Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Where professionals
                <span className="text-[#42311d]"> care differently.</span>
              </h2>

              <p className="mt-5 leading-8 text-black">
                Our approach combines modern dentistry with the comfort and
                personal attention patients deserve.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "A calm, welcoming environment",
                  "Modern technology and clinical methods",
                  "Personal attention at every stage",
                  "Clear communication with patients",
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

        {/* CTA */}
        <section className="bg-[#faf8f4] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#f7f0e3] px-6 py-12 text-center sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <HeartHandshake size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Meet the team behind your smile.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-black">
              Experience a dental team that combines professional expertise
              with genuine care and comfort.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Request an Appointment
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

export default MeetTheTeam;