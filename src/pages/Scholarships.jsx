import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import FinancialAidSection from "../components/FinancialAidSection";
import Footer from "../components/Footer";
import GovernmentScholarships from "../components/GovernmentScholarships";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import ScholarshipInfo from "../components/ScholarshipInfo";
import ScholarshipProcess from "../components/ScholarshipProcess";
import ScholarshipTypes from "../components/ScholarshipTypes";
import TopBar from "../components/TopBar";

const Scholarships = () => {
  useEffect(() => {
    document.title =
      "Scholarships | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <FinancialAidSection />
      <ScholarshipTypes />
      <GovernmentScholarships />
      <ScholarshipProcess />
      <ScholarshipInfo />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default Scholarships;
