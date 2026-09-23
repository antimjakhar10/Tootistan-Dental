import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";

import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";
import MeetTheDoctor from "./pages/MeetTheDoctor";
import OurOffice from "./pages/OurOffice";
import PatientsComfort from "./pages/PatientsComfort";
import MissionVision from "./pages/MissionVision";
import BallinsOnBudget from "./pages/BallinsOnBudget";
import DentalTechnology from "./pages/DentalTechnology";
import WhatSetsUsApart from "./pages/WhatSetsUsApart";
import Careers from "./pages/Careers";

import ServicesPage from "./pages/ServicesPage";
import GeneralDentistry from "./pages/GeneralDentistry";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import DentalImplants from "./pages/DentalImplants";
import Orthodontics from "./pages/Orthodontics";
import SpecialNeedsDentistry from "./pages/SpecialNeedsDentistry";
import EmergencyDentistry from "./pages/EmergencyDentistry";
import Invisalign from "./pages/Invisalign";
import PediatricDentistry from "./pages/PediatricDentistry";
import SurgicalDentistry from "./pages/SurgicalDentistry";

import FirstVisitExpectations from "./pages/FirstVisitExpectations";
import ProblemWeTreat from "./pages/ProblemWeTreat";
import Appointments from "./pages/Appointments";
import FAQs from "./pages/FAQs";
import HomeInstructions from "./pages/HomeInstructions";

import BeforeAfterPhotos from "./pages/BeforeAfterPhotos";

import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAppointments from "./pages/AdminAppointments";
import AdminContacts from "./pages/AdminContacts";
import AdminTestimonials from "./pages/AdminTestimonials";
import AdminGallery from "./pages/AdminGallery";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <div className="page-wrapper">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/meet-the-doctor" element={<MeetTheDoctor />} />
        <Route path="/our-office" element={<OurOffice />} />
        <Route path="/patients-comfort" element={<PatientsComfort />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/ballins-on-budget" element={<BallinsOnBudget />} />
        <Route path="/dental-technology" element={<DentalTechnology />} />
        <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/general-dentistry" element={<GeneralDentistry />} />
        <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
        <Route path="/dental-implants" element={<DentalImplants />} />
        <Route path="/orthodontics" element={<Orthodontics />} />
        <Route
          path="/special-needs-dentistry"
          element={<SpecialNeedsDentistry />}
        />
        <Route path="/emergency-dentistry" element={<EmergencyDentistry />} />
        <Route path="/invisalign" element={<Invisalign />} />
        <Route path="/pediatric-dentistry" element={<PediatricDentistry />} />
        <Route path="/surgical-dentistry" element={<SurgicalDentistry />} />

        <Route
          path="/first-visit-expectations"
          element={<FirstVisitExpectations />}
        />
        <Route path="/problem-we-treat" element={<ProblemWeTreat />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/home-instructions" element={<HomeInstructions />} />

        <Route path="/before-after-photos" element={<BeforeAfterPhotos />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/appointments" element={<AdminAppointments />} />

        <Route path="/admin/contacts" element={<AdminContacts />} />

        <Route path="/admin/testimonials" element={<AdminTestimonials />} />

        <Route path="/admin/gallery" element={<AdminGallery />} />

        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </div>
  );
}

export default App;
