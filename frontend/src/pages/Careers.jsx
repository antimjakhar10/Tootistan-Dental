import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  HeartHandshake,
  Mail,
  Sparkles,
  Users,
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
      ease: "easeOut",
    },
  },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Patient First",
    text: "Be part of an environment where patient comfort, trust, and respectful care remain central to the experience.",
  },
  {
    icon: Users,
    title: "Team Culture",
    text: "Work alongside people who value collaboration, communication, empathy, and a shared commitment to better care.",
  },
  {
    icon: Sparkles,
    title: "Keep Growing",
    text: "Bring curiosity, openness, and a willingness to learn as dentistry and technology continue to evolve.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Meaningful Work",
    text: "Contribute to an experience designed to make dental care feel calmer, more personal, and more human.",
  },
];

const qualities = [
  "Patient-focused mindset",
  "Strong communication",
  "Empathy and professionalism",
  "Willingness to learn",
  "Attention to detail",
  "Collaborative approach",
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">

        <Navbar/>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f7f0e3] pt-[110px] pb-10 md:pt-[125px] md:pb-14">
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#42311d]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#42311d]/20 bg-white/75 px-4 py-2 text-sm font-semibold text-[#42311d]">
              <BriefcaseBusiness size={16} />
              Careers at Toothistan
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build Better Smiles.
              <span className="block text-[#42311d]">
                Build Something Meaningful.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Toothistan is built around a simple idea — dental care can be
              more comfortable, more thoughtful, and more human. We believe the
              people behind that experience matter just as much.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@toothistan.com?subject=Career%20Enquiry%20-%20Toothistan"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
              >
                Send Your Profile
                <ArrowRight size={17} />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#2d2217]/15 bg-white px-6 py-3.5 text-sm font-semibold transition hover:border-[#42311d]/30 hover:text-[#42311d]"
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
            <div className="relative overflow-hidden rounded-[34px] shadow-2xl shadow-[#2d2217]/10">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Team collaboration"
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
            className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f0e3] px-4 py-2 text-sm font-semibold text-[#42311d]">
                <HeartHandshake size={16} />
                Join The Journey
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Great experiences
                <span className="block text-[#42311d]">
                  start with great people.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black sm:text-lg">
              <p>
                At Toothistan, every patient interaction is an opportunity to
                create trust and make someone feel comfortable. That takes more
                than technology or beautiful spaces — it takes people who care.
              </p>

              <p>
                We value individuals who bring professionalism, empathy,
                curiosity, and a genuine desire to contribute to a better
                dental experience.
              </p>

              <p className="font-medium text-[#2d2217]">
                If you believe dentistry can be delivered with both precision
                and heart, we would love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
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
              Our Culture
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              A team built around
              <span className="block text-[#e5b757]">
                care and curiosity.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              We want people to feel proud of the work they do and understand
              the difference their contribution makes to a patient’s journey.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-[28px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
                    <Icon size={22} />
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

      {/* What We Value */}
      <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px]"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1100&q=85"
              alt="Healthcare team"
              className="h-[430px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#42311d]">
              What We Value
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Bring your skills.
              <span className="block text-[#42311d]">
                Bring your values too.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-black">
              Whether you work directly with patients or contribute behind the
              scenes, the same principles matter — professionalism, empathy,
              learning, communication, and attention to detail.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {qualities.map((quality) => (
                <div
                  key={quality}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3.5"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#42311d]"
                  />

                  <span className="text-sm font-medium text-black">
                    {quality}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Application */}
      <section className="bg-[#f7f0e3] px-5 py-10 sm:px-8 md:py-12 lg:px-10">
        <div className="mx-auto max-w-[1000px] text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <Mail size={25} />
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl">
              Interested in joining
              <span className="block text-[#42311d]">
                the Toothistan journey?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black sm:text-lg">
              Send your profile and a brief introduction to our team. If your
              experience aligns with an opportunity at Toothistan, the team can
              connect with you regarding the next steps.
            </p>

            <a
              href="mailto:info@toothistan.com?subject=Career%20Enquiry%20-%20Toothistan"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#42311d]"
            >
              Email Your Profile
              <Mail size={17} />
            </a>

            <p className="mt-4 text-sm text-black">
              info@toothistan.com
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
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#42311d]/30 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e5b757]">
                Toothistan
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Be part of a different kind of
                <span className="block text-[#e5b757]">
                  dental experience.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#2d2217] transition hover:bg-[#e5b757]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </motion.div>
      </section>

     <Footer/>
    </div>
  );
}