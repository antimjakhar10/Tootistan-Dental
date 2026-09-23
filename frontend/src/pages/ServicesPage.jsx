import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  Brush,
  Check,
  Crown,
  Gem,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const services = [
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Comprehensive preventive, restorative, and routine dental care to keep your teeth and gums healthy for life.",
    path: "/general-dentistry",
    points: [
      "Preventive checkups & cleanings",
      "Cavity fillings & tooth repair",
      "Gum health & periodontal care",
    ],
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Enhance the aesthetic appeal of your smile with personalized cosmetic treatments tailored to your goals.",
    path: "/cosmetic-dentistry",
    points: [
      "Teeth whitening & brightening",
      "Porcelain veneers & bonding",
      "Complete smile redesign",
    ],
  },
  {
    icon: Gem,
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacement solutions engineered for comfort, stability, and aesthetics.",
    path: "/dental-implants",
    points: [
      "Single & multiple tooth replacement",
      "Full arch restorations",
      "Long-lasting & durable results",
    ],
  },
  {
    icon: Brush,
    title: "Invisalign & Orthodontics",
    description:
      "Clear, comfortable aligner treatments and traditional options to straighten teeth discreetly.",
    path: "/invisalign",
    points: [
      "Nearly invisible clear aligners",
      "Customized digital treatment plans",
      "Comfortable & removable design",
    ],
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "Friendly and gentle dental care created specifically to keep kids calm, happy, and healthy.",
    path: "/pediatric-dentistry",
    points: [
      "Kid-friendly examination rooms",
      "Early oral health guidance",
      "Preventive sealants & fluoride",
    ],
  },
  {
    icon: Crown,
    title: "Smile Makeover",
    description:
      "A comprehensive, customized combination of aesthetic and restorative procedures for a radiant smile.",
    path: "/cosmetic-dentistry",
    points: [
      "Full aesthetic evaluation",
      "Harmonized tooth shape & shade",
      "Transformational results",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#2d2217] pt-[100px]">
        {/* HERO */}
        <section className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1400px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c48f32]">
              <Sparkles size={14} />
              Our Expertise
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Comprehensive Dental Care for <span className="text-[#c48f32]">Every Smile</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black sm:text-lg">
              From everyday dental maintenance to advanced smile transformations, Toothistan offers gentle, precise, and state-of-the-art dental treatments under one roof.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex flex-col justify-between rounded-[28px] border border-[#ebdcb8] bg-[#faf8f4] p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#c48f32] hover:bg-white hover:shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#b88228] shadow-sm transition duration-300 group-hover:bg-[#2d2217] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-sm font-bold text-[#8f621a]">0{index + 1}</span>
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-[#2d2217]">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-black">{service.description}</p>

                      <div className="mt-5 space-y-2">
                        {service.points.map((pt) => (
                          <div key={pt} className="flex items-center gap-2 text-xs text-black">
                            <Check size={14} className="text-[#c48f32]" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={service.path}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#b88228] transition-all group-hover:text-[#2d2217]"
                    >
                      Explore Service
                      <ArrowRight size={16} />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#2d2217] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Find the Right Care for Your Smile</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/90">
              Schedule a consultation with our experts to discuss your oral health and smile goals.
            </p>
            <Link
              to="/appointments"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c48f32] px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#d69e3d]"
            >
              Book Appointment
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
