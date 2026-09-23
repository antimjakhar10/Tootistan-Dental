import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  ShieldCheck,
  Search,
  X,
  Calendar,
  ArrowRight,
  User,
  CheckCircle2,
  Heart,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicTestimonials, getImageUrl } from "../services/api";
import { useSettings } from "../context/SettingsContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const getInitials = (name) => {
  if (!name) return "TS";
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export default function Testimonials() {
  const { settings } = useSettings();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRating, setFilterRating] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getPublicTestimonials();
      setTestimonials(data || []);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredReviews = testimonials.filter((item) => {
    const matchRating =
      filterRating === "all" || item.rating === parseInt(filterRating);
    const matchSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.treatment?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.review.toLowerCase().includes(searchQuery.toLowerCase());
    return matchRating && matchSearch;
  });

  const featured = testimonials.find((t) => t.rating === 5) || testimonials[0];

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#2d2217]">
        {/* HERO SECTION */}
        <section className="relative px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-36">
          <div className="absolute left-[-120px] top-32 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute right-[-100px] top-20 h-80 w-80 rounded-full bg-[#e8f4ef] blur-3xl" />

          <div className="relative mx-auto max-w-[1280px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#42311d] shadow-sm"
              >
                <Sparkles size={14} className="text-[#b88228]" />
                Smile Gallery • Testimonials
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl font-extrabold tracking-tight text-[#2d2217] sm:text-5xl lg:text-6xl"
              >
                Loved by Patients, <span className="text-[#b88228]">Trusted for Every Smile</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5a4836] sm:text-lg"
              >
                Read genuine reviews and experiences from real patients who received painless, world-class dental treatment at Toothistan.
              </motion.p>

              {/* STATS BADGES */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center justify-center gap-6"
              >
                <div className="flex items-center gap-2 rounded-2xl border border-[#ebdcb8] bg-white px-5 py-3 shadow-sm">
                  <div className="flex text-[#b88228]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#2d2217]">4.9 / 5.0 Rating</span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-[#ebdcb8] bg-white px-5 py-3 shadow-sm text-sm font-bold text-[#2d2217]">
                  <ShieldCheck size={18} className="text-[#b88228]" />
                  22,000+ Smiles Transformed
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FEATURED TESTIMONIAL BANNER */}
        {featured && (
          <section className="px-5 pb-12 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1280px]">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-3xl bg-[#2d2217] p-8 text-white shadow-2xl sm:p-12 lg:p-14"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 text-[#b88228]/15">
                  <Quote size={220} strokeWidth={1} />
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-1.5">
                      {[...Array(featured.rating || 5)].map((_, i) => (
                        <Star key={i} size={18} className="fill-[#b88228] text-[#b88228]" />
                      ))}
                      <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#ebdcb8]">
                        Featured Patient Story
                      </span>
                    </div>

                    <blockquote className="mt-6 text-xl font-medium leading-relaxed text-white sm:text-2xl lg:text-3xl">
                      “{featured.review}”
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4">
                      {featured.image ? (
                        <img
                          src={getImageUrl(featured.image)}
                          alt={featured.name}
                          className="h-14 w-14 rounded-full object-cover border-2 border-[#b88228]"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b88228] text-base font-bold text-white shadow-md">
                          {getInitials(featured.name)}
                        </div>
                      )}

                      <div>
                        <h3 className="text-lg font-bold text-white">{featured.name}</h3>
                        <p className="text-xs text-[#ebdcb8]">
                          {featured.treatment || "Smile Transformation"} • Verified Patient
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start lg:items-end lg:col-span-4 justify-center">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md w-full">
                      <div className="flex items-center gap-2 text-xs text-[#ebdcb8]">
                        <ShieldCheck size={16} className="text-[#b88228]" />
                        100% Authentic Feedback
                      </div>
                      <p className="mt-2 text-xs text-stone-300">
                        Every review on Toothistan is verified from real patient visits and treatments.
                      </p>
                      <Link
                        to="/appointments"
                        className="btn-shine mt-4 block text-center rounded-full bg-[#b88228] px-5 py-3 text-xs font-bold text-white hover:bg-[#a1711f] transition"
                      >
                        Book Your Experience
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* SEARCH & FILTER BAR */}
        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#ebdcb8]/60 pb-6">
              {/* Rating Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setFilterRating("all")}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    filterRating === "all"
                      ? "bg-[#2d2217] text-white shadow-md"
                      : "border border-[#ebdcb8] bg-white text-[#5a4836] hover:bg-[#f7f0e3]"
                  }`}
                >
                  All Reviews ({testimonials.length})
                </button>

                <button
                  onClick={() => setFilterRating("5")}
                  className={`flex items-center gap-1 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    filterRating === "5"
                      ? "bg-[#2d2217] text-white shadow-md"
                      : "border border-[#ebdcb8] bg-white text-[#5a4836] hover:bg-[#f7f0e3]"
                  }`}
                >
                  <Star size={13} className="fill-[#b88228] text-[#b88228]" /> 5 Stars
                </button>

                <button
                  onClick={() => setFilterRating("4")}
                  className={`flex items-center gap-1 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                    filterRating === "4"
                      ? "bg-[#2d2217] text-white shadow-md"
                      : "border border-[#ebdcb8] bg-white text-[#5a4836] hover:bg-[#f7f0e3]"
                  }`}
                >
                  <Star size={13} className="fill-[#b88228] text-[#b88228]" /> 4 Stars
                </button>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#b88228]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or procedure..."
                  className="w-full rounded-full border border-[#ebdcb8] bg-white pl-9 pr-8 py-2.5 text-xs font-medium outline-none focus:border-[#b88228]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#2d2217]"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL GRID */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            {loading ? (
              <div className="py-20 text-center text-[#5a4836] font-medium">
                Loading patient reviews...
              </div>
            ) : filteredReviews.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#ebdcb8] bg-white p-12 text-center">
                <MessageSquare size={44} className="mx-auto text-[#b88228] opacity-60" />
                <h3 className="mt-4 text-lg font-bold text-[#2d2217]">
                  No reviews found
                </h3>
                <p className="mt-1 text-sm text-[#7a6450]">
                  {searchQuery || filterRating !== "all"
                    ? "Try adjusting your search query or filter."
                    : "No patient reviews published yet."}
                </p>
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredReviews.map((item) => (
                  <motion.div
                    key={item._id}
                    variants={fadeUp}
                    onClick={() => setSelectedReview(item)}
                    className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b88228] hover:shadow-xl"
                  >
                    <div>
                      {/* Rating & Quote Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-[#b88228]">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <Star key={i} size={15} className="fill-current" />
                          ))}
                        </div>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
                          <Quote size={16} />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="mt-5 text-sm leading-relaxed text-[#2d2217] line-clamp-5">
                        “{item.review}”
                      </p>
                    </div>

                    {/* Patient Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-5">
                      <div className="flex items-center gap-3">
                        {item.image ? (
                          <img
                            src={getImageUrl(item.image)}
                            alt={item.name}
                            className="h-11 w-11 rounded-full object-cover border border-[#ebdcb8]"
                          />
                        ) : (
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2d2217] text-xs font-bold text-white">
                            {getInitials(item.name)}
                          </div>
                        )}

                        <div>
                          <h4 className="text-sm font-bold text-[#2d2217] group-hover:text-[#b88228] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-[#7a6450]">
                            {item.treatment || "Verified Patient"}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-[#f8f3e8] p-2 text-[#b88228] opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* BOOKING CTA BANNER */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-3xl bg-[#2d2217] p-8 text-center text-white shadow-2xl sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b88228]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f4ebd5]/10 blur-3xl" />

              <div className="relative mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b88228]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ebdcb8] border border-[#b88228]/40">
                  <Calendar size={13} /> Join Thousands of Happy Smiles
                </span>

                <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl text-white">
                  Ready for Painless, World-Class Care?
                </h2>

                <p className="mt-3 text-sm text-[#ebdcb8] sm:text-base">
                  Book your consultation today and discover why Toothistan is rated 4.9/5 by patients.
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/appointments"
                    className="btn-shine rounded-full bg-[#b88228] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#a1711f]"
                  >
                    Book Appointment Online
                  </Link>

                  <a
                    href={`tel:${settings.phone}`}
                    className="rounded-full border border-[#ebdcb8]/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
                  >
                    Call Us: {settings.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FULL TESTIMONIAL MODAL */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-7 shadow-2xl border border-[#ebdcb8]"
            >
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute right-5 top-5 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-[#2d2217] transition"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-1 text-[#b88228]">
                {[...Array(selectedReview.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>

              <blockquote className="mt-5 text-base leading-relaxed text-[#2d2217] font-medium">
                “{selectedReview.review}”
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-stone-100 pt-5">
                {selectedReview.image ? (
                  <img
                    src={getImageUrl(selectedReview.image)}
                    alt={selectedReview.name}
                    className="h-12 w-12 rounded-full object-cover border border-[#ebdcb8]"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d2217] text-sm font-bold text-white">
                    {getInitials(selectedReview.name)}
                  </div>
                )}

                <div>
                  <h4 className="text-base font-bold text-[#2d2217]">
                    {selectedReview.name}
                  </h4>
                  <p className="text-xs text-[#7a6450]">
                    {selectedReview.treatment || "Patient Experience"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
