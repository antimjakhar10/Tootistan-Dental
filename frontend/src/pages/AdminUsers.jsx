import React, { useEffect, useState } from "react";
import {
  Users,
  RefreshCw,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import AdminLayout from "../components/AdminLayout";
import { adminFetch } from "../components/adminApi";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const data = await adminFetch("/admin/users");

      setUsers(data.users || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <AdminLayout>
      <div>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Accounts
            </p>

            <h1 className="mt-2 text-3xl font-semibold">
              Users
            </h1>

            <p className="mt-2 text-sm text-black">
              View registered website users and administrators.
            </p>
          </div>

          <button
            onClick={loadUsers}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-10 text-center text-sm text-black">
              Loading users...
            </div>
          ) : users.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-4 font-semibold">
                No users found
              </h3>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                      User
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                      Phone
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                      Role
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                      Status
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-black">
                      Joined
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7f0e3]">
                            {user.role === "admin" ? (
                              <ShieldCheck className="h-5 w-5 text-[#42311d]" />
                            ) : (
                              <UserRound className="h-5 w-5 text-[#42311d]" />
                            )}
                          </div>

                          <div>
                            <p className="font-medium">
                              {user.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-5 text-sm text-black">
                        {user.phone || "—"}
                      </td>

                      <td className="px-5 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                            user.role === "admin"
                              ? "bg-[#f7f0e3] text-[#42311d]"
                              : "bg-slate-100 text-black"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>

                      <td className="px-5 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            user.isActive
                              ? "bg-green-50 text-green-600"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
                          {user.isActive
                            ? "Active"
                            : "Inactive"}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm text-black">
                        {new Date(
                          user.createdAt
                        ).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;