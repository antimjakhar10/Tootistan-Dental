import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Baby,
  Bandage,
  Bone,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Droplets,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  Syringe,
  Smile,
  TriangleAlert,
  UserRound,
  X,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const treatments = [
  {
    id: "filling",
    number: "01",
    category: "Teeth",
    title: "After a Dental Filling",
   icon: Smile,
    intro:
      "A little sensitivity after a filling can occur. Protect the treated tooth while it settles and keep the area clean.",
    today: [
      "Wait until the numbness has completely worn off before chewing.",
      "Begin with comfortable foods and chew carefully.",
      "Short-term sensitivity to temperature or pressure can occur.",
    ],
    home: [
      "Brush twice daily with fluoride toothpaste.",
      "Clean between your teeth normally.",
      "Avoid repeatedly testing the new filling with very hard foods.",
    ],
    contact: [
      "The bite feels too high or the tooth touches first.",
      "Pain becomes strong, spontaneous or progressively worse.",
      "Sensitivity does not gradually improve.",
      "The filling chips, cracks or comes out.",
    ],
  },

  {
    id: "root-canal",
    number: "02",
    category: "Teeth",
    title: "After Root Canal Treatment",
    icon: Syringe,
    intro:
      "Some tenderness around a treated tooth can occur for a few days. The most important step is protecting the tooth until its final restoration is completed.",
    today: [
      "Mild tenderness when biting may occur.",
      "The treated tooth can temporarily feel slightly different.",
      "Keep following the treatment instructions provided by your dentist.",
    ],
    home: [
      "Avoid hard or sticky foods on the treated tooth until the final restoration is placed.",
      "Brush and floss normally while being gentle around the area.",
      "Avoid heavy biting if a temporary filling is present.",
      "Attend the planned crown or final-restoration appointment.",
    ],
    contact: [
      "Pain or swelling becomes severe or increases.",
      "Your bite suddenly feels high.",
      "The temporary filling comes out.",
      "The temporary crown or tooth breaks.",
      "Your original symptoms return.",
    ],
  },

  {
    id: "crown-bridge",
    number: "03",
    category: "Teeth",
    title: "After a Crown, Bridge, Inlay or Veneer",
    icon: Sparkles,
    intro:
      "New restorations may need a short adjustment period. Extra care is especially important when a temporary restoration is being worn.",
    today: [
      "Avoid hard, crunchy and sticky foods around a temporary restoration.",
      "Brush gently around the treated area.",
      "Clean between teeth carefully.",
    ],
    home: [
      "For temporary work, slide floss out from the side instead of pulling it upward.",
      "If a temporary restoration comes off, keep it safe and contact Toothistan.",
      "After final placement, brush twice daily and clean between teeth.",
      "Avoid biting ice, pens and other very hard objects.",
    ],
    contact: [
      "Your bite feels uneven.",
      "The restoration feels loose.",
      "Food repeatedly gets trapped.",
      "Gum pain or swelling continues.",
      "Sensitivity keeps increasing.",
    ],
  },

  {
    id: "scaling",
    number: "04",
    category: "Gums",
    title: "After Scaling, Polishing or Deep Cleaning",
    icon: Droplets,
    intro:
      "After professional gum cleaning, your gums may feel tender and teeth can temporarily become more sensitive.",
    today: [
      "Use a soft toothbrush and brush gently but thoroughly.",
      "Continue cleaning between your teeth using the technique shown by your dental team.",
      "If sensitive, avoid very hot, cold, spicy or acidic foods for the rest of the day.",
    ],
    home: [
      "Use desensitising products only when advised.",
      "If local anaesthesia was used, wait until normal feeling returns before eating.",
      "Continue your daily oral-hygiene routine.",
      "Keep your recommended dental reviews.",
    ],
    contact: [
      "Bleeding is heavy or does not settle.",
      "Pain or swelling increases.",
      "Sensitivity becomes difficult to manage.",
    ],
  },

  {
    id: "whitening",
    number: "05",
    category: "Teeth",
    title: "After Teeth Whitening",
    icon: Sparkles,
    intro:
      "Whitening can temporarily make teeth sensitive. The first day or two is particularly important for protecting your newly brightened smile.",
    today: [
      "Limit strongly coloured foods and drinks for the first 24–48 hours.",
      "Avoid tobacco and paan.",
      "If sensitive, avoid very hot, cold or acidic foods and drinks.",
    ],
    home: [
      "Use the sensitivity toothpaste or gel recommended by your dentist.",
      "Never use additional whitening gel or extend tray time beyond instructions.",
      "Brush twice daily and clean between teeth.",
      "Rinse with water after drinks that may stain teeth.",
    ],
    contact: [
      "You develop strong or persistent pain.",
      "Gum irritation becomes significant.",
      "You are unsure about whitening gel quantity or tray duration.",
    ],
  },

  {
    id: "extraction",
    number: "06",
    category: "Surgery",
    title: "After a Simple Tooth Extraction",
    icon: Bandage,
    intro:
      "The first day is mainly about protecting the blood clot and allowing the extraction area to begin healing.",
    today: [
      "Keep firm pressure on the gauze for the time advised by your dentist.",
      "Avoid repeatedly checking the socket.",
      "Do not forcefully rinse, repeatedly spit, use a straw or touch the socket.",
      "Choose cool or lukewarm soft foods.",
      "Avoid smoking, tobacco, alcohol and vigorous exercise.",
      "Rest with your head slightly elevated.",
    ],
    home: [
      "From the following day, brush the other teeth normally.",
      "Clean carefully around the extraction area.",
      "Use gentle warm salt-water rinses only if advised.",
      "Gradually return to your usual diet as comfort improves.",
    ],
    contact: [
      "Pain suddenly becomes worse after initially improving.",
      "Heavy bleeding continues.",
      "Swelling keeps increasing.",
      "Fever, pus or difficulty swallowing develops.",
    ],
  },

  {
    id: "wisdom",
    number: "07",
    category: "Surgery",
    title: "After Wisdom Tooth or Surgical Removal",
    icon: Zap,
    intro:
      "Surgical tooth removal can cause swelling, bruising and temporary jaw stiffness. These can be part of normal early healing.",
    today: [
      "Swelling may become more noticeable during the first few days.",
      "Jaw opening can temporarily become difficult.",
      "Do not pull or play with stitches.",
    ],
    home: [
      "Use a cold pack on the outside of the face when advised.",
      "Rest with your head elevated.",
      "Choose nourishing soft foods.",
      "Drink enough water without using a straw.",
      "Avoid strenuous exercise until cleared by your surgeon.",
    ],
    contact: [
      "Pain becomes much worse after initially improving.",
      "Persistent foul taste or smell develops.",
      "Bleeding does not stop with pressure.",
      "Swelling increases rapidly.",
      "Fever, breathing difficulty or swallowing difficulty occurs.",
      "Numbness continues beyond the period explained by your surgeon.",
    ],
  },

  {
    id: "implant",
    number: "08",
    category: "Implants",
    title: "After Dental Implant Surgery",
    icon: ShieldCheck,
    intro:
      "Implants need protection while the surgical area heals. Avoid disturbing the site and follow the individual instructions given by your implant team.",
    today: [
      "Do not forcefully rinse, repeatedly spit, use a straw or disturb the surgical area.",
      "Choose cool or lukewarm soft foods.",
      "Avoid alcohol, smoking, tobacco and vigorous exercise.",
      "Use a cold pack and elevate your head if advised.",
    ],
    home: [
      "Continue cleaning the rest of your mouth.",
      "Do not brush directly over the surgical site until instructed.",
      "Use prescribed mouthwash exactly as directed.",
      "Do not repeatedly pull the cheek or lip to inspect stitches.",
      "Do not wear a removable denture over the implant unless approved.",
    ],
    contact: [
      "The implant, healing cap or temporary tooth feels loose.",
      "Pain or swelling increases.",
      "Bleeding remains active.",
      "Fever, pus or a persistent unpleasant taste develops.",
    ],
  },

  {
    id: "immediate-load",
    number: "09",
    category: "Implants",
    title: "After Immediate-Load Implants",
    icon: ShieldCheck,
    intro:
      "Even when temporary teeth are placed immediately, the implants underneath still need time to heal. Protecting them from excessive force is essential.",
    today: [
      "Follow the soft-food period prescribed by your implantologist.",
      "Do not bite hard foods directly with temporary teeth.",
      "Cut food into smaller pieces and chew slowly.",
      "Do not test the temporary bridge by clenching or biting hard foods.",
    ],
    home: [
      "Clean only in the way demonstrated by your dental team during early healing.",
      "Once cleared, clean around and beneath the bridge every day.",
      "Use the cleaning aids recommended for your case.",
      "Wear your night guard exactly as instructed.",
    ],
    contact: [
      "The temporary bridge becomes loose, cracks or changes position.",
      "Your bite suddenly feels different.",
      "The implant area becomes painful, swollen or starts discharging.",
    ],
  },

  {
    id: "bone-graft",
    number: "10",
    category: "Implants",
    title: "After Bone Grafting",
    icon: Bone,
    intro:
      "A grafted area needs to remain undisturbed while the new bone-supporting material heals.",
    today: [
      "Do not touch, press or repeatedly inspect the graft.",
      "Do not pull the lip or cheek to look at stitches.",
      "Avoid chewing on the grafted side.",
      "Follow the soft-food instructions provided.",
      "Do not brush directly over the graft until instructed.",
    ],
    home: [
      "Do not wear a removable appliance over the graft unless approved.",
      "Avoid smoking and tobacco because they can interfere with healing.",
      "Some swelling, bruising or tenderness may occur.",
      "Do not disturb small graft particles if they are noticed.",
    ],
    contact: [
      "The wound opens.",
      "A large amount of graft material appears to be lost.",
      "Pain or swelling increases.",
      "Bleeding does not settle.",
      "Fever, pus or persistent foul taste develops.",
    ],
  },

  {
    id: "sinus-lift",
    number: "11",
    category: "Implants",
    title: "After a Sinus Lift",
    icon: HeartPulse,
    intro:
      "After sinus-related implant surgery, special precautions are needed to reduce pressure around the healing sinus area.",
    today: [
      "Follow your implant and bone-graft instructions.",
      "Avoid creating strong pressure inside the sinus.",
      "Do not use a straw or create suction.",
      "Avoid smoking and tobacco.",
    ],
    home: [
      "Do not blow your nose for the period specified by your surgeon.",
      "If you need to sneeze, keep your mouth open.",
      "Take prescribed medicines exactly as instructed.",
      "Ask your surgeon before flying, diving or other major pressure-change activities.",
    ],
    contact: [
      "Air or liquid seems to pass between your mouth and nose.",
      "Persistent nosebleeding occurs.",
      "Graft particles repeatedly appear through the nose.",
      "Sinus pain, swelling or discharge increases.",
      "Fever or feeling unwell develops.",
    ],
  },

  {
    id: "gum-surgery",
    number: "12",
    category: "Gums",
    title: "After Gum Surgery or Gum Graft",
    icon: HeartPulse,
    intro:
      "The treated gum area needs to remain protected while the tissue heals.",
    today: [
      "Do not brush, floss, press or pull the treated area until instructed.",
      "Do not lift the lip or cheek to inspect the graft.",
      "Leave any protective dressing undisturbed.",
      "Choose soft, cool or lukewarm foods.",
    ],
    home: [
      "Chew on the opposite side.",
      "Avoid sharp, crunchy, spicy and very hot foods.",
      "Avoid smoking, tobacco, alcohol and strenuous exercise during early healing.",
      "Continue cleaning untreated areas carefully.",
      "Use prescribed mouthwash exactly as instructed.",
    ],
    contact: [
      "Bleeding does not settle with gentle pressure.",
      "The dressing or graft appears displaced.",
      "Pain or swelling gets worse.",
      "Fever, pus or foul taste develops.",
    ],
  },

  {
    id: "biopsy",
    number: "13",
    category: "Surgery",
    title: "After an Oral Biopsy",
    icon: CircleHelp,
    intro:
      "After a biopsy, protecting the small surgical area and attending your result appointment are both important.",
    today: [
      "Avoid forceful rinsing and repeated spitting.",
      "Avoid hot food and drinks while numb.",
      "Choose soft foods.",
      "Avoid chewing directly on the biopsy site.",
      "Avoid smoking, alcohol and strenuous activity.",
    ],
    home: [
      "From the next day, brush gently.",
      "Use gentle salt-water rinses if advised.",
      "Do not pull at stitches.",
      "Allow dissolving stitches to loosen naturally.",
      "Attend your biopsy-result appointment even if the area feels normal.",
    ],
    contact: [
      "The wound opens.",
      "Pain, swelling or bleeding increases.",
      "Fever, pus or difficulty swallowing develops.",
    ],
  },

  {
    id: "dentures",
    number: "14",
    category: "Teeth",
    title: "After Receiving New Dentures",
    icon: UserRound,
    intro:
      "New dentures can initially feel unusual. Your mouth needs time to adapt to speaking, eating and wearing them.",
    today: [
      "Start with soft foods cut into small pieces.",
      "Chew slowly using both sides of your mouth.",
      "Reading aloud can help your speech adapt.",
      "Do not adjust or file the denture yourself.",
    ],
    home: [
      "Remove and rinse dentures after meals when possible.",
      "Clean them using a denture brush or soft toothbrush.",
      "Use an appropriate non-abrasive cleanser.",
      "Clean your gums, tongue and remaining natural teeth every day.",
      "Remove dentures at night unless your dentist advises otherwise.",
      "Store acrylic dentures appropriately when they are out of your mouth.",
    ],
    contact: [
      "You develop a persistent sore spot.",
      "The denture feels loose or painful.",
      "The denture cracks or breaks.",
      "Persistent redness, burning or ulceration appears.",
    ],
  },

  {
    id: "braces",
    number: "15",
    category: "Orthodontics",
    title: "Living With Braces",
    icon: Sparkles,
    intro:
      "Some tenderness is common after braces are placed or adjusted. Good cleaning and food choices help protect your teeth and appliance.",
    today: [
      "Choose softer foods while your mouth adjusts.",
      "Use orthodontic wax if a bracket or wire rubs your cheek.",
    ],
    home: [
      "Avoid hard, sticky and chewy foods.",
      "Cut firm foods into smaller pieces.",
      "Do not chew ice, pens or fingernails.",
      "Brush carefully after meals and before bed.",
      "Clean between teeth and around the wire every day.",
      "Wear elastics exactly as prescribed.",
      "Keep orthodontic and professional-cleaning appointments.",
    ],
    contact: [
      "A wire remains sharp and cannot be safely covered.",
      "A bracket, band or appliance becomes loose.",
      "An appliance is lost or broken.",
      "Unusual swelling, severe pain or dental trauma occurs.",
    ],
  },

  {
    id: "aligners",
    number: "16",
    category: "Orthodontics",
    title: "Living With Clear Aligners",
    icon: Sparkles,
    intro:
      "Clear aligners work best when they are worn and maintained exactly as instructed by your orthodontic team.",
    today: [
      "Wear your aligners for the prescribed number of hours.",
      "Remove them for food and drinks other than plain water.",
      "Clean your teeth before putting them back whenever possible.",
    ],
    home: [
      "Clean aligners using cool or lukewarm water.",
      "Never use hot water because trays can become distorted.",
      "Keep aligners in their case when not being worn.",
      "Change to the next aligner only on the instructed date.",
      "Keep previous trays until your orthodontist says they are no longer needed.",
      "Use seating aids only as demonstrated.",
    ],
    contact: [
      "An aligner is lost, cracked or distorted.",
      "The aligner no longer seats properly.",
      "An attachment comes off.",
      "Pain is severe or localised rather than normal mild pressure.",
    ],
  },

  {
    id: "children",
    number: "17",
    category: "Children",
    title: "After Your Child's Dental Treatment",
    icon: Baby,
    intro:
      "Children need extra supervision after dental treatment, especially while their mouth remains numb.",
    today: [
      "Watch your child until normal sensation returns.",
      "Prevent biting or sucking the lip, cheek or tongue.",
      "Avoid hot food and drinks.",
      "Offer cool, soft food when appropriate.",
    ],
    home: [
      "Mild tenderness can occur after treatment.",
      "Avoid sticky sweets and very hard foods around new restorations.",
      "Continue age-appropriate brushing twice daily with fluoride toothpaste.",
      "After extraction, avoid rinsing, spitting, straws and touching the socket on the treatment day.",
      "Keep physical activity gentle after an extraction.",
    ],
    contact: [
      "Increasing pain, swelling or fever develops.",
      "Bleeding does not settle.",
      "Your child badly bites the lip or cheek.",
      "Your child seems unusually sleepy or unwell.",
    ],
  },

  {
    id: "sedation",
    number: "18",
    category: "Sedation",
    title: "After IV Conscious Sedation",
    icon: Clock3,
    intro:
      "Sedation can affect coordination, judgement and alertness after you leave the clinic. Follow the recovery instructions carefully.",
    today: [
      "Go home with a responsible adult.",
      "Remain under adult supervision for the following 24 hours.",
      "Rest for the remainder of the day.",
      "Drink water and eat a light meal when ready, unless instructed otherwise.",
    ],
    home: [
      "Do not drive or ride a bicycle for 24 hours.",
      "Do not operate machinery.",
      "Do not return to work or perform strenuous exercise.",
      "Avoid alcohol and non-prescribed sedatives.",
      "Do not cook or use dangerous appliances.",
      "Avoid climbing heights.",
      "Do not make important decisions or sign legal documents.",
      "Do not care for a child or dependent person alone.",
      "Take medicines only as directed.",
    ],
    contact: [
      "Breathing becomes difficult.",
      "The patient cannot be awakened normally.",
      "Repeated vomiting occurs.",
      "You are concerned about the patient's recovery.",
    ],
  },
];

