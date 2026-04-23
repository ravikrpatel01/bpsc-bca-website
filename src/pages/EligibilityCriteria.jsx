import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import BCAEligibilityDetails from "../components/BCAEligibilityDetails";
import EligibilitySection from "../components/EligibilitySection";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const EligibilityCriteria = () => {
  useEffect(() => {
    document.title =
      "BCA Eligibility Criteria | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <EligibilitySection />
      <BCAEligibilityDetails />
      <MainFooter />
      <Footer />
    </>
  );
};

export default EligibilityCriteria;
