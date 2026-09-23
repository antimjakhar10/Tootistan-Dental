import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Camera,
  Cpu,
  Eye,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const techList = [
  {
    tag: "INTRAORAL SCANNERS",
    title: "Digital Impressions, Redefined",
    description:
      "Mess-free precision. Our handheld 3D scanners capture ultra-detailed images of your teeth and gums — replacing traditional, uncomfortable molds. Enjoy faster, cleaner, and more accurate impressions for restorations, aligners, and smile makeovers.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=90",
    imageRight: false,
  },
  {
    tag: "3D CT IMAGING",
    title: "Clear Views From Every Angle",
    description:
      "At Toothistan, we use advanced 3D CT Imaging to see your teeth and jaws in full detail. This helps us find problems and plan treatments very carefully, especially for implants and root canals. Also, the technology uses very low radiation, so you stay safe while we get the best images for accurate care.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=90",
    imageRight: true,
  },
  {
    tag: "DIGITAL SMILE DESIGN (DSD)",
    title: "Create Your Perfect Smile",
    description:
      "At Toothistan, we use Digital Smile Design to plan your ideal smile. First, we study your face and teeth using special software. Then, we show you a clear picture of how your new smile will look before we start any treatment. This way, your smile is made just for you and looks amazing.",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=90",
    imageRight: true,
  },
  {
    tag: "LASER GUM RECONTOURING",
    title: "Shape Your Gums With Care",
    description:
      "If your smile shows too much gum or your gum line is uneven, Toothistan can help. We use a gentle laser to reshape your gums with little pain and no stitches. This advanced method helps you heal faster and smile with confidence sooner.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=90",
    imageRight: false,
  },
  {
    tag: "ENAMEL REMINERALIZATION",
    title: "Protect And Strengthen Your Teeth",
    description:
      "At Toothistan, we use special treatments to add minerals back to your teeth. This helps stop early tooth decay and reduces sensitivity. Plus, it's gentle and painless. With this care, your natural enamel gets stronger and your smile stays healthy.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=90",
    imageRight: true,
  },
];

const diagnostics = [
  {
    title: "Intraoral Scanners",
    text: "Mess-free precision. Our handheld 3D scanners capture ultra-detailed images of your teeth and gums — replacing traditional, uncomfortable molds. Enjoy faster, cleaner, and more accurate impressions for restorations, aligners, and smile makeovers.",
  },
  {
    title: "Cone-Beam Computed Tomography (CBCT)",
    text: "A complete 3D view of your oral world. Our high-definition CBCT imaging reveals every detail of your teeth, jawbone, and nerve pathways. It's the gold standard for accurate diagnosis and precise planning in implants, root canals, and surgical treatments.",
  },
  {
    title: "Artificial Intelligence (AI)",
    text: "Smarter insights for earlier detection. Our AI-powered software reviews X-rays and scans in seconds — helping us detect cavities, bone loss, and early signs of oral cancer with exceptional accuracy and speed.",
  },
  {
    title: "Intraoral Cameras",
    text: "Transparency you can see. Tiny high-resolution cameras show real-time, magnified images of your mouth on the screen — so you understand every step of your care. Because informed patients make confident smiles.",
  },
];

const benefits = [
  {
    title: "Unmatched Accuracy",
    text: "Digital tools like CBCT, intraoral scanners, and AI bring microscopic precision to every diagnosis and treatment plan — ensuring predictability and long-lasting results.",
  },
  {
    title: "Faster, Seamless Care",
    text: "From same-day restorations to instant digital imaging, technology helps us save your time without compromising on quality — so you spend less time in the chair and more time smiling.",
  },
  {
    title: "Comfort at Every Step",
    text: "Forget noisy drills and messy molds. Our quiet systems, touchless scans, and minimally invasive methods redefine what a dental visit feels like — calm, clean, and comfortable.",
  },
  {
    title: "Tailored for You",
    text: "With 3D imaging and precision printing, every restoration, aligner, or appliance is designed to fit you perfectly — for results that feel as natural as they look.",
  },
];

