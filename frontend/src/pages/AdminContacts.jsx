import React, { useEffect, useState } from "react";
import {
  MessageSquare,
  Trash2,
  RefreshCw,
  Mail,
  Phone,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch } from "../components/adminApi";

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadContacts = async () => {
    try {
      setLoading(true);

      const data = await adminFetch("/contact");

      setContacts(data.contacts || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await adminFetch(`/contact/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      loadContacts();
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteContact = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete this enquiry?"
      )
    ) {
      return;
    }

    try {
      await adminFetch(`/contact/${id}`, {
        method: "DELETE",
      });

      loadContacts();
    } catch (error) {
      alert(error.message);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "new":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      case "contacted":
        return "bg-amber-50 text-amber-700 border-amber-200/60";
      case "resolved":
        return "bg-slate-100 text-black border-slate-200";
      default:
        return "bg-slate-100 text-black border-slate-200";
    }
  };

  return (
    <AdminLayout>
      <div>
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Website Enquiries
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Contact Queries
            </h1>

            <p className="mt-2 text-sm text-black">
              View and manage messages submitted through the contact form.
            </p>
          </div>

          <button
            onClick={loadContacts}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50 transition"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        {/* Content Table / List View */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading enquiries...
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-4 font-semibold">
                No enquiries yet
              </h3>
              <p className="mt-1 text-sm text-black">
                New messages submitted from the contact page will appear here.
              </p>
            </div>
          ) : (
            <>
              {/* Count Bar */}
              <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-3.5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-black">
                  Total Enquiries ({contacts.length})
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-left border-collapse">
                  <thead className="border-b border-slate-100 bg-slate-50/50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        User
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Message / Query
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Date & Time
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
                    {contacts.map((item) => (
                      <tr
                        key={item._id}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        {/* User */}
                        <td className="px-6 py-4 align-top">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-[#42311d] font-semibold text-sm">
                              {item.name ? item.name.charAt(0).toUpperCase() : "U"}
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900 text-sm">
                                {item.name}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="px-6 py-4 align-top text-xs text-black space-y-1">
                          <div className="flex items-center gap-1.5">
                            <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span className="truncate max-w-[180px]">{item.email || "N/A"}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span>{item.phone || "N/A"}</span>
                          </div>
                        </td>

                        {/* Message */}
                        <td className="px-6 py-4 align-top max-w-xs">
                          <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs leading-relaxed text-slate-700">
                            {item.message}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="px-6 py-4 align-top whitespace-nowrap text-xs text-black">
                          {new Date(item.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                          <span className="block text-[11px] text-slate-400 mt-0.5">
                            {new Date(item.createdAt).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4 align-top whitespace-nowrap">
                          <select
                            value={item.status}
                            onChange={(e) => updateStatus(item._id, e.target.value)}
                            className={`rounded-xl border px-3 py-1.5 text-xs font-semibold outline-none cursor-pointer ${getStatusBadge(
                              item.status
                            )}`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="resolved">Resolved</option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 align-top whitespace-nowrap text-right">
                          <button
                            onClick={() => deleteContact(item._id)}
                            className="inline-flex items-center justify-center rounded-xl border border-red-100 p-2 text-red-500 hover:bg-red-50 hover:border-red-200 transition"
                            title="Delete Enquiry"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile / Tablet List View */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {contacts.map((item) => (
                  <div key={item._id} className="p-5 space-y-3">
                    {/* Header: Name, Status & Date */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f7f0e3] text-[#42311d] font-semibold text-xs">
                          {item.name ? item.name.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-slate-900">{item.name}</h4>
                          <p className="text-[11px] text-slate-400">
                            {new Date(item.createdAt).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </p>
                        </div>
                      </div>

                      <select
                        value={item.status}
                        onChange={(e) => updateStatus(item._id, e.target.value)}
                        className={`rounded-xl border px-2.5 py-1 text-xs font-semibold outline-none ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-black">
                      {item.email && (
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3 text-slate-400" />
                          {item.email}
                        </span>
                      )}
                      {item.phone && (
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3 text-slate-400" />
                          {item.phone}
                        </span>
                      )}
                    </div>

                    {/* Message Box */}
                    <div className="rounded-xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-700 border border-slate-100">
                      {item.message}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-end pt-1">
                      <button
                        onClick={() => deleteContact(item._id)}
                        className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-medium px-2 py-1 rounded-lg hover:bg-red-50"
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
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;