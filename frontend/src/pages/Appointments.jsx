import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Loader2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { submitAppointment } from "../services/api";

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

const departments = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Orthodontics",
  "Pediatric Dentistry",
  "Emergency Dentistry",
  "Smile Makeover",
];

const doctors = [
  "Choose Doctor",
  "Dr. Toothistan Specialist",
];

function Appointments() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await submitAppointment(formData);
      setStatus({
        type: "success",
        message: response.message || "Your appointment request has been submitted successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
        doctor: "",
        note: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#faf8f4] text-[#2d2217]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden pt-[105px] pb-8 lg:pt-[120px] lg:pb-12">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#f3e8d3] blur-3xl" />

          <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-sm font-semibold text-[#42311d] shadow-sm">
                <CalendarDays size={16} />
                Book Your Appointment
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#2d2217] sm:text-5xl lg:text-7xl">
                Discover Personalized
                <span className="block text-[#42311d]">
                  Dental Care
                </span>
              </h1>

              <p className="mt-5 text-xl font-semibold text-[#b88228] sm:text-2xl lg:text-3xl">
                designed around your comfort.
              </p>

              <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-[#b88228]" />

              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-black sm:text-lg">
                Take the first step toward a healthier, more confident
                smile—schedule your visit in a space where luxury meets
                world-class care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            MAIN APPOINTMENT AREA
        ====================================================== */}
        <section className="relative pb-12 lg:pb-16">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid overflow-hidden rounded-[35px] bg-[#2d2217] shadow-[0_30px_80px_rgba(23,59,53,0.18)] lg:grid-cols-[0.82fr_1.18fr]">

              {/* =================================================
                  LEFT CONTENT
              ================================================== */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden px-7 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16"
              >
                {/* Decorative circles */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
                <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full border border-white/10" />

                <div className="relative z-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#c48f32] backdrop-blur-sm">
                    <Sparkles size={26} />
                  </div>

                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ebdcb8]">
                    Toothistan
                  </p>

                  <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    Your smile deserves
                    <span className="block text-[#c48f32]">
                      personalized care.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-base leading-8 text-white/85">
                    Take the first step toward a healthier, more confident
                    smile. Share your details with us and let our team help
                    you plan your visit.
                  </p>

                  {/* Info cards */}
                  <div className="mt-10 space-y-4">
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c48f32]/10 text-[#c48f32]">
                        <Clock3 size={21} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Convenient Visits
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/90">
                          Choose a date that works for you.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c48f32]/10 text-[#c48f32]">
                        <ShieldCheck size={21} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Comfort First
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/90">
                          Care designed around your comfort.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c48f32]/10 text-[#c48f32]">
                        <CalendarDays size={21} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Personalized Planning
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/90">
                          Tell us what you need before your visit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="mt-10 border-t border-white/10 pt-7">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/90">
                      Need help?
                    </p>

                    <div className="space-y-3">
                      <a
                        href="tel:+918168062414"
                        className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#c48f32]"
                      >
                        <Phone size={17} />
                        +91 81680 62414
                      </a>

                      <a
                        href="mailto:info@toothistan.com"
                        className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#c48f32]"
                      >
                        <Mail size={17} />
                        info@toothistan.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FORM
              ================================================== */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14"
              >
                <div className="mb-9">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#42311d]">
                    Start Here
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#2d2217] sm:text-4xl">
                    Make An Appointment
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-black">
                    Share a few details below and tell us how we can help.
                  </p>
                </div>

                {status.message && (
                  <div
                    className={`mb-6 rounded-2xl p-4 text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 text-sm text-[#2d2217] outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Email Address *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 text-sm text-[#2d2217] outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 text-sm text-[#2d2217] outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Appointment Date *
                      </label>

                      <div className="relative">
                        <CalendarDays
                          size={18}
                          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#42311d]"
                        />

                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="h-14 w-full rounded-2xl border border-slate-200 bg-[#f8f3e8] pl-13 pr-5 text-sm text-[#2d2217] outline-none transition focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                        />
                      </div>
                    </div>

                    {/* Department */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Department
                      </label>

                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 text-sm text-[#2d2217] outline-none transition focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                      >
                        <option value="">Choose Department</option>

                        {departments.map((department) => (
                          <option key={department} value={department}>
                            {department}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Doctor */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                        Doctor
                      </label>

                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 text-sm text-[#2d2217] outline-none transition focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                      >
                        <option value="">Choose Doctor</option>

                        {doctors
                          .filter((doctor) => doctor !== "Choose Doctor")
                          .map((doctor) => (
                            <option key={doctor} value={doctor}>
                              {doctor}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Note */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#2d2217]">
                      Appointment Note
                    </label>

                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Type Appointment Note...."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f8f3e8] px-5 py-4 text-sm leading-7 text-[#2d2217] outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:bg-white focus:ring-4 focus:ring-[#42311d]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#2d2217] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2d2217]/20 transition duration-300 hover:bg-[#42311d] hover:shadow-xl hover:shadow-[#42311d]/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book An Appointment
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REASSURANCE STRIP
        ====================================================== */}
        <section className="border-y border-[#dce9e5] bg-white">
          <div className="mx-auto grid max-w-[1380px] gap-0 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
            <div className="flex items-center gap-4 border-b border-[#e5eeeb] py-7 lg:border-b-0 lg:border-r lg:pr-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <p className="font-bold text-[#2d2217]">
                  Personalized Care
                </p>
                <p className="mt-1 text-sm text-black">
                  Designed around your comfort.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-[#e5eeeb] py-7 lg:border-b-0 lg:border-r lg:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                <MapPin size={21} />
              </div>

              <div>
                <p className="font-bold text-[#2d2217]">
                  Visit Toothistan
                </p>
                <p className="mt-1 text-sm text-black">
                  Hisar, Haryana
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-7 lg:pl-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f7f0e3] text-[#42311d]">
                <Phone size={21} />
              </div>

              <div>
                <p className="font-bold text-[#2d2217]">
                  Talk To Our Team
                </p>
                <a
                  href="tel:+918168062414"
                  className="mt-1 block text-sm text-black transition hover:text-[#42311d]"
                >
                  +91 81680 62414
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Appointments;