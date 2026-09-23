import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ServiceFAQ({
  title = "Frequently Asked Questions",
  subtitle = "Find clear answers to common questions about this treatment.",
  faqs = [],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="border-t border-[#ebdcb8]/40 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-[#faf8f4] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c48f32]">
            <HelpCircle size={14} />
            FAQ Section
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-[#2d2217] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm text-black/70 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#ebdcb8] bg-[#faf8f4] transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-[#2d2217] transition hover:text-[#c48f32]"
                >
                  <span className="pr-4 text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#c48f32] shadow-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#2d2217] text-white" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-[#ebdcb8]/60 bg-white px-5 py-4 text-sm leading-7 text-black/80 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
