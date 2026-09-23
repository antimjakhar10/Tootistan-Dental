import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  CircleAlert,
  Droplets,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Volume2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  "All Concerns",
  "Pain & Emergency",
  "Teeth",
  "Gums",
  "Smile",
  "Jaw & Face",
  "Children",
];

const concerns = [
  {
    category: "Pain & Emergency",
    icon: "🦷",
    title: "My Tooth Hurts",
    description:
      "Constant pain, pain while chewing or a sudden throbbing sensation may be linked to tooth decay, infection, a cracked tooth, gum problems or wisdom teeth.",
    care:
      "Fillings, root canal treatment, infection management or treatment of the underlying cause.",
    action: "Explore Tooth Pain",
  },
  {
    category: "Teeth",
    icon: "❄️",
    title: "My Teeth Are Sensitive",
    description:
      "A sharp sensation when you have something cold, hot or sweet can be caused by enamel wear, cavities, gum recession, cracks or an old filling.",
    care:
      "Desensitising care, fluoride treatment, fillings, gum treatment or restorative care.",
    action: "Explore Sensitivity Care",
  },
  {
    category: "Pain & Emergency",
    icon: "😣",
    title: "My Face or Gums Are Swollen",
    description:
      "Facial or gum swelling, severe pain, fever, pus or a bad taste can be signs of an infection or dental abscess. Prompt dental attention is important.",
    care:
      "Infection control, drainage, root canal treatment or removal of a tooth that cannot be saved.",
    action: "Get Urgent Dental Care",
  },
  {
    category: "Gums",
    icon: "💧",
    title: "My Gums Bleed",
    description:
      "Regular bleeding while brushing, red or swollen gums, gum recession and ongoing bad breath can be signs of gum disease.",
    care:
      "Professional cleaning, deep cleaning, gum therapy and personalised oral-hygiene guidance.",
    action: "Explore Gum Care",
  },
  {
    category: "Gums",
    icon: "😌",
    title: "I Have Bad Breath",
    description:
      "Persistent bad breath can be related to plaque, gum disease, cavities, tongue deposits, dry mouth or other health conditions.",
    care:
      "Oral examination, professional cleaning, gum treatment and management of the underlying cause.",
    action: "Find the Cause",
  },
  {
    category: "Teeth",
    icon: "💔",
    title: "My Tooth Is Broken or Chipped",
    description:
      "Teeth can fracture because of an injury, biting something hard, decay, grinding or weakened old dental restorations.",
    care:
      "Bonding, veneers, crowns, root canal treatment or tooth replacement.",
    action: "Repair My Tooth",
  },
  {
    category: "Teeth",
    icon: "🟡",
    title: "I Have a Cavity or Food Gets Stuck",
    description:
      "Dark spots, visible holes or food repeatedly getting trapped between teeth may indicate decay, a damaged filling or an unhealthy contact between teeth.",
    care:
      "Tooth-coloured fillings, inlays, onlays, crowns or root canal treatment.",
    action: "Explore Tooth Restoration",
  },
  {
    category: "Teeth & Gums",
    icon: "🦷",
    title: "My Tooth Is Loose",
    description:
      "A loose adult tooth can be related to gum disease, bone loss, trauma, bite-related pressure or infection. It should be checked rather than ignored.",
    care:
      "Gum treatment, splinting, bite correction or replacement if the tooth cannot be saved.",
    action: "Get It Checked",
  },
  {
    category: "Teeth & Smile",
    icon: "✨",
    title: "I Have Missing Teeth",
    description:
      "Even one missing tooth can affect chewing, speech, appearance and the position of nearby teeth.",
    care:
      "Dental implants, bridges, removable teeth or full-arch rehabilitation.",
    action: "Explore Tooth-Replacement Options",
  },
  {
    category: "Pain & Emergency",
    icon: "🧠",
    title: "My Wisdom Tooth Is Troubling Me",
    description:
      "Pain at the back of the mouth, swollen gums, food trapping, difficulty opening your mouth or repeated infections may be related to an impacted wisdom tooth.",
    care:
      "Clinical evaluation, imaging, infection management or wisdom-tooth removal.",
    action: "Explore Wisdom-Tooth Care",
  },
  {
    category: "Smile",
    icon: "😁",
    title: "My Teeth Are Crooked or Have Gaps",
    description:
      "Crowding, spacing, protruding teeth and bite problems can affect appearance, cleaning, chewing and long-term dental health.",
    care:
      "Braces, clear aligners, cosmetic correction or multidisciplinary smile planning.",
    action: "Explore Teeth Alignment",
  },
  {
    category: "Smile",
    icon: "🟤",
    title: "My Teeth Look Yellow or Stained",
    description:
      "Teeth can become discoloured because of food and drinks, tobacco, ageing, medication, previous trauma or changes within the tooth itself.",
    care:
      "Professional cleaning, whitening, bonding, veneers or internal bleaching.",
    action: "Brighten My Smile",
  },
  {
    category: "Smile",
    icon: "😊",
    title: "I Don't Like My Smile",
    description:
      "Uneven teeth, gaps, worn edges, discolouration, excessive gum display or old restorations can affect how confident you feel about your smile.",
    care:
      "Digital smile planning, whitening, bonding, veneers, crowns, gum contouring or alignment.",
    action: "Plan My Smile",
  },
  {
    category: "Jaw & Face",
    icon: "🌙",
    title: "I Grind or Clench My Teeth",
    description:
      "Morning jaw fatigue, headaches, worn teeth, damaged restorations or facial muscle soreness can be associated with teeth grinding or clenching.",
    care:
      "Bite assessment, protective night guards, restorative care and habit management.",
    action: "Protect My Teeth",
  },
  {
    category: "Jaw & Face",
    icon: "🔊",
    title: "My Jaw Clicks, Hurts or Locks",
    description:
      "Jaw-joint problems may cause painful clicking, stiffness, facial pain, difficulty chewing or limited mouth opening.",
    care:
      "Detailed evaluation, conservative jaw care, appliances, physiotherapy guidance or surgical assessment when needed.",
    action: "Explore Jaw & TMJ Care",
  },
  {
    category: "Jaw & Face",
    icon: "👄",
    title: "I Have an Ulcer, Lump or Patch",
    description:
      "A mouth ulcer, red or white patch, unexplained lump or irritation that does not heal should be examined by a dental professional.",
    care:
      "Clinical examination, removal of irritation, medication, further investigation or biopsy when required.",
    action: "Book an Oral Examination",
  },
  {
    category: "Jaw & Face",
    icon: "💧",
    title: "My Mouth Feels Dry or Burns",
    description:
      "Dryness, a sticky mouth, altered taste, difficulty swallowing or a burning sensation can be linked to medicines, reduced saliva, systemic conditions or local oral problems.",
    care:
      "Cause-based evaluation, saliva-supportive care, preventive dental protection and medical coordination.",
    action: "Get It Evaluated",
  },
  {
    category: "Pain & Emergency",
    icon: "🚑",
    title: "I Have a Dental or Facial Injury",
    description:
      "A broken, displaced or knocked-out tooth, cuts inside the mouth or injury to the jaw and facial bones needs timely professional attention.",
    care:
      "Tooth stabilisation, fracture management, soft-tissue care and oral or maxillofacial surgery when indicated.",
    action: "Get Emergency Help",
  },
  {
    category: "Children",
    icon: "🧸",
    title: "My Child Has a Dental Problem",
    description:
      "Children can experience cavities, toothache, dental injuries, early loss of milk teeth, delayed eruption, oral habits or anxiety about visiting the dentist.",
    care:
      "At Tiny Tooth Town: Care is designed to feel gentle, playful and reassuring for children as well as parents.",
    action: "Explore Children's Dentistry",
  },
  {
    category: "Comfort Care",
    icon: "🫶",
    title: "I'm Afraid of Dental Treatment",
    description:
      "Dental fear is common, and it should never stop you from getting the care you need. We take time to listen, explain and make your visit feel more comfortable.",
    care:
      "Our approach includes: Calm communication, a considerate environment, modern technology and a comfort-first approach.",
    action: "Discover Comfortable Dentistry",
  },
];

