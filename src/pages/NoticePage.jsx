import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import NoticesHeader from "../components/NoticesHeader";
import NoticesSection from "../components/NoticesSection";
import TopBar from "../components/TopBar";

const NoticePage = () => {
  useEffect(() => {
    document.title =
      "Notices | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
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
