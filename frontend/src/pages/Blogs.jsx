import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicBlogs, getImageUrl } from "../services/api";
import {
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  Clock,
  User,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { ToothDoctorMascot, FloatingMascotSticker } from "../components/DentalMascots";

const CATEGORIES = [
  "All",
  "General Dentistry",
  "Cosmetic Dentistry",
  "Oral Hygiene & Care",
  "Dental Implants",
  "Orthodontics & Aligners",
  "Pediatric Care",
  "Tech & Innovation",
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const fetchBlogsData = async (cat, search) => {
    try {
      setLoading(true);
      const res = await getPublicBlogs(cat, search);
      setBlogs(res.blogs || []);
    } catch (err) {
      console.warn("Failed to fetch blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogsData(selectedCategory, activeSearch);
  }, [selectedCategory, activeSearch]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchTerm);
  };

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const gridBlogs = blogs.length > 1 ? blogs.slice(1) : blogs;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf8f4] pt-24 pb-20 sm:pt-28 lg:pt-32">
        {/* Ambient Decorative Blur Glows */}
        <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-[#f4ebd5] blur-3xl opacity-60" />
        <div className="pointer-events-none absolute right-0 top-60 h-96 w-96 rounded-full bg-[#ebdcb8] blur-3xl opacity-50" />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative mb-12 text-center"
          >
            {/* Mascot Decoration */}
            <div className="pointer-events-none absolute left-10 top-0 hidden lg:block">
              <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228] shadow-sm">
              <BookOpen size={15} />
              Toothistan Journal & Knowledge Base
            </div>

            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2d2217] sm:text-5xl lg:text-[56px]">
              Expert Insights for Your <span className="text-[#c48f32]">Perfect Smile.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#6b5a4b] sm:text-base lg:text-lg">
              Explore evidence-based dental care tips, smile makeover guides, digital technology advances, and oral hygiene advice from our specialist team.
            </p>

            {/* Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="mx-auto mt-8 flex max-w-xl items-center rounded-2xl border border-[#ebdcb8] bg-white p-2 shadow-[0_10px_30px_rgba(45,34,23,0.06)]"
            >
              <div className="flex flex-1 items-center gap-3 px-3">
                <Search size={18} className="text-[#c48f32]" />
                <input
                  type="text"
                  placeholder="Search articles on whitening, implants, hygiene..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-[#2d2217] outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-[#2d2217] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#42311d]"
              >
                Search
              </button>
            </form>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    selectedCategory === cat
                      ? "bg-[#2d2217] text-white shadow-md"
                      : "border border-[#ebdcb8] bg-white text-[#6b5a4b] hover:border-[#c48f32] hover:bg-[#fdfbf7]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="flex h-72 items-center justify-center rounded-3xl border border-[#ebdcb8] bg-white">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#6b5a4b]">
                <Sparkles className="animate-spin text-[#c48f32]" size={20} />
                Fetching Toothistan articles...
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-[#ebdcb8] bg-white p-8 text-center">
              <BookOpen size={40} className="mb-3 text-[#c48f32]" />
              <h3 className="text-xl font-bold text-[#2d2217]">No Articles Found</h3>
              <p className="mt-2 text-sm text-[#6b5a4b]">
                We couldn't find any articles matching your search criteria. Try choosing a different category or search keyword.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post (If first page / all category) */}
              {featuredBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group relative overflow-hidden rounded-[32px] border border-[#ebdcb8] bg-white p-6 shadow-xl sm:p-8 lg:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 lg:col-span-7">
                      <img
                        src={
                          featuredBlog.coverImage
                            ? getImageUrl(featuredBlog.coverImage)
                            : "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90"
                        }
                        alt={featuredBlog.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-[#2d2217]/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#e5b757] backdrop-blur-md">
                        Featured Article
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 text-xs font-semibold text-[#b88228]">
                        <span className="rounded-full bg-[#f7f0e3] px-3 py-1 font-bold">
                          {featuredBlog.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {featuredBlog.readTime || "5 min read"}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-[#2d2217] sm:text-3xl lg:text-4xl group-hover:text-[#c48f32] transition">
                        <Link to={`/blog/${featuredBlog.slug || featuredBlog._id}`}>
                          {featuredBlog.title}
                        </Link>
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-[#6b5a4b] line-clamp-3">
                        {featuredBlog.excerpt}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-[#ebdcb8] pt-4">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#2d2217]">
                          <User size={14} className="text-[#c48f32]" />
                          {featuredBlog.author || "Dr. Toothistan"}
                        </div>

                        <Link
                          to={`/blog/${featuredBlog.slug || featuredBlog._id}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#c48f32] hover:text-[#2d2217] transition"
                        >
                          Read Full Article
                          <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Grid of Other Articles */}
              {gridBlogs.length > 0 && (
                <div>
                  <h3 className="mb-6 font-display text-2xl font-bold text-[#2d2217]">
                    Latest Articles
                  </h3>

                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {gridBlogs.map((blog, idx) => (
                      <motion.article
                        key={blog._id}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="group flex flex-col overflow-hidden rounded-[28px] border border-[#ebdcb8] bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {/* Cover Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                          <img
                            src={
                              blog.coverImage
                                ? getImageUrl(blog.coverImage)
                                : "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=90"
                            }
                            alt={blog.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-[#b88228] backdrop-blur-md shadow-sm">
                            {blog.category}
                          </div>
                        </div>

                        {/* Article Info */}
                        <div className="flex flex-1 flex-col justify-between p-6">
                          <div>
                            <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8f621a]">
                              <Clock size={12} />
                              {blog.readTime || "4 min read"}
                              <span>•</span>
                              <Calendar size={12} />
                              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>

                            <h4 className="mt-3 font-display text-xl font-bold leading-snug text-[#2d2217] group-hover:text-[#c48f32] transition line-clamp-2">
                              <Link to={`/blog/${blog.slug || blog._id}`}>{blog.title}</Link>
                            </h4>

                            <p className="mt-3 text-xs leading-6 text-[#6b5a4b] line-clamp-3">
                              {blog.excerpt}
                            </p>
                          </div>

                          <div className="mt-6 flex items-center justify-between border-t border-[#ebdcb8] pt-4">
                            <span className="text-[11px] font-semibold text-[#2d2217]">
                              {blog.author || "Dr. Toothistan"}
                            </span>

                            <Link
                              to={`/blog/${blog.slug || blog._id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c48f32] hover:translate-x-1 transition-transform"
                            >
                              Read
                              <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blogs;
