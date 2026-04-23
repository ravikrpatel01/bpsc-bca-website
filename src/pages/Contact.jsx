import { useEffect } from "react";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactFormSection from "../components/ContactFormSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Contact = () => {
  useEffect(() => {
    document.title =
      "Contact Us | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <>
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <ContactSection />
      <ContactFormSection />
      <FAQSection />
      <MainFooter />
      <Footer />
    </>
  );
};

export default Contact;
