import { FaCalendarAlt, FaInfoCircle, FaUserClock } from "react-icons/fa";

const LabTimings = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Lab Timings
      </h2>

      {/* Main Card */}
      <div className="max-w-5xl border-l-4 border border-blue-600 mx-auto bg-white rounded-2xl shadow-md p-5 grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="">
          <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-900 mb-6">
            <FaCalendarAlt className="text-blue-600" />
            Regular Schedule
          </h3>

          {/* Monday - Friday */}
          <div className="bg-blue-50 text-lg border-l-4 border border-blue-600 rounded-lg px-2 py-2 flex justify-between mb-4">
            <span className="font-medium text-gray-800">Monday - Friday</span>
            <span className="text-blue-700 font-semibold">
              8:00 AM - 6:00 PM
            </span>
          </div>

          {/* Saturday */}
          <div className="bg-blue-50 text-lg border-l-4 border border-blue-600 rounded-lg px-2 py-2 flex justify-between">
            <span className="font-medium text-gray-800">Saturday</span>
            <span className="text-blue-700 font-semibold">
              8:00 AM - 2:00 PM
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-900 mb-6">
            <FaUserClock className="text-green-600" />
            Practice Sessions
          </h3>

          {/* Free Practice */}
          <div className="bg-green-50 text-lg border-l-4 border border-green-600 rounded-lg px-2 py-2 mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              Free Practice Hours:
            </h4>
            <p className="text-gray-600 text-lg">
              Students can access the lab during free hours for self-practice
              with prior permission
            </p>
          </div>

          {/* Note */}
          <div className="bg-yellow-50 border-l-4 border border-yellow-600 rounded-lg px-2 py-2 flex items-center gap-2">
            <FaInfoCircle className="text-yellow-600 text-2xl" />
            <p className="text-lg text-gray-700">
              Extended hours during examination periods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTimings;