const filters = [
  { id: "all", label: "All Treatments" },
  { id: "General", label: "General" },
  { id: "Teeth", label: "Teeth" },
  { id: "Surgery", label: "Surgery" },
  { id: "Implants", label: "Implants" },
  { id: "Gums", label: "Gums" },
  { id: "Orthodontics", label: "Orthodontics" },
  { id: "Children", label: "Children" },
  { id: "Sedation", label: "Sedation" },
];

function TreatmentCard({ treatment, index, open, setOpen }) {
  const Icon = treatment.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.2) }}
      className={`overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
        open
          ? "border-[#e5b757] shadow-[0_25px_60px_rgba(23,59,53,0.10)]"
          : "border-slate-200 hover:border-[#ebdcb8] hover:shadow-[0_15px_40px_rgba(23,59,53,0.06)]"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(open ? null : treatment.id)}
        className="flex w-full items-center gap-5 px-5 py-6 text-left sm:px-7"
      >
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
          <Icon size={24} />

          <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2d2217] text-[9px] font-bold text-white">
            {treatment.number}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#42311d]">
            {treatment.category}
          </p>

          <h3 className="mt-1 text-base font-extrabold text-[#2d2217] sm:text-lg">
            {treatment.title}
          </h3>
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
            open
              ? "rotate-180 bg-[#2d2217] text-white"
              : "bg-slate-100 text-[#2d2217]"
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="border-t border-slate-100 px-5 pb-7 pt-6 sm:px-7">
              <p className="text-sm leading-7 text-black">
                {treatment.intro}
              </p>

              <div className="mt-7 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl bg-[#faf8f4] p-5">
                  <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#2d2217]">
                    <Clock3 size={17} className="text-[#42311d]" />
                    During Early Recovery
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {treatment.today.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-black"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#42311d]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#faf8f4] p-5">
                  <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#2d2217]">
                    <ShieldCheck size={17} className="text-[#42311d]" />
                    At Home
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {treatment.home.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-black"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-[#42311d]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#f4ebd5] bg-[#faf8f4] p-5">
                <h4 className="flex items-center gap-2 text-sm font-extrabold text-[#8f621a]">
                  <TriangleAlert size={17} />
                  Contact Toothistan
                </h4>

                <ul className="mt-4 space-y-2.5">
                  {treatment.contact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-black"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b88228]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function HomeInstructions() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [openTreatment, setOpenTreatment] = useState(null);

  const filteredTreatments = useMemo(() => {
    let result = treatments;

    if (activeFilter !== "all") {
      result = result.filter(
        (treatment) => treatment.category === activeFilter
      );
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (treatment) =>
          treatment.title.toLowerCase().includes(query) ||
          treatment.intro.toLowerCase().includes(query) ||
          treatment.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeFilter, search]);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#faf8f4] text-[#2d2217]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative pt-[125px] lg:pt-[150px]">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#f4ebd5] blur-3xl" />

          <div className="relative mx-auto max-w-[1380px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-24">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.75fr]">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-[#42311d] shadow-sm">
                  <HeartPulse size={15} />
                  Toothistan After-Care
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                  Your Treatment Is Complete.
                  <span className="mt-2 block text-[#42311d]">
                    Let Healing Begin.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-8 text-black sm:text-lg">
                  Every smile heals in its own way. Find the treatment you
                  received below for practical after-care guidance for your
                  teeth, gums and mouth.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#treatments"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2d2217] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#42311d]"
                  >
                    Find My Treatment
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="tel:+918168062414"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#2d2217]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#2d2217] transition hover:bg-[#f7f0e3]"
                  >
                    Call Toothistan
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="relative rounded-[42px] bg-[#2d2217] p-6 shadow-[0_35px_80px_rgba(23,59,53,0.20)]">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#c48f32]/40" />
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-white/10" />

                  <div className="relative rounded-[32px] border border-white/10 bg-white/[0.05] p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c48f32]/15 text-[#c48f32]">
                        <ShieldCheck size={27} />
                      </div>

                      <span className="rounded-full bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-white/85">
                        RECOVERY GUIDE
                      </span>
                    </div>

                    <h2 className="mt-12 text-3xl font-extrabold leading-tight text-white">
                      Care at home,
                      <span className="block text-[#c48f32]">
                        made simpler.
                      </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/90">
                      Find your procedure, review the key precautions and know
                      when it is time to contact the dental team.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <Clock3 size={19} className="text-[#c48f32]" />
                        <p className="mt-3 text-xs font-bold text-white/85">
                          Recovery
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-4">
                        <CircleHelp size={19} className="text-[#c48f32]" />
                        <p className="mt-3 text-xs font-bold text-white/85">
                          Guidance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT NOTICE
        ====================================================== */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <div className="rounded-[28px] border border-[#ebdcb8] bg-[#f4faf8] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2d2217] text-white">
                  <AlertCircle size={22} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#2d2217]">
                    Before You Begin
                  </p>

                  <p className="mt-2 text-sm leading-7 text-black">
                    These instructions are general after-care guidance. Any
                    personalised instructions provided by your Toothistan
                    dentist based on your procedure, medicines and medical
                    history should always take priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BASICS
        ====================================================== */}
        <section className="bg-white pb-10 lg:pb-14">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Important After-Care Basics
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                A Few Things To Remember
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {/* Numbness */}
              <div className="rounded-[28px] border border-slate-200 bg-[#faf8f4] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#42311d] shadow-sm">
                  <Syringe size={22} />
                </div>

                <p className="mt-6 text-xs font-bold text-[#b88228]">01</p>

                <h3 className="mt-2 text-xl font-extrabold">
                  While Your Mouth Is Numb
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-black">
                  <li>Wait for normal sensation before chewing.</li>
                  <li>Avoid very hot food and drinks while numb.</li>
                  <li>Be careful not to bite your lip, cheek or tongue.</li>
                  <li>Keep children closely supervised while numb.</li>
                </ul>
              </div>

              {/* Medicines */}
              <div className="rounded-[28px] border border-slate-200 bg-[#faf8f4] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#42311d] shadow-sm">
                  <HeartPulse size={22} />
                </div>

                <p className="mt-6 text-xs font-bold text-[#b88228]">02</p>

                <h3 className="mt-2 text-xl font-extrabold">Medicines</h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-black">
                  <li>Take medicines only as advised or prescribed.</li>
                  <li>Follow the instructed dose and timing.</li>
                  <li>Never take more than the recommended amount.</li>
                  <li>Use antibiotics exactly as prescribed.</li>
                  <li>Do not start or stop antibiotics without advice.</li>
                </ul>
              </div>

              {/* Urgent */}
              <div className="rounded-[28px] border border-[#f4ebd5] bg-[#faf8f4] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#b88228] shadow-sm">
                  <TriangleAlert size={22} />
                </div>

                <p className="mt-6 text-xs font-bold text-[#b88228]">03</p>

                <h3 className="mt-2 text-xl font-extrabold">
                  When To Contact Toothistan
                </h3>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-black">
                  <li>Heavy bleeding continues despite firm pressure.</li>
                  <li>Swelling is rapidly increasing.</li>
                  <li>Breathing or swallowing becomes difficult.</li>
                  <li>Severe pain is getting worse.</li>
                  <li>Fever, pus or foul taste develops.</li>
                  <li>Numbness lasts much longer than expected.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EMERGENCY
        ====================================================== */}
        <section className="bg-[#2d2217] py-16 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c48f32]/15 text-[#c48f32]">
                  <Zap size={25} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebdcb8]">
                    Urgent Or Emergency Symptoms?
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Do not wait when symptoms are serious.
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
                    Severe facial swelling, difficulty breathing or swallowing,
                    uncontrolled bleeding or another medical emergency needs
                    immediate attention rather than a routine appointment.
                  </p>
                </div>
              </div>

              <a
                href="tel:+918168062414"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c48f32] px-7 py-4 text-sm font-bold text-[#2d2217] transition hover:bg-white"
              >
                Call Toothistan
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            FIND TREATMENT
        ====================================================== */}
        <section id="treatments" className="bg-[#faf8f4] py-16 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Personalised Recovery Starts Here
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Find My
                <span className="text-[#42311d]"> Treatment</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                Search for your procedure or choose a treatment category to
                open the relevant after-care guidance.
              </p>
            </div>

            {/* Search */}
            <div className="relative mx-auto mt-9 max-w-2xl">
              <Search
                size={19}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#42311d]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your treatment..."
                className="h-15 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-12 text-sm outline-none transition focus:border-[#42311d] focus:ring-4 focus:ring-[#42311d]/10"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="mt-7 flex gap-3 overflow-x-auto pb-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
                    activeFilter === filter.id
                      ? "bg-[#2d2217] text-white shadow-lg"
                      : "bg-white text-[#2d2217] shadow-sm hover:bg-[#f7f0e3]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="mb-7 mt-8 flex items-center justify-between">
              <p className="text-sm font-semibold text-black">
                {filteredTreatments.length} treatment guides
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-sm font-bold text-[#42311d]"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* Cards */}
            <div className="grid gap-5 lg:grid-cols-2">
              {filteredTreatments.map((treatment, index) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  index={index}
                  open={openTreatment === treatment.id}
                  setOpen={setOpenTreatment}
                />
              ))}
            </div>

            {filteredTreatments.length === 0 && (
              <div className="rounded-[28px] bg-white px-6 py-16 text-center">
                <CircleHelp
                  size={38}
                  className="mx-auto text-[#42311d]"
                />

                <h3 className="mt-5 text-xl font-extrabold">
                  No treatment found
                </h3>

                <p className="mt-2 text-sm text-black">
                  Try another treatment name or clear your search.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            NEED HELP
        ====================================================== */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[35px] bg-[#f7f0e3] px-7 py-12 sm:px-12 lg:py-16">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/50" />
              <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/40" />

              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
                  <CircleHelp size={27} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                  Need Help?
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Unsure Whether Something Is Normal?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base">
                  Healing is usually straightforward, but you should never
                  feel that you have to guess. Tell our team which procedure
                  you had, when it was completed and what symptom or concern
                  you are experiencing.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:+918168062414"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#42311d]"
                  >
                    Call Toothistan
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2d2217]/15 bg-white px-7 py-4 text-sm font-bold text-[#2d2217] transition hover:bg-[#2d2217] hover:text-white"
                  >
                    Book An Appointment
                  </a>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-slate-400">
              These after-care instructions are general educational guidance
              and do not replace diagnosis or personalised postoperative
              advice. Your Toothistan dentist's individual instructions should
              always take priority.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomeInstructions;