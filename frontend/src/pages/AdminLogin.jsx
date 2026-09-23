import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, ArrowRight } from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}/auth/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      localStorage.setItem(
        "toothistan_admin_token",
        data.token
      );

      localStorage.setItem(
        "toothistan_admin_user",
        JSON.stringify(data.user)
      );

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#faf8f4]">
      <div className="hidden flex-1 items-center justify-center bg-[#2d2217] p-12 lg:flex">
        <div className="max-w-lg text-white">
          <img
            src="/logo.png"
            alt="Toothistan"
            className="mb-10 h-20 w-auto object-contain"
          />

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e5b757]">
            Admin Portal
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight">
            Manage Toothistan
            <span className="block text-[#e5b757]">
              with confidence.
            </span>
          </h1>

          <p className="mt-6 leading-7 text-white/90">
            Manage appointments, enquiries, testimonials,
            gallery content and website activity from one
            secure dashboard.
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-5 lg:w-[520px]">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Toothistan"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Secure Login
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Welcome Back
            </h2>

            <p className="mt-2 text-sm text-black">
              Sign in to access your admin dashboard.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="admin@toothistan.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#42311d] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#42311d] focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42311d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
              {!loading && (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;