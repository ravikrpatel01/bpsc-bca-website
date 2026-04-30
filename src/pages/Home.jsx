import { Helmet } from "react-helmet-async";
import AboutSection from "../components/AboutSection";
import Accreditation from "../components/Accreditation";
import AnnouncementBar from "../components/AnnouncementBar";
import CampusSection from "../components/CampusSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LeadershipSection from "../components/LeadershipSection";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import NewsSection from "../components/NewsSection";
import ProgramsSection from "../components/ProgramsSection";
import TopBar from "../components/TopBar";

const Home = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Baijnath Prasad Snehi College, Domchanch | Best College in Koderma,
          Jharkhand
        </title>

        <meta
          name="description"
          content="Baijnath Prasad Snehi College, Domchanch, Koderma is one of the best colleges in Jharkhand offering BCA and quality education with excellent faculty and facilities."
        />

        <meta
          name="keywords"
          content="BPSC College, Baijnath Prasad Snehi College, Koderma College, BCA College Jharkhand, Best College in Koderma"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph (for sharing) */}
        <meta
          property="og:title"
          content="Baijnath Prasad Snehi College, Koderma"
        />
        <meta
          property="og:description"
          content="Best college in Koderma offering quality education."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <NewsSection />
      <Accreditation />
      <AboutSection />
      <LeadershipSection />
      <ProgramsSection />
      <CampusSection />
      <CTASection />
      <MainFooter />
      <Footer />
    </>
  );
};

export default Home;
