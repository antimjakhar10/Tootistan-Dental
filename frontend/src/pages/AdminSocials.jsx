import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Plus,
  Pencil,
  Trash2,
  X,
  RefreshCw,
  Star,
  Eye,
  Heart,
  CheckCircle,
  Link2,
  Upload,
  Search,
  ExternalLink,
  Film,
  Settings,
} from "lucide-react";
import AdminLayout from "../components/AdminLayout";
import { adminFetch, default as API_URL } from "../components/adminApi";

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

const emptyForm = {
  platform: "instagram",
  postType: "reel",
  title: "",
  caption: "",
  postUrl: "",
  thumbnailUrl: "",
  thumbnailFile: null,
  category: "Dental Tips",
  likes: "0",
  views: "0",
  isFeatured: false,
  isPublished: true,
};

const categoryOptions = [
  "Dental Tips",
  "Treatments & Tech",
  "Transformations",
  "Patient Guides",
  "Orthodontics",
  "Behind the Scenes",
  "Other",
];

const AdminSocials = () => {
  const [socials, setSocials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [searchFilter, setSearchFilter] = useState("");
  const [platformFilter, setPlatformFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [thumbPreview, setThumbPreview] = useState("");

  const loadSocials = async () => {
    try {
      setLoading(true);
      const data = await adminFetch("/socials");
      setSocials(data.socials || []);
    } catch (error) {
      console.error("Failed to load socials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSocials();
  }, []);

  const openAdd = () => {
    if (thumbPreview) URL.revokeObjectURL(thumbPreview);
    setThumbPreview("");
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    if (thumbPreview) URL.revokeObjectURL(thumbPreview);
    setThumbPreview("");
    setEditingId(item._id);
    setForm({
      platform: item.platform || "instagram",
      postType: item.postType || "reel",
      title: item.title || "",
      caption: item.caption || "",
      postUrl: item.postUrl || "",
      thumbnailUrl: item.thumbnailUrl || "",
      thumbnailFile: null,
      category: item.category || "Dental Tips",
      likes: item.likes || "0",
      views: item.views || "0",
      isFeatured: !!item.isFeatured,
      isPublished: item.isPublished !== undefined ? item.isPublished : true,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    if (thumbPreview) URL.revokeObjectURL(thumbPreview);
    setThumbPreview("");
    setModalOpen(false);
    setEditingId(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (thumbPreview) URL.revokeObjectURL(thumbPreview);
      setForm((prev) => ({ ...prev, thumbnailFile: file }));
      setThumbPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.postUrl.trim()) {
      alert("Title and Post URL are required!");
      return;
    }

    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("platform", form.platform);
      formData.append("postType", form.postType);
      formData.append("title", form.title);
      formData.append("caption", form.caption);
      formData.append("postUrl", form.postUrl);
      formData.append("category", form.category);
      formData.append("likes", form.likes);
      formData.append("views", form.views);
      formData.append("isFeatured", form.isFeatured);
      formData.append("isPublished", form.isPublished);

      if (form.thumbnailFile) {
        formData.append("thumbnail", form.thumbnailFile);
      } else if (form.thumbnailUrl) {
        formData.append("thumbnailUrl", form.thumbnailUrl);
      }

      let endpoint = "/socials";
      let method = "POST";
      if (editingId) {
        endpoint = `/socials/${editingId}`;
        method = "PUT";
      }

      await adminFetch(endpoint, {
        method,
        body: formData,
      });

      closeModal();
      await loadSocials();
    } catch (error) {
      alert(error.message || "Failed to save social item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this social post?")) {
      return;
    }

    try {
      await adminFetch(`/socials/${id}`, { method: "DELETE" });
      await loadSocials();
    } catch (error) {
      alert(error.message || "Failed to delete item");
    }
  };

  const handleTogglePublish = async (id) => {
    try {
      await adminFetch(`/socials/${id}/publish`, { method: "PATCH" });
      setSocials((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, isPublished: !item.isPublished } : item
        )
      );
    } catch (error) {
      alert(error.message || "Failed to update publish status");
    }
  };

  const handleToggleFeature = async (id) => {
    try {
      await adminFetch(`/socials/${id}/feature`, { method: "PATCH" });
      setSocials((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, isFeatured: !item.isFeatured } : item
        )
      );
    } catch (error) {
      alert(error.message || "Failed to update featured status");
    }
  };

  // Filtered list
  const filteredSocials = socials.filter((item) => {
    if (
      platformFilter !== "All" &&
      item.platform.toLowerCase() !== platformFilter.toLowerCase()
    ) {
      return false;
    }

    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      return (
        item.title?.toLowerCase().includes(q) ||
        item.caption?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q)
      );
    }

    return true;
  });

  const instagramCount = socials.filter((s) => s.platform === "instagram").length;
  const youtubeCount = socials.filter((s) => s.platform === "youtube").length;
  const featuredCount = socials.filter((s) => s.isFeatured).length;

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#2d2217] flex items-center gap-2">
              <Share2 className="text-[#b88228]" /> Social Media Feed Management
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage Instagram posts/reels and YouTube videos/shorts displayed on the website.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admin/settings"
              className="flex items-center gap-1.5 rounded-xl border border-pink-200 bg-pink-50 px-3.5 py-2.5 text-xs font-semibold text-pink-700 hover:bg-pink-100 transition-all"
            >
              <Settings size={14} />
              Edit Channel Links & Handles
            </Link>

            <button
              onClick={loadSocials}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              Refresh
            </button>

            <button
              onClick={openAdd}
              className="flex items-center gap-2 rounded-xl bg-[#2d2217] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#42311d] transition-all"
            >
              <Plus size={16} /> Add Social Post
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-semibold text-slate-400 uppercase">Total Posts</p>
            <p className="text-2xl font-black text-[#2d2217] mt-1">{socials.length}</p>
          </div>
          <div className="rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 p-4">
            <p className="text-xs font-semibold text-pink-600 uppercase flex items-center gap-1">
              <Instagram size={14} /> Instagram
            </p>
            <p className="text-2xl font-black text-pink-700 mt-1">{instagramCount}</p>
          </div>
          <div className="rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-4">
            <p className="text-xs font-semibold text-red-600 uppercase flex items-center gap-1">
              <Youtube size={14} /> YouTube
            </p>
            <p className="text-2xl font-black text-red-700 mt-1">{youtubeCount}</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50 p-4">
            <p className="text-xs font-semibold text-amber-700 uppercase flex items-center gap-1">
              <Star size={14} /> Featured
            </p>
            <p className="text-2xl font-black text-amber-800 mt-1">{featuredCount}</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">Filter Platform:</span>
            {["All", "Instagram", "YouTube"].map((plat) => (
              <button
                key={plat}
                onClick={() => setPlatformFilter(plat)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  platformFilter === plat
                    ? "bg-[#2d2217] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {plat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search title/caption..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs focus:border-[#b88228] focus:outline-none"
            />
          </div>
        </div>

        {/* Social Posts List */}
        {loading ? (
          <div className="py-20 text-center text-xs text-slate-400">Loading social posts...</div>
        ) : filteredSocials.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-slate-300 bg-white p-6">
            <p className="text-sm font-semibold text-slate-600">No social posts found.</p>
            <p className="text-xs text-slate-400 mt-1">Click "Add Social Post" to add new content.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSocials.map((item) => (
              <div
                key={item._id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Image header */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <img
                      src={getMediaSrc(item.thumbnailUrl) || "/logo.png"}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Platform Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-white">
                      {item.platform === "instagram" ? (
                        <>
                          <Instagram size={12} className="text-pink-400" /> Instagram
                        </>
                      ) : (
                        <>
                          <Youtube size={12} className="text-red-500" /> YouTube
                        </>
                      )}
                      <span>({item.postType})</span>
                    </div>

                    {/* Published & Featured Badges */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5">
                      <button
                        onClick={() => handleToggleFeature(item._id)}
                        title="Toggle Featured"
                        className={`rounded-full p-1.5 text-xs font-bold transition ${
                          item.isFeatured
                            ? "bg-amber-400 text-slate-900 shadow"
                            : "bg-black/50 text-white hover:bg-amber-400 hover:text-slate-900"
                        }`}
                      >
                        <Star size={13} fill={item.isFeatured ? "currentColor" : "none"} />
                      </button>
                      <button
                        onClick={() => handleTogglePublish(item._id)}
                        title="Toggle Published"
                        className={`rounded-full px-2 py-1 text-[10px] font-bold transition ${
                          item.isPublished
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-400 text-white"
                        }`}
                      >
                        {item.isPublished ? "Active" : "Draft"}
                      </button>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1">
                      <span>{item.category}</span>
                      <span className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Eye size={12} /> {item.views || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} className="text-pink-500" /> {item.likes || 0}
                        </span>
                      </span>
                    </div>

                    <h3 className="font-bold text-[#2d2217] text-sm line-clamp-2">
                      {item.title}
                    </h3>

                    {item.caption && (
                      <p className="mt-1.5 text-xs text-slate-500 line-clamp-2">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex items-center justify-between border-t border-slate-100 p-3 bg-slate-50">
                  <a
                    href={item.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-[#b88228] flex items-center gap-1"
                  >
                    <span>View Link</span>
                    <ExternalLink size={12} />
                  </a>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => openEdit(item)}
                      className="rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      title="Edit"
                    >
                      <Pencil size={14} />
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="rounded-lg border border-red-200 bg-white p-2 text-red-500 hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Form */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />

            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <h2 className="text-lg font-bold text-[#2d2217] flex items-center gap-2">
                  <Share2 className="text-[#b88228]" size={18} />
                  {editingId ? "Edit Social Post" : "Add New Social Post"}
                </h2>
                <button
                  onClick={closeModal}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Platform & Post Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Platform *
                    </label>
                    <select
                      value={form.platform}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, platform: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    >
                      <option value="instagram">Instagram</option>
                      <option value="youtube">YouTube</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Post Type
                    </label>
                    <select
                      value={form.postType}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, postType: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    >
                      <option value="reel">Reel</option>
                      <option value="post">Post</option>
                      <option value="video">Video</option>
                      <option value="short">Short</option>
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Painless Root Canal Behind the Scenes"
                    value={form.title}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, title: e.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                  />
                </div>

                {/* Post URL */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Original Post / Video URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://instagram.com/p/... or https://youtube.com/watch?v=..."
                    value={form.postUrl}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, postUrl: e.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                  />
                </div>

                {/* Caption */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Caption / Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief post caption or highlights..."
                    value={form.caption}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, caption: e.target.value }))
                    }
                    className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                  />
                </div>

                {/* Category, Views, Likes */}
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, category: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    >
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Views Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14.5k"
                      value={form.views}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, views: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Likes Count
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2.1k"
                      value={form.likes}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, likes: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Thumbnail Selection */}
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Thumbnail Image
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full text-xs text-slate-500 file:mr-3 file:rounded-xl file:border-0 file:bg-[#f4ebd5] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#b88228]"
                    />
                    <span className="text-slate-400 text-xs font-semibold">OR</span>
                    <input
                      type="url"
                      placeholder="Remote Image URL"
                      value={form.thumbnailUrl}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, thumbnailUrl: e.target.value }))
                      }
                      className="w-full rounded-xl border border-slate-200 p-2.5 font-medium text-slate-800 focus:border-[#b88228] focus:outline-none"
                    />
                  </div>

                  {/* Thumbnail Preview */}
                  {(thumbPreview || form.thumbnailUrl) && (
                    <div className="mt-3 relative h-32 w-48 rounded-xl overflow-hidden border border-slate-200">
                      <img
                        src={thumbPreview || getMediaSrc(form.thumbnailUrl)}
                        alt="Thumbnail preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Checkboxes */}
                <div className="flex items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.isFeatured}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, isFeatured: e.target.checked }))
                      }
                      className="h-4 w-4 rounded text-[#b88228]"
                    />
                    <span>Feature on Homepage / Top</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.isPublished}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, isPublished: e.target.checked }))
                      }
                      className="h-4 w-4 rounded text-emerald-600"
                    />
                    <span>Publish Immediately</span>
                  </label>
                </div>

                {/* Modal Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-xl border border-slate-200 px-4 py-2.5 font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="rounded-xl bg-[#2d2217] px-6 py-2.5 font-bold text-white hover:bg-[#42311d] disabled:opacity-50"
                  >
                    {saving ? "Saving..." : editingId ? "Update Social" : "Create Social"}
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

export default AdminSocials;
