import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPublicGallery, getImageUrl } from "../services/api";

const defaultTransformations = [
  {
    _id: "default-1",
    title: "Dental Implants",
    description:
      "A natural-looking smile transformation with carefully planned dental implant treatment.",
    before:
      "https://toothistan.com/wp-content/uploads/2025/08/dental-implants1.png",
    after:
      "https://toothistan.com/wp-content/uploads/2025/08/dental-implants1.png",
  },
  {
    _id: "default-2",
    title: "Cosmetic Dentistry",
    description:
      "Cosmetic dental care designed to create a cleaner, brighter and more confident smile.",
    before:
      "https://toothistan.com/wp-content/uploads/2025/08/cosmetic-dentistry.png",
    after:
      "https://toothistan.com/wp-content/uploads/2025/08/cosmetic-dentistry.png",
  },
  {
    _id: "default-3",
    title: "Porcelain Veneers",
    description:
      "A refined smile transformation using cosmetic veneer treatment.",
    before:
      "https://toothistan.com/wp-content/uploads/2025/08/porcelain-veneers-a.png",
    after:
      "https://toothistan.com/wp-content/uploads/2025/08/porcelain-veneers-a.png",
  },
  {
    _id: "default-4",
    title: "Gum Care",
    description:
      "Focused dental care to improve the appearance and health of the gums.",
    before:
      "https://toothistan.com/wp-content/uploads/2025/08/gum-disease.png",
    after:
      "https://toothistan.com/wp-content/uploads/2025/08/gum-disease.png",
  },
  {
    _id: "default-5",
    title: "Full Mouth Reconstruction",
    description:
      "Comprehensive dental treatment planned around the patient's overall smile and oral health.",
    before:
      "https://toothistan.com/wp-content/uploads/2025/08/full-mouth-reconstruction-e1754477376665.png",
    after:
      "https://toothistan.com/wp-content/uploads/2025/08/full-mouth-reconstruction-e1754477376665.png",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const BeforeAfterPhotos = () => {
  const [transformations, setTransformations] = useState(defaultTransformations);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const data = await getPublicGallery();
        if (data && data.length > 0) {
          const mapped = data.map((item) => ({
            _id: item._id,
            title: item.title,
            description: item.description || `${item.category || "Treatment"} result at Toothistan.`,
            before: getImageUrl(item.beforeImage),
            after: getImageUrl(item.afterImage),
          }));
          setTransformations(mapped);
        }
      } catch (err) {
        console.warn("Using default transformations, error fetching backend gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#2d2217]">
      <Navbar />

      {/* HERO */}
      <section className="px-5 pb-8 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-[#f7f0e3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#42311d]">
              Smile Gallery
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Before & After
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black sm:text-lg">
              See how thoughtful dental care can transform smiles. Explore
              selected treatment results from Toothistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#ebdcb8] bg-white p-7 shadow-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
                Real TreatmentResults
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Honest, Careful Dentistry
              </h2>

              <p className="mt-3 text-black">
                Every smile is different. Our goal is to achieve results that
                are healthy, natural-looking, and long-lasting for each
                patient.
              </p>
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f0e3]">
              <CheckCircle2 className="h-8 w-8 text-[#42311d]" />
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#42311d]">
              Treatment Transformations
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Before & After Results
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-black">
              Browse the treatment examples below to see the difference
              personalised dental care can make.
            </p>
          </div>

          <div className="space-y-10">
            {transformations.map((item, index) => (
              <motion.article
                key={item._id || item.title + index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="overflow-hidden rounded-3xl border border-[#ebdcb8] bg-white shadow-sm"
              >
                {/* CARD HEADER */}
                <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#42311d]">
                      Treatment {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-black">
                    {item.description}
                  </p>
                </div>

                {/* IMAGES */}
                <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-2">
                  {/* BEFORE */}
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
                      <span className="text-sm font-semibold text-slate-700">
                        Before
                      </span>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.before}
                        alt={`${item.title} before treatment`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* AFTER */}
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
                      <span className="text-sm font-semibold text-[#42311d]">
                        After
                      </span>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.after}
                        alt={`${item.title} after treatment`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeforeAfterPhotos;