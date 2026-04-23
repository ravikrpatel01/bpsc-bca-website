import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Overview = () => {
  useEffect(() => {
    document.title =
      "Overview | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default Overview;
