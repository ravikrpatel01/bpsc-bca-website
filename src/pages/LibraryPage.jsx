import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import LibraryCollections from "../components/LibraryCollections";
import LibraryInfo from "../components/LibraryInfo";
import LibraryRules from "../components/LibraryRules";
import LibraryServices from "../components/LibraryServices";
import LibraryStats from "../components/LibraryStats";
import LibraryTimings from "../components/LibraryTimings";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const LibraryPage = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Library | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="Explore the library facilities at Baijnath Prasad Snehi College, Koderma. Access books, journals, digital resources, and study materials for students."
        />

        <meta
          name="keywords"
          content="College Library Koderma, BPSC College Library, Library Facilities Jharkhand, College Study Resources"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Library | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Discover our library resources and facilities."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <LibraryInfo />
      <LibraryStats />
      <LibraryCollections />
      <LibraryServices />
      <LibraryTimings />
      <LibraryRules />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default LibraryPage;
