import React, { useEffect, useState } from "react";
import {
  Film,
  Plus,
  Pencil,
  Trash2,
  X,
  RefreshCw,
  Video as VideoIcon,
  Play,
  Eye,
  Star,
  CheckCircle,
  Link2,
  Upload,
  Search,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch, default as API_URL } from "../components/adminApi";

const HOST = API_URL.replace(/\/api\/?$/, "");

const getMediaSrc = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${HOST}${path.startsWith("/") ? "" : "/"}${path}`;
};

const emptyForm = {
  title: "",
  category: "Patient Guides",
  videoType: "youtube",
  videoUrl: "",
  videoFile: null,
  thumbnailUrl: "",
  thumbnailFile: null,
  duration: "2:30",
  description: "",
  isFeatured: false,
  isPublished: true,
};

const categoryOptions = [
  "Patient Guides",
  "Treatments & Procedures",
  "Oral Hygiene Tips",
  "Post-Op Care",
  "Patient Stories",
  "Other",
];

const AdminVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [searchFilter, setSearchFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [thumbPreview, setThumbPreview] = useState("");

  const loadVideos = async () => {
    try {
      setLoading(true);
      const data = await adminFetch("/videos");
      setVideos(data.videos || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVideos();
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
      title: item.title || "",
      category: item.category || "Patient Guides",
      videoType: item.videoType || "youtube",
      videoUrl: item.videoUrl || "",
      videoFile: null,
      existingVideoFile: item.videoFile || "",
      thumbnailUrl: item.thumbnailUrl || "",
      thumbnailFile: null,
      duration: item.duration || "2:30",
      description: item.description || "",
      isFeatured: item.isFeatured || false,
      isPublished: item.isPublished !== undefined ? item.isPublished : true,
    });
    setModalOpen(true);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0] || null;
    if (file) {
      if (thumbPreview) URL.revokeObjectURL(thumbPreview);
      const url = URL.createObjectURL(file);
      setThumbPreview(url);
      setForm((prev) => ({ ...prev, thumbnailFile: file }));
    }
  };

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0] || null;
    if (file) {
      setForm((prev) => ({ ...prev, videoFile: file }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Please enter a video title.");
      return;
    }

    try {
      setSaving(true);
      const body = new FormData();
      body.append("title", form.title);
      body.append("category", form.category);
      body.append("videoType", form.videoType);
      body.append("videoUrl", form.videoUrl || "");
      body.append("thumbnailUrl", form.thumbnailUrl || "");
      body.append("duration", form.duration || "2:30");
      body.append("description", form.description || "");
      body.append("isFeatured", form.isFeatured);
      body.append("isPublished", form.isPublished);

      if (form.thumbnailFile) {
        body.append("thumbnail", form.thumbnailFile);
      }

      if (form.videoFile) {
        body.append("videoFile", form.videoFile);
      }

      if (editingId) {
        await adminFetch(`/videos/${editingId}`, {
          method: "PUT",
          body,
        });
      } else {
        await adminFetch("/videos", {
          method: "POST",
          body,
        });
      }

      if (thumbPreview) URL.revokeObjectURL(thumbPreview);
      setModalOpen(false);
      setEditingId(null);
      setForm(emptyForm);
      loadVideos();
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const deleteVideo = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) {
      return;
    }

    try {
      await adminFetch(`/videos/${id}`, {
        method: "DELETE",
      });
      loadVideos();
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleFeatured = async (item) => {
    try {
      await adminFetch(`/videos/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFeatured: !item.isFeatured }),
      });
      loadVideos();
    } catch (error) {
      alert(error.message);
    }
  };

  const togglePublished = async (item) => {
    try {
      await adminFetch(`/videos/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isPublished: !item.isPublished }),
      });
      loadVideos();
    } catch (error) {
      alert(error.message);
    }
  };

  // Filtered list
  const filteredVideos = videos.filter((item) => {
    const matchCat = categoryFilter === "All" || item.category === categoryFilter;
    const matchSearch =
      !searchFilter ||
      item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchFilter.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalViews = videos.reduce((acc, v) => acc + (v.views || 0), 0);
  const totalPublished = videos.filter((v) => v.isPublished).length;
  const totalFeatured = videos.filter((v) => v.isFeatured).length;

  return (
    <AdminLayout>
      <div>
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              New Patients • Media Content
            </p>

            <h1 className="mt-2 text-3xl font-semibold">Video Library</h1>

            <p className="mt-2 text-sm text-black">
              Manage patient education videos, procedure guides, and video testimonials.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadVideos}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50 transition"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>

            <button
              onClick={openAdd}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-5 py-3 text-sm font-semibold text-white hover:bg-[#42311d] transition"
            >
              <Plus className="h-4 w-4" />
              Add New Video
            </button>
          </div>
        </div>

        {/* SUMMARY STATS CARDS */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Videos</span>
              <Film className="h-5 w-5 text-[#b88228]" />
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">{videos.length}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Published</span>
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">{totalPublished}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Featured</span>
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">{totalFeatured}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Views</span>
              <Eye className="h-5 w-5 text-indigo-500" />
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">{totalViews}</p>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTER */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Filter videos by title..."
              className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[#42311d]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase">Category:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium outline-none"
            >
              <option value="All">All Categories</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* TABLE / LIST */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading video library...
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="p-12 text-center">
              <VideoIcon className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 font-semibold text-slate-800">No videos found</h3>
              <p className="mt-1 text-sm text-black">
                {videos.length === 0
                  ? 'Click "+ Add New Video" to upload or link your first video.'
                  : "No videos match your current search/filter."}
              </p>
              {videos.length === 0 && (
                <button
                  onClick={openAdd}
                  className="mt-5 rounded-xl bg-[#2d2217] px-5 py-3 text-sm font-semibold text-white"
                >
                  Add First Video
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Count Bar */}
              <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-black">
                  Videos List ({filteredVideos.length})
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-left border-collapse">
                  <thead className="border-b border-slate-100 bg-slate-50/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Thumbnail & Video
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Title & Category
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Source & Duration
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Views
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Status
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredVideos.map((item) => (
                      <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                        {/* Thumbnail */}
                        <td className="px-6 py-4 align-top">
                          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 h-16 w-28 shrink-0">
                            {item.thumbnailUrl ? (
                              <img
                                src={getMediaSrc(item.thumbnailUrl)}
                                alt={item.title}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-stone-200 text-stone-400">
                                <VideoIcon size={20} />
                              </div>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-[#2d2217]">
                                <Play size={13} className="ml-0.5 fill-current" />
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Title & Category */}
                        <td className="px-6 py-4 align-top max-w-xs">
                          <p className="font-semibold text-slate-900 text-sm line-clamp-1">
                            {item.title}
                          </p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <span className="inline-block rounded-full bg-[#f7f0e3] px-2.5 py-0.5 text-xs font-semibold text-[#42311d]">
                              {item.category}
                            </span>
                            {item.isFeatured && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                                <Star size={10} className="fill-amber-600" /> Featured
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Source & Duration */}
                        <td className="px-6 py-4 align-top text-xs">
                          <span className="font-medium capitalize text-slate-700">
                            {item.videoType || "YouTube"}
                          </span>
                          <div className="mt-1 text-slate-400 font-mono">{item.duration || "2:30"} min</div>
                        </td>

                        {/* Views */}
                        <td className="px-6 py-4 align-top text-xs font-semibold text-slate-700">
                          {item.views || 0}
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4 align-top whitespace-nowrap">
                          <button
                            onClick={() => togglePublished(item)}
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold transition ${
                              item.isPublished
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                                : "bg-slate-100 text-black border border-slate-200"
                            }`}
                          >
                            {item.isPublished ? "Published" : "Hidden"}
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 align-top whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => toggleFeatured(item)}
                              className={`inline-flex items-center justify-center rounded-xl border p-2 transition ${
                                item.isFeatured
                                  ? "border-amber-200 bg-amber-50 text-amber-600"
                                  : "border-slate-200 text-slate-400 hover:text-amber-500"
                              }`}
                              title={item.isFeatured ? "Unfeature" : "Set as Featured"}
                            >
                              <Star className="h-4 w-4" />
                            </button>

                            <button
                              onClick={() => openEdit(item)}
                              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-black hover:bg-slate-50 transition"
                              title="Edit Video"
                            >
                              <Pencil className="h-4 w-4" />
                            </button>

                            <button
                              onClick={() => deleteVideo(item._id)}
                              className="inline-flex items-center justify-center rounded-xl border border-red-100 p-2 text-red-500 hover:bg-red-50 transition"
                              title="Delete Video"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-xl">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5">
                <div>
                  <h2 className="text-xl font-semibold">
                    {editingId ? "Edit Video" : "Add New Video"}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Add YouTube link or upload custom video for Video Library
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl p-2 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Video Title *
                  </label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. What to Expect During Your First Visit"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none"
                    >
                      {categoryOptions.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Duration (min:sec)
                    </label>
                    <input
                      name="duration"
                      value={form.duration}
                      onChange={handleChange}
                      placeholder="e.g. 3:15"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    />
                  </div>
                </div>

                {/* Video Source Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Video Source Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["youtube", "vimeo", "upload"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setForm((prev) => ({ ...prev, videoType: type }))}
                        className={`rounded-xl border py-2.5 text-xs font-bold capitalize transition ${
                          form.videoType === type
                            ? "border-[#42311d] bg-[#f7f0e3] text-[#42311d]"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {type === "youtube"
                          ? "YouTube URL"
                          : type === "vimeo"
                          ? "Vimeo URL"
                          : "Upload Video File"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Video Input fields */}
                {form.videoType === "upload" ? (
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Upload MP4 / WebM File
                    </label>
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/quicktime"
                      onChange={handleVideoFileChange}
                      className="w-full rounded-xl border border-slate-200 p-2 text-sm"
                    />
                    {form.existingVideoFile && (
                      <p className="mt-1 text-xs text-emerald-600">
                        Current file: {form.existingVideoFile}
                      </p>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      {form.videoType === "vimeo" ? "Vimeo Video URL" : "YouTube Video URL"}
                    </label>
                    <input
                      name="videoUrl"
                      value={form.videoUrl}
                      onChange={handleChange}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    />
                  </div>
                )}

                {/* Thumbnail input */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Thumbnail Image URL
                    </label>
                    <input
                      name="thumbnailUrl"
                      value={form.thumbnailUrl}
                      onChange={handleChange}
                      placeholder="https://... or leave empty to upload"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Or Upload Cover File
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleThumbnailChange}
                      className="w-full rounded-xl border border-slate-200 p-2 text-xs"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    placeholder="Brief description of video contents..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isPublished"
                      checked={form.isPublished}
                      onChange={handleChange}
                      className="h-4 w-4 accent-[#42311d]"
                    />
                    <span className="text-sm font-medium">Publish on Website</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={form.isFeatured}
                      onChange={handleChange}
                      className="h-4 w-4 accent-[#42311d]"
                    />
                    <span className="text-sm font-medium">Set as Featured Video</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full rounded-xl bg-[#2d2217] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#42311d] disabled:opacity-50"
                >
                  {saving
                    ? "Saving Video..."
                    : editingId
                    ? "Update Video"
                    : "Add Video to Library"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminVideos;
