import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  {
    id: "dr-archit-taneja",
    name: "Dr. Archit Taneja",
    designation: "MDS – Oral & Maxillofacial Surgeon",
    subtitle:
      "Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive.",
    phone: "+91 8168062414",
    email: "draktaneja@gmail.com",
    address:
      "212 Green Square Market , Hisar MDS- Oral &Maxillofacial Surgeon and Implantologist",
    experience: "16+ year of experience",
    introduction:
      "Dr. Archit Taneja is a leading Oral & Maxillofacial Surgeon who combines surgical expertise with a calm, reassuring approach. His focus is on delivering precise, painless, and effective treatments in a stress-free environment.",
    specialtiesIntro:
      "With advanced training and years of clinical experience, Dr. Archit offers a wide range of specialized dental and surgical services.",
    specialties: [
      {
        title: "Dental Implants & Full-Mouth Rehabilitation",
        description:
          "Natural-looking tooth replacements with long-term durability.",
      },
      {
        title: "Complex Oral and Maxillofacial Surgeries",
        description:
          "Precision-driven surgical solutions for complex dental concerns.",
      },
      {
        title: "Facial Trauma & Esthetic Corrections",
        description:
          "Restoring facial harmony after injuries or structural issues.",
      },
      {
        title: "Bone Grafting and Sinus Lift Procedures",
        description:
          "Strengthening the jaw for secure, lasting dental implants.",
      },
    ],
    membershipsIntro:
      "Dr. Archit is an active member of respected dental organizations, ensuring his practice meets the highest standards of care.",
    memberships: [
      "Indian Dental Association (IDA)",
      "Association of Oral and Maxillofacial Surgeons of India (AOMSI)",
      "International Congress of Oral Implantologists (ICOI)",
    ],
    skillsIntro:
      "Dr. Archit’s skills reflect a balance of advanced technology and patient-centered care.",
    skills: [
      "Surgical Precision & Microsurgery Techniques",
      "Advanced Implantology",
      "Patient-Centric Treatment Planning",
      "Sedation Dentistry for Anxiety-Free Care",
    ],
  },
  {
    id: "dr-sanchita-taneja",
    name: "Dr. Sanchita Taneja",
    designation: "MDS – Endodontist & Conservative Dentist",
    subtitle:
      "Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive.",
    phone: "+91 8168062414",
    email: "san.gulati.76@gmail.com",
    address:
      "212 Green Square Market , Hisar MDS- Endodontist & Conservative Dentist",
    experience: "16+ year of experience",
    introduction:
      "Dr. Sanchita Taneja is known for her gentle hand, patient-focused approach, and expertise in pain-free dentistry. She ensures every patient feels comfortable, informed, and confident throughout their treatment journey.",
    specialtiesIntro:
      "Her areas of expertise span both restorative and cosmetic dentistry, catering to patients of all ages.",
    specialties: [
      {
        title: "Advanced Endodontics & Pain-Free Root Canals",
        description: "Saving teeth with minimal discomfort.",
      },
      {
        title: "Cosmetic Dentistry & Smile Design",
        description: "Enhancing natural beauty with precision.",
      },
      {
        title: "Minimally Invasive Restorative Procedures",
        description: "Protecting healthy tooth structure.",
      },
      {
        title: "Pediatric-Friendly Dental Care",
        description: "Making dental visits enjoyable for children.",
      },
    ],
    membershipsIntro:
      "Dr. Sanchita’s active memberships reflect her dedication to continuous learning and professional growth.",
    memberships: [
      "Indian Dental Association (IDA)",
      "Indian Endodontic Society (IES)",
      "International Federation of Endodontic Associations (IFEA)",
    ],
    skillsIntro:
      "Her professional strengths lie in combining technical excellence with patient comfort.",
    skills: [
      "Digital Smile Designing",
      "Minimally Invasive Dentistry",
      "Pediatric Patient Comfort Management",
      "Restorative and Cosmetic Expertise",
    ],
  },
];

