import { FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GalleryCTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-700 text-white py-4 lg:py-16 px-2 lg:px-6 text-center">
      {/* Heading */}
      <h2 className="text-xl lg:text-3xl md:text-4xl font-bold mb-2 lg:mb-4">
        Want to Be Part of Our Story?
      </h2>

      {/* Subtext */}
      <p className="lg:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-3 lg:mb-8">
        Join{" "}
        <span className="font-medium text-yellow-300">
          Baijnath Prasad Snehi College
        </span>{" "}
        and create your own memorable moments on our vibrant campus.
      </p>

      <div className="flex flex-row justify-center gap-3 lg:gap-6 max-w-xl mx-auto">
        {/* Apply Button */}
        <button
          onClick={() => navigate("/admissions/admission-procedure")}
          className="flex-1 md:flex-none whitespace-nowrap flex items-center justify-center gap-2 
               bg-yellow-400 text-blue-900 font-semibold 
               px-4 py-2 rounded-lg hover:bg-yellow-300 transition 
               text-sm sm:text-lg md:px-6"
        >
          <FaUserPlus className="text-xl" />
          Admission Procedure
        </button>

        {/* Contact Button */}
        <button
          onClick={() => navigate("/contact")}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 
               bg-gray-200 text-blue-900 font-semibold 
               px-3 py-2 rounded-lg hover:bg-gray-300 transition 
               text-sm sm:text-lg md:px-6"
        >
          <FaPhoneAlt className="text-lg" />
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GalleryCTASection;