export default function DentalTechnology() {
  return (
    <div className="min-h-screen bg-white text-[#2d2217]">
      <Navbar />

      <main className="pt-[90px]">
        {/* Page Hero */}
        <section className="bg-gradient-to-b from-[#f7f0e3]/60 via-[#faf8f4] to-white py-12 sm:py-16 text-center border-b border-[#ebdcb8]/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ebdcb8] bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#8b6118] shadow-sm">
                <Cpu size={14} />
                Dental Technology
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[#2d2217]">
                Advanced Dental Technology | <span className="text-[#8b6118]">Precise & Comfortable Care</span>
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-7 text-black">
                Discover Toothistan’s latest dental technology for faster, safer, and painless treatments. Experience precise care with 3D imaging, lasers, and more!
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <Link
                  to="/appointments"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-6 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#42311d]"
                >
                  Book An Appointment
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature List (Matching Screenshots 1 & 2) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
            {techList.map((item, index) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid gap-8 lg:grid-cols-2 items-center lg:gap-12"
              >
                {/* Image Side */}
                <div
                  className={`overflow-hidden rounded-[26px] border border-[#ebdcb8]/70 shadow-md ${
                    item.imageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] sm:h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content Side */}
                <div className={`${item.imageRight ? "lg:order-1" : "lg:order-2"} space-y-3`}>
                  <div className="flex items-center gap-2 text-[#8b6118]">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-[0.18em]">
                      {item.tag}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold sm:text-3xl text-[#2d2217]">
                    {item.title}
                  </h2>

                  <p className="text-sm sm:text-base leading-7 text-black">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Advanced Diagnostics & Imaging (Matching Screenshot 3) */}
        <section className="py-14 sm:py-18 bg-[#faf8f4] border-t border-b border-[#ebdcb8]/40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl text-[#8b6118]">
                Advanced Diagnostics & Imaging
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-6 text-black">
                Where clarity meets comfort. At <span className="font-bold text-[#8b6118]">Toothistan</span>, we rely on next-generation diagnostic technology to deliver precise, painless, and predictable results. Every scan and image helps us understand your smile better — so we can plan treatment with confidence and care.
              </p>
            </div>

            {/* 2x2 Grid with Left Accent Border */}
            <div className="grid gap-6 sm:grid-cols-2">
              {diagnostics.map((diag, index) => (
                <motion.div
                  key={diag.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border-l-4 border-l-[#8b6118] border border-[#ebdcb8]/50 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#8b6118]">
                    {diag.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-black">
                    {diag.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits of Modern Dental Technology (Matching Screenshot 4) */}
        <section className="py-14 sm:py-18 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl text-[#8b6118]">
                Benefits of Modern Dental Technology
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-6 text-black">
                At <span className="font-bold text-[#8b6118]">Toothistan</span>, innovation isn't just about machines — it's about making your care faster, gentler, and more precise. Here's how our advanced technology transforms every visit:
              </p>
            </div>

            {/* 2x2 Grid with Left Accent Border */}
            <div className="grid gap-6 sm:grid-cols-2">
              {benefits.map((ben, index) => (
                <motion.div
                  key={ben.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border-l-4 border-l-[#8b6118] border border-[#ebdcb8]/50 bg-[#faf8f4] p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#8b6118]">
                    {ben.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-black">
                    {ben.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#faf8f4] px-4 py-12 sm:px-6 lg:px-8 border-t border-[#ebdcb8]/40">
          <div className="mx-auto max-w-4xl rounded-[28px] bg-[#f7f0e3] px-6 py-10 text-center sm:px-10 border border-[#ebdcb8]">
            <h2 className="text-2xl font-bold text-[#2d2217] sm:text-3xl">
              Experience the Future of Dental Care
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm leading-6 text-black">
              Schedule your appointment today to experience faster, gentler, and more precise treatments with Toothistan's state-of-the-art dental technology.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <Link
                to="/appointments"
                className="inline-flex items-center gap-2 rounded-full bg-[#2d2217] px-7 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-[#42311d]"
              >
                Book an Appointment
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}