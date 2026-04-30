import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import BCAEligibilityDetails from "../components/BCAEligibilityDetails";
import EligibilitySection from "../components/EligibilitySection";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const EligibilityCriteria = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          BCA Eligibility Criteria | Baijnath Prasad Snehi College, Koderma
        </title>

        <meta
          name="description"
          content="Check BCA eligibility criteria at Baijnath Prasad Snehi College, Koderma. Know required qualifications, admission requirements, and course details."
        />

        <meta
          name="keywords"
          content="BCA Eligibility Koderma, BCA Admission Criteria Jharkhand, BPSC College BCA Eligibility, Computer Application Course Eligibility"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="BCA Eligibility | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Know the eligibility criteria for BCA admission."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
