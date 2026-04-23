import { useEffect } from "react";
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
  useEffect(() => {
    document.title =
      "About College | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);

  return (
    <div>
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
