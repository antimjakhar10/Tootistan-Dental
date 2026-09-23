import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ToothKingMascot, ToothCoolMascot, ToothFairyMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const heroImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90",
    alt: "Professional dental treatment",
    position: "center center",
    label: "Patient First",
    title: "Comfort & Hygiene",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=90",
    alt: "Modern dental clinic technology",
    position: "center center",
    label: "Modern",
    title: "Digital Technology",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=90",
    alt: "Beautiful healthy smile",
    position: "center center",
    label: "Beautiful",
    title: "Confident Results",
  },
];

const Hero = () => {
  const [activeImage, setActiveImage] = useState(heroImages[0]);

  const sideImages = heroImages.filter(
    (image) => image.id !== activeImage.id
  );

  const changeImage = (image) => {
    setActiveImage(image);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf8f4] pt-24 sm:pt-28"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-32 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothKingMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute left-6 top-36 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothCoolMascot} sizeClassName="h-18 w-18 sm:h-20 sm:w-20" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-16 h-[450px] w-[450px] rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-12 lg:pb-10">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="animate-float mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white/90 px-3.5 py-2 shadow-md backdrop-blur"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228] animate-pulse">
                <Sparkles size={13} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#8f621a] sm:text-xs">
                Luxury Dentistry
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display text-[43px] font-extrabold leading-[1.04] tracking-[-0.055em] text-[#2d2217] sm:text-6xl md:text-[64px] lg:text-[60px] xl:text-[70px]">
              Smile Building.
              <span className="mt-1 block text-[#c48f32]">
                Nation Begins Here.
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="mt-5 max-w-[650px] text-sm leading-6 text-[#000000] sm:text-[15px] sm:leading-7"
            >
              Welcome to Toothistan — an empire beyond dentistry. Here,
              painless care, serene surroundings, world-class sterilization,
              and modern digital precision come together to replace fear with
              comfort and transform every smile with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#appointment"
                className="btn-shine group flex items-center gap-2 rounded-2xl bg-[#2d2217] px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(45,34,23,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#42311d] hover:shadow-[0_20px_40px_rgba(45,34,23,0.3)]"
              >
                <CalendarDays size={16} />

                Book Appointment

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="group flex items-center gap-2.5 rounded-2xl border border-[#ebdcb8] bg-white px-5 py-3.5 text-sm font-bold text-[#2d2217] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c48f32] hover:shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228] transition-transform duration-300 group-hover:scale-110">
                  <Play size={12} fill="currentColor" />
                </span>

                Explore Our Care
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      size={13}
                      fill="currentColor"
                      className="text-[#c48f32]"
                    />
                  ))}
                </div>

                <p className="mt-1 text-[10px] font-semibold text-[#6b5a4b]">
                  Trusted by our patients
                </p>
              </div>

              <div className="h-9 w-px bg-[#ebdcb8]" />

              <div>
                <p className="font-display text-lg font-bold text-[#2d2217]">
                  22K+
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8f621a]">
                  Smiles transformed
                </p>
              </div>

              <div className="h-9 w-px bg-[#ebdcb8]" />

              <div>
                <p className="font-display text-lg font-bold text-[#2d2217]">
                  10+
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8f621a]">
                  Years expertise
                </p>
              </div>

              <div className="h-9 w-px bg-[#ebdcb8]" />

              <div>
                <p className="font-display text-lg font-bold text-[#2d2217]">
                  98%
                </p>

                <p className="text-[9px] font-semibold uppercase tracking-wider text-[#8f621a]">
                  Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE COLLAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
          >
            {/* FIXED COLLAGE CONTAINER */}
            <div className="grid h-[420px] w-full grid-cols-[minmax(0,1.55fr)_minmax(150px,0.75fr)] gap-3 sm:h-[455px] lg:h-[465px]">

              {/* ================================================
                  MAIN IMAGE
              ================================================= */}
              <div className="relative min-h-0 min-w-0 overflow-hidden rounded-[30px] border-[6px] border-white bg-[#f4ebd5] shadow-[0_25px_70px_rgba(45,34,23,0.13)]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage.id}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    style={{
                      objectPosition: activeImage.position,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Dark gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2d2217]/35 via-transparent to-transparent" />

              </div>

              {/* ================================================
                  SIDE IMAGES
              ================================================= */}
              <div className="grid min-h-0 min-w-0 grid-rows-2 gap-3">

                {sideImages.map((image, index) => (
                  <motion.button
                    key={image.id}
                    type="button"
                    onClick={() => changeImage(image)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.08,
                      duration: 0.4,
                    }}
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group relative min-h-0 min-w-0 overflow-hidden rounded-[25px] border-[5px] border-white bg-[#f4ebd5] p-0 text-left shadow-[0_18px_50px_rgba(45,34,23,0.10)]"
                  >
                    {/* Image always fills FIXED container */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        objectPosition: image.position,
                      }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2217]/20 via-transparent to-transparent" />

                    {/* Click Arrow */}
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#b88228] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                      <ArrowRight size={14} />
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="pointer-events-none absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full border-[22px] border-[#ebdcb8]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;