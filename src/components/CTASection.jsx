import { FaBriefcase } from "react-icons/fa";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { GiClick, GiTeacher } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-linear-to-r from-blue-700 to-blue-600 text-white py-4 lg:py-12 px-2 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl lg:text-3xl md:text-3xl font-semibold">
          Join{" "}
          <span className="text-yellow-400">Baijnath Prasad Snehi College</span>
        </h2>

        <p className="mt-2 text-gray-200 text-justify lg:text-lg max-w-xl">
          A dynamic learning environment for future developers and IT
          professionals. Designed to build your skills in programming,
          technology, and innovation - preparing you for a successful career in
          the digital world.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="bg-blue-500 flex items-center gap-1 px-4 py-1 rounded-full text-xs lg:text-sm">
            <VscWorkspaceTrusted size={15} />
            Trusted for Quality
          </span>
          <span className="bg-green-500 flex items-center gap-1 px-4 py-1 rounded-full text-xs lg:text-sm">
            <FaBuildingCircleCheck size={16} />
            Modern Infrastructure
          </span>
          <span className="bg-yellow-500 flex items-center gap-1 px-4 py-1 rounded-full text-xs lg:text-sm">
            <FaBriefcase size={15} />
            Placement Support
          </span>
          <span className="bg-blue-500 flex items-center gap-1 px-4 py-1 rounded-full text-xs lg:text-sm">
            <GiTeacher size={15} />
            Expert Faculty
          </span>
        </div>
      </div>

      {/* Right Button */}
      <div>
        <Link
          to="/contact"
          className="bg-yellow-400 flex items-center cursor-pointer gap-1 hover:bg-yellow-500 text-white font-semibold px-3 lg:px-5 py-2 lg:py-3 rounded-full shadow-md"
        >
          Contact for Admission <GiClick size={20} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
