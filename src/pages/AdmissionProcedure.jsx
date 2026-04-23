import { useEffect } from "react";
import AdmissionSection from "../components/AdmissionSection";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const AdmissionProcedure = () => {
  useEffect(() => {
    document.title =
      "BCA Admission Procedure | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <AdmissionSection />
      <MainFooter />
      <Footer />
    </>
  );
};

export default AdmissionProcedure;
