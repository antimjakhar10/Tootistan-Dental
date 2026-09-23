import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import DoctorsSection from "../components/DoctorsSection";
import ReviewsSection from "../components/ReviewsSection";
import FAQSection from "../components/FAQSection";
import SmileGallery from "../components/SmileGallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustSection />
        <Services />
        <AboutSection />
        <DoctorsSection />
        <ReviewsSection />
        <SmileGallery />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;