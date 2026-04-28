import { FaBookOpen, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const LibraryTimings = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-8 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-3 lg:mb-12">
        Library Timings
      </h2>

      <div className="max-w-6xl text-lg mx-auto bg-white border border-t-4 border-blue-500 shadow-md rounded-xl p-2 lg:p-6">
        <div className="grid md:grid-cols-2 gap-2 lg:gap-8">
          {/* Regular Days */}
          <div>
            <div className="flex items-center gap-2 mb-1 lg:mb-4">
              <FaCalendarAlt className="text-blue-500" />
              <h3 className="text-lg font-semibold text-blue-900">
                Regular Days
              </h3>
            </div>

            <div className="bg-gray-50 rounded-lg text-sm lg:text-lg shadow-sm p-2 lg:p-4 space-x-1 lg:space-y-4">
              <div className="flex justify-between border-b border-gray-400 pb-2">
                <span className="font-medium text-gray-700">
                  Monday - Friday
                </span>
                <span className="text-blue-600 font-semibold">
                  10:00 AM - 04:00 PM
                </span>
              </div>

              <div className="flex justify-between border-b border-gray-400 pb-2">
                <span className="font-medium text-gray-700">Saturday</span>
                <span className="text-blue-600 font-semibold">
                  10:00 AM - 02:00 PM
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-gray-700">
                  Sunday & Holidays
                </span>
                <span className="text-red-500 font-semibold">Closed</span>
              </div>
            </div>
          </div>

          {/* Examination Period */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-green-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Examination Period
              </h3>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm p-2 lg:p-4 space-y-1 lg:space-y-4">
              <div className="flex justify-between text-sm lg:text-lg border-b border-gray-400 pb-2">
                <span className="font-medium text-gray-700">All Days</span>
                <span className="text-green-600 font-semibold">
                  09:00 AM - 04:00 PM
                </span>
              </div>

              {/* Info Box */}
              <div className="flex gap-2 text-sm lg:text-lg bg-green-100 text-green-800 p-2 lg:p-3 rounded-md">
                <FaInfoCircle className="mt-1 shrink-0" />
                <p>
                  Extended hours during examination periods to support student
                  preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTimings;
