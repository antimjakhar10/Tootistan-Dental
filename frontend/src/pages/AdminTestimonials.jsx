import React, { useEffect, useState } from "react";
import {
  Star,
  Plus,
  Pencil,
  Trash2,
  X,
  ImagePlus,
  RefreshCw,
  Eye,
  EyeOff,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch, default as API_URL } from "../components/adminApi";

const IMAGE_HOST = API_URL.replace(/\/api\/?$/, "");

const emptyForm = {
  name: "",
  review: "",
  rating: 5,
  treatment: "",
  isPublished: true,
  image: null,
  existingImage: "",
  removeImage: false,
};

const getInitials = (name) => {
  if (!name) return "TS";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState(emptyForm);
  const [previewUrl, setPreviewUrl] = useState("");

  const loadTestimonials = async () => {
    try {
      setLoading(true);
      const data = await adminFetch("/testimonials");
      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const openAdd = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (item) => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setEditingId(item._id);
    setForm({
      name: item.name || "",
      review: item.review || "",
      rating: item.rating || 5,
      treatment: item.treatment || "",
      isPublished: item.isPublished,
      image: null,
      existingImage: item.image || "",
      removeImage: false,
    });
    setModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0] || null;
      if (file) {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        const newPreview = URL.createObjectURL(file);
        setPreviewUrl(newPreview);
        setForm((prev) => ({
          ...prev,
          image: file,
          removeImage: false,
        }));
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
    }
    setForm((prev) => ({
      ...prev,
      image: null,
      existingImage: "",
      removeImage: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      const body = new FormData();
      body.append("name", form.name);
      body.append("review", form.review);
      body.append("rating", form.rating);
      body.append("treatment", form.treatment);
      body.append("isPublished", form.isPublished);

      if (form.image) {
        body.append("image", form.image);
      } else if (form.removeImage) {
        body.append("removeImage", "true");
      }

      if (editingId) {
        await adminFetch(`/testimonials/${editingId}`, {
          method: "PUT",
          body,
        });
      } else {
        await adminFetch("/testimonials", {
          method: "POST",
          body,
        });
      }

      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl("");
      setModalOpen(false);
      setForm(emptyForm);
      setEditingId(null);
      loadTestimonials();
    } catch (error) {
      alert(error.message);
    } finally {
      setSaving(false);
    }
  };

  const togglePublish = async (item) => {
    try {
      const body = new FormData();
      body.append("isPublished", !item.isPublished);

      await adminFetch(`/testimonials/${item._id}`, {
        method: "PUT",
        body,
      });

      loadTestimonials();
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      await adminFetch(`/testimonials/${id}`, {
        method: "DELETE",
      });
      loadTestimonials();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Social Proof
            </p>
            <h1 className="mt-2 text-3xl font-semibold">Testimonials</h1>
            <p className="mt-2 text-sm text-black">
              Manage patient testimonials displayed on the website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadTestimonials}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>

            <button
              onClick={openAdd}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-5 py-3 text-sm font-semibold text-white hover:bg-[#42311d]"
            >
              <Plus className="h-4 w-4" />
              Add Testimonial
            </button>
          </div>
        </div>

        {/* Content Table / List */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading testimonials...
            </div>
          ) : testimonials.length === 0 ? (
            <div className="p-12 text-center">
              <Star className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 font-semibold">No testimonials yet</h3>
              <p className="mt-1 text-sm text-black">
                Click "+ Add Testimonial" to add your first patient review.
              </p>
              <button
                onClick={openAdd}
                className="mt-5 rounded-xl bg-[#2d2217] px-5 py-3 text-sm font-semibold text-white"
              >
                Add First Testimonial
              </button>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-left">
                  <thead className="border-b border-slate-100 bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Patient
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Treatment
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Rating
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Review
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Status
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {testimonials.map((item) => (
                      <tr key={item._id} className="hover:bg-slate-50/60 transition">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            {item.image ? (
                              <img
                                src={`${IMAGE_HOST}${item.image}`}
                                alt={item.name}
                                className="h-10 w-10 rounded-full object-cover border border-slate-200"
                              />
                            ) : (
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-xs font-bold text-[#42311d]">
                                {getInitials(item.name)}
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-slate-900">{item.name}</p>
                              <p className="text-xs text-slate-400">ID: ...{item._id.slice(-6)}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-sm text-black">
                          <span className="inline-flex rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                            {item.treatment || "General"}
                          </span>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                              <Star
                                key={idx}
                                className="h-4 w-4 fill-current text-amber-400"
                              />
                            ))}
                            <span className="ml-1 text-xs font-medium text-black">
                              ({item.rating || 5})
                            </span>
                          </div>
                        </td>

                        <td className="px-5 py-4 text-sm text-black max-w-xs">
                          <p className="line-clamp-2 leading-relaxed" title={item.review}>
                            "{item.review}"
                          </p>
                        </td>

                        <td className="px-5 py-4">
                          <button
                            onClick={() => togglePublish(item)}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${
                              item.isPublished
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                                : "bg-slate-100 text-black border border-slate-200 hover:bg-slate-200"
                            }`}
                          >
                            {item.isPublished ? (
                              <>
                                <Eye size={13} />
                                Published
                              </>
                            ) : (
                              <>
                                <EyeOff size={13} />
                                Hidden
                              </>
                            )}
                          </button>
                        </td>

                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => openEdit(item)}
                              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                              Edit
                            </button>

                            <button
                              onClick={() => deleteTestimonial(item._id)}
                              className="rounded-lg border border-red-100 p-1.5 text-red-500 hover:bg-red-50"
                              title="Delete"
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

              {/* Mobile List View */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {testimonials.map((item) => (
                  <div key={item._id} className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {item.image ? (
                          <img
                            src={`${IMAGE_HOST}${item.image}`}
                            alt={item.name}
                            className="h-11 w-11 rounded-full object-cover border border-slate-200"
                          />
                        ) : (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-xs font-bold text-[#42311d]">
                            {getInitials(item.name)}
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-slate-900">{item.name}</h3>
                          <p className="text-xs text-black">{item.treatment || "General Treatment"}</p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          item.isPublished
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-black"
                        }`}
                      >
                        {item.isPublished ? "Published" : "Hidden"}
                      </span>
                    </div>

                    <div className="mt-3 flex gap-1">
                      {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                        <Star key={idx} className="h-3.5 w-3.5 fill-current text-amber-400" />
                      ))}
                    </div>

                    <p className="mt-3 text-sm text-black leading-relaxed">
                      "{item.review}"
                    </p>

                    <div className="mt-4 flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
                      <button
                        onClick={() => openEdit(item)}
                        className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </button>

                      <button
                        onClick={() => deleteTestimonial(item._id)}
                        className="rounded-lg border border-red-100 p-1.5 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-xl">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5">
                <div>
                  <h2 className="text-xl font-semibold">
                    {editingId ? "Edit Testimonial" : "Add Testimonial"}
                  </h2>
                  <p className="mt-1 text-xs text-slate-400">
                    Manage patient testimonial details
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 p-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Patient Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Treatment
                  </label>
                  <input
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    placeholder="e.g. Cosmetic Dentistry"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Rating
                  </label>
                  <select
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"
                  >
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Review *
                  </label>
                  <textarea
                    name="review"
                    value={form.review}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#42311d]"
                    placeholder="Write the testimonial..."
                  />
                </div>

                {/* Patient Image with Live Preview and Cross Remove Button */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Patient Image (Optional)
                  </label>

                  {previewUrl || form.existingImage ? (
                    <div className="relative w-fit">
                      <div className="relative overflow-hidden rounded-2xl border-2 border-[#42311d]/30 bg-slate-50 p-1 shadow-sm">
                        <img
                          src={
                            previewUrl
                              ? previewUrl
                              : `${IMAGE_HOST}${form.existingImage}`
                          }
                          alt="Patient Preview"
                          className="h-32 w-32 rounded-xl object-cover"
                        />
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition hover:bg-red-600 hover:scale-110"
                          title="Remove image"
                        >
                          <X size={16} strokeWidth={2.5} />
                        </button>
                      </div>
                      <p className="mt-1.5 text-xs text-black font-medium">
                        {previewUrl ? form.image?.name : "Saved image attached"}
                      </p>
                    </div>
                  ) : (
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 p-4 hover:bg-slate-50 transition">
                      <ImagePlus className="h-5 w-5 text-[#42311d]" />
                      <span className="text-sm text-black">
                        Choose image to upload
                      </span>
                      <input
                        type="file"
                        name="image"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  )}
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
                    ? "Update Testimonial"
                    : "Add Testimonial"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminTestimonials;