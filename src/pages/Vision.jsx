import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import CoreObjectives from "../components/CoreObjectives";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import VisionMission from "../components/VisionMission";

const Vision = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Vision & Mission | Baijnath Prasad Snehi College, Koderma, Jharkhand
        </title>

        <meta
          name="description"
          content="Explore the vision and mission of Baijnath Prasad Snehi College, Koderma. Our commitment is to provide quality education, innovation, and holistic development of students."
        />

        <meta
          name="keywords"
          content="BPSC College Vision Mission, Baijnath Prasad Snehi College Goals, College Vision Koderma, Education Mission Jharkhand"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Vision & Mission | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Learn about the vision and mission of Baijnath Prasad Snehi College."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
