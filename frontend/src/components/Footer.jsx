import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ToothBrushingMascot,
  ToothKingMascot,
  ToothDoctorMascot,
  ToothFairyMascot,
  FloatingMascotSticker,
} from "./DentalMascots";
import {
  ArrowUpRight,
  Clock3,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const services = [
    { label: "General Dentistry", to: "/general-dentistry" },
    { label: "Cosmetic Dentistry", to: "/cosmetic-dentistry" },
    { label: "Dental Implants", to: "/dental-implants" },
    { label: "Invisalign", to: "/invisalign" },
    { label: "Pediatric Dentistry", to: "/pediatric-dentistry" },
    { label: "Smile Gallery", to: "/before-after-photos" },
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Meet The Team", to: "/meet-the-team" },
    { label: "First Visit", to: "/first-visit-expectations" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#1f1912] text-white">
      {/* Background Floating Mascot Animations */}
      <div className="pointer-events-none absolute left-4 top-8 z-20 opacity-95 lg:left-10">
        <FloatingMascotSticker MascotComponent={ToothBrushingMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" glowColor="rgba(229, 183, 87, 0.3)" />
      </div>

      <div className="pointer-events-none absolute right-4 top-10 z-20 opacity-95 lg:right-12">
        <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" glowColor="rgba(20, 184, 166, 0.3)" />
      </div>

      <div className="pointer-events-none absolute bottom-24 right-1/3 z-20 hidden lg:block opacity-90">
        <FloatingMascotSticker MascotComponent={ToothKingMascot} sizeClassName="h-20 w-20" glowColor="rgba(229, 183, 87, 0.3)" />
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/3 z-20 hidden lg:block opacity-90">
        <FloatingMascotSticker MascotComponent={ToothFairyMascot} sizeClassName="h-18 w-18" glowColor="rgba(236, 72, 153, 0.3)" />
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#c48f32]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e5b757]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-10 sm:py-12 lg:grid-cols-[1.35fr_0.7fr_1fr_0.9fr] lg:gap-10 lg:py-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Toothistan - Expert Dental Care"
                className="h-16 w-auto object-contain sm:h-[72px]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/90">
              Toothistan is an advanced dental care destination where modern
              technology, expert dentistry and a calm environment come together
              to create confident smiles.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2.5">
              <SocialButton
                icon={<MessageCircle size={17} />}
                href="https://wa.me/918168062414"
                label="WhatsApp"
              />
              <SocialButton
                icon={<Mail size={17} />}
                href="mailto:info@toothistan.com"
                label="Email"
              />
              <SocialButton
                icon={<Globe size={17} />}
                href="https://toothistan.com"
                label="Website"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterTitle>Quick Links</FooterTitle>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1 text-sm text-white/85 transition-colors hover:text-[#e5b757]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterTitle>Our Services</FooterTitle>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm text-white/85 transition-colors hover:text-[#e5b757]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FooterTitle>Contact Us</FooterTitle>

            <div className="space-y-5">
              <ContactInfo
                icon={<Phone size={16} />}
                text="+91 81680 62414"
                href="tel:+918168062414"
              />

              <ContactInfo
                icon={<Mail size={16} />}
                text="info@toothistan.com"
                href="mailto:info@toothistan.com"
              />

              <ContactInfo
                icon={<MapPin size={16} />}
                text="SCF-212, Near Khetarpal Hospital, Green Square Market, Hisar, Haryana 125001"
              />
            </div>
          </motion.div>
        </div>

        {/* Opening Hours Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c48f32]/20 text-[#e5b757]">
              <Clock3 size={17} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#e5b757]">
                Opening Hours
              </p>

              <p className="mt-1 text-sm text-white/85">
                Mon-Tue 9 AM-6 PM&nbsp;&nbsp; • &nbsp;&nbsp;Wed-Sat 8 AM-5 PM
                &nbsp;&nbsp; • &nbsp;&nbsp;Sunday Closed
              </p>
            </div>
          </div>

          <Link
            to="/appointments"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#c48f32] px-5 py-3 text-sm font-semibold text-[#1f1912] transition-all hover:bg-[#d69e3d]"
          >
            Book Appointment
            <ArrowUpRight size={17} />
          </Link>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/85">
            © {new Date().getFullYear()} Toothistan. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/85">
            <Link to="/faqs" className="transition-colors hover:text-white">
              FAQs
            </Link>

            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs text-white/85">
            <Sparkles size={13} className="text-[#e5b757]" />
            Crafted for confident smiles
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Footer Heading */
const FooterTitle = ({ children }) => {
  return (
    <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#e5b757]">
      {children}
    </h3>
  );
};

/* Contact Item */
const ContactInfo = ({ icon, text, href }) => {
  const content = (
    <>
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[#e5b757]">
        {icon}
      </div>

      <span className="text-sm leading-6 text-white/85 transition-colors group-hover:text-white">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="group flex gap-3">
        {content}
      </a>
    );
  }

  return <div className="group flex gap-3">{content}</div>;
};

/* Social Button */
const SocialButton = ({ icon, href, label }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/90 transition-all duration-300 hover:border-[#e5b757]/40 hover:bg-[#c48f32] hover:text-[#1f1912]"
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/90 transition-all duration-300 hover:border-[#e5b757]/40 hover:bg-[#c48f32] hover:text-[#1f1912]"
    >
      {icon}
    </button>
  );
};

export default Footer;
