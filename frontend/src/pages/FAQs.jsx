import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Clock3,
  HeartPulse,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  X,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const quickFaqs = [
  {
    question: "Is your clinic safe and hygienic?",
    answer:
      "Toothistan follows structured sterilisation and infection-control practices, with hygiene treated as an important part of patient safety and care.",
  },
  {
    question: "Do you offer pain-free treatments?",
    answer:
      "The team uses gentle techniques, appropriate local anaesthesia and modern technology to make treatment as comfortable as possible.",
  },
  {
    question: "What makes your clinic different from others?",
    answer:
      "Toothistan combines modern dental care with a calm, comfort-focused environment, personalised attention and technology-assisted diagnosis.",
  },
  {
    question: "Do you treat anxious or nervous patients?",
    answer:
      "Yes. Dental anxiety is taken seriously, and the team aims to create a calm environment while explaining treatment clearly and allowing patients to proceed at a comfortable pace.",
  },
  {
    question: "Is Toothistan suitable for children?",
    answer:
      "Yes. Pediatric care is designed around gentle communication, preventive care and helping children feel comfortable in the dental environment.",
  },
  {
    question: "What services do you offer?",
    answer:
      "The clinic offers general, cosmetic, implant, orthodontic, Invisalign, pediatric, emergency, surgical and special-needs dental care.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can contact Toothistan by phone or email, or use the online appointment form to request a visit.",
  },
  {
    question: "Are your procedures technology-assisted?",
    answer:
      "Yes. Digital diagnostic and planning tools can be used where clinically appropriate to improve examination, treatment planning and precision.",
  },
  {
    question: "Do you offer Invisalign treatment?",
    answer:
      "Yes. Toothistan provides personalised clear-aligner treatment plans for suitable cases.",
  },
  {
    question: "Is your clinic accessible for special-needs patients?",
    answer:
      "The clinic provides inclusive care with individualised support for patients who may have physical, cognitive, sensory or communication needs.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Yes. Dental pain, trauma, swelling and other urgent concerns can be assessed. Serious symptoms such as breathing or swallowing difficulty require immediate medical attention.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit generally involves discussing your concerns and dental history, examining your teeth and gums, using diagnostic imaging when required and discussing suitable next steps.",
  },
];

const categories = [
  {
    id: "general",
    label: "General Dentistry",
    icon: Stethoscope,
  },
  {
    id: "pain",
    label: "Pain & Emergency",
    icon: Zap,
  },
  {
    id: "gum",
    label: "Gums & Oral Health",
    icon: HeartPulse,
  },
  {
    id: "restoration",
    label: "Teeth & Restoration",
    icon: ShieldCheck,
  },
  {
    id: "implants",
    label: "Implants",
    icon: Sparkles,
  },
  {
    id: "cosmetic",
    label: "Smile & Cosmetic",
    icon: Sparkles,
  },
  {
    id: "ortho",
    label: "Braces & Aligners",
    icon: CircleHelp,
  },
  {
    id: "children",
    label: "Children",
    icon: Baby,
  },
  {
    id: "jaw",
    label: "Jaw & TMJ",
    icon: HeartPulse,
  },
  {
    id: "technology",
    label: "Technology",
    icon: Syringe,
  },
  {
    id: "care",
    label: "Daily Dental Care",
    icon: ShieldCheck,
  },
  {
    id: "other",
    label: "Other Questions",
    icon: CircleHelp,
  },
];

