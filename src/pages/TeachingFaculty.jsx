import { useEffect } from "react";
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
  useEffect(() => {
    document.title =
      "Teaching & Non-Teaching Staffs | Baijnath Prasad Snehi College, Koderma, Jharkhand (825418)";
  }, []);
  return (
    <div>
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
