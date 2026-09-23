import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Heart,
  Eye,
  ExternalLink,
  Search,
  Sparkles,
  X,
  Share2,
  Film,
  MessageCircle,
  ThumbsUp,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSettings } from "../context/SettingsContext";
import API_URL from "../components/adminApi";

const Instagram = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

const HOST = API_URL.replace(/\/api\/?$/, "");

const getMediaSrc = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${HOST}${path.startsWith("/") ? "" : "/"}${path}`;
};

const Socials = () => {
  const { settings } = useSettings();
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); // all, instagram, youtube, reels_shorts, featured
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState(null);

  useEffect(() => {
    fetchSocials();
  }, []);

  const fetchSocials = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/socials/public`);
      const data = await res.json();
      if (data.success) {
        setSocials(data.socials || []);
      }
    } catch (err) {
      console.error("Error loading social feed:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filtering
  const filteredSocials = socials.filter((item) => {
    // Tab filter
    if (activeTab === "instagram" && item.platform !== "instagram") return false;
    if (activeTab === "youtube" && item.platform !== "youtube") return false;
    if (
      activeTab === "reels_shorts" &&
      item.postType !== "reel" &&
      item.postType !== "short"
    )
      return false;
    if (activeTab === "featured" && !item.isFeatured) return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const titleMatch = item.title?.toLowerCase().includes(q);
      const captionMatch = item.caption?.toLowerCase().includes(q);
      const categoryMatch = item.category?.toLowerCase().includes(q);
      return titleMatch || captionMatch || categoryMatch;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#2d2217]">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#f5ede0] to-[#faf8f4]">
        {/* Glow decorative spheres */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#c48f32]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#e5b757]/15 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#f4ebd5] px-4 py-1.5 text-xs font-semibold text-[#b88228]"
            >
              <Sparkles size={14} />
              <span>Connect With Toothistan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#2d2217]"
            >
              Our Social <span className="text-[#b88228]">Media Feed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              Explore our latest Instagram reels, smile makeover transformations,
              educational YouTube videos, and behind-the-scenes moments at Toothistan.
            </motion.p>

            {/* Platform Official Banner Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
            >
              {/* Instagram Profile Card */}
              <a
                href={settings.instagramUrl || "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-pink-200/80 bg-gradient-to-r from-pink-50/70 via-purple-50/70 to-orange-50/70 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
                    <Instagram size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#2d2217] text-sm group-hover:text-pink-600 transition-colors">
                      {settings.instagramHandle || "@toothistan_dental"}
                    </h3>
                    <p className="text-xs text-slate-500">Instagram Community</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-pink-600 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  Follow <ArrowUpRight size={13} />
                </span>
              </a>

              {/* YouTube Profile Card */}
              <a
                href={settings.youtubeUrl || "https://youtube.com"}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-red-200/80 bg-gradient-to-r from-red-50/70 via-rose-50/70 to-orange-50/70 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-md">
                    <Youtube size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-[#2d2217] text-sm group-hover:text-red-600 transition-colors">
                      {settings.youtubeChannelName || "Toothistan Dental"}
                    </h3>
                    <p className="text-xs text-slate-500">YouTube Channel</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-red-600 bg-white px-3 py-1.5 rounded-full shadow-sm">
                  Subscribe <ArrowUpRight size={13} />
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 px-5 sm:px-8 lg:px-10 mx-auto max-w-7xl">
        {/* Controls: Filter Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 border-b border-[#ebdcb8]/60 pb-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === "all"
                  ? "bg-[#2d2217] text-white shadow-md"
                  : "bg-white border border-[#ebdcb8] text-[#2d2217] hover:bg-[#f4ebd5]"
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveTab("instagram")}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === "instagram"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                  : "bg-white border border-[#ebdcb8] text-[#2d2217] hover:bg-pink-50"
              }`}
            >
              <Instagram size={14} /> Instagram
            </button>
            <button
              onClick={() => setActiveTab("youtube")}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === "youtube"
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white border border-[#ebdcb8] text-[#2d2217] hover:bg-red-50"
              }`}
            >
              <Youtube size={14} /> YouTube
            </button>
            <button
              onClick={() => setActiveTab("reels_shorts")}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === "reels_shorts"
                  ? "bg-[#b88228] text-white shadow-md"
                  : "bg-white border border-[#ebdcb8] text-[#2d2217] hover:bg-[#f4ebd5]"
              }`}
            >
              <Film size={14} /> Reels & Shorts
            </button>
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === "featured"
                  ? "bg-[#c48f32] text-[#1f1912] shadow-md"
                  : "bg-white border border-[#ebdcb8] text-[#2d2217] hover:bg-[#f4ebd5]"
              }`}
            >
              <Sparkles size={14} /> Featured
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search feed..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#ebdcb8] bg-white pl-10 pr-4 py-2.5 text-xs text-[#2d2217] placeholder-slate-400 focus:border-[#b88228] focus:outline-none shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-80 rounded-2xl bg-slate-200 animate-pulse border border-slate-200"
              />
            ))}
          </div>
        ) : filteredSocials.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#ebdcb8] p-8 max-w-md mx-auto">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228] mx-auto mb-4">
              <Share2 size={28} />
            </div>
            <h3 className="text-lg font-bold text-[#2d2217]">No Social Content Found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your filter or search query to find more posts.
            </p>
          </div>
        ) : (
          /* Grid of Social Cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredSocials.map((item) => {
              const isInstagram = item.platform === "instagram";
              const isYouTube = item.platform === "youtube";

              return (
                <motion.div
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white">
                    <div className="flex items-center gap-2">
                      {isInstagram ? (
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-xs">
                          <Instagram size={15} />
                        </div>
                      ) : (
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-white shadow-xs">
                          <Youtube size={15} />
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-bold text-[#2d2217] leading-tight">
                          {isInstagram ? "@toothistan_dental" : "Toothistan Dental"}
                        </p>
                        <p className="text-[10px] text-slate-400 capitalize">
                          {item.platform} • {item.postType}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f4ebd5] text-[#b88228]">
                      {item.category}
                    </span>
                  </div>

                  {/* Thumbnail / Media Container */}
                  <div
                    onClick={() => setActiveModalItem(item)}
                    className="relative aspect-video sm:aspect-square w-full overflow-hidden bg-slate-900 cursor-pointer"
                  >
                    <img
                      src={getMediaSrc(item.thumbnailUrl) || "/logo.png"}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                    {/* Play icon button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#2d2217] shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                        {isYouTube || item.postType === "reel" ? (
                          <Play size={24} className="ml-1 fill-[#2d2217]" />
                        ) : (
                          <ExternalLink size={22} />
                        )}
                      </div>
                    </div>

                    {/* Badges on Image */}
                    {item.isFeatured && (
                      <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-[#c48f32] px-2.5 py-1 text-[10px] font-bold text-[#1f1912] shadow">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}

                    {/* Stats badges */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium">
                      <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        <Eye size={13} className="text-white/80" />
                        {item.views || "1.2k"}
                      </span>
                      <span className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                        <Heart size={13} className="text-pink-400 fill-pink-400" />
                        {item.likes || "340"}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3
                        onClick={() => setActiveModalItem(item)}
                        className="font-bold text-[#2d2217] text-base leading-snug cursor-pointer line-clamp-2 hover:text-[#b88228] transition-colors"
                      >
                        {item.title}
                      </h3>
                      {item.caption && (
                        <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {item.caption}
                        </p>
                      )}
                    </div>

                    {/* Footer Links */}
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                      <button
                        onClick={() => setActiveModalItem(item)}
                        className="text-xs font-bold text-[#b88228] hover:text-[#2d2217] transition-colors flex items-center gap-1"
                      >
                        Preview Post →
                      </button>

                      <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                          isInstagram
                            ? "bg-pink-50 text-pink-600 hover:bg-pink-100"
                            : "bg-red-50 text-red-600 hover:bg-red-100"
                        }`}
                      >
                        <span>Open</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalItem(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/20"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-[#faf8f4]">
                <div className="flex items-center gap-2">
                  {activeModalItem.platform === "instagram" ? (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                      <Instagram size={14} /> Instagram {activeModalItem.postType}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      <Youtube size={14} /> YouTube {activeModalItem.postType}
                    </span>
                  )}
                  <span className="text-xs text-slate-400">• {activeModalItem.category}</span>
                </div>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="rounded-full bg-slate-200 p-2 text-slate-600 hover:bg-slate-300 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Media Body */}
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left Media Column */}
                <div className="lg:col-span-2 bg-black aspect-video flex items-center justify-center relative">
                  {activeModalItem.platform === "youtube" && activeModalItem.embedUrl ? (
                    <iframe
                      src={`${activeModalItem.embedUrl}?autoplay=1`}
                      title={activeModalItem.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                      <img
                        src={getMediaSrc(activeModalItem.thumbnailUrl)}
                        alt={activeModalItem.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <a
                          href={activeModalItem.postUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-shine rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2d2217] shadow-xl hover:bg-slate-100 flex items-center gap-2"
                        >
                          Watch directly on {activeModalItem.platform === "instagram" ? "Instagram" : "YouTube"}
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Details Column */}
                <div className="p-6 flex flex-col justify-between bg-white">
                  <div>
                    <h2 className="text-lg font-bold text-[#2d2217]">
                      {activeModalItem.title}
                    </h2>

                    {activeModalItem.caption && (
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed max-h-48 overflow-y-auto">
                        {activeModalItem.caption}
                      </p>
                    )}

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Views:</span>
                        <span className="font-semibold text-[#2d2217]">
                          {activeModalItem.views || "N/A"}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Likes / Engagement:</span>
                        <span className="font-semibold text-[#2d2217]">
                          {activeModalItem.likes || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={activeModalItem.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-xl bg-[#2d2217] py-3 text-center text-xs font-bold text-white shadow hover:bg-[#42311d] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Open Original Post</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Social Community CTA */}
      <div className="mt-16 mb-24 lg:mt-24 lg:mb-32 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <section className="py-16 px-6 sm:px-10 bg-[#1f1912] text-white relative overflow-hidden rounded-3xl shadow-2xl border border-[#ebdcb8]/20">
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Join the <span className="text-[#e5b757]">Toothistan</span> Family
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
              Stay updated with daily oral health tips, patient smile transformations, and special clinic announcements across our official social channels.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <a
                href={settings.instagramUrl || "https://instagram.com"}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-purple-600 via-rose-500 to-amber-500 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <Instagram size={18} /> Follow on Instagram
              </a>
              <a
                href={settings.youtubeUrl || "https://youtube.com"}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-red-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 hover:bg-red-700 transition-all flex items-center gap-2"
              >
                <Youtube size={18} /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Socials;
