import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import NoticesHeader from "../components/NoticesHeader";
import NoticesSection from "../components/NoticesSection";
import TopBar from "../components/TopBar";

const NoticePage = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Notices | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="Check latest notices, updates, and announcements from Baijnath Prasad Snehi College, Koderma. Stay updated with exam schedules, admissions, and events."
        />

        <meta
          name="keywords"
          content="College Notices Koderma, BPSC College Updates, Exam Notice Jharkhand, Admission Notice College"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Notices | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Latest updates and announcements from our college."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <NoticesHeader />
      <NoticesSection />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default NoticePage;
