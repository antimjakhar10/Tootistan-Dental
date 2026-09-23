import React, { useEffect, useState } from "react";
import {
  Images,
  Plus,
  Pencil,
  Trash2,
  X,
  ImagePlus,
  RefreshCw,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch, default as API_URL } from "../components/adminApi";

const IMAGE_HOST = API_URL.replace(/\/api\/?$/, "");

const emptyForm = {
  title: "",
  category: "",
  description: "",
  beforeImage: null,
  afterImage: null,
  existingBeforeImage: "",
  existingAfterImage: "",
  isPublished: true,
};

const getImgSrc = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${IMAGE_HOST}${path.startsWith("/") ? "" : "/"}${path}`;
};

const AdminGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [beforePreview, setBeforePreview] = useState("");
  const [afterPreview, setAfterPreview] = useState("");

  const loadGallery = async () => {
    try {
      setLoading(true);
      const data = await adminFetch("/gallery");
      setGallery(data.gallery || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const clearPreviews = () => {
    if (beforePreview) URL.revokeObjectURL(beforePreview);
    if (afterPreview) URL.revokeObjectURL(afterPreview);
    setBeforePreview("");
    setAfterPreview("");
  };

  const openAdd = () => {
    clearPreviews();
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    clearPreviews();
    setEditingId(item._id);
    setForm({
      title: item.title || "",
      category: item.category || "",
      description: item.description || "",
      beforeImage: null,
      afterImage: null,
      existingBeforeImage: item.beforeImage || "",
      existingAfterImage: item.afterImage || "",
      isPublished: item.isPublished,
    });
    setModalOpen(true);
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0] || null;
    if (file) {
      const url = URL.createObjectURL(file);
      if (field === "beforeImage") {
        if (beforePreview) URL.revokeObjectURL(beforePreview);
        setBeforePreview(url);
        setForm((prev) => ({ ...prev, beforeImage: file }));
      } else {
        if (afterPreview) URL.revokeObjectURL(afterPreview);
        setAfterPreview(url);
        setForm((prev) => ({ ...prev, afterImage: file }));
      }
    }
  };

  const removeImage = (field) => {
    if (field === "beforeImage") {
      if (beforePreview) URL.revokeObjectURL(beforePreview);
      setBeforePreview("");
      setForm((prev) => ({ ...prev, beforeImage: null, existingBeforeImage: "" }));
    } else {
      if (afterPreview) URL.revokeObjectURL(afterPreview);
      setAfterPreview("");
      setForm((prev) => ({ ...prev, afterImage: null, existingAfterImage: "" }));
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

    try {
      setSaving(true);
      const body = new FormData();
      body.append("title", form.title);
      body.append("category", form.category);
      body.append("description", form.description);
      body.append("isPublished", form.isPublished);

      if (form.beforeImage) {
        body.append("beforeImage", form.beforeImage);
      }
      if (form.afterImage) {
        body.append("afterImage", form.afterImage);
      }

      if (editingId) {
        await adminFetch(`/gallery/${editingId}`, {
          method: "PUT",
          body,
        });
      } else {
        if (!form.beforeImage || !form.afterImage) {
          alert("Please select both Before and After images.");
          return;
        }

        await adminFetch("/gallery", {
          method: "POST",
          body,
        });
      }

      clearPreviews();
      setModalOpen(false);
      setEditingId(null);
      setForm(emptyForm);
      loadGallery();
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const deleteGallery = async (id) => {
    if (!window.confirm("Are you sure you want to delete this gallery item?")) {
      return;
    }

    try {
      await adminFetch(`/gallery/${id}`, {
        method: "DELETE",
      });
      loadGallery();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Smile Transformations
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Before & After Gallery
            </h1>

            <p className="mt-2 text-sm text-black">
              Add and manage treatment transformation images.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadGallery}
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
              Add Gallery Item
            </button>
          </div>
        </div>

        {/* Content Table / List View */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading gallery...
            </div>
          ) : gallery.length === 0 ? (
            <div className="p-12 text-center">
              <Images className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 font-semibold">No gallery items yet</h3>
              <p className="mt-1 text-sm text-black">
                Click "+ Add Gallery Item" to create your first Before & After transformation.
              </p>
              <button
                onClick={openAdd}
                className="mt-5 rounded-xl bg-[#2d2217] px-5 py-3 text-sm font-semibold text-white"
              >
                Add First Gallery Item
              </button>
            </div>
          ) : (
            <>
              {/* Count Bar */}
              <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-black">
                  Total Gallery Items ({gallery.length})
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-left border-collapse">
                  <thead className="border-b border-slate-100 bg-slate-50/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Before & After Photos
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Title & Category
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Description
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
                    {gallery.map((item) => (
                      <tr
                        key={item._id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        {/* Photos */}
                        <td className="px-6 py-4 align-top">
                          <div className="flex items-center gap-3">
                            {/* Before */}
                            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 h-16 w-20 shrink-0">
                              <span className="absolute left-1 top-1 z-10 rounded bg-slate-800/80 px-1 py-0.5 text-[9px] font-semibold uppercase text-white">
                                Before
                              </span>
                              <img
                                src={getImgSrc(item.beforeImage)}
                                alt={`${item.title} before`}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            {/* After */}
                            <div className="relative overflow-hidden rounded-xl border border-[#42311d]/30 bg-[#f7f0e3] h-16 w-20 shrink-0">
                              <span className="absolute left-1 top-1 z-10 rounded bg-[#42311d] px-1 py-0.5 text-[9px] font-semibold uppercase text-white">
                                After
                              </span>
                              <img
                                src={getImgSrc(item.afterImage)}
                                alt={`${item.title} after`}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </div>
                        </td>

                        {/* Title & Category */}
                        <td className="px-6 py-4 align-top">
                          <p className="font-semibold text-slate-900 text-sm">
                            {item.title}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-[#f7f0e3] px-2.5 py-0.5 text-xs font-semibold text-[#42311d]">
                            {item.category}
                          </span>
                        </td>

                        {/* Description */}
                        <td className="px-6 py-4 align-top max-w-xs">
                          <p className="text-xs leading-relaxed text-black line-clamp-2">
                            {item.description || "No description provided."}
                          </p>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4 align-top whitespace-nowrap">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                              item.isPublished
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                                : "bg-slate-100 text-black border border-slate-200"
                            }`}
                          >
                            {item.isPublished ? "Published" : "Hidden"}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 align-top whitespace-nowrap text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEdit(item)}
                              className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-black hover:bg-slate-50 hover:text-slate-900 transition"
                              title="Edit Gallery Item"
                            >
                              <Pencil className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteGallery(item._id)}
                              className="inline-flex items-center justify-center rounded-xl border border-red-100 p-2 text-red-500 hover:bg-red-50 hover:border-red-200 transition"
                              title="Delete Gallery Item"
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

              {/* Mobile / Tablet List View */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {gallery.map((item) => (
                  <div key={item._id} className="p-5 space-y-4">
                    {/* Header & Status */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-base text-slate-900">{item.title}</h4>
                        <span className="mt-1 inline-block rounded-full bg-[#f7f0e3] px-2.5 py-0.5 text-xs font-semibold text-[#42311d]">
                          {item.category}
                        </span>
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          item.isPublished
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                            : "bg-slate-100 text-black border border-slate-200"
                        }`}
                      >
                        {item.isPublished ? "Published" : "Hidden"}
                      </span>
                    </div>

                    {/* Before & After Thumbnails */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 h-28">
                        <span className="absolute left-2 top-2 z-10 rounded bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                          Before
                        </span>
                        <img
                          src={getImgSrc(item.beforeImage)}
                          alt={`${item.title} before`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="relative overflow-hidden rounded-xl border border-[#42311d]/30 bg-[#f7f0e3] h-28">
                        <span className="absolute left-2 top-2 z-10 rounded bg-[#42311d] px-1.5 py-0.5 text-[10px] font-semibold uppercase text-white">
                          After
                        </span>
                        <img
                          src={getImgSrc(item.afterImage)}
                          alt={`${item.title} after`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {item.description && (
                      <p className="text-xs leading-relaxed text-black">
                        {item.description}
                      </p>
                    )}

                    {/* Action Bar */}
                    <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => openEdit(item)}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 font-medium px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => deleteGallery(item._id)}
                        className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-medium px-3 py-1.5 rounded-xl border border-red-100 hover:bg-red-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
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
                    {editingId ? "Edit Gallery Item" : "Add Gallery Item"}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Add Before & After treatment images
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
                    Treatment Title *
                  </label>
                  <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Dental Implants"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                  />
                </div>

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
                    <option value="">Select Category</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Porcelain Veneers">Porcelain Veneers</option>
                    <option value="Gum Care">Gum Care</option>
                    <option value="Full Mouth Reconstruction">Full Mouth Reconstruction</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

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
                    placeholder="Short description..."
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Before Image Input / Preview */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Before Image *
                    </label>
                    {beforePreview || form.existingBeforeImage ? (
                      <div className="relative w-fit">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 p-1">
                          <img
                            src={
                              beforePreview
                                ? beforePreview
                                : getImgSrc(form.existingBeforeImage)
                            }
                            alt="Before Preview"
                            className="h-28 w-full object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage("beforeImage")}
                            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition hover:bg-red-600"
                            title="Remove image"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-4 text-center hover:bg-slate-50 transition">
                        <ImagePlus className="h-6 w-6 text-[#42311d]" />
                        <span className="mt-2 text-xs text-black">
                          Choose image
                        </span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp"
                          onChange={(e) => handleImageChange(e, "beforeImage")}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* After Image Input / Preview */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      After Image *
                    </label>
                    {afterPreview || form.existingAfterImage ? (
                      <div className="relative w-fit">
                        <div className="relative overflow-hidden rounded-2xl border-2 border-[#42311d]/30 p-1">
                          <img
                            src={
                              afterPreview
                                ? afterPreview
                                : getImgSrc(form.existingAfterImage)
                            }
                            alt="After Preview"
                            className="h-28 w-full object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage("afterImage")}
                            className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition hover:bg-red-600"
                            title="Remove image"
                          >
                            <X size={15} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 p-4 text-center hover:bg-slate-50 transition">
                        <ImagePlus className="h-6 w-6 text-[#42311d]" />
                        <span className="mt-2 text-xs text-black">
                          Choose image
                        </span>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/webp"
                          onChange={(e) => handleImageChange(e, "afterImage")}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={form.isPublished}
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#42311d]"
                  />
                  <span className="text-sm font-medium">
                    Publish on website
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full rounded-xl bg-[#2d2217] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#42311d] disabled:opacity-50"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                    ? "Update Gallery"
                    : "Add Gallery Item"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;