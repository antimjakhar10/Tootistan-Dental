import { useState } from "react";
import { motion } from "framer-motion";
import { ToothShieldMascot, ToothDoctorMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Loader2,
} from "lucide-react";
import { submitAppointment } from "../services/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
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
        phone: "",
        email: "",
        department: "",
        date: "",
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
    <section
      id="contact"
      className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-10 z-20 hidden lg:block opacity-90">
        <FloatingMascotSticker MascotComponent={ToothShieldMascot} sizeClassName="h-24 w-24" glowColor="rgba(99, 102, 241, 0.25)" badgeText="Safe & Easy" />
      </div>

      <div className="pointer-events-none absolute left-6 bottom-10 z-20 hidden xl:block opacity-85">
        <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20" glowColor="rgba(20, 184, 166, 0.25)" badgeText="Book Visit" />
      </div>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Banner CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 overflow-hidden rounded-[32px] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-10"
        >
          {/* Banner Background Image */}
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1800&q=90"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Green Overlay */}
          <div className="absolute inset-0 bg-[#2d2217]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d2217]/85 via-[#2d2217]/55 to-[#2d2217]/20" />

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-10 -top-20 opacity-[0.08]">
            <Sparkles size={260} strokeWidth={1} />
          </div>

          <div className="animate-pulse-glow pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#c48f32] opacity-20 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <div className="animate-float mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b757] backdrop-blur-md">
              <Sparkles size={15} className="animate-spin-slow" />
              Your Smile Journey Starts Here
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Ready to love
              <span className="block text-[#e5b757]">your smile again?</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
              Experience modern dentistry designed around your comfort,
              confidence and individual needs. Book your consultation with
              Toothistan today.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#appointment"
                className="btn-shine inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#f4ebd5]"
              >
                Book An Appointment
                <ArrowUpRight size={18} />
              </a>

              <a
                href="tel:+918168062414"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Phone size={17} />
                +91 81680 62414
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact + Appointment */}
        <div
          id="appointment"
          className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]"
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] bg-white p-7 shadow-[0_15px_45px_rgba(45,34,23,0.07)] sm:p-9"
          >
            <div className="mb-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228]">
                Get In Touch
              </span>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#2d2217]">
                Let's talk about your smile.
              </h3>

              <p className="mt-3 text-sm leading-7 text-black">
                Have a question about a treatment or want to schedule a
                consultation? Our team is here to help.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              <ContactItem
                icon={<Phone size={18} />}
                title="Call Us"
                value="+91 81680 62414"
                href="tel:+918168062414"
              />

              <ContactItem
                icon={<Mail size={18} />}
                title="Email Us"
                value="info@toothistan.com"
                href="mailto:info@toothistan.com"
              />

              <ContactItem
                icon={<MapPin size={18} />}
                title="Our Clinic"
                value="SCF-212, Near Khetarpal Hospital, Green Square Market, Hisar, Haryana 125001"
              />
            </div>

            {/* Opening Hours */}
            <div className="mt-7 rounded-[22px] bg-[#f8f3e8] p-5">
              <div className="mb-4 flex items-center gap-2">
                <Clock3 size={18} className="text-[#b88228]" />

                <h4 className="text-sm font-semibold text-[#2d2217]">
                  Opening Hours
                </h4>
              </div>

              <div className="space-y-2.5 text-xs text-black">
                <div className="flex justify-between gap-4">
                  <span>Monday - Tuesday</span>
                  <span className="font-semibold text-[#2d2217]">
                    9:00 AM - 6:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Wednesday - Saturday</span>
                  <span className="font-semibold text-[#2d2217]">
                    8:00 AM - 5:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-400">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] bg-white p-7 shadow-[0_15px_45px_rgba(45,34,23,0.07)] sm:p-9"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228]">
                  Appointment
                </span>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#2d2217]">
                  Book your visit
                </h3>

                <p className="mt-2 text-sm leading-6 text-black">
                  Fill in your details and our team will get back to you.
                </p>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
                <CalendarDays size={21} />
              </div>
            </div>

            {status.message && (
              <div
                className={`mt-4 rounded-xl p-3.5 text-xs font-medium ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter email address"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                    Treatment
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                  >
                    <option value="">Select treatment</option>
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Dental Implants</option>
                    <option>Invisalign</option>
                    <option>Pediatric Dentistry</option>
                    <option>Smile Makeover</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-xs font-semibold text-[#2d2217]">
                  Message / Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-[#c48f32] focus:ring-4 focus:ring-[#c48f32]/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#42311d] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    Request An Appointment
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <CheckCircle2 size={15} className="text-[#b88228]" />
                Your information is handled with care.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Contact Item */
const ContactItem = ({ icon, title, value, href }) => {
  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium leading-6 text-[#2d2217]">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-3 rounded-2xl p-3 transition-colors hover:bg-[#f8f3e8]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-3 rounded-2xl p-3">
      {content}
    </div>
  );
};

export default ContactSection;