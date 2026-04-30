import { Helmet } from "react-helmet-async";
import AnnouncementBar from "../components/AnnouncementBar";
import CallToAction from "../components/CallToAction";
import FacultyPage from "../components/FacultyPage";
import Footer from "../components/Footer";
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import NonTeachingStaffTable from "../components/NonTeachingStaffTable";
import TeachingStaffTable from "../components/TeachingStaffTable";
import TopBar from "../components/TopBar";

const TeachingFaculty = () => {
  return (
    <div>
      {/* ✅ SEO */}
      <Helmet>
        <title>Faculty & Staff | Baijnath Prasad Snehi College, Koderma</title>

        <meta
          name="description"
          content="Meet the experienced faculty and staff of Baijnath Prasad Snehi College, Koderma. Dedicated educators committed to academic excellence and student success."
        />

        <meta
          name="keywords"
          content="BPSC College Faculty, Baijnath Prasad Snehi College Staff, Koderma College Teachers, College Faculty Jharkhand"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Faculty & Staff | Baijnath Prasad Snehi College"
        />
        <meta
          property="og:description"
          content="Meet our faculty and staff members."
        />
        <meta property="og:image" content="/bpsc_logo.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* UI */}
      <TopBar />
      <AnnouncementBar />
      <Navbar />
      <FacultyPage />
      <TeachingStaffTable />
      <NonTeachingStaffTable />
      <CallToAction />
      <MainFooter />
      <Footer />
    </div>
  );
};

export default TeachingFaculty;