const MeetTheDoctor = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[90px] bg-[#faf8f4] text-[#2d2217]">
        {/* Compact Hero Header */}
        <section className="bg-gradient-to-b from-[#f7f0e3]/50 to-[#faf8f4] py-8 sm:py-10 border-b border-[#ebdcb8]/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b6118] shadow-sm">
                <Stethoscope size={14} />
                Meet The Doctors
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#2d2217]">
                Meet Our Expert Dental <span className="text-[#8b6118]">Doctors</span>
              </h1>

              <p className="mt-3 text-sm leading-6 text-black sm:text-base">
                Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive the highest standard of dental care.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Doctor Profiles Section */}
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            {doctors.map((doctor, index) => (
              <motion.article
                key={doctor.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="overflow-hidden rounded-[28px] border border-[#ebdcb8] bg-white p-5 sm:p-8 shadow-[0_10px_35px_rgba(45,34,23,0.05)]"
              >
                <div className="grid gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] lg:gap-8 items-start">
                  {/* Left Column: Blank Image Frame & Personal Info */}
                  <div className="space-y-5">
                    {/* Blank Image Container (Matching Live Site Placeholder) */}
                    <div className="relative flex h-[340px] w-full items-center justify-center rounded-[22px] border border-[#ebdcb8] bg-[#f7f0e3]/40 shadow-inner">
                      <div className="flex flex-col items-center justify-center text-center p-6 text-[#a37b38]">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ebdcb8]/40 mb-3 border border-[#ebdcb8]">
                          <User size={40} className="text-[#8b6118]" />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase text-[#8b6118]">
                          {doctor.name}
                        </span>
                        <span className="mt-1 text-xs text-black font-medium">
                          {doctor.designation}
                        </span>
                      </div>
                    </div>

                    {/* Personal Information Box */}
                    <div className="rounded-[20px] border border-[#ebdcb8]/70 bg-[#faf8f4] p-4 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8b6118] border-b border-[#ebdcb8]/50 pb-2">
                        Personal Information
                      </h3>

                      <div className="space-y-2 text-xs sm:text-sm text-black">
                        <div className="flex items-center gap-2.5">
                          <Phone size={15} className="text-[#8b6118] shrink-0" />
                          <a
                            href={`tel:${doctor.phone.replace(/\s+/g, "")}`}
                            className="font-medium hover:text-[#8b6118] transition"
                          >
                            {doctor.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Mail size={15} className="text-[#8b6118] shrink-0" />
                          <a
                            href={`mailto:${doctor.email}`}
                            className="font-medium hover:text-[#8b6118] transition break-all"
                          >
                            {doctor.email}
                          </a>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <MapPin size={15} className="text-[#8b6118] shrink-0 mt-0.5" />
                          <span className="font-medium">{doctor.address}</span>
                        </div>

                        <div className="pt-1 text-xs font-bold text-[#8b6118]">
                          {doctor.experience}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Doctor Details */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="text-2xl font-bold sm:text-3xl text-[#2d2217]">
                        {doctor.name}
                      </h2>
                      <p className="mt-1 text-sm font-bold text-[#8b6118]">
                        {doctor.designation}
                      </p>
                      <p className="mt-2 text-xs text-black leading-5">
                        {doctor.subtitle}
                      </p>
                    </div>

                    {/* Introduction */}
                    <div className="border-t border-[#ebdcb8]/40 pt-4">
                      <h3 className="text-base font-bold text-[#2d2217] mb-2">
                        Introduction
                      </h3>
                      <p className="text-sm leading-7 text-black">
                        {doctor.introduction}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="border-t border-[#ebdcb8]/40 pt-4">
                      <div className="flex items-center gap-2 text-[#8b6118] mb-1">
                        <Award size={18} />
                        <h3 className="text-base font-bold text-[#2d2217]">
                          Specialties
                        </h3>
                      </div>
                      <p className="text-xs text-black mb-3">
                        {doctor.specialtiesIntro}
                      </p>

                      <div className="space-y-2.5">
                        {doctor.specialties.map((spec, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 rounded-xl border border-[#ebdcb8]/50 bg-[#faf8f4] p-3 text-xs sm:text-sm"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-[#8b6118] shrink-0 mt-0.5"
                            />
                            <div className="text-black">
                              <span className="font-bold text-[#2d2217]">
                                {spec.title}
                              </span>{" "}
                              – <span>{spec.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Memberships */}
                    <div className="border-t border-[#ebdcb8]/40 pt-4">
                      <div className="flex items-center gap-2 text-[#8b6118] mb-1">
                        <ShieldCheck size={18} />
                        <h3 className="text-base font-bold text-[#2d2217]">
                          Memberships
                        </h3>
                      </div>
                      <p className="text-xs text-black mb-3">
                        {doctor.membershipsIntro}
                      </p>

                      <ul className="grid gap-2 sm:grid-cols-2">
                        {doctor.memberships.map((mem, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 rounded-lg bg-[#faf8f4] px-3 py-2 text-xs font-semibold text-black border border-[#ebdcb8]/40"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#8b6118] shrink-0"
                            />
                            <span>{mem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Professional Skills */}
                    <div className="border-t border-[#ebdcb8]/40 pt-4">
                      <div className="flex items-center gap-2 text-[#8b6118] mb-1">
                        <Sparkles size={18} />
                        <h3 className="text-base font-bold text-[#2d2217]">
                          Professional Skills
                        </h3>
                      </div>
                      <p className="text-xs text-black mb-3">
                        {doctor.skillsIntro}
                      </p>

                      <ul className="grid gap-2 sm:grid-cols-2">
                        {doctor.skills.map((skill, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 rounded-lg bg-[#faf8f4] px-3 py-2 text-xs font-semibold text-black border border-[#ebdcb8]/40"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#8b6118] shrink-0"
                            />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Book Appointment CTA */}
                    <div className="pt-2">
                      <Link
                        to="/appointments"
                        className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#42311d] shadow-sm"
                      >
                        Book An Appointment
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Compact CTA Section */}
        <section className="bg-[#faf8f4] px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[24px] bg-[#f7f0e3] px-5 py-8 text-center sm:px-8 border border-[#ebdcb8]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#8b6118] shadow-sm mb-3">
              <HeartHandshake size={22} />
            </div>

            <h2 className="text-2xl font-bold text-[#2d2217] sm:text-3xl">
              Ready to meet your dental care team?
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-6 text-black">
              Schedule a consultation today and experience the personalized, expert Toothistan approach for yourself.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Book an Appointment
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-[#2d2217] transition hover:border-[#42311d]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MeetTheDoctor;