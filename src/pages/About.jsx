import { Helmet } from "react-helmet-async";
import AboutCollege from "../components/AboutCollege";
import Accreditation from "../components/Accreditation";
import AnnouncementBar from "../components/AnnouncementBar";
import CallToAction from "../components/CallToAction";
import CoreValues from "../components/CoreValues";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import WhyChooseUs from "../components/WhyChooseUs";

const About = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          About College | Baijnath Prasad Snehi College, Koderma, Jharkhand
        </title>

        <meta
          name="description"
          content="Learn about Baijnath Prasad Snehi College, Domchanch, Koderma. Discover our mission, values, academic excellence, and commitment to quality education in Jharkhand."
        />

        <meta
          name="keywords"
          content="About BPSC College, Baijnath Prasad Snehi College Details, Koderma College Info, Jharkhand College"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Know more about Baijnath Prasad Snehi College and its academic excellence."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <AboutCollege />
      <WhyChooseUs />
      <Accreditation />
      <CoreValues />
      <CallToAction />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default About;
