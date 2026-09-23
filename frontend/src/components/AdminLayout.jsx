import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  MessageSquare,
  Star,
  Images,
  Mail,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    path: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    label: "Contact Queries",
    path: "/admin/contacts",
    icon: MessageSquare,
  },
  {
    label: "Testimonials",
    path: "/admin/testimonials",
    icon: Star,
  },
  {
    label: "Before & After",
    path: "/admin/gallery",
    icon: Images,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
];

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("toothistan_admin_token");
    localStorage.removeItem("toothistan_admin_user");

    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#2d2217]">
      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
        <Link to="/admin/dashboard">
          <img
            src="/logo.png"
            alt="Toothistan"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl border border-slate-200 p-2"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-72 border-r border-slate-200 bg-white transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center border-b border-slate-100 px-6">
          <Link to="/admin/dashboard">
            <img
              src="/logo.png"
              alt="Toothistan"
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            Administration
          </p>

          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const active =
                location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[#f7f0e3] text-[#42311d]"
                      : "text-black hover:bg-slate-50 hover:text-[#2d2217]"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 p-4">
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {mobileOpen && (
        <button
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Content */}
      <main className="min-h-screen lg:ml-72">
        <div className="px-4 pb-10 pt-20 sm:px-6 lg:px-8 lg:pt-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;