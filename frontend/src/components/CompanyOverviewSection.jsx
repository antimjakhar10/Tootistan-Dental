import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import { ToothDoctorMascot, ToothLoveMascot, FloatingMascotSticker } from "./DentalMascots";

const CompanyOverviewSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#f7f0e3] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* =====================================================
              LEFT SIDE: Text Block + Bottom Image
          ====================================================== */}
          <div className="space-y-8">
            {/* Top Left Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                <Stethoscope size={16} className="text-[#9e6f21]" />
                <span>ABOUT OUR COMPANY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#9e6f21] leading-tight tracking-tight">
                Redefining Dentistry With Luxury & Care
              </h2>

              {/* 4 Feature Badges (2x2 Grid) */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  "Spa Ambience",
                  "Expert Team",
                  "Gentle Approach",
                  "Trusted Technology",
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="text-lg">🦷</span>
                    <span className="text-sm sm:text-base font-bold text-[#2d2217]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Left Image */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="overflow-hidden rounded-3xl shadow-lg h-[320px] sm:h-[380px] relative border-4 border-white bg-[#f4ebd5]"
            >
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85"
                alt="Patient dental checkup care"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE: Top Image + Bottom 2x2 Stats Card
          ====================================================== */}
          <div className="space-y-8 relative">
            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-3xl shadow-lg h-[320px] sm:h-[380px] relative border-4 border-white bg-[#f4ebd5]"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                alt="Smiling female dentist in clinic"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Floating mascot top right */}
              <div className="absolute -top-4 -right-4 z-20 pointer-events-none hidden sm:block">
                <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" />
              </div>
            </motion.div>

            {/* Bottom Right 2x2 Stats Card with Brown Border */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative rounded-3xl border-2 border-[#b88228] bg-white shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-2">
                {/* Stat 1: Top Left */}
                <div className="p-6 text-center border-b border-r border-[#b88228]/40">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#2d2217]">
                    10+ <span className="text-[#9e6f21]">Years</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Of premium dental expertise
                  </p>
                </div>

                {/* Stat 2: Top Right */}
                <div className="p-6 text-center border-b border-[#b88228]/40">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#2d2217]">
                    22k+ <span className="text-[#9e6f21]">Smiles</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Transformed with confidence
                  </p>
                </div>

                {/* Stat 3: Bottom Left */}
                <div className="p-6 text-center border-r border-[#b88228]/40">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#2d2217]">
                    98%
                  </p>
                  <p className="text-lg font-bold text-[#9e6f21] -mt-1">
                    Satisfaction
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Patient comfort & care rating
                  </p>
                </div>

                {/* Stat 4: Bottom Right */}
                <div className="p-6 text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#2d2217]">
                    100%
                  </p>
                  <p className="text-lg font-bold text-[#9e6f21] -mt-1">
                    Sterilized
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    Tools handled with precision
                  </p>
                </div>
              </div>

              {/* Floating mascot bottom right */}
              <div className="absolute -bottom-6 -right-6 z-20 pointer-events-none hidden sm:block">
                <FloatingMascotSticker MascotComponent={ToothLoveMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
