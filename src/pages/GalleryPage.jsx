import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import GalleryCTASection from "../components/GalleryCTASection";
import GalleryHeader from "../components/GalleryHeader";
import MainFooter from "../components/MainFooter";
import ModernGallery from "../components/ModernGallery";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const GalleryPage = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Gallery | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="View photos of Baijnath Prasad Snehi College, Koderma. Explore campus life, events, facilities, and student activities."
        />

        <meta
          name="keywords"
          content="College Gallery Koderma, BPSC College Photos, Campus Images Jharkhand, College Events Gallery"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Gallery | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Explore photos and events from our college."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
