import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import PrincipalMsg from "../components/PrincipalMsg";
import TopBar from "../components/TopBar";
import VisionForStudents from "../components/VisionForStudents";
import WhatWeOffer from "../components/WhatWeOffer";

const PrincipalMessage = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Principal's Message | Baijnath Prasad Snehi College, Koderma,
          Jharkhand
        </title>

        <meta
          name="description"
          content="Read the Principal's Message of Baijnath Prasad Snehi College, Koderma. Discover our commitment to quality education, student growth, and academic excellence."
        />

        <meta
          name="keywords"
          content="Principal Message BPSC College, Baijnath Prasad Snehi College Principal, College Leadership Message, Koderma College"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Principal's Message | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Message from the Principal of Baijnath Prasad Snehi College."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
