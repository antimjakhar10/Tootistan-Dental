import { motion } from "framer-motion";
import { Film } from "lucide-react";

const ClinicTourSection = () => {
  return (
    <section
      id="clinic-tour"
      className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-12"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228] shadow-sm">
            <Film size={15} className="text-[#c48f32]" />
            Clinic Tour
          </div>

          {/* Heading */}
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2d2217] sm:text-5xl lg:text-[54px]">
            Clinic Tour <span className="text-[#c48f32]">Cinematography</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#6b5a4b] sm:text-base lg:text-lg">
            Experience the state-of-the-art facility, serene ambiance, and world-class care at Toothistan.
          </p>
        </motion.div>

        {/* Full-width Clean Video Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto w-full overflow-hidden rounded-2xl border border-[#ebdcb8] bg-black shadow-xl sm:rounded-3xl"
        >
          <img
            src="/cinematic.gif"
            alt="Clinic Tour Cinematography"
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClinicTourSection;
