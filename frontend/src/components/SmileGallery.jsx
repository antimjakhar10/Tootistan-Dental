import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToothFairyMascot, ToothCoolMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowUpRight,
  Sparkles,
  Star,
} from "lucide-react";
import { getPublicGallery, getImageUrl } from "../services/api";

const defaultGalleryItems = [
  {
    title: "Smile Makeover",
    category: "Cosmetic Dentistry",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Dental Care",
    category: "General Dentistry",
    image:
      "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Modern Treatment",
    category: "Advanced Dentistry",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=90",
  },
  {
    title: "Precision Dentistry",
    category: "Dental Implants",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Confident Smiles",
    category: "Smile Design",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1000&q=90",
  },
];

const SmileGallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getPublicGallery();
        if (data && data.length > 0) {
          const mapped = data.map((item) => ({
            _id: item._id,
            title: item.title,
            category: item.category || "Dental Transformation",
            image: item.afterImage ? getImageUrl(item.afterImage) : item.beforeImage ? getImageUrl(item.beforeImage) : "",
          }));
          setItems(mapped);
        } else {
          setItems(defaultGalleryItems);
        }
      } catch (err) {
        console.warn("Using default gallery items, error fetching backend:", err);
        setItems(defaultGalleryItems);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const galleryItems = items.length > 0 ? items : defaultGalleryItems;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#faf8f4] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute left-6 top-10 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothFairyMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute right-8 bottom-16 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothCoolMascot} sizeClassName="h-18 w-18 sm:h-20 sm:w-20" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228] shadow-sm">
              <Sparkles size={15} />
              Smile Gallery
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#2d2217] sm:text-5xl lg:text-[54px]">
              See the difference
              <span className="block text-[#c48f32]">
                thoughtful dentistry makes.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black sm:text-base sm:leading-8">
            Explore our approach to modern dentistry — where precision,
            aesthetics and patient comfort come together.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[250px_250px]">
          {/* Large Main Image */}
          {galleryItems[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[30px] lg:col-span-7 lg:row-span-2 lg:min-h-0"
            >
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#2d2217]/85 via-[#2d2217]/15 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#e5b757]">
                    {galleryItems[0].category}
                  </p>

                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    {galleryItems[0].title}
                  </h3>
                </div>

                <button
                  type="button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#2d2217] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#c48f32] group-hover:text-white"
                  aria-label={`View ${galleryItems[0].title}`}
                >
                  <ArrowUpRight size={21} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Small Card 1 */}
          {galleryItems[1] && (
            <GalleryCard item={galleryItems[1]} className="lg:col-span-5" />
          )}

          {/* Small Card 2 */}
          {galleryItems[2] && (
            <GalleryCard item={galleryItems[2]} className="lg:col-span-5" />
          )}
        </div>

        {/* Bottom Cards */}
        {galleryItems.length > 3 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {galleryItems[3] && <GalleryCard item={galleryItems[3]} />}
            {galleryItems[4] && <GalleryCard item={galleryItems[4]} />}
          </div>
        )}

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex flex-col gap-5 rounded-[26px] border border-[#ebdcb8] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(45,34,23,0.05)] sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
              <Star size={20} fill="currentColor" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#2d2217]">
                Dentistry designed around you
              </p>
              <p className="mt-1 text-xs text-black">
                Comfortable care. Modern technology. Beautiful results.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-shine inline-flex w-fit items-center gap-2 rounded-full bg-[#2d2217] px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#42311d]"
          >
            Start Your Smile Journey
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* Reusable Gallery Card */
const GalleryCard = ({ item, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group relative h-[250px] overflow-hidden rounded-[28px] ${className}`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#2d2217]/85 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#e5b757]">
            {item.category}
          </p>

          <h3 className="text-xl font-semibold text-white">
            {item.title}
          </h3>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#2d2217] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#c48f32] group-hover:text-white">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default SmileGallery;