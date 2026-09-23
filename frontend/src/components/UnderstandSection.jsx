import { motion } from "framer-motion";

const UnderstandSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
            We Understand — Not Everyone Loves The Dentist
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
            <p>
              We get it — dental visits can bring hesitation, memories of discomfort, or simply the unknown. That's why we've reshaped the entire experience at Toothistan to feel reassuring from the very first step.
            </p>

            <p>
              You'll find a space that speaks of calm confidence — soothing interiors, kind faces, and genuine patience in every interaction. Our focus is simple: to help you feel cared for, listened to, and never rushed.
            </p>

            <p>
              With the perfect blend of modern expertise and mindful communication, we make even the most complex treatments feel effortless.
            </p>

            <p>
              From everyday oral care to aesthetic transformations, we walk beside you — guiding, explaining, and celebrating every small victory on your journey to better oral health. Because feeling comfortable at the dentist shouldn't be rare — at Toothistan, it's the norm.
            </p>

            <p className="font-semibold text-gray-700 pt-2">
              Toothistan — Smile Building Nation.
            </p>
          </div>
        </motion.div>

        {/* Right Column Image with Dental Implant Overlay Circle */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full max-w-[500px] h-[380px] sm:h-[450px] bg-[#b8661d]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85"
              alt="Smiling patient with healthy white teeth"
              className="w-full h-full object-cover"
            />

            {/* Floating Dental Implant Circle Overlay */}
            <div className="absolute left-[12%] bottom-[32%] z-10 flex items-center gap-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-white/90 backdrop-blur shadow-xl flex items-center justify-center p-2">
                <span className="text-2xl sm:text-3xl">🦷</span>
              </div>
              <div className="h-0.5 w-10 bg-white/80 hidden sm:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderstandSection;