const journey = [
  {
    number: "01",
    title: "We Listen",
    text: "Tell us what you feel, what has changed, what worries you and what result you would like.",
  },
  {
    number: "02",
    title: "We Diagnose",
    text: "A detailed dental examination and appropriate digital diagnostics help us understand the actual cause.",
  },
  {
    number: "03",
    title: "We Explain",
    text: "We explain your condition, available treatment options, expected timelines and what you can expect.",
  },
  {
    number: "04",
    title: "We Personalise",
    text: "Your treatment plan is designed around your dental needs, comfort, priorities and long-term oral health.",
  },
];

const faqs = [
  "I don't know what treatment I need. Can I still book?",
  "Will every toothache require a root canal?",
  "Do bleeding gums require treatment?",
  "Is painless jaw clicking always a problem?",
  "When should a mouth ulcer be checked?",
];

const faqAnswers = [
  "Yes. You do not need to know the treatment name before booking. Simply explain what you are experiencing and the dental team can help assess your concern.",
  "No. Toothache can have several possible causes. A professional examination helps identify the actual cause and whether a root canal or another form of care is appropriate.",
  "Bleeding gums can be a sign of gum disease and should not simply be ignored. An examination can help determine the cause and the appropriate level of care.",
  "Not necessarily. Jaw clicking can have different causes. If clicking is accompanied by pain, locking, stiffness or difficulty opening the mouth, professional assessment is appropriate.",
  "A mouth ulcer or oral patch that does not heal, keeps returning or appears unusual should be examined by a dental professional.",
];

function ConcernCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.035, 0.2),
      }}
      className="group flex h-full flex-col rounded-[1.6rem] border border-[#dce9e5] bg-white p-6 shadow-[0_8px_30px_rgba(23,59,53,0.035)] transition duration-300 hover:-translate-y-1.5 hover:border-[#ebdcb8] hover:shadow-[0_22px_55px_rgba(23,59,53,0.09)] sm:p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2d2217] text-2xl shadow-[0_10px_25px_rgba(23,59,53,0.12)] transition duration-300 group-hover:scale-105 group-hover:bg-[#42311d]">
        {item.icon}
      </div>

      <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#42311d]">
        {item.category}
      </p>

      <h3 className="mt-3 text-xl font-extrabold leading-[1.2] tracking-[-0.025em] text-[#2d2217]">
        {item.title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-black">
        {item.description}
      </p>

      <div className="my-5 h-px bg-[#e5eeeb]" />

      <p className="text-sm leading-6 text-black">
        <strong className="font-extrabold text-[#2d2217]">
          {item.category === "Children"
            ? "At Tiny Tooth Town:"
            : item.category === "Comfort Care"
            ? "Our approach includes:"
            : "Care may include:"}
        </strong>{" "}
        {item.care}
      </p>

      <a
        href="/appointments"
        className="mt-auto pt-6 text-sm font-extrabold text-[#42311d] transition hover:text-[#2d2217]"
      >
        {item.action} <span className="ml-1">→</span>
      </a>
    </motion.article>
  );
}

