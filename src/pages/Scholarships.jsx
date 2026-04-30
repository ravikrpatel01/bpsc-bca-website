import { Helmet } from "react-helmet-async";
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
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Scholarships | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="Explore scholarships at Baijnath Prasad Snehi College, Koderma. Learn about financial aid, government scholarships, eligibility, and application process."
        />

        <meta
          name="keywords"
          content="Scholarships Koderma, BPSC College Scholarship, Government Scholarship Jharkhand, College Financial Aid"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Scholarships | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Learn about scholarships and financial aid at Baijnath Prasad Snehi College."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
