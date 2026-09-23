import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ToothLoveMascot, ToothKingMascot, FloatingMascotSticker } from "./DentalMascots";
import {
  ArrowUpRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Loader2,
} from "lucide-react";
import { getPublicTestimonials, getImageUrl } from "../services/api";

const getInitials = (name) => {
  if (!name) return "TS";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const ReviewsSection = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getPublicTestimonials();
      setReviewsList(data || []);
    } catch (err) {
      console.error("Error fetching public testimonials:", err);
      setReviewsList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const featured = reviewsList.length > 0 ? reviewsList[0] : null;
  const remainingReviews = reviewsList.length > 1 ? reviewsList.slice(1) : [];

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-12 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothLoveMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute left-6 bottom-12 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothKingMascot} sizeClassName="h-18 w-18 sm:h-20 sm:w-20" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-[#f8f3e8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228]">
              <Sparkles size={15} />
              Patient Stories
            </div>

            <h2 className="font-sans text-4xl font-semibold leading-[1.08] tracking-tight text-[#2d2217] sm:text-5xl lg:text-[54px]">
              Loved by patients.
              <span className="block text-[#c48f32]">
                Trusted for every smile.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              From routine check-ups to complete smile transformations, our
              patients value the comfort, care, and attention they experience
              at Toothistan.
            </p>
          </div>
        </motion.div>

        {/* Content Area */}
        {loading ? (
          <div className="flex items-center justify-center rounded-[30px] border border-slate-100 bg-[#faf8f4] py-20 text-black">
            <Loader2 className="mr-2 h-6 w-6 animate-spin text-[#b88228]" />
            <span>Loading patient stories...</span>
          </div>
        ) : reviewsList.length === 0 ? (
          <div className="rounded-[30px] border border-dashed border-slate-300 bg-[#faf8f4] p-12 text-center text-black">
            <Star className="mx-auto h-10 w-10 text-slate-300 mb-3" />
            <h3 className="text-lg font-semibold text-[#2d2217]">No Patient Stories Yet</h3>
            <p className="mt-1 text-sm text-black">
              Testimonials added from the admin panel will automatically appear here.
            </p>
          </div>
        ) : (
          /* Main Review Layout */
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            {/* Featured Review */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[30px] bg-[#2d2217] p-7 sm:p-9 lg:p-10"
              >
                {/* Decorative Quote */}
                <div className="animate-pulse-glow pointer-events-none absolute -right-4 -top-5 text-[#c48f32]/15">
                  <Quote size={190} strokeWidth={1} />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(featured.rating || 5)].map((_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        className="text-[#c48f32]"
                      />
                    ))}

                    <span className="ml-2 text-sm font-semibold text-white">
                      {featured.rating ? `${featured.rating}.0/5` : "5.0/5"}
                    </span>
                  </div>

                  <div className="mt-9">
                    <Quote
                      size={32}
                      className="text-[#e5b757]"
                      strokeWidth={1.8}
                    />

                    <blockquote className="mt-5 text-2xl font-medium leading-[1.35] tracking-tight text-white sm:text-[28px]">
                      “{featured.review}”
                    </blockquote>
                  </div>

                  <div className="mt-auto pt-10">
                    <div className="flex items-center gap-3">
                      {featured.image ? (
                        <img
                          src={getImageUrl(featured.image)}
                          alt={featured.name}
                          className="h-12 w-12 rounded-full object-cover border border-[#e5b757]"
                        />
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e5b757] text-sm font-bold text-[#2d2217]">
                          {getInitials(featured.name)}
                        </div>
                      )}

                      <div>
                        <p className="text-sm font-semibold text-white">
                          {featured.name}
                        </p>
                        <p className="mt-0.5 text-xs text-white/90">
                          {featured.treatment || "Patient Experience"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/90">
                      <ShieldCheck size={16} className="text-[#e5b757]" />
                      Verified Patient Experience
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Review Cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {remainingReviews.map((review, index) => (
                <motion.article
                  key={review._id || review.name + index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[26px] border border-slate-200 bg-[#faf8f4] p-6 shadow-[0_12px_35px_rgba(45,34,23,0.06)] transition-all duration-400 hover:border-[#c48f32] hover:bg-white hover:shadow-[0_20px_45px_rgba(45,34,23,0.1)] sm:p-7"
                >
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4ebd5] text-[#b88228]">
                      <Quote size={19} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#b88228]"
                    />
                  </div>

                  {/* Stars */}
                  <div className="mt-5 flex gap-0.5">
                    {[...Array(review.rating || 5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={14}
                        fill="currentColor"
                        className="text-[#c48f32]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-4 text-sm leading-7 text-black line-clamp-4">
                    “{review.review}”
                  </p>

                  {/* Patient */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                    {review.image ? (
                      <img
                        src={getImageUrl(review.image)}
                        alt={review.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d2217] text-xs font-semibold text-white">
                        {getInitials(review.name)}
                      </div>
                    )}

                    <div>
                      <h3 className="text-sm font-semibold text-[#2d2217]">
                        {review.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {review.treatment || "General Care"}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid overflow-hidden rounded-[26px] border border-[#ebdcb8] bg-[#faf8f4] sm:grid-cols-3"
        >
          <div className="border-b border-[#ebdcb8] px-6 py-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold tracking-tight text-[#2d2217]">
              22K+
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-black">
              Smiles Transformed
            </p>
          </div>

          <div className="border-b border-[#ebdcb8] px-6 py-6 text-center sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold tracking-tight text-[#2d2217]">
              98%
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-black">
              Patient Satisfaction
            </p>
          </div>

          <div className="px-6 py-6 text-center">
            <p className="text-3xl font-semibold tracking-tight text-[#2d2217]">
              4.9/5
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-black">
              Patient Rating
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;