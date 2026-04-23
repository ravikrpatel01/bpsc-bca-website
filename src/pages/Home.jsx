import { useEffect } from "react";
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
  useEffect(() => {
    document.title =
      "Home | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <>
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
