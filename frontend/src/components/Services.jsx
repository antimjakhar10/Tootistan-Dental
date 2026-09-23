import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ToothBrushingMascot, ToothFlossMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Brush,
  Crown,
  Gem,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "General Dentistry",
    description:
      "Complete preventive and restorative dental care to keep your teeth healthy, strong and comfortable.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    link: "/general-dentistry",
  },
  {
    number: "02",
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with carefully designed cosmetic treatments that bring out your natural confidence.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=85",
    link: "/cosmetic-dentistry",
  },
  {
    number: "03",
    title: "Dental Implants",
    description:
      "Modern implant solutions designed to restore missing teeth with comfort, precision and natural-looking results.",
    icon: Gem,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85",
    link: "/dental-implants",
  },
  {
    number: "04",
    title: "Invisalign",
    description:
      "Discreet and comfortable teeth straightening designed around your lifestyle and your smile goals.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=85",
    link: "/invisalign",
  },
  {
    number: "05",
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care created to make every child's visit comfortable and stress-free.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    link: "/pediatric-dentistry",
  },
  {
    number: "06",
    title: "Smile Makeover",
    description:
      "A personalized combination of treatments to create a healthier, brighter and more confident smile.",
    icon: Crown,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
    link: "/cosmetic-dentistry",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-10 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothBrushingMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute left-6 bottom-20 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothFlossMascot} sizeClassName="h-20 w-20 sm:h-22 sm:w-22" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c48f32] sm:text-xs">
              <span className="h-px w-8 bg-[#c48f32]" />
              Our Expertise
            </div>

            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.07] tracking-[-0.05em] text-[#2d2217] sm:text-5xl lg:text-[56px]">
              Care for every
              <span className="text-[#c48f32]"> kind of smile.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="lg:pb-1"
          >
            <p className="max-w-2xl text-[14px] leading-7 text-[#000000] sm:text-[15px] lg:text-base lg:leading-8">
              From everyday dental care to complete smile transformations,
              Toothistan brings modern technology, precision and a gentle
              approach to every treatment.
            </p>

            <Link
              to="/services"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#b88228]"
            >
              Explore all treatments

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ebdcb8] bg-white transition duration-300 group-hover:bg-[#2d2217] group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={service.link}
                  className="group relative block overflow-hidden rounded-[28px] border border-[#ebdcb8] bg-white shadow-[0_10px_40px_rgba(45,34,23,0.04)] transition duration-500 hover:-translate-y-2 hover:border-[#c48f32]/60 hover:shadow-[0_25px_65px_rgba(196,143,50,0.18)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[220px] overflow-hidden bg-[#f4ebd5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2217]/55 via-transparent to-transparent" />

                    {/* Number */}
                    <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#2d2217]/70 px-3 py-1.5 text-[10px] font-bold tracking-wider text-white backdrop-blur-md">
                      {service.number}
                    </span>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/50 bg-white/90 text-[#b88228] shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-[#2d2217] transition-colors group-hover:text-[#c48f32]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-[13px] leading-6 text-[#000000] sm:text-sm sm:leading-7">
                      {service.description}
                    </p>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between border-t border-[#ebdcb8] pt-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f621a]">
                        Toothistan Care
                      </span>

                      <span className="text-[10px] font-semibold text-[#c48f32] transition-colors group-hover:text-[#2d2217]">
                        Learn More
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#f4ebd5] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM FEATURE
        ====================================================== */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mt-5 overflow-hidden rounded-[28px] bg-[#2d2217] px-6 py-7 sm:px-8 lg:px-10"
        >
         
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 -top-8 text-white/[0.05]"
          >
            <Sparkles size={150} strokeWidth={1} />
          </motion.div>

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4ebd5] text-[#b88228]">
                <Sparkles size={24} />
              </div>

              <div>
                <p className="font-display text-base font-bold text-white sm:text-lg">
                  Not sure which treatment you need?
                </p>

                <p className="mt-1 text-[12px] leading-5 text-[#ebdcb8] sm:text-sm">
                  Our dental experts can guide you toward the right care.
                </p>
              </div>
            </div>

            <a
              href="#appointment"
              className="group flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-xs font-bold text-[#2d2217] transition duration-300 hover:-translate-y-1 hover:bg-[#f4ebd5] sm:text-sm"
            >
              Talk to a Dentist

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div> */}
        
      </div>
    </section>
  );
};

export default Services;