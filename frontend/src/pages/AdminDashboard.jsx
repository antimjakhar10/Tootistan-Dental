import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  MessageSquare,
  Star,
  Images,
  Mail,
  Users,
  Clock3,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch } from "../components/adminApi";

const statCards = [
  {
    key: "totalAppointments",
    title: "Appointments",
    icon: CalendarDays,
  },
  {
    key: "pendingAppointments",
    title: "Pending",
    icon: Clock3,
  },
  {
    key: "totalContacts",
    title: "Contact Queries",
    icon: MessageSquare,
  },
  {
    key: "totalTestimonials",
    title: "Testimonials",
    icon: Star,
  },
  {
    key: "totalGallery",
    title: "Gallery Items",
    icon: Images,
  },
  {
    key: "totalUsers",
    title: "Users",
    icon: Users,
  },
];

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const result = await adminFetch(
          "/admin/dashboard"
        );

        setData(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  const user = JSON.parse(
    localStorage.getItem(
      "toothistan_admin_user"
    ) || "{}"
  );

  return (
    <AdminLayout>
      <div>
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
            Overview
          </p>

          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Good to see you, {user.name || "Admin"}
          </h1>

          <p className="mt-2 text-black">
            Here’s what is happening across Toothistan.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-10 text-center">
            Loading dashboard...
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {statCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f0e3]">
                        <Icon className="h-5 w-5 text-[#42311d]" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm text-black">
                      {item.title}
                    </p>

                    <p className="mt-1 text-3xl font-semibold">
                      {data?.stats?.[item.key] ?? 0}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold">
                  Recent Appointments
                </h2>

                <div className="mt-5 space-y-3">
                  {data?.recentAppointments?.length ? (
                    data.recentAppointments.map(
                      (item) => (
                        <div
                          key={item._id}
                          className="rounded-xl bg-slate-50 p-4"
                        >
                          <div className="flex justify-between gap-4">
                            <div>
                              <p className="font-medium">
                                {item.name}
                              </p>
                              <p className="mt-1 text-xs text-black">
                                {item.department ||
                                  "Dental Consultation"}
                              </p>
                            </div>

                            <span className="text-xs font-medium capitalize text-[#42311d]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-sm text-black">
                      No appointments yet.
                    </p>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-semibold">
                  Recent Enquiries
                </h2>

                <div className="mt-5 space-y-3">
                  {data?.recentContacts?.length ? (
                    data.recentContacts.map(
                      (item) => (
                        <div
                          key={item._id}
                          className="rounded-xl bg-slate-50 p-4"
                        >
                          <div className="flex justify-between gap-4">
                            <div>
                              <p className="font-medium">
                                {item.name}
                              </p>
                              <p className="mt-1 line-clamp-1 text-xs text-black">
                                {item.message}
                              </p>
                            </div>

                            <span className="text-xs font-medium capitalize text-[#42311d]">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-sm text-black">
                      No enquiries yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;