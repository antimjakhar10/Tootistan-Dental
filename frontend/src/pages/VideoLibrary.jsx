import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Search,
  X,
  Clock,
  Eye,
  Sparkles,
  ArrowRight,
  Filter,
  Film,
  Video as VideoIcon,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicVideos, getImageUrl, incrementVideoViews } from "../services/api";
import { useSettings } from "../context/SettingsContext";

const categories = [
  "All",
  "Patient Guides",
  "Treatments & Procedures",
  "Oral Hygiene Tips",
  "Post-Op Care",
  "Patient Stories",
];

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
    transition: { staggerChildren: 0.1 },
  },
};

// Helper to convert YouTube URL to Embed URL
const getEmbedUrl = (video) => {
  if (video.videoFile) {
    return getImageUrl(video.videoFile);
  }

  const url = video.videoUrl || "";

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let videoId = "";
    if (url.includes("v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else if (url.includes("embed/")) {
      videoId = url.split("embed/")[1]?.split("?")[0];
    }
    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
      : url;
  }

  if (url.includes("vimeo.com")) {
    const vimeoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return vimeoId
      ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1`
      : url;
  }

  return url;
};

export default function VideoLibrary() {
  const { settings } = useSettings();
  const [videos, setVideos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, [activeCategory]);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const data = await getPublicVideos(
        activeCategory,
        searchQuery
      );
      setVideos(data || []);
    } catch (err) {
      console.error("Error fetching dynamic videos from API:", err);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  const openVideoModal = (video) => {
    setActiveVideo(video);
    if (video._id) {
      incrementVideoViews(video._id);
    }
  };

  // Filter client-side if searchQuery changes live
  const filteredVideos = videos.filter((v) => {
    const matchCategory =
      activeCategory === "All" || v.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featuredVideo =
    filteredVideos.find((v) => v.isFeatured) || (filteredVideos.length > 0 ? filteredVideos[0] : null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#2d2217]">
        {/* HERO SECTION */}
        <section className="relative px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14 lg:pt-36">
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
                New Patients • Video Library
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-3xl font-extrabold tracking-tight text-[#2d2217] sm:text-5xl lg:text-6xl"
              >
                Your Complete <span className="text-[#b88228]">Dental Care</span> Video Guide
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5a4836] sm:text-lg"
              >
                Explore expert video guides, patient experience stories, procedure explanations, and post-care instructions crafted by Toothistan dental specialists.
              </motion.p>

              {/* SEARCH & FILTER BAR */}
              <motion.form
                variants={fadeUp}
                onSubmit={handleSearchSubmit}
                className="mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-2xl border border-[#ebdcb8] bg-white p-2 shadow-[0_10px_30px_rgba(45,34,23,0.06)]"
              >
                <div className="flex flex-1 items-center gap-3 px-3">
                  <Search size={19} className="text-[#b88228]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search videos by title or topic..."
                    className="w-full text-sm font-medium text-[#2d2217] outline-none placeholder:text-stone-400"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="text-stone-400 hover:text-[#2d2217]"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-shine rounded-xl bg-[#2d2217] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#42311d]"
                >
                  Search
                </button>
              </motion.form>
            </motion.div>
          </div>
        </section>

        {/* CATEGORY TABS */}
        <section className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 no-scrollbar justify-start sm:justify-center">
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                      active
                        ? "bg-[#2d2217] text-white shadow-md shadow-[#2d2217]/20 scale-105"
                        : "border border-[#ebdcb8] bg-white text-[#5a4836] hover:border-[#b88228] hover:bg-[#f7f0e3]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* FEATURED VIDEO BANNER (Show if available & "All" active) */}
        {featuredVideo && activeCategory === "All" && !searchQuery && (
          <section className="px-5 pb-12 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1280px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="group relative overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white shadow-[0_20px_50px_rgba(45,34,23,0.08)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: Thumbnail & Play Overlay */}
                  <div className="relative aspect-video overflow-hidden lg:col-span-7 bg-stone-100">
                    <img
                      src={getImageUrl(featuredVideo.thumbnailUrl)}
                      alt={featuredVideo.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                      <button
                        onClick={() => openVideoModal(featuredVideo)}
                        className="group/btn relative flex h-20 w-20 items-center justify-center rounded-full bg-[#b88228] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#a1711f]"
                        aria-label="Play video"
                      >
                        <span className="absolute inset-0 rounded-full bg-[#b88228] animate-ping opacity-40" />
                        <Play size={32} className="ml-1 fill-white" />
                      </button>
                    </div>

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="rounded-full bg-[#2d2217]/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-[#f4ebd5] border border-[#ebdcb8]/30">
                        ⭐ Featured Video
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                      <Clock size={13} className="text-[#b88228]" />
                      {featuredVideo.duration || "3:00"} min
                    </div>
                  </div>

                  {/* Right: Info */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 bg-[#faf6ee]">
                    <div>
                      <span className="inline-block rounded-full bg-[#f4ebd5] px-3.5 py-1 text-xs font-bold text-[#42311d]">
                        {featuredVideo.category}
                      </span>

                      <h2 className="mt-4 text-2xl font-extrabold text-[#2d2217] sm:text-3xl leading-snug">
                        {featuredVideo.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-[#5a4836]">
                        {featuredVideo.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#ebdcb8]/60 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#7a6450]">
                        <Eye size={15} className="text-[#b88228]" />
                        {featuredVideo.views || 0} views
                      </div>

                      <button
                        onClick={() => openVideoModal(featuredVideo)}
                        className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3 text-xs font-bold text-white transition hover:bg-[#42311d]"
                      >
                        <Play size={14} className="fill-white" />
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* MAIN VIDEO GRID */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#2d2217] sm:text-2xl flex items-center gap-2">
                <Film size={22} className="text-[#b88228]" />
                {activeCategory === "All"
                  ? "All Educational Videos"
                  : `${activeCategory} Videos`}
                <span className="text-sm font-normal text-[#7a6450]">
                  ({filteredVideos.length})
                </span>
              </h2>
            </div>

            {loading ? (
              <div className="py-20 text-center text-[#5a4836] font-medium">
                Loading video library...
              </div>
            ) : filteredVideos.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[#ebdcb8] bg-white p-12 text-center">
                <VideoIcon size={44} className="mx-auto text-[#b88228] opacity-60" />
                <h3 className="mt-4 text-lg font-bold text-[#2d2217]">
                  No videos found
                </h3>
                <p className="mt-1 text-sm text-[#7a6450]">
                  {searchQuery || activeCategory !== "All"
                    ? "Try adjusting your search query or select another category tab."
                    : "No videos added yet in the library. Admin can add videos from the Admin Panel."}
                </p>
                {(searchQuery || activeCategory !== "All") && (
                  <button
                    onClick={() => {
                      setActiveCategory("All");
                      setSearchQuery("");
                    }}
                    className="mt-5 rounded-full bg-[#2d2217] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#42311d]"
                  >
                    View All Videos
                  </button>
                )}
              </div>
            ) : (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredVideos.map((video) => (
                  <motion.div
                    key={video._id}
                    variants={fadeUp}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#ebdcb8] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-stone-100">
                      <img
                        src={getImageUrl(video.thumbnailUrl)}
                        alt={video.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                      {/* Play Button overlay */}
                      <button
                        onClick={() => openVideoModal(video)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Play ${video.title}`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#2d2217] shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#b88228] group-hover:text-white">
                          <Play size={22} className="ml-1 fill-current" />
                        </div>
                      </button>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-[#2d2217]/80 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-[#f4ebd5]">
                          {video.category}
                        </span>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-0.5 text-[11px] font-semibold text-white">
                        <Clock size={11} className="text-[#b88228]" />
                        {video.duration || "2:30"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="line-clamp-2 text-base font-bold text-[#2d2217] group-hover:text-[#b88228] transition-colors">
                          {video.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#5a4836]">
                          {video.description || "Learn more about this treatment and patient process at Toothistan."}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-[#7a6450]">
                        <span className="flex items-center gap-1 font-medium">
                          <Eye size={13} className="text-[#b88228]" />
                          {video.views || 0} views
                        </span>

                        <button
                          onClick={() => openVideoModal(video)}
                          className="flex items-center gap-1 font-bold text-[#2d2217] hover:text-[#b88228]"
                        >
                          Watch Now <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* BOOKING BANNER */}
        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-3xl bg-[#2d2217] p-8 text-center text-white shadow-2xl sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b88228]/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#f4ebd5]/10 blur-3xl" />

              <div className="relative mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b88228]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ebdcb8] border border-[#b88228]/40">
                  <Calendar size={13} /> Ready for Your Visit?
                </span>

                <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl text-white">
                  Schedule Your Consultation Today
                </h2>

                <p className="mt-3 text-sm text-[#ebdcb8] sm:text-base">
                  Experience comfortable, world-class dental care designed around your comfort and health goals.
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

      {/* VIDEO MODAL POPUP */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#ebdcb8]/30 bg-[#2d2217] text-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#b88228] px-3 py-1 text-xs font-bold text-white">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-sm font-bold text-stone-200 line-clamp-1 sm:text-base">
                    {activeVideo.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full bg-white/10 p-2 text-stone-300 hover:bg-white/20 hover:text-white transition"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                {activeVideo.videoFile ? (
                  <video
                    src={getImageUrl(activeVideo.videoFile)}
                    controls
                    autoPlay
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(activeVideo)}
                    title={activeVideo.title}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>

              {/* Description & Footer */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-white">
                  {activeVideo.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-[#ebdcb8] sm:text-sm">
                  {activeVideo.description ||
                    "Watch this informative guide to understand procedures, expectations, and care guidelines at Toothistan."}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-4 text-xs text-stone-300">
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#b88228]" />
                      {activeVideo.duration || "2:30"} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={13} className="text-[#b88228]" />
                      {activeVideo.views || 0} views
                    </span>
                  </div>

                  <Link
                    to="/appointments"
                    onClick={() => setActiveVideo(null)}
                    className="btn-shine rounded-full bg-[#b88228] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#a1711f]"
                  >
                    Book Consultation
                  </Link>
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
