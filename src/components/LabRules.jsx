import {
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const LabRules = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Computer Lab Rules & Guidelines
      </h2>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Do's */}
        <div className="bg-white border rounded-2xl shadow-md p-6 border-l-4 border-green-500">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-4">
            <FaCheckCircle /> Do's
          </h3>

          <ul className="space-y-2 text-lg text-gray-700">
            <li className="flex gap-2">
              <FaArrowRight className="text-green-500 mt-1" />
              Login with your assigned user ID and password
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-green-500 mt-1" />
              Save your work regularly and use cloud storage
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-green-500 mt-1" />
              Report any hardware/software issues immediately
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-green-500 mt-1" />
              Maintain silence and discipline in the lab
            </li>
            <li className="flex gap-2">
              <FaArrowRight className="text-green-500 mt-1" />
              Log out properly after completing your work
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-white border rounded-2xl shadow-md p-6 border-l-4 border-red-500">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-red-700 mb-4">
            <FaTimesCircle /> Don'ts
          </h3>

          <ul className="space-y-2 text-lg text-gray-700">
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
      <div className="max-w-6xl mx-auto mt-8 bg-yellow-50 border border-l-4 border-yellow-500 rounded-xl p-5 flex gap-3 items-start shadow-sm">
        <FaExclamationTriangle className="text-yellow-600 text-2xl mt-1" />
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Important:</span> Violation of lab
          rules may result in suspension of lab access privileges. Always use
          computers responsibly and for academic purposes only.
        </p>
      </div>
    </div>
  );
};

export default LabRules;
