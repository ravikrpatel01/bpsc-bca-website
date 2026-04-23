import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import PrincipalMsg from "../components/PrincipalMsg";
import TopBar from "../components/TopBar";
import VisionForStudents from "../components/VisionForStudents";
import WhatWeOffer from "../components/WhatWeOffer";
const PrincipalMessage = () => {
  useEffect(() => {
    document.title =
      "Principal's Message | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <PrincipalMsg />
      <WhatWeOffer />
      <VisionForStudents />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default PrincipalMessage;
