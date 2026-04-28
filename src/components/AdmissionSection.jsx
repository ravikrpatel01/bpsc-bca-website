import { FaCalendarAlt, FaFileAlt, FaRupeeSign, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmissionSection = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-linear-to-r bg-blue-500 text-white text-center py-4 lg:py-16 px-2 lg:px-6">
        <h1 className="text-2xl lg:text-4xl font-semibold">
          Admission Procedure
        </h1>

        <p className="mt-2 lg:mt-3 lg:text-xl text-gray-200">
          Your step-by-step guide to joining our BCA program
        </p>

        <p className="mt-2 lg:mt-3 text-sm text-gray-300">
          <Link to="/">Home</Link> <span>/</span>{" "}
          <span className="text-white">Admissions</span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="bg-gray-100 py-3 lg:py-16 px-2 lg:px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-2 lg:gap-6">
          {/* Application Period */}
          <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md text-center border-t-4 border-blue-600">
            <FaCalendarAlt className="text-blue-600 text-2xl lg:text-3xl mx-auto" />
            <h3 className="mt-1 lg:mt-3 text-xl font-semibold text-gray-800">
              Application Period
            </h3>
            <p className="text-gray-600 text-sm mt-1">1 May – 30 June 2026</p>
          </div>

          {/* Seats */}
          <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md text-center border-t-4 border-green-600">
            <FaUsers className="text-green-600 text-2xl lg:text-3xl mx-auto" />
            <h3 className="mt-1 lg:mt-3 font-semibold text-gray-800 text-xl">
              Total Seats
            </h3>
            <p className="text-gray-600 text-sm mt-1">120 Seats (BCA)</p>
          </div>

          {/* Fees */}
          <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md text-center border-t-4 border-yellow-500">
            <FaRupeeSign className="text-yellow-600 text-2xl lg:text-3xl mx-auto" />
            <h3 className="mt-1 lg:mt-3 text-xl font-semibold text-gray-800">
              Application Fee
            </h3>
            <p className="text-gray-600 text-sm mt-1">₹1000 (Non-refundable)</p>
          </div>

          {/* Mode */}
          <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md text-center border-t-4 border-purple-600">
            <FaFileAlt className="text-purple-600 text-2xl lg:text-3xl mx-auto" />
            <h3 className="mt-1 lg:mt-3 text-xl font-semibold text-gray-800">
              Application Mode
            </h3>
            <p className="text-gray-600 text-sm mt-1">Online & Offline</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-4 lg:mt-12 bg-white border p-2 lg:p-8 rounded-xl shadow-md border-l-4 border-blue-600 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-blue-800">
            Admissions Open for 2026–27
          </h2>

          <p className="mt-1 lg:mt-3 text-gray-600 max-w-2xl mx-auto">
            Applications are now open for the BCA program. Don’t miss this
            opportunity to start your journey in the world of technology and
            build a successful IT career.
          </p>

          <div className="mt-3 lg:mt-6 flex justify-center gap-2 lg:gap-4 flex-wrap">
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 lg:px-6 py-1 lg:py-3 rounded-lg shadow-md">
              Apply Online Now
            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-3 lg:px-6 py-1 lg:py-3 rounded-lg shadow-md">
              Download Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
