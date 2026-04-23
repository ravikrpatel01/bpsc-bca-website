import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdmissionProcedure from "./pages/AdmissionProcedure";
import ComputerLabPage from "./pages/ComputerLabPage";
import Contact from "./pages/Contact";
import EligibilityCriteria from "./pages/EligibilityCriteria";
import GalleryPage from "./pages/GalleryPage";
import Home from "./pages/Home";
import LibraryPage from "./pages/LibraryPage";
import NoticePage from "./pages/NoticePage";
import Overview from "./pages/Overview";
import PrincipalMessage from "./pages/PrincipalMessage";
import Scholarships from "./pages/Scholarships";
import SportsPage from "./pages/SportsPage";
import TeachingFaculty from "./pages/TeachingFaculty";
import Vision from "./pages/Vision";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-college" element={<About />} />
        <Route path="about/overview" element={<Overview />} />
        <Route path="about/vision-and-mission" element={<Vision />} />
        <Route path="about/principal-message" element={<PrincipalMessage />} />
        <Route
          path="/admissions/eligibility-criteria"
          element={<EligibilityCriteria />}
        />
        <Route
          path="/admissions/admission-procedure"
          element={<AdmissionProcedure />}
        />
        <Route path="/admissions/scholarships" element={<Scholarships />} />
        <Route path="/faculty/teaching" element={<TeachingFaculty />} />
        <Route path="/facilities/library" element={<LibraryPage />} />
        <Route path="/facilities/lab" element={<ComputerLabPage />} />
        <Route path="/facilities/sports" element={<SportsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/notices" element={<NoticePage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
