const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

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

export default API_URL;
