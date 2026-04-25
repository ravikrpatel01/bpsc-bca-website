import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-linear-to-r from-blue-800 to-blue-600 text-white py-4 lg:py-20 text-center px-2 lg:px-6">
      <h2 className="text-3xl lg:text-4xl font-bold mb-1 lg:mb-4">Learn from the Best</h2>

      <p className="max-w-2xl mx-auto text-lg mb-4 lg:mb-8 opacity-90">
        Join{" "}
        <span className="font-bold text-yellow-300">
          Baijnath Prasad Snehi College
        </span>{" "}
        and experience quality education delivered by expert faculty committed
        to your success.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {/* Apply Button */}
        <Link
          to="/admissions"
          className="flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 transition pointer-events-none cursor-not-allowed"
        >
          <FaUserPlus className="text-2xl" />
          Apply for Admission
        </Link>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          <MdEmail className="text-2xl" />
          Contact Faculty
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
