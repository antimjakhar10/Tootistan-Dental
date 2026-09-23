import { motion } from "framer-motion";
import { ToothDoctorMascot, ToothLoveMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowUpRight,
  Check,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute left-6 top-12 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute right-8 top-16 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothLoveMascot} sizeClassName="h-18 w-18 sm:h-22 sm:w-22" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =====================================================
              LEFT IMAGE COMPOSITION
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            {/* Main Image */}
            <div className="relative h-[480px] overflow-hidden rounded-[34px] border-[7px] border-[#faf8f4] bg-[#f4ebd5] shadow-[0_30px_80px_rgba(45,34,23,0.12)] sm:h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=90"
                alt="Modern Toothistan dental clinic"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c48f32] sm:text-xs">
              <span className="h-px w-8 bg-[#c48f32]" />
              About Toothistan
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.07] tracking-[-0.05em] text-[#2d2217] sm:text-5xl lg:text-[55px]">
              More than a dental clinic.
              <span className="block text-[#c48f32]">
                A better way to smile.
              </span>
            </h2>

            {/* Paragraph */}
            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[#6b5a4b] sm:text-[15px] lg:text-base lg:leading-8">
              Welcome to Toothistan — an empire beyond dentistry. We bring
              painless care, serene surroundings, world-class sterilization
              and modern digital precision together to create a dental
              experience that feels different from the moment you walk in.
            </p>

            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#6b5a4b] sm:text-[15px] lg:text-base lg:leading-8">
              Every treatment is thoughtfully planned around your comfort,
              your goals and your long-term oral health. Because a beautiful
              smile starts with feeling confident in the care behind it.
            </p>

            {/* Features */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-[#ebdcb8] bg-[#f8f3e8] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f4ebd5] text-[#b88228]">
                  <Check size={17} />
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-[#2d2217]">
                    Personalized Care
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#6b5a4b]">
                    Treatment plans designed around your unique smile.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#ebdcb8] bg-[#f8f3e8] p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f4ebd5] text-[#b88228]">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-[#2d2217]">
                    Trusted Hygiene
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#6b5a4b]">
                    Strict sterilization and safety at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="btn-shine group flex items-center gap-2 rounded-xl bg-[#2d2217] px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(45,34,23,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#42311d] hover:shadow-[0_20px_40px_rgba(45,34,23,0.25)]"
              >
                Discover Our Approach

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#6b5a4b]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
                  <Check size={13} />
                </span>

                Comfort-first dentistry
              </div>
            </div>

            {/* Mini stats */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#ebdcb8] pt-6">
              <div>
                <p className="font-display text-xl font-extrabold text-[#2d2217]">
                  22K+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#8f621a]">
                  Smiles transformed
                </p>
              </div>

              <div className="h-10 w-px bg-[#ebdcb8]" />

              <div>
                <p className="font-display text-xl font-extrabold text-[#2d2217]">
                  98%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#8f621a]">
                  Patient satisfaction
                </p>
              </div>

              <div className="h-10 w-px bg-[#ebdcb8]" />

              <div>
                <p className="font-display text-xl font-extrabold text-[#2d2217]">
                  100%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.13em] text-[#8f621a]">
                  Care focused
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;