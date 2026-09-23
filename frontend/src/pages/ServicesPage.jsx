import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Baby,
  Brush,
  Check,
  Gem,
  Heart,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
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
    icon: Syringe,
    title: "Surgical Dentistry",
    description:
      "Advanced oral surgery and procedure services delivered with precision, safety, and utmost patient care.",
    path: "/surgical-dentistry",
    points: [
      "Wisdom teeth & extractions",
      "Bone grafting & sinus lifts",
      "Surgical extractions & care",
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
    icon: Brush,
    title: "Invisalign",
    description:
      "Clear, comfortable aligner treatments to straighten your teeth discreetly without traditional metal braces.",
    path: "/invisalign",
    points: [
      "Nearly invisible clear aligners",
      "Customized digital treatment plans",
      "Comfortable & removable design",
    ],
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description:
      "Comprehensive orthodontic solutions for properly aligned teeth and a healthy, beautifully balanced bite.",
    path: "/orthodontics",
    points: [
      "Traditional & clear braces",
      "Bite alignment & correction",
      "Custom retainers & post-care",
    ],
  },
  {
    icon: AlertCircle,
    title: "Emergency Dentistry",
    description:
      "Fast, compassionate dental care for toothaches, accidents, and sudden dental emergencies when you need it most.",
    path: "/emergency-dentistry",
    points: [
      "Urgent pain relief & treatment",
      "Trauma & broken tooth repair",
      "Fast appointment availability",
    ],
  },
  {
    icon: Heart,
    title: "Special Needs Dentistry",
    description:
      "Compassionate, tailored dental care designed to accommodate patients with physical, developmental, or sensory needs.",
    path: "/special-needs-dentistry",
    points: [
      "Specialized patient-first care",
      "Calm & supportive environment",
      "Personalized treatment plans",
    ],
  },
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
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#faf8f4] text-[#2d2217] pt-[100px]">
        {/* HERO */}
        <section className="relative px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1400px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c48f32]">
              <Sparkles size={14} />
              Our Services
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Best Dental Service <span className="text-[#c48f32]">For You</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black sm:text-lg">
              From everyday dental maintenance to advanced smile transformations, Toothistan offers gentle, precise, and state-of-the-art dental treatments under one roof.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
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
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col justify-between rounded-[28px] border border-[#ebdcb8] bg-[#faf8f4] p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#c48f32] hover:bg-white hover:shadow-xl"
                  >
                    <div>
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228] shadow-inner transition duration-300 group-hover:bg-[#2d2217] group-hover:text-white">
                        <Icon size={28} />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-[#2d2217]">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/80">{service.description}</p>

                      <div className="mt-5 space-y-2 text-left">
                        {service.points.map((pt) => (
                          <div key={pt} className="flex items-center gap-2 text-xs text-black/80">
                            <Check size={14} className="shrink-0 text-[#c48f32]" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 pt-2">
                      <Link
                        to={service.path}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#c48f32] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#2d2217] hover:shadow-lg"
                      >
                        <span>READ MORE</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
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
