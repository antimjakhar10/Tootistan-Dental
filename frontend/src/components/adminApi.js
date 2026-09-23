const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

export const adminFetch = async (
  endpoint,
  options = {}
) => {
  const token = localStorage.getItem(
    "toothistan_admin_token"
  );

  const headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(
    `${API_URL}${endpoint}`,
    {
      ...options,
      headers,
    }
  );

  const data = await response.json();

  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem("toothistan_admin_token");
    localStorage.removeItem("toothistan_admin_user");

    window.location.href = "/admin/login";

    throw new Error(
      data.message || "Unauthorized"
    );
  }

  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong"
    );
  }

  return data;
};

export default API_URL;