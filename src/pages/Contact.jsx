import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import ContactFormSection from "../components/ContactFormSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const Contact = () => {
  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Contact Us | Baijnath Prasad Snehi College, Koderma, Jharkhand
          (825418)
        </title>

        <meta
          name="description"
          content="Get in touch with Baijnath Prasad Snehi College, Domchanch, Koderma. Contact us for admissions, queries, and support."
        />

        <meta
          name="keywords"
          content="BPSC College Contact, Baijnath Prasad Snehi College Contact, Koderma College Contact, College Phone Number Koderma"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Contact Baijnath Prasad Snehi College for admissions and queries."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
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
