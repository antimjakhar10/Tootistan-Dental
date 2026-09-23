import { motion } from "framer-motion";
import { ToothShieldMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  Heart,
  Laptop,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const trustItems = [
  {
    icon: Laptop,
    number: "01",
    title: "Modern Tools",
    description:
      "Advanced dental technology and digital precision for smarter, more comfortable treatment.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Calm Space",
    description:
      "A peaceful, thoughtfully designed environment that helps you feel relaxed from the moment you arrive.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Strict Hygiene",
    description:
      "World-class sterilization and uncompromising hygiene standards at every step of your care.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Gentle Care",
    description:
      "Compassionate dentistry focused on comfort, trust and a completely patient-first experience.",
  },
];

const TrustSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Animated Mascot Sticker */}
      <div className="pointer-events-none absolute right-8 top-12 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothShieldMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Top Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c48f32] sm:text-xs">
              <span className="h-px w-7 bg-[#c48f32]" />
              The Toothistan Difference
            </span>

           <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#2d2217] sm:text-5xl lg:text-[54px]">
              Dentistry designed
              <span className="text-[#c48f32]"> around you.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="max-w-2xl text-[14px] leading-7 text-[#6b5a4b] sm:text-[15px] lg:text-base lg:leading-8"
          >
            At Toothistan, we believe exceptional dentistry is more than
            treatment. It is the combination of advanced technology, peaceful
            surroundings, uncompromising hygiene and genuinely gentle care.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[24px] border border-[#ebdcb8] bg-[#f8f3e8] p-5 transition duration-300 hover:border-[#c48f32] hover:bg-white hover:shadow-[0_20px_55px_rgba(45,34,23,0.08)] sm:p-6"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-[#8f621a]">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b88228] shadow-sm transition-all duration-300 group-hover:rotate-12 group-hover:bg-[#2d2217] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="font-display text-xl font-bold tracking-[-0.025em] text-[#2d2217]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 sm:text-sm sm:leading-7 text-[#000000]">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-6 flex items-center justify-between border-t border-[#ebdcb8] pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8f621a]">
                    Toothistan Care
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ebdcb8] text-[#c48f32] transition duration-300 group-hover:border-[#2d2217] group-hover:bg-[#2d2217] group-hover:text-white">
                    <ArrowUpRight size={13} />
                  </span>
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[#f4ebd5] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 overflow-hidden rounded-[24px] bg-[#2d2217]"
        >
          <div className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
                <ShieldCheck size={22} />
              </div>

              <div>
                <p className="font-display text-base font-bold text-white sm:text-base">
                  Your comfort is never an afterthought.
                </p>

                <p className="mt-1 text-[11px] text-[#ebdcb8]">
                  Every detail of your experience is designed with you in mind.
                </p>
              </div>
            </div>

            <a
              href="#appointment"
              className="group flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#2d2217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4ebd5]"
            >
              Experience Toothistan

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TrustSection;