const faqData = [
  // GENERAL
  {
    category: "general",
    question: "How often should I visit the dentist?",
    answer:
      "Many people benefit from regular dental check-ups around every six months, but the ideal interval depends on your oral health, gum condition, cavity risk and individual needs.",
  },
  {
    category: "general",
    question: "Why should I visit the dentist if I have no pain?",
    answer:
      "Dental problems such as early cavities, gum disease and small cracks may develop without noticeable pain. Regular examinations can help identify problems before they become more complicated.",
  },
  {
    category: "general",
    question: "What happens during my first dental visit?",
    answer:
      "The dentist will discuss your concerns, relevant medical and dental history, examine your teeth and gums and recommend photographs, X-rays or digital scans when useful. Findings and treatment options are then explained.",
  },
  {
    category: "general",
    question: "Will I receive treatment during my first dental visit?",
    answer:
      "That depends on your condition. Simple or urgent treatment may sometimes be completed during the first visit, while more involved procedures usually require examination and planning first.",
  },

  // PAIN
  {
    category: "pain",
    question: "Why does my tooth hurt?",
    answer:
      "Tooth pain can have several causes, including cavities, cracks, gum problems, infection, trapped food, wisdom teeth or sometimes problems involving the jaw or surrounding structures. Examination is needed to identify the cause.",
  },
  {
    category: "pain",
    question: "Can a toothache disappear without treatment?",
    answer:
      "Pain can temporarily settle even when the underlying problem remains. A sudden reduction in pain does not necessarily mean an infection or damaged tooth has healed, so persistent or recurring pain should be evaluated.",
  },
  {
    category: "pain",
    question: "What should I do if I have severe toothache?",
    answer:
      "Arrange dental assessment as soon as possible. Keep the area clean and avoid placing aspirin or chemicals directly on the tooth. Pain medication should only be taken when it is appropriate and safe for you.",
  },
  {
    category: "pain",
    question: "What is considered a dental emergency?",
    answer:
      "Severe uncontrolled pain, rapidly increasing facial swelling, significant bleeding, serious facial injury, a knocked-out permanent tooth or infection with fever can require urgent dental care. Breathing or swallowing difficulty requires emergency medical attention.",
  },
  {
    category: "pain",
    question: "What should I do if a permanent tooth is knocked out?",
    answer:
      "Act quickly. Hold the tooth by the crown, not the root, and gently rinse it if dirty. If possible, carefully reposition it in the socket; otherwise keep it moist and seek emergency dental care immediately.",
  },

  // GUM
  {
    category: "gum",
    question: "Why do my gums bleed when I brush?",
    answer:
      "Plaque-related gum inflammation is a common reason, although forceful brushing, some medicines, hormonal changes and other health factors can also contribute. Regular gum bleeding should be checked.",
  },
  {
    category: "gum",
    question: "What is gum disease?",
    answer:
      "Gum disease affects the tissues supporting the teeth. Early gum inflammation is commonly called gingivitis, while more advanced disease can damage the bone and supporting tissues around teeth.",
  },
  {
    category: "gum",
    question: "What are the signs of advanced gum disease?",
    answer:
      "Possible signs include swollen or bleeding gums, recession, persistent bad breath, pus, loose teeth, tooth movement or changes in your bite. Gum disease does not always cause obvious pain.",
  },
  {
    category: "gum",
    question: "Does dental scaling damage enamel or loosen teeth?",
    answer:
      "Professional scaling removes plaque and hardened tartar. If teeth appear more mobile after heavy tartar is removed, existing gum and bone loss may become more noticeable; the cleaning itself does not create that bone loss.",
  },
  {
    category: "gum",
    question: "What is deep cleaning or root planing?",
    answer:
      "Deep cleaning is a gum-treatment procedure that removes plaque and hardened deposits from below the gumline and cleans affected root surfaces.",
  },
  {
    category: "gum",
    question: "Can receding gums grow back naturally?",
    answer:
      "Receded gum tissue generally does not naturally grow back. Treatment focuses on controlling the cause, protecting exposed tooth surfaces and reducing sensitivity. Some cases may require additional gum procedures.",
  },

  // RESTORATION
  {
    category: "restoration",
    question: "What is a dental cavity?",
    answer:
      "A cavity is damage caused when acids produced by plaque bacteria gradually remove minerals from a tooth. Very early damage may sometimes be controlled, while an established hole usually needs restorative treatment.",
  },
  {
    category: "restoration",
    question: "Can a cavity heal without a filling?",
    answer:
      "Very early mineral loss can sometimes be managed with fluoride, better oral hygiene and dietary changes. Once a physical cavity has formed, a restoration is generally required.",
  },
  {
    category: "restoration",
    question: "What types of dental fillings are available?",
    answer:
      "Depending on the tooth and the extent of damage, options can include tooth-coloured composite, glass ionomer and indirect restorations such as inlays or onlays.",
  },
  {
    category: "restoration",
    question: "How long does a dental filling last?",
    answer:
      "There is no single lifespan for every filling. Longevity depends on the material, size, bite forces, oral hygiene, risk of new decay and habits such as grinding.",
  },
  {
    category: "restoration",
    question: "Why is my tooth sensitive after getting a filling?",
    answer:
      "Mild temporary sensitivity can occur after a filling. Increasing, prolonged, night-time or bite-related pain should be discussed with your dentist.",
  },
  {
    category: "restoration",
    question: "What causes chipped or cracked teeth?",
    answer:
      "Hard foods, accidents, decay, large older fillings, grinding and repeated stress can contribute to chips or cracks. A damaged tooth should be examined, particularly if it hurts or feels sharp.",
  },
  {
    category: "restoration",
    question: "Can a badly broken tooth be saved?",
    answer:
      "Sometimes. The possibility depends on the remaining healthy tooth structure, root, supporting tissues and location of the damage. Treatment may involve a filling, crown, root canal or another restoration.",
  },
  {
    category: "restoration",
    question: "What is a dental crown?",
    answer:
      "A crown is a custom-made restoration that covers and protects a weakened or damaged tooth. It may be considered for heavily restored, cracked, worn or root-canal-treated teeth.",
  },
  {
    category: "restoration",
    question: "What is a root canal treatment?",
    answer:
      "Root canal treatment is used to save a tooth when the tissue inside it becomes infected or severely inflamed. The affected tissue is removed, the canals are cleaned and disinfected, then sealed.",
  },
  {
    category: "restoration",
    question: "How do I know if I need a root canal?",
    answer:
      "Possible signs include lingering hot or cold sensitivity, spontaneous or night pain, pain when biting, swelling, deep decay or changes in tooth colour. Some infected teeth may have very few symptoms.",
  },
  {
    category: "restoration",
    question: "Is root canal treatment painful?",
    answer:
      "Local anaesthesia is used to keep the procedure comfortable. Root canal treatment often addresses the pain caused by an infected or inflamed tooth, although some tenderness can occur afterwards.",
  },
  {
    category: "restoration",
    question: "Can a root canal be completed in one visit?",
    answer:
      "Some teeth can be treated in one appointment, while others need multiple visits. The number of appointments depends on the tooth, canal anatomy, infection and how the tooth responds to treatment.",
  },

  // IMPLANTS
  {
    category: "implants",
    question: "What is a dental implant?",
    answer:
      "A dental implant is a biocompatible fixture placed in the jawbone to replace the root portion of a missing tooth. Once integrated, it can support a crown, bridge or denture.",
  },
  {
    category: "implants",
    question: "Who can get dental implants?",
    answer:
      "Many adults with missing teeth can be considered for implants. Bone and gum health, oral hygiene, general health, smoking, medicines, bite and other factors are evaluated before treatment.",
  },
  {
    category: "implants",
    question: "Are dental implants painful?",
    answer:
      "Implant placement is normally performed with local anaesthesia. Pressure may be felt during treatment, and some soreness or swelling can occur afterwards.",
  },
  {
    category: "implants",
    question: "How long does dental implant treatment take?",
    answer:
      "Treatment time varies. Some suitable cases move quickly, while others require several months because of healing, infection, extraction or bone-grafting requirements.",
  },
  {
    category: "implants",
    question: "Can dental implants replace all my teeth?",
    answer:
      "In suitable cases, full-arch treatment can use implant-supported fixed bridges or implant-retained removable dentures. The number and placement of implants depend on individual anatomy and treatment needs.",
  },
  {
    category: "implants",
    question: "How long do dental implants last?",
    answer:
      "Implants are intended as a long-term replacement option, but their longevity cannot be guaranteed. Good hygiene, healthy gums, regular reviews and proper bite management help support long-term implant health.",
  },

  // COSMETIC
  {
    category: "cosmetic",
    question: "What is smile design?",
    answer:
      "Smile design is a personalised approach to improving the appearance and balance of a smile while considering teeth, gums, lips, facial features, bite and personal preferences.",
  },
  {
    category: "cosmetic",
    question: "Is professional teeth whitening safe?",
    answer:
      "Professional whitening is generally considered safe when a patient is suitable for treatment and the procedure is professionally supervised. Temporary sensitivity or gum irritation can sometimes occur.",
  },
  {
    category: "cosmetic",
    question:
      "Will teeth whitening make crowns, veneers or fillings whiter?",
    answer:
      "Whitening primarily affects natural tooth structure and generally does not change the shade of existing crowns, veneers or fillings.",
  },
  {
    category: "cosmetic",
    question: "What is dental bonding?",
    answer:
      "Dental bonding uses tooth-coloured composite material to repair or improve selected cosmetic concerns such as small chips, minor gaps and changes in tooth shape.",
  },
  {
    category: "cosmetic",
    question: "What are dental veneers?",
    answer:
      "Veneers are thin restorations placed over the visible front surfaces of selected teeth to change their colour, shape, size or appearance.",
  },
  {
    category: "cosmetic",
    question: "Should I choose veneers or crowns?",
    answer:
      "Veneers mainly cover the front surface and are often used for selected cosmetic concerns, while crowns cover more of the tooth and are generally used when greater structural protection is required.",
  },

  // ORTHO
  {
    category: "ortho",
    question: "Am I too old to get braces?",
    answer:
      "No. Orthodontic treatment can be suitable for adults as well as younger patients when the teeth and supporting tissues are healthy.",
  },
  {
    category: "ortho",
    question: "Which is better: braces or clear aligners?",
    answer:
      "There is no universally better option. The right treatment depends on the bite, tooth movement required, treatment goals, gum health, lifestyle and ability to wear removable aligners consistently.",
  },
  {
    category: "ortho",
    question: "How long does orthodontic treatment take?",
    answer:
      "Treatment duration depends on case complexity, treatment type, age, biological response and how closely instructions are followed.",
  },
  {
    category: "ortho",
    question: "Are clear aligners completely invisible?",
    answer:
      "Clear aligners are designed to be discreet, but they are not always completely invisible. Some patients may also need tooth-coloured attachments or other orthodontic aids.",
  },
  {
    category: "ortho",
    question: "Will braces or clear aligners hurt?",
    answer:
      "Some pressure or mild tenderness is common after braces are adjusted or a new aligner is started. Severe pain or appliance problems should be reported to the dental team.",
  },
  {
    category: "ortho",
    question: "Why do I need to wear retainers after braces?",
    answer:
      "Teeth can naturally move after orthodontic treatment. Retainers help maintain their new positions while the surrounding tissues adapt.",
  },

  // CHILDREN
  {
    category: "children",
    question: "When should my child first visit the dentist?",
    answer:
      "A child's first dental visit is ideally around the time the first tooth appears and no later than the first birthday. Early visits help with prevention and familiarisation.",
  },
  {
    category: "children",
    question: "Why should baby teeth be treated if they eventually fall out?",
    answer:
      "Baby teeth help children eat and speak and guide permanent teeth into position. Untreated decay can cause pain, infection and other problems before those teeth are naturally lost.",
  },
  {
    category: "children",
    question: "How can I prepare my child for their first dental visit?",
    answer:
      "Keep the explanation simple and positive. Avoid scary words or stories, choose a time when your child is rested and allow the dental team to guide the appointment.",
  },
  {
    category: "children",
    question: "What causes cavities in young children?",
    answer:
      "Frequent exposure to sugary foods and drinks, bedtime bottles containing sweet liquids, inadequate brushing and delayed dental care can increase the risk of childhood cavities.",
  },
  {
    category: "children",
    question: "Is thumb-sucking harmful to children's teeth?",
    answer:
      "Thumb or finger sucking is common in young children, but a persistent habit as permanent teeth develop can influence tooth position and jaw development.",
  },
  {
    category: "children",
    question:
      "Can children with dental anxiety or special needs receive dental care?",
    answer:
      "Yes. Sharing your child's communication, sensory, developmental or medical needs before the visit allows the team to plan suitable support and appointment strategies.",
  },

  // JAW
  {
    category: "jaw",
    question: "What is TMJ or TMD?",
    answer:
      "The temporomandibular joints connect the jaw to the skull. TMD refers to problems involving these joints and the muscles used for chewing and may cause pain, clicking, stiffness or restricted movement.",
  },
  {
    category: "jaw",
    question: "Is jaw clicking always a problem?",
    answer:
      "Not necessarily. A painless click without locking or restricted movement may not require treatment, but painful, worsening or movement-limiting clicking should be assessed.",
  },
  {
    category: "jaw",
    question: "Why do I grind or clench my teeth?",
    answer:
      "Grinding and clenching can be associated with sleep-related activity, stress, bite-related factors, medicines and other conditions. Signs can include worn teeth, jaw soreness and headaches.",
  },
  {
    category: "jaw",
    question: "Will a night guard stop me from grinding my teeth?",
    answer:
      "A professionally made night guard can protect teeth and reduce the forces placed on them, but it may not completely eliminate the underlying grinding or clenching.",
  },
  {
    category: "jaw",
    question: "What should I do if my jaw gets locked?",
    answer:
      "Do not repeatedly force the jaw open or closed. A locked jaw, particularly when painful or following an injury, needs prompt professional assessment.",
  },

  // TECHNOLOGY
  {
    category: "technology",
    question: "Are dental X-rays safe?",
    answer:
      "Dental X-rays use a controlled, relatively small amount of radiation and are recommended when they provide useful diagnostic information. Your dentist considers your symptoms and treatment needs before recommending imaging.",
  },
  {
    category: "technology",
    question: "What is a CBCT scan, and when is it needed?",
    answer:
      "CBCT creates a three-dimensional view of the teeth, jawbone and nearby structures. It can be useful for selected implant, surgical, impacted-tooth, trauma and complex root-canal cases.",
  },
  {
    category: "technology",
    question: "What is an intraoral scanner?",
    answer:
      "An intraoral scanner creates a digital three-dimensional representation of the teeth and bite. It can be useful for restorations, clear aligners, implants and smile planning.",
  },
  {
    category: "technology",
    question: "Why does the dentist take photographs of my teeth?",
    answer:
      "Dental photographs can help document oral health, explain conditions, plan treatment, communicate with dental laboratories or specialists and monitor changes over time.",
  },
  {
    category: "technology",
    question: "How are dental instruments sterilised?",
    answer:
      "Reusable instruments are cleaned, packaged and sterilised using defined infection-control processes. Appropriate single-use items are used when required.",
  },

  // DAILY CARE
  {
    category: "care",
    question: "What is the correct way to brush my teeth?",
    answer:
      "Brush gently for around two minutes twice daily with a soft-bristled toothbrush and fluoride toothpaste. Clean the front, back and chewing surfaces, paying particular attention to the gumline.",
  },
  {
    category: "care",
    question: "Is an electric toothbrush better than a manual toothbrush?",
    answer:
      "Both can clean effectively when used correctly. An electric toothbrush can be particularly useful for people who find brushing technique difficult or have braces or limited hand movement.",
  },
  {
    category: "care",
    question: "Do I really need to floss?",
    answer:
      "Yes. Brushing cannot adequately clean the tight spaces between teeth. Daily cleaning between teeth with floss or another suitable interdental aid helps remove plaque and food.",
  },
  {
    category: "care",
    question: "Should I use mouthwash every day?",
    answer:
      "Mouthwash can be useful for specific needs, but it should not replace brushing or cleaning between teeth. The appropriate product depends on your individual oral-health situation.",
  },
  {
    category: "care",
    question: "Which foods can cause cavities?",
    answer:
      "Frequent exposure to sugary foods, drinks and refined carbohydrates can increase cavity risk. How often teeth are exposed to sugar is also important.",
  },
  {
    category: "care",
    question: "Is fluoride safe for teeth?",
    answer:
      "Fluoride strengthens enamel and helps prevent or slow tooth decay when used appropriately. Fluoride toothpaste and professional fluoride treatments may be recommended depending on individual risk.",
  },
  {
    category: "care",
    question: "How often should I replace my toothbrush?",
    answer:
      "A toothbrush should generally be replaced around every three months or sooner if the bristles become worn or frayed.",
  },

  // OTHER / MEDICAL
  {
    category: "other",
    question: "What causes dry mouth?",
    answer:
      "Dry mouth can be related to medicines, dehydration, diabetes, certain medical conditions, mouth breathing and other factors. Persistent dryness can increase the risk of cavities and oral infections.",
  },
  {
    category: "other",
    question: "What should I do if I have a white or red patch in my mouth?",
    answer:
      "Many mouth patches have harmless causes, but unexplained patches, lumps or ulcers that persist for more than two weeks should be professionally examined.",
  },
  {
    category: "other",
    question: "What are the warning signs of oral cancer?",
    answer:
      "Possible warning signs include a non-healing ulcer, persistent red or white patch, unexplained lump, bleeding, numbness, ongoing hoarseness or difficulty swallowing. These signs can have other causes, but persistent changes need assessment.",
  },
  {
    category: "other",
    question: "Is dental treatment safe during pregnancy?",
    answer:
      "Necessary dental examinations, preventive care, fillings and emergency treatment can generally be provided during pregnancy. Always tell your dentist about pregnancy so imaging, medicines and treatment can be planned appropriately.",
  },
  {
    category: "other",
    question: "Can I get dental X-rays during pregnancy?",
    answer:
      "Clinically necessary dental X-rays can be performed with appropriate safety precautions. Unnecessary imaging is avoided, but delaying an important diagnosis may also carry risks.",
  },
  {
    category: "other",
    question: "Can I get a second opinion about my dental treatment?",
    answer:
      "Yes. A second opinion can be useful before major, surgical, cosmetic or irreversible treatment. Previous X-rays, scans and dental records can help the second dentist understand your history.",
  },
  {
    category: "other",
    question: "What should I tell my dentist before treatment?",
    answer:
      "Tell your dentist about medical conditions, allergies, pregnancy, previous surgeries, bleeding problems, medicines, supplements and relevant implants or prosthetic joints. Do not stop prescribed medicines without professional advice.",
  },

  // EMERGENCY
  {
    category: "pain",
    question: "Will antibiotics cure a toothache or dental abscess?",
    answer:
      "Not always. Antibiotics do not replace treatment of the underlying dental problem and are not necessary for every toothache. They should only be used when clinically indicated by a dental professional.",
  },
  {
    category: "pain",
    question: "What should I do if my crown or filling falls out?",
    answer:
      "Keep the restoration if you still have it, keep the tooth clean and avoid chewing on that side. Do not use household glue. Arrange a dental examination even if the tooth is not painful.",
  },
  {
    category: "pain",
    question:
      "When should facial swelling be treated as a hospital emergency?",
    answer:
      "Immediate medical attention is important if swelling affects breathing or swallowing, spreads toward the eye or neck, causes severe difficulty opening the mouth or occurs with serious systemic symptoms.",
  },
];

