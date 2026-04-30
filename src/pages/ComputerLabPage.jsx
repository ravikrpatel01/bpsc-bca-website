import { Helmet } from "react-helmet-async";
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
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Computer Lab | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="Explore the computer lab facilities at Baijnath Prasad Snehi College, Koderma. Modern infrastructure, software tools, and practical learning environment for BCA students."
        />

        <meta
          name="keywords"
          content="Computer Lab Koderma, BPSC College Lab, BCA Lab Facilities, Computer Lab Jharkhand, College IT Lab"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Computer Lab | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Modern computer lab facilities for students."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
