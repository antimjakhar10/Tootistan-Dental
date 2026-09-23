import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  Send,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { submitContact } from "../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await submitContact(formData);
      setStatus({
        type: "success",
        message: response.message || "Thank you! Your enquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#2d2217]">
      <Navbar />

      {/* HERO */}
      <section className="px-5 pb-8 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#f7f0e3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#42311d]">
              Contact Toothistan
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Let’s Talk About{" "}
              <span className="text-[#42311d]">Your Smile.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg">
              Have a question, need help choosing a treatment, or want to book
              your visit? Get in touch with the Toothistan team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#2d2217] p-7 text-white sm:p-10 lg:p-12"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#e5b757]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              We’re Here To Help
            </h2>

            <p className="mt-4 leading-7 text-white/85">
              Toothistan blends modern dentistry with luxury comfort—where
              every smile is treated with precision, care, and trust.
            </p>

            <div className="mt-9 space-y-6">
              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-[#e5b757]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Our Clinic</p>

                  <p className="mt-1 text-sm leading-6 text-white/90">
                    TOOTHISTAN – Facial Esthetic & Dental Clinic
                    <br />
                    SCF-212, Near Khetarpal Hospital
                    <br />
                    Green Square Market
                    <br />
                    Hisar, Haryana 125001
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-5 w-5 text-[#e5b757]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Call Us</p>

                  <a
                    href="tel:+918168062414"
                    className="mt-1 block text-sm text-white/90 transition hover:text-white"
                  >
                    +91 81680 62414
                  </a>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-[#e5b757]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Email Us</p>

                  <a
                    href="mailto:info@toothistan.com"
                    className="mt-1 block text-sm text-white/90 transition hover:text-white"
                  >
                    info@toothistan.com
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Clock3 className="h-5 w-5 text-[#e5b757]" />
                </div>

                <div>
                  <p className="text-sm font-semibold">Opening Hours</p>

                  <p className="mt-1 text-sm leading-6 text-white/90">
                    Monday to Saturday
                    <br />
                    8:00 AM – 9:00 PM
                    <br />
                    Sunday – Closed
                  </p>
                </div>
              </div>
            </div>

            {/* PHONE BUTTON */}
            <a
              href="tel:+918168062414"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2d2217] transition hover:bg-[#f7f0e3]"
            >
              <Phone className="h-4 w-4" />
              Call Toothistan
            </a>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-10 lg:p-12"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
                Send Us A Message
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Get In Touch!
              </h2>

              <p className="mt-3 text-sm leading-6 text-black">
                Fill in your details and our team can get back to you regarding
                your dental enquiry or appointment.
              </p>
            </div>

            {status.message && (
              <div
                className={`mt-4 rounded-xl p-4 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:ring-2 focus:ring-[#42311d]/10"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:ring-2 focus:ring-[#42311d]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:ring-2 focus:ring-[#42311d]/10"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#faf8f4] px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#42311d] focus:ring-2 focus:ring-[#42311d]/10"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d] disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    SUBMIT ENQUIRY
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Find Us
            </p>

            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Visit Toothistan
            </h2>

            <p className="mt-3 max-w-2xl text-black">
              Find us at Green Square Market, near Khetarpal Hospital, Hisar.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white shadow-sm">
            <iframe
              title="Toothistan Location"
              src="https://www.google.com/maps?q=Toothistan%20Facial%20Esthetic%20%26%20Dental%20Clinic%2C%20SCF-212%2C%20Green%20Square%20Market%2C%20Hisar%2C%20Haryana&output=embed"
              className="h-[350px] w-full border-0 sm:h-[430px]"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f7f0e3] px-6 py-11 text-center sm:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready To Take The Next Step?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-black">
            Whether you have a dental concern or simply want to improve your
            smile, we're here to help you understand your options.
          </p>

          <Link
            to="/appointments"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d]"
          >
            Request An Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;