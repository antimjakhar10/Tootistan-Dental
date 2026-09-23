import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const locations = [
  {
    title: "Toothistan Facial Esthetic & Dental Clinic",
    address:
      "SCF-212, Near Khetarpal Hospital, Green Square Market, Hisar, Haryana 125001",
  },
  {
    title: "CMC Hospital Branch",
    address:
      "Dental Department, Room No. 7, Near Dabra Chowk, CMC Multispeciality Hospital, Hisar, Haryana 125001",
  },
];

const facilities = [
  {
    icon: Sparkles,
    title: "Calm Environment",
    text: "A thoughtfully designed environment intended to make your dental visit feel comfortable and welcoming.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene & Safety",
    text: "A strong focus on cleanliness, sterilization and safe clinical practices throughout the patient journey.",
  },
  {
    icon: Stethoscope,
    title: "Modern Dentistry",
    text: "A patient-focused approach supported by modern dental methods and technology.",
  },
];

const hours = [
  { days: "Monday – Tuesday", time: "9:00 AM – 6:00 PM" },
  { days: "Wednesday – Saturday", time: "8:00 AM – 5:00 PM" },
  { days: "Sunday", time: "Closed" },
];

const OurOffice = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[100px] bg-[#faf8f4] text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-sm font-semibold text-[#42311d] shadow-sm">
                <MapPin size={16} />
                Our Office
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                A Space Designed
                <span className="block text-[#42311d]">
                  Around Your Comfort.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                Toothistan brings together modern dental care, thoughtful
                surroundings and a patient-first approach to create an
                experience that feels different from a traditional dental
                visit.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Book an Appointment
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="tel:+918168062414"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
                >
                  <Phone size={17} />
                  Call Toothistan
                </a>
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
                  alt="Modern dental clinic"
                  className="h-[420px] w-full rounded-[25px] object-cover sm:h-[520px]"
                />
            </div>
          </motion.div>
          </div>
        </section>

        {/* Location strip */}
        <section className="border-y border-[#ebdcb8] bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-0 sm:grid-cols-2">
            {locations.map((location, index) => (
              <div
                key={location.title}
                className={`flex gap-4 px-5 py-8 sm:px-8 lg:px-12 ${
                  index !== 0
                    ? "border-t border-[#ebdcb8] sm:border-l sm:border-t-0"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-bold">{location.title}</p>
                  <p className="mt-2 text-sm leading-6 text-black">
                    {location.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Office experience */}
        <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Inside Toothistan
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Where dentistry feels
                <span className="text-[#42311d]"> more welcoming.</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-black">
                From the moment you enter, our goal is to create a calm and
                comfortable environment. The space, team and clinical
                experience are designed to work together around the patient.
              </p>

              <Link
                to="/patients-comfort"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Explore Patient Comfort
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[28px] sm:row-span-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=90"
                  alt="Dental care"
                  className="h-full min-h-[430px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="overflow-hidden rounded-[28px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=90"
                  alt="Dental clinic"
                  className="h-[210px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="flex min-h-[210px] items-center rounded-[28px] bg-[#2d2217] p-7 text-white"
              >
                <div>
                  <Sparkles className="text-[#e5b757]" size={28} />

                  <p className="mt-5 text-2xl font-bold">
                    Comfort meets
                    <span className="text-[#e5b757]"> precision.</span>
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/90">
                    A modern environment built around your dental experience.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                The Toothistan Environment
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Thoughtful details,
                <span className="text-[#42311d]"> better experience.</span>
              </h2>

              <p className="mt-5 leading-8 text-black">
                Our office experience is built around the same philosophy as
                our dental care — comfort, cleanliness, precision and personal
                attention.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {facilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="rounded-[26px] border border-[#dfece8] bg-[#faf8f4] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold">
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

        {/* Locations */}
        <section className="bg-[#2d2217] text-white">
          <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                  Find Us
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Visit Toothistan
                  <span className="text-[#e5b757]"> in Hisar.</span>
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-white/90">
                  Choose the location that is convenient for you and connect
                  with our team for your appointment.
                </p>

                <a
                  href="tel:+918168062414"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#e5b757]"
                >
                  <Phone size={17} />
                  +91 81680 62414
                </a>
              </div>

              <div className="grid gap-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[26px] border border-white/10 bg-white/5 p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e5b757]/10 text-[#e5b757]">
                        <MapPin size={22} />
                      </div>

                      <div>
                        <p className="text-lg font-bold">
                          {location.title}
                        </p>

                        <p className="mt-2 text-sm leading-7 text-white/90">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-5">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          location.address
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#e5b757] transition hover:text-white"
                      >
                        <Navigation size={16} />
                        Get Directions
                        <ArrowRight size={15} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="bg-[#faf8f4]">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-12">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                <Clock3 size={26} />
              </div>

              <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Opening Hours
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Plan your visit
                <span className="text-[#42311d]"> with ease.</span>
              </h2>
            </div>

            <div className="rounded-[26px] border border-[#dfece8] bg-white p-5 shadow-sm">
              {hours.map((item, index) => (
                <div
                  key={item.days}
                  className={`flex items-center justify-between gap-5 px-2 py-5 ${
                    index !== hours.length - 1
                      ? "border-b border-[#edf2f0]"
                      : ""
                  }`}
                >
                  <span className="font-semibold text-slate-700">
                    {item.days}
                  </span>

                  <span
                    className={`text-sm font-bold ${
                      item.time === "Closed"
                        ? "text-slate-400"
                        : "text-[#42311d]"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#f7f0e3] px-6 py-12 text-center sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
              <Sparkles size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Come experience Toothistan.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-black">
              A modern dental environment where comfort, care and precision
              come together.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Request an Appointment
                <ArrowRight size={17} />
              </Link>

              <a
                href="tel:+918168062414"
                className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:border-[#42311d] hover:text-[#42311d]"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurOffice;