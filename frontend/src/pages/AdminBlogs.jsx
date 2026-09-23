import React, { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import {
  getAllAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getImageUrl,
} from "../services/api";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  Calendar,
  Sparkles,
  FileText,
  X,
  CheckCircle,
  AlertCircle,
  Upload,
  Globe,
  Tag,
  Clock,
  User,
} from "lucide-react";

const CATEGORIES = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Oral Hygiene & Care",
  "Dental Implants",
  "Orthodontics & Aligners",
  "Pediatric Care",
  "Tech & Innovation",
];

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "color",
  "background",
  "align",
  "link",
  "image",
];

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "General Dentistry",
    author: "Dr. Toothistan",
    readTime: "5 min read",
    excerpt: "",
    content: "",
    isPublished: true,
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    tags: "",
  });

  const [coverImageFile, setCoverImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getAllAdminBlogs();
      setBlogs(data || []);
    } catch (err) {
      showToast(err.message || "Failed to load blog posts", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 4000);
  };

  const handleOpenAddModal = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      category: "General Dentistry",
      author: "Dr. Toothistan",
      readTime: "5 min read",
      excerpt: "",
      content: "",
      isPublished: true,
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      tags: "",
    });
    setCoverImageFile(null);
    setImagePreview("");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      slug: blog.slug || "",
      category: blog.category || "General Dentistry",
      author: blog.author || "Dr. Toothistan",
      readTime: blog.readTime || "5 min read",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      isPublished: blog.isPublished !== false,
      seoTitle: blog.seoTitle || "",
      seoDescription: blog.seoDescription || "",
      seoKeywords: blog.seoKeywords || "",
      tags: blog.tags ? blog.tags.join(", ") : "",
    });
    setCoverImageFile(null);
    setImagePreview(blog.coverImage ? getImageUrl(blog.coverImage) : "");
    setIsModalOpen(true);
  };

  const handleTitleChange = (e) => {
    const titleVal = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: titleVal,
      // Auto populate SEO title if empty or matching old title
      seoTitle: !prev.seoTitle || prev.seoTitle === prev.title ? titleVal : prev.seoTitle,
      // Auto populate slug
      slug:
        !editingBlog && (!prev.slug || prev.slug === prev.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"))
          ? titleVal
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, "")
          : prev.slug,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      showToast("Please provide both Title and Description content", "error");
      return;
    }

    try {
      setSubmitting(true);
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("slug", formData.slug);
      submitData.append("category", formData.category);
      submitData.append("author", formData.author);
      submitData.append("readTime", formData.readTime);
      submitData.append("excerpt", formData.excerpt);
      submitData.append("content", formData.content);
      submitData.append("isPublished", formData.isPublished);
      submitData.append("seoTitle", formData.seoTitle);
      submitData.append("seoDescription", formData.seoDescription);
      submitData.append("seoKeywords", formData.seoKeywords);
      submitData.append("tags", formData.tags);

      if (coverImageFile) {
        submitData.append("coverImage", coverImageFile);
      }

      if (editingBlog) {
        await updateBlog(editingBlog._id, submitData);
        showToast("Blog post updated successfully!");
      } else {
        await createBlog(submitData);
        showToast("New blog post published successfully!");
      }

      setIsModalOpen(false);
      fetchBlogs();
    } catch (err) {
      showToast(err.message || "Operation failed", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await deleteBlog(id);
        showToast("Blog deleted successfully");
        fetchBlogs();
      } catch (err) {
        showToast(err.message || "Failed to delete blog", "error");
      }
    }
  };

  const handleTogglePublish = async (blog) => {
    try {
      const submitData = new FormData();
      submitData.append("isPublished", !blog.isPublished);
      await updateBlog(blog._id, submitData);
      showToast(`Status updated to ${!blog.isPublished ? "Published" : "Draft"}`);
      fetchBlogs();
    } catch (err) {
      showToast(err.message || "Failed to toggle status", "error");
    }
  };

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (b.category && b.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = filterCategory === "All" || b.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Toast Notification */}
        {toast.message && (
          <div
            className={`fixed right-6 top-20 z-50 flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl text-sm font-semibold transition-all duration-300 ${
              toast.type === "error"
                ? "bg-red-600 text-white"
                : "bg-[#2d2217] text-[#e5b757]"
            }`}
          >
            {toast.type === "error" ? <AlertCircle size={18} /> : <CheckCircle size={18} />}
            {toast.message}
          </div>
        )}

        {/* Top Title Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-[#2d2217] sm:text-3xl">
              Blog & Article Management
            </h1>
            <p className="mt-1 text-xs text-[#6b5a4b] sm:text-sm">
              Create, edit, format with rich text, and manage SEO meta tags for your dental blog.
            </p>
          </div>

          <button
            onClick={handleOpenAddModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#2d2217] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-[#42311d] transition"
          >
            <Plus size={16} />
            Add New Blog Post
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search blogs by title, tags or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2 text-xs font-medium focus:border-[#c48f32] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Category:</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold focus:border-[#c48f32] focus:outline-none"
            >
              <option value="All">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Blog Table / Grid */}
        {loading ? (
          <div className="flex h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#6b5a4b]">
              <Sparkles className="animate-spin text-[#c48f32]" size={20} />
              Loading blog posts...
            </div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <FileText className="mb-3 h-12 w-12 text-slate-300" />
            <h3 className="text-base font-bold text-[#2d2217]">No blog posts found</h3>
            <p className="mt-1 text-xs text-slate-500">
              {searchTerm ? "Try searching for a different keyword." : "Click 'Add New Blog Post' to publish your first article."}
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-slate-100 bg-[#fdfbf7] font-semibold text-[#6b5a4b] uppercase tracking-wider">
                  <tr>
                    <th className="px-5 py-4">Article</th>
                    <th className="px-4 py-4">Category</th>
                    <th className="px-4 py-4">SEO Title</th>
                    <th className="px-4 py-4">Views</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-4 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredBlogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-slate-50/70 transition">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3.5">
                          <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-200">
                            {blog.coverImage ? (
                              <img
                                src={getImageUrl(blog.coverImage)}
                                alt={blog.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                                <FileText size={18} />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-[#2d2217] line-clamp-1">{blog.title}</p>
                            <p className="mt-0.5 text-[11px] text-slate-500 font-mono">
                              /{blog.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        <span className="inline-block rounded-full bg-[#f7f0e3] px-3 py-1 text-[11px] font-bold text-[#b88228]">
                          {blog.category}
                        </span>
                      </td>

                      <td className="px-4 py-4 max-w-[180px] truncate text-slate-600">
                        {blog.seoTitle || blog.title}
                      </td>

                      <td className="px-4 py-4 font-semibold text-slate-700">
                        <div className="flex items-center gap-1.5">
                          <Eye size={14} className="text-slate-400" />
                          {blog.views || 0}
                        </div>
                      </td>

                      <td className="px-4 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition ${
                            blog.isPublished
                              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                              : "bg-amber-50 text-amber-700 hover:bg-amber-100"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              blog.isPublished ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                          {blog.isPublished ? "Published" : "Draft"}
                        </button>
                      </td>

                      <td className="px-4 py-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEditModal(blog)}
                            className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-[#f7f0e3] hover:text-[#2d2217] transition"
                            title="Edit Blog"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id, blog.title)}
                            className="rounded-lg border border-slate-200 p-2 text-red-500 hover:bg-red-50 transition"
                            title="Delete Blog"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Modal for Create/Edit Blog */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-6 backdrop-blur-sm">
            <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              {/* Sticky Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-4 sm:px-8 bg-white z-10">
                <div>
                  <h2 className="text-xl font-bold text-[#2d2217]">
                    {editingBlog ? "Edit Article" : "Create New Article"}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Format blog description with Rich Text and optimize SEO title/keywords.
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Form Body */}
              <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Article Title */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                        Blog Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5 Simple Steps to Maintain a Glowing Smile"
                        value={formData.title}
                        onChange={handleTitleChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold focus:border-[#c48f32] focus:outline-none"
                      />
                    </div>

                    {/* Slug */}
                    <div>
                      <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                        URL Slug
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5-steps-glowing-smile"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-mono focus:border-[#c48f32] focus:outline-none"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold focus:border-[#c48f32] focus:outline-none"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Author */}
                    <div>
                      <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:border-[#c48f32] focus:outline-none"
                      />
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                        Read Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4 min read"
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold focus:border-[#c48f32] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Cover Image Upload */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                      Cover Image
                    </label>
                    <div className="mt-2 flex items-center gap-4">
                      {imagePreview && (
                        <div className="h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                          <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                        </div>
                      )}
                      <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600 hover:border-[#c48f32] hover:bg-slate-100 transition">
                        <Upload size={16} className="text-[#c48f32]" />
                        Upload Cover Image
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide">
                      Short Excerpt / Summary
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief 2-3 sentence overview shown on blog list cards..."
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-medium focus:border-[#c48f32] focus:outline-none"
                    />
                  </div>

                  {/* Rich Text Editor - ReactQuill */}
                  <div>
                    <label className="block text-xs font-bold text-[#2d2217] uppercase tracking-wide mb-2">
                      Full Article Content (React Quill Rich Text) *
                    </label>
                    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                      <ReactQuill
                        theme="snow"
                        value={formData.content}
                        onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
                        modules={modules}
                        formats={formats}
                        placeholder="Write your article content here with full formatting, headings, bullet lists, and links..."
                        className="min-h-[220px]"
                      />
                    </div>
                  </div>

                  {/* SEO Friendly Settings Box */}
                  <div className="rounded-2xl border border-[#ebdcb8] bg-[#fdfbf7] p-5 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#b88228] uppercase tracking-wider">
                      <Globe size={16} />
                      SEO Optimization (Search Engine Meta Tags)
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-[11px] font-bold text-[#2d2217]">
                          SEO Title (Meta Title)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Toothistan Dental | Ultimate Oral Care Guide"
                          value={formData.seoTitle}
                          onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[#c48f32] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#2d2217]">
                          SEO Keywords (Comma Separated)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. dental health, teeth whitening, dentist in city"
                          value={formData.seoKeywords}
                          onChange={(e) => setFormData({ ...formData, seoKeywords: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[#c48f32] focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-[#2d2217]">
                          SEO Description (Meta Description)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Meta description shown in Google search results..."
                          value={formData.seoDescription}
                          onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs focus:border-[#c48f32] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Published Toggle Switch */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                    <div>
                      <p className="text-xs font-bold text-[#2d2217]">Publish Article</p>
                      <p className="text-[11px] text-slate-500">
                        When active, this article will be publicly visible on the blog page.
                      </p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                        className="peer sr-only"
                      />
                      <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#c48f32] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                    </label>
                  </div>
                </div>

                {/* Sticky Footer */}
                <div className="flex shrink-0 items-center justify-end gap-3 border-t border-slate-100 px-6 py-4 sm:px-8 bg-slate-50/80 z-10">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 hover:bg-white transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-xl bg-[#2d2217] px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#42311d] disabled:opacity-50 transition"
                  >
                    {submitting ? "Saving..." : editingBlog ? "Update Article" : "Publish Article"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminBlogs;
