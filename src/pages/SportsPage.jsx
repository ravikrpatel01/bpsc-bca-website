import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import FullPageLoader from "../components/FullPageLoader";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const SportsPage = () => {
  useEffect(() => {
    document.title =
      "Sports | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setLoading(false);
    navigate("/");
  };

  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />

      {loading && <FullPageLoader onClose={handleClose} />}

      <MainFooter />
      <Footer />
    </div>
  );
};

export default SportsPage;