function FAQItem({ faq, index, open, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.2) }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-[#e5b757] bg-[#f4faf8] shadow-[0_15px_35px_rgba(23,59,53,0.07)]"
          : "border-slate-200 bg-white hover:border-[#ebdcb8]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
      >
        <div className="flex items-start gap-4">
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
              open
                ? "bg-[#2d2217] text-white"
                : "bg-[#f7f0e3] text-[#42311d]"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-sm font-bold leading-6 text-[#2d2217] sm:text-[15px]">
            {faq.question}
          </span>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
            open
              ? "rotate-180 bg-[#2d2217] text-white"
              : "bg-slate-100 text-[#2d2217]"
          }`}
        >
          <ChevronDown size={17} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t border-[#f4ebd5] px-5 pb-6 pt-4 pl-[68px] text-sm leading-7 text-black sm:px-6 sm:pl-[72px]">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [openQuick, setOpenQuick] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = useMemo(() => {
    let result = faqData;

    if (activeCategory !== "all") {
      result = result.filter((faq) => faq.category === activeCategory);
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, search]);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#faf8f4] text-[#2d2217]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative pt-[105px] lg:pt-[120px]">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl" />
          <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-[#f4ebd5] blur-3xl" />

          <div className="relative mx-auto max-w-[1380px] px-5 pb-8 sm:px-8 lg:px-12 lg:pb-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#42311d] shadow-sm">
                  <CircleHelp size={15} />
                  Dental FAQs
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
                  Everything You Want
                  <span className="block text-[#42311d]">
                    to Know About Your Smile
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black sm:text-lg">
                  Get clear answers about dental treatments, your first visit,
                  comfort, hygiene, children's dentistry, implants, braces,
                  emergencies and everyday oral care.
                </p>

                {/* Search */}
                <div className="relative mt-9 max-w-2xl">
                  <Search
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#42311d]"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your dental question..."
                    className="h-16 w-full rounded-2xl border border-slate-200 bg-white pl-14 pr-14 text-sm text-[#2d2217] shadow-[0_15px_40px_rgba(23,59,53,0.07)] outline-none transition focus:border-[#42311d] focus:ring-4 focus:ring-[#42311d]/10"
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2d2217]"
                    >
                      <X size={19} />
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Right visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mx-auto hidden w-full max-w-md lg:block"
              >
                <div className="relative aspect-square rounded-[45px] bg-[#2d2217] p-7 shadow-[0_35px_80px_rgba(23,59,53,0.2)]">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#c48f32]/40" />
                  <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full border border-white/10" />

                  <div className="flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.05] p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c48f32]/15 text-[#c48f32]">
                        <Sparkles size={27} />
                      </div>

                      <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/85">
                        TOOTHISTAN
                      </span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ebdcb8]">
                        Need clarity?
                      </p>

                      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                        Your questions deserve
                        <span className="block text-[#c48f32]">
                          clear answers.
                        </span>
                      </h2>

                      <div className="mt-7 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-white/10 p-4">
                          <Stethoscope
                            size={20}
                            className="text-[#c48f32]"
                          />
                          <p className="mt-3 text-xs font-semibold text-white/85">
                            Expert Care
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/10 p-4">
                          <ShieldCheck
                            size={20}
                            className="text-[#c48f32]"
                          />
                          <p className="mt-3 text-xs font-semibold text-white/85">
                            Patient First
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FIRST VISIT / QUICK ANSWERS
        ====================================================== */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                  Before You Visit
                </span>

                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Welcome to Your
                  <span className="block text-[#42311d]">
                    Anxiety-Free Dental Home
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                  We understand that visiting the dentist can make some
                  people nervous. Toothistan focuses on creating a relaxing,
                  spa-inspired environment where comfort and dental care work
                  together.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    ["01", "Simple Paperwork"],
                    ["02", "Complete Dental Checkup"],
                    ["03", "Meet Your Doctor"],
                    ["04", "Anxiety-Free Experience"],
                    ["05", "Customized Treatment Plan"],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#faf8f4] p-4"
                    >
                      <span className="text-xs font-bold text-[#b88228]">
                        {number}
                      </span>

                      <span className="text-sm font-bold text-[#2d2217]">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickFaqs.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    faq={faq}
                    index={index}
                    open={openQuick === index}
                    onToggle={() =>
                      setOpenQuick(openQuick === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ LIBRARY
        ====================================================== */}
        <section className="bg-[#faf8f4] py-16 lg:py-24">
          <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Get Every Answer
                <span className="text-[#42311d]"> You Need</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-black sm:text-base">
                Browse questions by topic or search for a specific dental
                concern.
              </p>
            </motion.div>

            {/* Category pills */}
            <div className="mt-10 flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === "all"
                    ? "bg-[#2d2217] text-white shadow-lg"
                    : "bg-white text-[#2d2217] shadow-sm hover:bg-[#f7f0e3]"
                }`}
              >
                All Questions
              </button>

              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex whitespace-nowrap items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                      activeCategory === category.id
                        ? "bg-[#42311d] text-white shadow-lg"
                        : "bg-white text-[#2d2217] shadow-sm hover:bg-[#f7f0e3]"
                    }`}
                  >
                    <Icon size={15} />
                    {category.label}
                  </button>
                );
              })}
            </div>

            {/* Results count */}
            <div className="mb-6 mt-8 flex items-center justify-between">
              <p className="text-sm font-semibold text-black">
                {search
                  ? `${filteredFaqs.length} matching questions`
                  : `${filteredFaqs.length} questions`}
              </p>

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="text-sm font-bold text-[#42311d] hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {/* FAQ grid */}
            {filteredFaqs.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {filteredFaqs.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    faq={faq}
                    index={index}
                    open={openFaq === faq.question}
                    onToggle={() =>
                      setOpenFaq(
                        openFaq === faq.question ? null : faq.question
                      )
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f0e3] text-[#42311d]">
                  <Search size={27} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#2d2217]">
                  No matching question found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-black">
                  Try a different keyword or contact the Toothistan team
                  directly for help.
                </p>

                <a
                  href="tel:+918168062414"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2d2217] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Call Toothistan
                  <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            EMERGENCY STRIP
        ====================================================== */}
        <section className="bg-[#2d2217] py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#c48f32]/15 text-[#c48f32]">
                  <Zap size={26} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebdcb8]">
                    Urgent Dental Care
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Have a dental emergency?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90">
                    Severe pain, rapidly increasing facial swelling, serious
                    dental injury, uncontrolled bleeding or a knocked-out
                    permanent tooth should be assessed promptly. Breathing or
                    swallowing difficulty requires immediate emergency medical
                    attention.
                  </p>
                </div>
              </div>

              <a
                href="tel:+918168062414"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-[#c48f32] px-7 py-4 text-sm font-bold text-[#2d2217] transition hover:bg-white"
              >
                Call Toothistan
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            ASK QUESTION
        ====================================================== */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative overflow-hidden rounded-[35px] bg-[#f7f0e3] px-7 py-12 text-center sm:px-12 lg:py-16">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/50" />
              <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/40" />

              <div className="relative">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#42311d] shadow-sm">
                  <CircleHelp size={27} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#42311d]">
                  Still Have A Question?
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                  Have Any Other Question?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base">
                  If you could not find the answer you were looking for, our
                  team is happy to help you understand your concern and guide
                  you toward the right next step.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d2217] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#42311d]"
                  >
                    Book An Appointment
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="tel:+918168062414"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2d2217]/15 bg-white px-7 py-4 text-sm font-bold text-[#2d2217] transition hover:bg-[#2d2217] hover:text-white"
                  >
                    Talk To Our Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MINI TRUST
        ====================================================== */}
        <section className="border-y border-[#dce9e5] bg-[#faf8f4]">
          <div className="mx-auto grid max-w-[1380px] gap-0 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
            <div className="flex items-center gap-4 border-b border-[#dce9e5] py-7 lg:border-b-0 lg:border-r lg:pr-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#42311d] shadow-sm">
                <ShieldCheck size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#2d2217]">
                  Comfort First
                </p>
                <p className="mt-1 text-xs text-black">
                  A calm patient experience.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-[#dce9e5] py-7 lg:border-b-0 lg:border-r lg:px-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#42311d] shadow-sm">
                <Stethoscope size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#2d2217]">
                  Modern Dentistry
                </p>
                <p className="mt-1 text-xs text-black">
                  Technology-assisted care.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-7 lg:pl-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#42311d] shadow-sm">
                <CalendarDays size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#2d2217]">
                  Easy Appointment
                </p>
                <p className="mt-1 text-xs text-black">
                  Start your dental journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQs;