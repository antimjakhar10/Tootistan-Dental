import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSingleBlog, getImageUrl } from "../services/api";
import {
  Clock,
  User,
  Calendar,
  Eye,
  ArrowLeft,
  Share2,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  Tag,
  CheckCircle,
} from "lucide-react";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getSingleBlog(slug);
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs || []);

        // Dynamic SEO Helmet / Document Meta Update
        if (data.blog) {
          const seoTitle = data.blog.seoTitle || `${data.blog.title} | Toothistan Dental`;
          document.title = seoTitle;

          // Meta description
          let metaDesc = document.querySelector('meta[name="description"]');
          if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
          }
          metaDesc.content = data.blog.seoDescription || data.blog.excerpt || data.blog.title;

          // Meta keywords
          if (data.blog.seoKeywords) {
            let metaKey = document.querySelector('meta[name="keywords"]');
            if (!metaKey) {
              metaKey = document.createElement("meta");
              metaKey.name = "keywords";
              document.head.appendChild(metaKey);
            }
            metaKey.content = data.blog.seoKeywords;
          }
        }
      } catch (err) {
        setError(err.message || "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogDetail();
    }
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog?.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-[#faf8f4] pt-32 pb-20">
          <div className="flex items-center gap-3 text-base font-semibold text-[#6b5a4b]">
            <Sparkles className="animate-spin text-[#c48f32]" size={24} />
            Loading Article...
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf8f4] px-4 pt-32 pb-20 text-center">
          <BookOpen size={48} className="mb-4 text-[#c48f32]" />
          <h2 className="text-2xl font-bold text-[#2d2217]">Article Not Found</h2>
          <p className="mt-2 text-sm text-[#6b5a4b]">
            The article you are looking for might have been moved or deleted.
          </p>
          <Link
            to="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2d2217] px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-[#42311d]"
          >
            <ArrowLeft size={16} />
            Back to All Articles
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#faf8f4] pt-24 pb-20 sm:pt-28 lg:pt-32">
        {/* Background Decorative Glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f4ebd5] blur-3xl opacity-50" />

        <article className="relative mx-auto max-w-4xl px-5 sm:px-8">
          {/* Breadcrumb & Back Link */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#6b5a4b] hover:text-[#c48f32] transition"
            >
              <ArrowLeft size={15} />
              Back to Articles
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-1.5 text-xs font-semibold text-[#2d2217] shadow-sm hover:bg-[#fdfbf7] transition"
            >
              <Share2 size={14} className="text-[#c48f32]" />
              {copied ? "Link Copied!" : "Share Article"}
            </button>
          </div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-full bg-[#f7f0e3] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b88228]">
              {blog.category}
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] text-[#2d2217] sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>

            {/* Author & Meta Row */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#ebdcb8] py-4 text-xs font-semibold text-[#6b5a4b]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[#2d2217]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c48f32] text-white font-bold text-xs">
                    {blog.author ? blog.author.charAt(0) : "T"}
                  </div>
                  <div>
                    <p className="font-bold">{blog.author || "Dr. Toothistan"}</p>
                    <p className="text-[10px] text-[#8f621a]">Dental Specialist</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#c48f32]" />
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#c48f32]" />
                  {blog.readTime || "5 min read"}
                </span>

                <span className="flex items-center gap-1.5">
                  <Eye size={14} className="text-[#c48f32]" />
                  {blog.views || 1} views
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cover Image */}
          {blog.coverImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 overflow-hidden rounded-[28px] border-[6px] border-white bg-slate-100 shadow-xl sm:rounded-[36px]"
            >
              <img
                src={getImageUrl(blog.coverImage)}
                alt={blog.title}
                className="h-auto w-full max-h-[500px] object-cover"
              />
            </motion.div>
          )}

          {/* Excerpt Box */}
          {blog.excerpt && (
            <div className="mt-8 rounded-2xl border-l-4 border-[#c48f32] bg-[#f7f0e3]/60 p-5 text-sm font-medium leading-7 italic text-[#42311d]">
              "{blog.excerpt}"
            </div>
          )}

          {/* Rich Text Main Content Body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 rounded-[28px] border border-[#ebdcb8] bg-white p-6 shadow-sm sm:p-10"
          >
            <div
              className="blog-content-body font-sans text-base leading-8 text-[#2d2217]"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* SEO Keywords / Tags */}
            {blog.seoKeywords && (
              <div className="mt-10 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8f621a] uppercase tracking-wider mb-3">
                  <Tag size={14} />
                  Related Keywords & Topics
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.seoKeywords.split(",").map((kw, i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-[#faf8f4] px-3 py-1 text-xs font-medium text-[#6b5a4b] border border-[#ebdcb8]"
                    >
                      #{kw.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Call to Action Banner */}
          <div className="mt-12 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2d2217] to-[#42311d] p-8 text-white shadow-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e5b757]">
                  <Sparkles size={16} />
                  Ready For A Healthier Smile?
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  Book Your Dental Consultation Today
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  Experience world-class, painless dental care at Toothistan Clinic.
                </p>
              </div>

              <a
                href="/#appointment"
                className="btn-shine inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c48f32] px-6 py-3.5 text-xs font-bold text-white shadow-lg hover:bg-[#b88228] transition"
              >
                Book Appointment
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16 border-t border-[#ebdcb8] pt-12">
              <h3 className="mb-6 font-display text-2xl font-bold text-[#2d2217]">
                Related Articles You Might Like
              </h3>

              <div className="grid gap-6 sm:grid-cols-3">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel._id}
                    to={`/blog/${rel.slug || rel._id}`}
                    className="group rounded-2xl border border-[#ebdcb8] bg-white p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 mb-3">
                      <img
                        src={
                          rel.coverImage
                            ? getImageUrl(rel.coverImage)
                            : "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=90"
                        }
                        alt={rel.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#b88228] uppercase">
                      {rel.category}
                    </span>
                    <h4 className="mt-1 font-display text-sm font-bold text-[#2d2217] group-hover:text-[#c48f32] transition line-clamp-2">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
