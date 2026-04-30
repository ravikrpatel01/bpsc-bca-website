import { Helmet } from "react-helmet-async";
import AdmissionSection from "../components/AdmissionSection";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const AdmissionProcedure = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          BCA Admission Procedure | Baijnath Prasad Snehi College, Koderma
        </title>

        <meta
          name="description"
          content="Learn the BCA admission procedure at Baijnath Prasad Snehi College, Koderma. Step-by-step guide for applying, eligibility, documents required, and admission process."
        />

        <meta
          name="keywords"
          content="BCA Admission Koderma, Admission Procedure BPSC College, BCA Admission Jharkhand, College Admission Process"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="BCA Admission Procedure | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Step-by-step BCA admission process at Baijnath Prasad Snehi College."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
