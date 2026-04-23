import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import ComputerLabInfo from "../components/ComputerLabInfo";
import Footer from "../components/Footer";
import HardwareInfrastructure from "../components/HardwareInfrastructure";
import LabOverview from "../components/LabOverview";
import LabRules from "../components/LabRules";
import LabTimings from "../components/LabTimings";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import SoftwareApplications from "../components/SoftwareApplications";
import TopBar from "../components/TopBar";

const ComputerLabPage = () => {
  useEffect(() => {
    document.title =
      "Computer Lab | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <ComputerLabInfo />
      <LabOverview />
      <HardwareInfrastructure />
      <SoftwareApplications />
      <LabTimings />
      <LabRules />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default ComputerLabPage;
