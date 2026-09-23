import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

const aboutLinks = [
  { name: "Meet The Team", path: "/meet-the-team" },
  { name: "Meet The Doctor", path: "/meet-the-doctor" },
  { name: "Our Office", path: "/our-office" },
  { name: "Patients Comfort", path: "/patients-comfort" },
  { name: "Mission & Vision", path: "/mission-vision" },
  { name: "Ballin's On Budget", path: "/ballins-on-budget" },
  { name: "Dental Technology", path: "/dental-technology" },
  { name: "What Sets Us Apart", path: "/what-sets-us-apart" },
  { name: "Careers", path: "/careers" },
];

const serviceLinks = [
  { name: "Services", path: "/services" },
  { name: "General Dentistry", path: "/general-dentistry" },
  { name: "Cosmetic Dentistry", path: "/cosmetic-dentistry" },
  { name: "Dental Implants", path: "/dental-implants" },
  { name: "Orthodontics", path: "/orthodontics" },
  { name: "Special Needs Dentistry", path: "/special-needs-dentistry" },
  { name: "Emergency Dentistry", path: "/emergency-dentistry" },
  { name: "Invisalign", path: "/invisalign" },
  { name: "Pediatric Dentistry", path: "/pediatric-dentistry" },
  { name: "Surgical Dentistry", path: "/surgical-dentistry" },
];

const newPatientLinks = [
  {
    name: "First Visit Expectations",
    path: "/first-visit-expectations",
  },
  {
    name: "Problem We Treat",
    path: "/problem-we-treat",
  },
  {
    name: "Appointments",
    path: "/appointments",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Membership Plan",
    path: "/membership-plan",
  },
  {
    name: "Home Instructions",
    path: "/home-instructions",
  },
  {
    name: "Video Library",
    path: "/video-library",
  },
  {
    name: "Financial Options",
    path: "/financial-options",
  },
];

const galleryLinks = [
  {
    name: "Before & After Photos",
    path: "/before-after-photos",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];

const Dropdown = ({
  label,
  path,
  links,
  mobile = false,
  openMenu,
  setOpenMenu,
}) => {
  const isOpen = openMenu === label;

  if (mobile) {
    return (
      <div className="w-full">
        <div className="flex items-center rounded-xl hover:bg-[#f4ebd5]">
          {/* Parent Page */}
          <Link
            to={path}
            onClick={() => {
              setOpenMenu(null);
            }}
            className="flex-1 px-4 py-3 font-semibold text-[#2d2217]"
          >
            {label}
          </Link>

          {/* Mobile Dropdown Button */}
          <button
            type="button"
            onClick={() => {
              setOpenMenu(isOpen ? null : label);
            }}
            className="flex h-11 w-12 items-center justify-center text-[#2d2217]"
            aria-label={`Open ${label} submenu`}
          >
            <ChevronDown
              size={17}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div className="mt-1 space-y-1 rounded-2xl bg-[#f8f3e8] p-2">
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setOpenMenu(null);
                }}
                className="block rounded-xl px-4 py-2.5 text-[13px] font-medium text-black transition hover:bg-[#f4ebd5] hover:text-[#2d2217]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="group relative">
      {/* Parent Link */}
      <div className="flex items-center gap-1.5">
        <Link
          to={path}
          className="text-[14px] font-semibold text-[#2d2217] transition hover:text-[#b88228]"
        >
          {label}
        </Link>

        <ChevronDown
          size={15}
          className="text-[#2d2217] transition-transform duration-200 group-hover:rotate-180"
        />
      </div>

      {/* Desktop Dropdown */}
      <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-[#ebdcb8] bg-white p-2 shadow-[0_20px_50px_rgba(45,34,23,0.12)]">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block rounded-xl px-4 py-2.5 text-[13px] font-medium text-black transition hover:bg-[#f4ebd5] hover:text-[#2d2217]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="fixed left-1/2 top-4 z-[100] w-[calc(100%-24px)] max-w-[1400px] -translate-x-1/2 rounded-2xl border border-[#ebdcb8] bg-white/95 shadow-[0_10px_35px_rgba(45,34,23,0.08)] backdrop-blur-xl">
      <div className="flex h-[78px] items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo.png"
            alt="Toothistan - Expert Dental Care"
            className="h-14 w-auto object-contain sm:h-16 lg:h-[68px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 xl:flex">
          <Link
            to="/"
            className="text-[14px] font-semibold text-[#2d2217] transition hover:text-[#b88228]"
          >
            Home
          </Link>

          <Dropdown
            label="About Us"
            path="/about"
            links={aboutLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <Dropdown
            label="Service"
            path="/services"
            links={serviceLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <Dropdown
            label="New Patients"
            path="/new-patients"
            links={newPatientLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <Dropdown
            label="Smile Gallery"
            path="/smile-gallery"
            links={galleryLinks}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />

          <Link
            to="/contact"
            className="text-[14px] font-semibold text-[#2d2217] transition hover:text-[#b88228]"
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP RIGHT */}
        <div className="hidden items-center gap-4 xl:flex">
          {/* CALL ICON */}
          <a
            href="tel:+918168062414"
            aria-label="Call Toothistan"
            title="Call Toothistan"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228] transition hover:scale-105 hover:bg-[#eedcb6]"
          >
            <Phone size={17} />
          </a>

          {/* APPOINTMENT */}
          <Link
            to="/appointments"
            className="btn-shine rounded-full bg-[#2d2217] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#2d2217]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#42311d] hover:shadow-[0_10px_25px_rgba(45,34,23,0.3)]"
          >
            Book Appointment
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setOpenMenu(null);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4ebd5] text-[#2d2217] xl:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-[#ebdcb8] bg-white px-5 py-5 shadow-xl xl:hidden">
          <div className="mx-auto max-w-[1400px]">
            <div className="space-y-1">
              {/* HOME */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 font-semibold text-[#2d2217] hover:bg-[#f4ebd5]"
              >
                Home
              </Link>

              {/* ABOUT */}
              <Dropdown
                label="About Us"
                path="/about"
                links={aboutLinks}
                mobile
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

              {/* SERVICES */}
              <Dropdown
                label="Service"
                path="/services"
                links={serviceLinks}
                mobile
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

              {/* NEW PATIENTS */}
              <Dropdown
                label="New Patients"
                path="/new-patients"
                links={newPatientLinks}
                mobile
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

              {/* SMILE GALLERY */}
              <Dropdown
                label="Smile Gallery"
                path="/smile-gallery"
                links={galleryLinks}
                mobile
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />

              {/* CONTACT */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block rounded-xl px-4 py-3 font-semibold text-[#2d2217] hover:bg-[#f4ebd5]"
              >
                Contact
              </Link>
            </div>

            {/* MOBILE BOTTOM */}
            <div className="mt-5 border-t border-[#ebdcb8] pt-5">
              <div className="flex gap-3">
                {/* CALL */}
                <a
                  href="tel:+918168062414"
                  className="flex flex-1 items-center gap-3 rounded-xl bg-[#f8f3e8] px-4 py-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
                    <Phone size={17} />
                  </span>

                  <div>
                    <p className="text-xs text-black">
                      Call Toothistan
                    </p>
                    <p className="text-sm font-bold text-[#2d2217]">
                      +91 81680 62414
                    </p>
                  </div>
                </a>
              </div>

              {/* APPOINTMENT */}
              <Link
                to="/appointments"
                onClick={closeMobileMenu}
                className="mt-3 block rounded-xl bg-[#2d2217] px-5 py-3.5 text-center font-bold text-white hover:bg-[#42311d]"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;