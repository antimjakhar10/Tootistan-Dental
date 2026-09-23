import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Save,
  RefreshCw,
  MessageSquare,
  Building,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch } from "../components/adminApi";
import { useSettings } from "../context/SettingsContext";

const AdminSettings = () => {
  const { refreshSettings } = useSettings();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [form, setForm] = useState({
    phone: "",
    altPhone: "",
    whatsapp: "",
    email: "",
    address: "",
    cityState: "",
    weekdayHours: "",
    weekendHours: "",
    sundayHours: "",
    emergencyText: "",
    instagramUrl: "",
    youtubeUrl: "",
    instagramHandle: "",
    youtubeChannelName: "",
  });

  const loadSettings = async () => {
    try {
      setLoading(true);
      const data = await adminFetch("/settings");
      if (data.settings) {
        setForm({
          phone: data.settings.phone || "",
          altPhone: data.settings.altPhone || "",
          whatsapp: data.settings.whatsapp || "",
          email: data.settings.email || "",
          address: data.settings.address || "",
          cityState: data.settings.cityState || "",
          weekdayHours: data.settings.weekdayHours || "",
          weekendHours: data.settings.weekendHours || "",
          sundayHours: data.settings.sundayHours || "",
          emergencyText: data.settings.emergencyText || "",
          instagramUrl: data.settings.instagramUrl || "",
          youtubeUrl: data.settings.youtubeUrl || "",
          instagramHandle: data.settings.instagramHandle || "",
          youtubeChannelName: data.settings.youtubeChannelName || "",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: error.message || "Failed to load clinic settings" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      setSaving(true);
      const data = await adminFetch("/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setMessage({
        type: "success",
        text: data.message || "Settings updated successfully! Website is now updated live.",
      });

      // Refresh global context
      refreshSettings();
    } catch (error) {
      setMessage({ type: "error", text: error.message || "Failed to save settings" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Website Information
            </p>

            <h1 className="mt-2 text-3xl font-semibold">Clinic Contact & Hours</h1>

            <p className="mt-2 text-sm text-black">
              Update phone numbers, email addresses, office timings, and address shown across the entire website.
            </p>
          </div>

          <button
            onClick={loadSettings}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50 transition"
          >
            <RefreshCw className="h-4 w-4" />
            Reload Current Info
          </button>
        </div>

        {/* ALERT MESSAGE */}
        {message.text && (
          <div
            className={`mb-6 flex items-center gap-3 rounded-2xl p-4 text-sm font-medium ${
              message.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-current" />
            {message.text}
          </div>
        )}

        {/* FORM */}
        {loading ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center text-sm text-black">
            Loading clinic settings...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* CARD 1: CONTACT NUMBERS & EMAIL */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#b88228]" />
                Phone & Email Details
              </h2>
              <p className="text-xs text-black mb-6">
                These phone numbers and email addresses will automatically update in Navbar, Footer, Contact Page, and Booking banners.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Primary Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 81680 62414"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Used for primary call buttons and links.</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Alternate / Emergency Phone
                  </label>
                  <input
                    type="text"
                    name="altPhone"
                    value={form.altPhone}
                    onChange={handleChange}
                    placeholder="+91 81680 62414"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Used for secondary or emergency calls.</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    WhatsApp Number (Digits only, with country code)
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    placeholder="918168062414"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Used for WhatsApp chat links e.g. wa.me/918168062414</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="info@toothistan.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Used for email links across the website.</p>
                </div>
              </div>
            </div>

            {/* CARD 2: ADDRESS & LOCATION */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#b88228]" />
                Clinic Location & Address
              </h2>
              <p className="text-xs text-black mb-6">
                Address details shown on Contact page, Our Office page, and Footer.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Full Clinic Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="Toothistan Dental Empire, Premium Healthcare Plaza, Main Road"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-700">
                      City, State & Country
                    </label>
                    <input
                      type="text"
                      name="cityState"
                      value={form.cityState}
                      onChange={handleChange}
                      placeholder="Hisar, Haryana, India"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-slate-700">
                      Emergency Service Note
                    </label>
                    <input
                      type="text"
                      name="emergencyText"
                      value={form.emergencyText}
                      onChange={handleChange}
                      placeholder="24/7 Emergency Care Available"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: OPERATING HOURS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#b88228]" />
                Clinic Operating Hours & Timings
              </h2>
              <p className="text-xs text-black mb-6">
                Timings displayed in Footer, Contact section, and Office details.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Mon - Tue Hours
                  </label>
                  <input
                    type="text"
                    name="weekdayHours"
                    value={form.weekdayHours}
                    onChange={handleChange}
                    placeholder="Mon - Tue: 9:00 AM - 6:00 PM"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Wed - Sat Hours
                  </label>
                  <input
                    type="text"
                    name="weekendHours"
                    value={form.weekendHours}
                    onChange={handleChange}
                    placeholder="Wed - Sat: 8:00 AM - 5:00 PM"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Sunday Hours / Status
                  </label>
                  <input
                    type="text"
                    name="sundayHours"
                    value={form.sundayHours}
                    onChange={handleChange}
                    placeholder="Sunday: Closed / Emergency Only"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>
              </div>
            </div>

            {/* CARD 4: SOCIAL CHANNELS & PROFILES */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <Share2 className="h-5 w-5 text-[#b88228]" />
                Official Social Media Channel Links & Handles
              </h2>
              <p className="text-xs text-black mb-6">
                These links control the "Follow on Instagram" and "Subscribe on YouTube" buttons and header profile cards on the Socials page.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Instagram Profile Link *
                  </label>
                  <input
                    type="url"
                    name="instagramUrl"
                    value={form.instagramUrl}
                    onChange={handleChange}
                    placeholder="https://instagram.com/toothistan_dental"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Target link for Instagram button.</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    Instagram Handle Display Name
                  </label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={form.instagramHandle}
                    onChange={handleChange}
                    placeholder="@toothistan_dental"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    YouTube Channel Link *
                  </label>
                  <input
                    type="url"
                    name="youtubeUrl"
                    value={form.youtubeUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/@toothistan"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                  <p className="mt-1 text-[11px] text-slate-400">Target link for YouTube button.</p>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-slate-700">
                    YouTube Channel Display Name
                  </label>
                  <input
                    type="text"
                    name="youtubeChannelName"
                    value={form.youtubeChannelName}
                    onChange={handleChange}
                    placeholder="Toothistan Dental"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#42311d]"
                  />
                </div>
              </div>
            </div>

            {/* SAVE BUTTON */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2d2217] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#42311d] disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                {saving ? "Saving Changes..." : "Save Clinic Information"}
              </button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
