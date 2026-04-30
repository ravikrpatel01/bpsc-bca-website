import {
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const LabRules = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-16 px-2 lg:px-6">
      {/* Heading */}
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-3 lg:mb-12">
        Computer Lab Rules & Guidelines
      </h2>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 lg:gap-8">
        {/* Do's */}
        <div className="bg-white border rounded-2xl shadow-md p-2 lg:p-6 border-l-4 border-emerald-600">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-green-700 lg:mb-4">
            <FaCheckCircle /> Do's
          </h3>

          <ul className="lg:space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaArrowRight className="text-emerald-500 mt-1" />
              Login with your assigned user ID and password
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-emerald-500 mt-1" />
              Save your work regularly and use cloud storage
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-emerald-500 mt-1" />
              Report any hardware/software issues immediately
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-emerald-500 mt-1" />
              Maintain silence and discipline in the lab
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-emerald-500 mt-1" />
              Log out properly after completing your work
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-white border rounded-2xl shadow-md p-2 lg:p-6 border-l-4 border-red-500">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-red-700 lg:mb-4">
            <FaTimesCircle /> Don'ts
          </h3>

          <ul className="lg:space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaTimesCircle className="text-red-500 mt-1" />
              Do not eat or drink near computers
            </li>
            <li className="flex gap-2">
              <FaTimesCircle className="text-red-500 mt-1" />
              Do not download unauthorized software or files
            </li>
            <li className="flex gap-2">
              <FaTimesCircle className="text-red-500 mt-1" />
              Do not access inappropriate or non-academic content
            </li>
            <li className="flex gap-2">
              <FaTimesCircle className="text-red-500 mt-1" />
              Do not change system settings or configurations
            </li>
            <li className="flex gap-2">
              <FaTimesCircle className="text-red-500 mt-1" />
              Do not use external USB drives without scanning
            </li>
          </ul>
        </div>
      </div>

      {/* Important Note */}
      <div className="max-w-6xl mx-auto mt-3 lg:mt-8 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-2 lg:p-5 flex items-start gap-3 shadow-sm">
        {/* Icon */}
        <FaExclamationTriangle className="text-yellow-600 text-2xl lg:text-3xl mt-1 shrink-0" />

        {/* Text */}
        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
          <span className="font-semibold text-yellow-800">Important:</span>{" "}
          Violation of lab rules may result in suspension of lab access
          privileges. Always use computers responsibly and for academic purposes
          only.
        </p>
      </div>
    </div>
  );
};

export default LabRules;
