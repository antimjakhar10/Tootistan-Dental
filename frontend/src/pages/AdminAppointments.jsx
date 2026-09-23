import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  Check,
  X,
  Trash2,
  RefreshCw,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch } from "../components/adminApi";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      setLoading(true);

      const data = await adminFetch("/appointments");

      setAppointments(data.appointments || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await adminFetch(`/appointments/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      loadAppointments();
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteAppointment = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    try {
      await adminFetch(`/appointments/${id}`, {
        method: "DELETE",
      });

      loadAppointments();
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
              Patient Requests
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Appointments
            </h1>

            <p className="mt-2 text-sm text-black">
              Manage appointment requests received from the website.
            </p>
          </div>

          <button
            onClick={loadAppointments}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:bg-slate-50"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading appointments...
            </div>
          ) : appointments.length === 0 ? (
            <div className="p-12 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-4 font-semibold">
                No appointments yet
              </h3>

              <p className="mt-1 text-sm text-black">
                New appointment requests will appear here.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop */}
              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full text-left">
                  <thead className="border-b border-slate-100 bg-slate-50">
                    <tr>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Patient
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Contact
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Date
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Department
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Status
                      </th>

                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {appointments.map((item) => (
                      <tr key={item._id}>
                        <td className="px-5 py-5">
                          <p className="font-medium">
                            {item.name}
                          </p>

                          {item.note && (
                            <p className="mt-1 max-w-xs truncate text-xs text-slate-400">
                              {item.note}
                            </p>
                          )}
                        </td>

                        <td className="px-5 py-5 text-sm text-black">
                          <p>{item.email}</p>
                          <p>{item.phone}</p>
                        </td>

                        <td className="px-5 py-5 text-sm">
                          {new Date(item.date).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>

                        <td className="px-5 py-5 text-sm text-black">
                          {item.department || "—"}
                        </td>

                        <td className="px-5 py-5">
                          <select
                            value={item.status}
                            onChange={(e) =>
                              updateStatus(
                                item._id,
                                e.target.value
                              )
                            }
                            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium outline-none focus:border-[#42311d]"
                          >
                            <option value="pending">
                              Pending
                            </option>
                            <option value="confirmed">
                              Confirmed
                            </option>
                            <option value="completed">
                              Completed
                            </option>
                            <option value="cancelled">
                              Cancelled
                            </option>
                          </select>
                        </td>

                        <td className="px-5 py-5">
                          <button
                            onClick={() =>
                              deleteAppointment(item._id)
                            }
                            className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="divide-y divide-slate-100 lg:hidden">
                {appointments.map((item) => (
                  <div
                    key={item._id}
                    className="p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-black">
                          {item.phone}
                        </p>

                        <p className="text-sm text-black">
                          {item.email}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          deleteAppointment(item._id)
                        }
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-400">
                          Date
                        </p>

                        <p className="mt-1 font-medium">
                          {new Date(
                            item.date
                          ).toLocaleDateString("en-IN")}
                        </p>
                      </div>

                      <div className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-400">
                          Department
                        </p>

                        <p className="mt-1 font-medium">
                          {item.department || "—"}
                        </p>
                      </div>
                    </div>

                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateStatus(
                          item._id,
                          e.target.value
                        )
                      }
                      className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">
                        Confirmed
                      </option>
                      <option value="completed">
                        Completed
                      </option>
                      <option value="cancelled">
                        Cancelled
                      </option>
                    </select>
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

export default AdminAppointments;