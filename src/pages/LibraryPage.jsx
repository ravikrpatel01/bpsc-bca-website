import { useEffect } from "react";
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
  useEffect(() => {
    document.title =
      "Library | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
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
