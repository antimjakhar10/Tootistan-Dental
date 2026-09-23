import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicTestimonials, getImageUrl } from "../services/api";
import { ToothDoctorMascot, ToothLoveMascot, FloatingMascotSticker } from "../components/DentalMascots";

const achievements = [
  {
    year: "2015",
    title: "Founded with Vision",
    text: "Started Toothistan with a goal to revolutionize dental care comfort and technology.",
  },
  {
    year: "2019",
    title: "Digital Precision Upgrade",
    text: "Implemented 3D intraoral scanning and digital smile design across all treatments.",
  },
  {
    year: "2023",
    title: "Excellence Award",
    text: "Recognized as Hisar's premier patient-first luxury dental care destination.",
  },
];

const About = () => {
  const [testimonialsList, setTestimonialsList] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getPublicTestimonials();
        if (Array.isArray(data)) {
          setTestimonialsList(data);
        }
      } catch (err) {
        console.error("Failed to fetch testimonials in About page:", err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-[100px] bg-[#faf8f4] text-[#2d2217]">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="pointer-events-none absolute left-6 top-10 z-20 hidden lg:block opacity-90">
            <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-24 w-24" glowColor="rgba(20, 184, 166, 0.25)" badgeText="Toothistan Expert" />
          </div>

          <div className="pointer-events-none absolute right-8 top-10 z-20 hidden lg:block opacity-90">
            <FloatingMascotSticker MascotComponent={ToothLoveMascot} sizeClassName="h-24 w-24" glowColor="rgba(244, 63, 94, 0.25)" badgeText="Care & Trust" />
          </div>

          <div className="mx-auto max-w-[1400px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#c48f32]">
              <Sparkles size={14} />
              About Toothistan
            </span>

            <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Redefining Dentistry with <span className="text-[#c48f32]">Comfort & Precision</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black sm:text-lg">
              Welcome to Toothistan — an empire beyond dentistry. We bring painless care, serene surroundings, world-class sterilization and modern digital precision together to create a dental experience that feels completely different from the moment you walk in.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="rounded-[32px] bg-[#2d2217] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5b757]">
                Our Vision Beyond Dentistry
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Unconventional. <span className="text-[#e5b757]">Unapologetically Bold.</span>
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "The Birth of an Idea",
                    text: "Toothistan was imagined as more than a clinic — an idea born out of courage to make dentistry calm, comforting, and beautifully human.",
                  },
                  {
                    title: "The Road Less Taken",
                    text: "Blending world-class digital precision with serene luxury and heartfelt empathy for every patient.",
                  },
                  {
                    title: "A New Way to Smile",
                    text: "Here, anxiety fades, trust deepens, and smiles are not just treated — they are nurtured and protected.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="text-sm font-bold text-[#e5b757]">0{idx + 1}</span>
                    <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/85">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-[#faf8f4] py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c48f32]">
                Our Journey
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Key <span className="text-[#c48f32]">Achievements</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {achievements.map((item) => (
                <div key={item.year} className="rounded-[26px] border border-[#ebdcb8] bg-white p-7 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold text-[#2d2217]">{item.year}</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4ebd5] text-[#b88228]">
                      <Award size={22} />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#2d2217]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-black">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c48f32]">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                What Our Patients <span className="text-[#c48f32]">Say</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonialsList.length === 0 ? (
                <div className="col-span-2 text-center text-sm text-black py-8">
                  No patient testimonials available at the moment.
                </div>
              ) : (
                testimonialsList.map((item, index) => (
                  <div key={item._id || index} className="rounded-[26px] border border-[#ebdcb8] bg-[#faf8f4] p-7">
                    <div className="text-4xl leading-none text-[#e5b757]">“</div>
                    <p className="mt-3 leading-8 text-black">{item.review || item.text}</p>
                    <div className="mt-6 flex items-center gap-3">
                      {item.image ? (
                        <img src={getImageUrl(item.image)} alt={item.name} className="h-11 w-11 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4ebd5] text-sm font-bold text-[#2d2217]">
                          {item.name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-[#2d2217]">{item.name}</h3>
                        <p className="text-xs text-black">{item.role || "Patient"}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#faf8f4] px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1200px] rounded-[30px] bg-[#2d2217] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#e5b757]">
              <Sparkles size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
              Redefining Dental Care with Heart & Precision.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90">
              Experience advanced dental care that blends expertise, comfort, and trust.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#c48f32] px-7 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#d69e3d]"
              >
                Make An Appointment
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
