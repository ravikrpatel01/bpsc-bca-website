import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import CoreObjectives from "../components/CoreObjectives";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import VisionMission from "../components/VisionMission";

const Vision = () => {
  useEffect(() => {
    document.title =
      "Our Vision & Mission | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <VisionMission />
      <CoreObjectives />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default Vision;
