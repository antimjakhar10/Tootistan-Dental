import { motion } from "framer-motion";
import { ToothDoctorMascot, ToothCoolMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  Award,
  CalendarDays,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    role: "Senior Dental Surgeon",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=90",
    tag: "Dental Surgery",
  },
  {
    name: "Dr. Riya Sharma",
    role: "Cosmetic & Smile Specialist",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=90",
    tag: "Smile Design",
  },
  {
    name: "Dr. Karan Malhotra",
    role: "Implant & Restorative Dentist",
    experience: "9+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=90",
    tag: "Dental Implants",
  },
  {
    name: "Dr. Ananya Kapoor",
    role: "Orthodontic Specialist",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=90",
    tag: "Orthodontics",
  },
];

const DoctorsSection = () => {
  return (
    <section
      id="doctors"
      className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-12 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute left-6 bottom-16 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothCoolMascot} sizeClassName="h-18 w-18 sm:h-20 sm:w-20" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -left-20 top-24 h-48 w-48 rounded-full bg-[#f7f0e3] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228] shadow-sm">
            <Stethoscope size={15} />
            Our Dental Experts
          </div>

          <h2 className="font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-[#2d2217] sm:text-5xl lg:text-[54px]">
            Meet the experts behind
            <span className="block text-[#c48f32]">your confident smile.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
            Experienced dental professionals combining advanced technology,
            precision, and a gentle approach to create a comfortable dental
            experience for every patient.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor, index) => (
            <motion.article
              key={doctor.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_15px_45px_rgba(45,34,23,0.07)] transition-shadow duration-500 hover:shadow-[0_24px_60px_rgba(45,34,23,0.14)]"
            >
              {/* Image */}
              <div className="relative h-[330px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2217]/75 via-transparent to-transparent opacity-70" />

                {/* Specialty Tag */}
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#b88228] backdrop-blur-md">
                  {doctor.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c48f32]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c48f32]">
                    Toothistan Expert
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#2d2217]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-black">
                  {doctor.role}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 text-xs text-black">
                    <CalendarDays size={15} className="text-[#c48f32]" />
                    Personalized Care
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Highlight */}
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-8 overflow-hidden rounded-[26px] bg-[#2d2217] px-6 py-6 sm:px-8 lg:mt-10 lg:flex lg:items-center lg:justify-between lg:px-10"
        >
          <div className="pointer-events-none absolute right-0 top-0 opacity-10">
            <Sparkles size={120} />
          </div>

          <div className="relative z-10">
            <div className="mb-2 flex items-center gap-2 text-[#e5b757]">
              <Sparkles size={16} />
              <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                Personalised Dentistry
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Your smile deserves an expert touch.
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/90">
              From routine care to complete smile transformations, our team
              focuses on treatment that feels personal, precise, and
              comfortable.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10 mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2d2217] transition-all hover:bg-[#f4ebd5] lg:mt-0"
          >
            Meet Our Team
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default DoctorsSection;