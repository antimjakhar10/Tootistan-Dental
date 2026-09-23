import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyOverviewSection from "../components/CompanyOverviewSection";
import MissionTabsSection from "../components/MissionTabsSection";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ClinicTourSection from "../components/ClinicTourSection";
import DoctorsSection from "../components/DoctorsSection";
import ReviewsSection from "../components/ReviewsSection";
import UnderstandSection from "../components/UnderstandSection";
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
        <TrustSection/>
        <CompanyOverviewSection />
        <MissionTabsSection />
        <Services />
        <AboutSection />
        <ClinicTourSection />
        {/* <DoctorsSection /> */}
        <ReviewsSection />
        <UnderstandSection />
        <SmileGallery />
        {/* <FAQSection /> */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Home;