export default function ProblemWeTreat() {
  const [activeCategory, setActiveCategory] = useState("All Concerns");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredConcerns = useMemo(() => {
    if (activeCategory === "All Concerns") return concerns;

    return concerns.filter((item) => {
      if (activeCategory === "Teeth") {
        return (
          item.category === "Teeth" ||
          item.category === "Teeth & Gums" ||
          item.category === "Teeth & Smile"
        );
      }

      return item.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f8f3e8] text-[#2d2217]">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">
          <div className="absolute left-[-180px] top-28 h-[430px] w-[430px] rounded-full bg-[#f7f0e3] blur-3xl" />

          <div className="absolute right-[-180px] top-10 h-[460px] w-[460px] rounded-full bg-[#e8f5f1] blur-3xl" />

          <div className="relative mx-auto max-w-[1280px]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="mx-auto max-w-5xl text-center"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#42311d] shadow-sm"
              >
                <Sparkles size={14} />
                Start With Your Symptoms
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-7 text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
              >
                What Feels{" "}
                <span className="text-[#42311d]">Wrong?</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mx-auto mt-7 max-w-3xl text-base leading-8 text-black sm:text-lg"
              >
                You don't need to know the name of a dental treatment. Choose
                the problem that sounds closest to what you're experiencing and
                discover how our team may be able to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            CONCERN DIRECTORY
        ========================================================== */}
        <section
          id="concerns"
          className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <div className="mx-auto max-w-[1320px]">
            {/* Filter */}
            <div className="sticky top-[88px] z-30 mb-12">
              <div className="overflow-x-auto rounded-2xl border border-[#dce9e5] bg-[#2d2217] p-2 shadow-[0_15px_45px_rgba(23,59,53,0.12)] scrollbar-hide">
                <div className="flex min-w-max gap-1.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-xl px-4 py-3 text-xs font-extrabold transition duration-300 sm:px-5 sm:text-sm ${
                        activeCategory === category
                          ? "bg-[#e5b757] text-[#2d2217] shadow-sm"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section heading */}
            <div className="mb-12 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#42311d]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#42311d]">
                  {activeCategory}
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Find the concern that{" "}
                <span className="text-[#42311d]">sounds like you.</span>
              </h2>
            </div>

            {/* Cards */}
            <motion.div
              layout
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredConcerns.map((item, index) => (
                <ConcernCard
                  key={`${item.title}-${activeCategory}`}
                  item={item}
                  index={index}
                />
              ))}
            </motion.div>

            {filteredConcerns.length === 0 && (
              <div className="rounded-3xl border border-[#dce9e5] bg-[#f8f3e8] p-12 text-center">
                <Search className="mx-auto text-[#42311d]" size={32} />

                <h3 className="mt-4 text-xl font-extrabold">
                  Tell us what you're experiencing
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black">
                  You don't need to know the treatment name before contacting
                  the dental team.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            URGENT CARE
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#2d2217] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-[#42311d]/30 blur-3xl" />

          <div className="relative mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e5b757]/40 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e5b757]">
                  <CircleAlert size={14} />
                  Urgent Dental Care
                </div>

                <h2 className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  Need{" "}
                  <span className="text-[#e5b757]">
                    Urgent Dental Care?
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                  Some dental problems should not wait. Please contact the
                  dental team promptly if you are experiencing severe symptoms
                  or a dental injury.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Rapidly increasing facial or jaw swelling",
                    "Severe or persistent tooth pain",
                    "Swelling with fever or feeling unwell",
                    "Difficulty opening your mouth, swallowing or breathing",
                    "Uncontrolled bleeding",
                    "A knocked-out or displaced permanent tooth",
                    "A serious dental or facial injury",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/90 sm:text-base"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[#e5b757]"
                        strokeWidth={3}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-l-2 border-[#e5b757] bg-white/5 px-5 py-5 text-sm leading-7 text-white/80">
                  <strong className="text-white">Important:</strong>{" "}
                  Difficulty breathing or swallowing together with facial
                  swelling requires immediate emergency medical attention.
                  Dental abscesses need urgent dental treatment and do not
                  simply disappear on their own.
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+918168062414"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e5b757] px-6 py-4 text-sm font-extrabold text-[#2d2217] transition hover:bg-white"
                  >
                    <Stethoscope size={17} />
                    Call Toothistan
                  </a>

                  <a
                    href="https://wa.me/918168062414"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5b757]/50 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={17} />
                    WhatsApp for Urgent Assistance
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#e5b757]/35 bg-white/[0.045] p-7 sm:p-9 lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5b757] text-[#2d2217]">
                  <ShieldCheck size={25} />
                </div>

                <h3 className="mt-7 text-2xl font-extrabold text-[#e5b757] sm:text-3xl">
                  When in Doubt, Get Checked
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                  Dental pain or swelling can have different causes. A
                  professional examination helps identify what is actually
                  happening and whether treatment is needed.
                </p>

                <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
                  If you are unsure whether your concern is urgent, contact
                  our team and explain your symptoms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CARE JOURNEY
        ========================================================== */}
        <section className="bg-[#f8f3e8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#42311d]" />

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#42311d]">
                  Your Care Journey
                </span>

                <span className="h-px w-10 bg-[#42311d]" />
              </div>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                From “What Is Wrong?” to{" "}
                <span className="text-[#42311d]">
                  “What Can We Do?”
                </span>
              </h2>

              <p className="mt-5 text-base leading-7 text-black sm:text-lg">
                You don't need to arrive with a treatment name. We help you
                move from concern to clarity, step by step.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group rounded-[1.6rem] border border-[#dce9e5] bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(23,59,53,0.08)]"
                >
                  <div className="text-5xl font-extrabold tracking-[-0.05em] text-[#42311d]">
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3">
                <HelpCircle size={17} className="text-[#42311d]" />

                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#42311d]">
                  Common Questions
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-5 text-base leading-7 text-black sm:text-lg">
                Here are answers to some common questions patients have before
                choosing the right dental care.
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {faqs.map((question, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={question}
                    className={`overflow-hidden rounded-2xl border transition duration-300 ${
                      isOpen
                        ? "border-[#ebdcb8] bg-[#f8f3e8]"
                        : "border-[#dce9e5] bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                    >
                      <span className="text-base font-extrabold text-[#2d2217] sm:text-lg">
                        {question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-[#2d2217] text-white"
                            : "bg-[#f7f0e3] text-[#42311d]"
                        }`}
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#dce9e5] px-6 pb-6 pt-5 text-sm leading-7 text-black sm:px-7">
                        {faqAnswers[index]}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className="px-5 pb-12 pt-2 sm:px-8 lg:px-12 lg:pb-16">
          <div className="mx-auto max-w-[1250px]">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2d2217] px-7 py-14 text-center sm:px-12 lg:px-20 lg:py-20">
              <div className="absolute left-[-100px] top-[-120px] h-72 w-72 rounded-full bg-[#42311d]/25 blur-3xl" />

              <div className="absolute bottom-[-150px] right-[-80px] h-80 w-80 rounded-full bg-[#e5b757]/10 blur-3xl" />

              <div className="relative mx-auto max-w-4xl">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5b757] text-[#2d2217]">
                  <HeartHandshake size={25} />
                </div>

                <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  Your Problem Is Our{" "}
                  <span className="text-[#e5b757]">Starting Point.</span>
                </h2>

                <p className="mt-5 text-lg font-bold text-[#e5b757]">
                  You don't need to know the name of the treatment.
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  You only need to tell us what doesn't feel right. Our team
                  will listen, examine, explain and help you understand the
                  next step towards better oral health.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e5b757] px-7 py-4 text-sm font-extrabold text-[#2d2217] transition hover:bg-white"
                  >
                    Book Your Consultation
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="https://wa.me/918168062414"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e5b757]/50 px-7 py-4 text-sm font-extrabold text-white transition hover:bg-white/10"
                  >
                    <MessageCircle size={17} />
                    Talk to Us on WhatsApp
                  </a>
                </div>

                <div className="mt-12">
                  <p className="text-lg font-extrabold text-white">
                    Dr. Taneja's{" "}
                    <span className="text-[#e5b757]">TOOTHISTAN</span>
                  </p>

                  <p className="mt-2 text-sm italic text-white/90">
                    Smile Building Nation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}