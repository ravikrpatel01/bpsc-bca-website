import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import GalleryCTASection from "../components/GalleryCTASection";
import GalleryHeader from "../components/GalleryHeader";
import MainFooter from "../components/MainFooter";
import ModernGallery from "../components/ModernGallery";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const GalleryPage = () => {
  useEffect(() => {
    document.title =
      "Gallery | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <GalleryHeader />
      <ModernGallery />
      <GalleryCTASection />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default GalleryPage;
