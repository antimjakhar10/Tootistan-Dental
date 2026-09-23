import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Clock, Stethoscope } from "lucide-react";
import { ToothDoctorMascot, FloatingMascotSticker } from "./DentalMascots";

const tabData = [
  {
    id: "comprehensive",
    label: "Comprehensive Care",
    icon: Heart,
    headingPrefix: "Expert ",
    headingHighlight: "Dentistry,",
    headingSuffix: " Personalized Attention",
    description:
      "We know every smile is different. That's why we offer full dental care just for you. From keeping teeth healthy to making your smile shine, we have the right treatment for every need.",
    type: "features",
    features: [
      {
        title: "Gentle Approach",
        text: "We use soft tools and calm steps to make sure you feel safe and happy during every visit.",
      },
      {
        title: "Trusted Team",
        text: "Our caring dental team works with skill and honesty to give you the best care, every time.",
      },
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Expert dentist in clinic",
  },
  {
    id: "why-us",
    label: "Why Choose Us",
    icon: Users,
    headingPrefix: "Trusted By ",
    headingHighlight: "Smiles",
    headingSuffix: " Across The City",
    description:
      "At Toothistan, we care for your smile in every way. That's why we bring together expert dental care and a calm, relaxing space. Not only do we use the latest dental technology, but we also follow world-class sterilization for your safety. As soon as you enter, you'll feel the difference. We want you to feel safe, so we make your visit anxiety-free and pain-free. Because your comfort matters, our clinic feels more like a spa than a hospital. In the end, it's not just about teeth—it's about how you feel. That's why patients across the city trust us, again and again.",
    type: "progress",
    stats: [
      { label: "Sterilization", value: 99 },
      { label: "Patient Comfort", value: 98 },
      { label: "Treatment Success", value: 99 },
      { label: "Client Satisfaction", value: 97 },
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Smiling patient",
  },
  {
    id: "opening-hours",
    label: "Our Opening Hours",
    icon: Clock,
    headingPrefix: "We’re Here To Serve You With ",
    headingHighlight: "Convenient Timings",
    headingSuffix: " That Suit Your Busy Life.",
    description:
      "We know your time is important. That's why Toothistan offers easy and flexible appointment times. Whether it's early morning, late evening, or even on weekends, we're here when it works best for you. So, you never have to skip your dental care.",
    type: "hours",
    hours: [
      { days: "Monday – Tuesday:", time: "9am – 6pm" },
      { days: "Wednesday – Saturday:", time: "8am – 5pm" },
      { days: "Sunday:", time: "Closed" },
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Doctor in clinic office",
  },
];

const MissionTabsSection = () => {
  const [activeTabId, setActiveTabId] = useState("comprehensive");
  const activeTab = tabData.find((tab) => tab.id === activeTabId) || tabData[0];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background Subtle Shapes */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#f7f0e3] blur-3xl opacity-60" />

      {/* Floating Mascot Sticker Top Right */}
      <div className="pointer-events-none absolute right-6 top-10 z-20 hidden lg:block">
        <FloatingMascotSticker MascotComponent={ToothDoctorMascot} sizeClassName="h-24 w-24 sm:h-28 sm:w-28" />
      </div>

      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#42311d]">
            <Stethoscope size={16} className="text-[#9e6f21]" />
            <span>YOUR SMILE, OUR MISSION</span>
          </div>

          <p className="text-sm sm:text-base font-semibold text-gray-700 mt-1">
            Experience Advanced Dental Care That Blends Expertise, Comfort, And Trust.
          </p>
        </motion.div>

        {/* Tab Pill Switcher Header */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-[#2d2217] shadow-xl border border-white/10 max-w-full overflow-x-auto">
            {tabData.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#c46927] text-white shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <div className="max-w-[1200px] mx-auto bg-white rounded-[2rem] border border-[#ebdcb8]/40 shadow-[0_20px_60px_rgba(45,34,23,0.06)] p-6 sm:p-10 lg:p-14 min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight">
                  {activeTab.headingPrefix}
                  <span className="text-[#9e6f21]">{activeTab.headingHighlight}</span>
                  {activeTab.headingSuffix}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {activeTab.description}
                </p>

                {/* Tab Type 1: Comprehensive Care Features */}
                {activeTab.type === "features" && activeTab.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {activeTab.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-[#faf8f4] border border-[#ebdcb8]/40 rounded-2xl p-5 shadow-xs"
                      >
                        <h4 className="font-bold text-[#111827] text-base mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab Type 2: Why Choose Us Progress Bars */}
                {activeTab.type === "progress" && activeTab.stats && (
                  <div className="space-y-3.5 pt-2">
                    {activeTab.stats.map((stat, idx) => (
                      <div key={stat.label} className="space-y-1">
                        <div className="flex justify-between text-xs sm:text-sm font-bold text-[#111827]">
                          <span>{stat.label}</span>
                          <span>{stat.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${stat.value}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="h-full bg-[#9e6f21] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab Type 3: Opening Hours Dark Box */}
                {activeTab.type === "hours" && activeTab.hours && (
                  <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-7 shadow-lg space-y-4 max-w-md">
                    {activeTab.hours.map((item, idx) => (
                      <div
                        key={item.days}
                        className={`flex justify-between items-center text-xs sm:text-sm font-medium ${
                          idx !== activeTab.hours.length - 1
                            ? "border-b border-gray-800 pb-3"
                            : ""
                        }`}
                      >
                        <span className="text-gray-300 font-semibold">{item.days}</span>
                        <span className="text-white font-bold">{item.time}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column Image */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-3xl shadow-md h-[320px] sm:h-[400px] w-full border-4 border-white bg-[#f4ebd5] relative">
                  <img
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MissionTabsSection;
