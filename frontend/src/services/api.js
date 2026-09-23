const API_URL =
  import.meta.env.VITE_API_URL || "https://tootistan-dental.onrender.com/api";

export const IMAGE_HOST = API_URL.replace(/\/api\/?$/, "");

export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  return `${IMAGE_HOST}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
};

export const getPublicTestimonials = async () => {
  const res = await fetch(`${API_URL}/testimonials/public`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch testimonials");
  }
  return data.testimonials || [];
};

export const getPublicGallery = async () => {
  const res = await fetch(`${API_URL}/gallery/public`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch gallery items");
  }
  return data.gallery || [];
};

export const getPublicVideos = async (category = "All", search = "") => {
  const params = new URLSearchParams();
  if (category && category !== "All") params.append("category", category);
  if (search) params.append("search", search);

  const queryStr = params.toString() ? `?${params.toString()}` : "";
  const res = await fetch(`${API_URL}/videos/public${queryStr}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch video library");
  }
  return data.videos || [];
};

export const incrementVideoViews = async (videoId) => {
  try {
    const res = await fetch(`${API_URL}/videos/public/${videoId}/view`, {
      method: "POST",
    });
    return await res.json();
  } catch (err) {
    console.warn("Could not increment views:", err);
  }
};

export const submitAppointment = async (appointmentData) => {
  const res = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to submit appointment request");
  }
  return data;
};

export const submitContact = async (contactData) => {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to submit contact query");
  }
  return data;
};

export const getPublicSettings = async () => {
  const res = await fetch(`${API_URL}/settings/public`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch settings");
  }
  return data.settings || {};
};

// ==================== BLOG API SERVICES ==================== //

export const getPublicBlogs = async (category = "All", search = "", page = 1) => {
  const params = new URLSearchParams();
  if (category && category !== "All") params.append("category", category);
  if (search) params.append("search", search);
  if (page) params.append("page", page);

  const queryStr = params.toString() ? `?${params.toString()}` : "";
  const res = await fetch(`${API_URL}/blogs/public${queryStr}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch blogs");
  }
  return data;
};

export const getSingleBlog = async (slugOrId) => {
  const res = await fetch(`${API_URL}/blogs/public/${slugOrId}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch blog post");
  }
  return data;
};

export const getAllAdminBlogs = async () => {
  const token = localStorage.getItem("toothistan_admin_token");
  const res = await fetch(`${API_URL}/blogs/admin/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch admin blogs");
  }
  return data.blogs || [];
};

export const createBlog = async (formData) => {
  const token = localStorage.getItem("toothistan_admin_token");
  const res = await fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to create blog post");
  }
  return data;
};

export const updateBlog = async (id, formData) => {
  const token = localStorage.getItem("toothistan_admin_token");
  const res = await fetch(`${API_URL}/blogs/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to update blog post");
  }
  return data;
};

export const deleteBlog = async (id) => {
  const token = localStorage.getItem("toothistan_admin_token");
  const res = await fetch(`${API_URL}/blogs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to delete blog post");
  }
  return data;
};

export default API_URL;
