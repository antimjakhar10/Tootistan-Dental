import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { ToothHealthyMascot, ToothBrushingMascot, FloatingMascotSticker } from "./DentalMascots";

const faqs = [
  {
    question: "Is dental treatment at Toothistan painless?",
    answer:
      "Our approach focuses on comfort-first dentistry. We use modern techniques, advanced equipment and gentle procedures to make your visit as comfortable and stress-free as possible.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "For most people, a routine dental check-up every six months is a good starting point. Your dentist may recommend a different schedule depending on your oral health and treatment needs.",
  },
  {
    question: "Do you provide cosmetic dental treatments?",
    answer:
      "Yes. Toothistan offers cosmetic solutions including smile makeovers, teeth whitening, aesthetic fillings and other treatments designed to enhance the appearance of your smile.",
  },
  {
    question: "Are dental implants safe?",
    answer:
      "Dental implants are a well-established treatment option for replacing missing teeth. Our dental experts evaluate your oral health and create a personalised treatment plan before recommending implants.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Our approach to pediatric dentistry is designed to make dental visits comfortable and positive for children while helping establish healthy oral-care habits from an early age.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can contact Toothistan directly through the appointment button, phone number or contact form. Our team can help you choose a suitable consultation time.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Subtle Animated Mascots */}
      <div className="pointer-events-none absolute right-8 top-12 z-0 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothHealthyMascot} sizeClassName="h-20 w-20 sm:h-24 sm:w-24" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      <div className="pointer-events-none absolute left-6 bottom-16 z-0 hidden xl:block">
        <FloatingMascotSticker MascotComponent={ToothBrushingMascot} sizeClassName="h-18 w-18 sm:h-20 sm:w-20" opacityClass="opacity-25 sm:opacity-35" />
      </div>

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#f7f0e3] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#f3e8d3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-[#f8f3e8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88228]">
              <HelpCircle size={15} />
              Frequently Asked
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight text-[#2d2217] sm:text-5xl lg:text-[52px]">
              Questions,
              <span className="block text-[#c48f32]">answered simply.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-black sm:text-base sm:leading-8">
              Everything you need to know before starting your dental journey
              with Toothistan.
            </p>

            {/* Mini Card */}
            <div className="relative mt-8 overflow-hidden rounded-[26px] bg-[#2d2217] p-6 sm:p-7 shadow-xl">
              <div className="animate-pulse-glow absolute -right-6 -top-6 text-[#e5b757]/20">
                <Sparkles size={100} />
              </div>

              <div className="relative z-10">
                <div className="animate-bounce flex h-11 w-11 items-center justify-center rounded-full bg-[#e5b757] text-[#2d2217] shadow-md">
                  <Sparkles size={19} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Still have a question?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/90">
                  Our team is happy to help you understand your treatment
                  options and guide you towards the right care.
                </p>

                <a
                  href="#contact"
                  className="btn-shine mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-bold text-[#2d2217] shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#f4ebd5]"
                >
                  Talk To Our Team
                </a>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "border-[#ebdcb8] bg-[#f8f3e8] shadow-[0_12px_35px_rgba(45,34,23,0.06)]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                          isOpen
                            ? "bg-[#2d2217] text-white"
                            : "bg-[#f4ebd5] text-[#b88228]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold leading-6 text-[#2d2217] sm:text-base">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#c48f32] text-white"
                          : "bg-slate-100 text-black"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-[#ebdcb8] px-5 pb-6 pl-[68px] pt-4 sm:px-6 sm:pb-6 sm:pl-[76px]">
                          <p className="text-sm leading-7 text-black">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;