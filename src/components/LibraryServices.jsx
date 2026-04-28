import {
  FaBookReader,
  FaChair,
  FaQuestionCircle,
  FaWifi,
} from "react-icons/fa";

const LibraryServices = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-10 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-3 lg:mb-12">
        Library Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 lg:gap-5">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-l-4 border-blue-400">
          <div className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-1 flex items-center border border-blue-400 justify-center bg-blue-100 rounded-full">
            <FaBookReader className="text-blue-500 text-2xl" />
          </div>
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-1 lg:mb-3">
            Lending Service
          </h3>
          <ul className="lg:text-lg text-gray-600 lg:space-y-2 text-left">
            <li>→ Students: 3 books for 15 days</li>
            <li>→ Faculty: 10 books for 30 days</li>
            <li>→ Renewal facility available</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-l-4 border-green-400">
          <div className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-1 flex items-center border border-green-400 justify-center bg-green-100 rounded-full">
            <FaChair className="text-green-600 text-2xl" />
          </div>
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-1 lg:mb-3">
            Reading Room
          </h3>
          <ul className="lg:text-lg text-gray-600 lg:space-y-2 text-left">
            <li>→ Spacious reading hall (150 seats)</li>
            <li>→ Quiet study environment</li>
            <li>→ Separate sections for different needs</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-l-4 border-yellow-400">
          <div className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-1 flex items-center border border-yellow-400 justify-center bg-yellow-100 rounded-full">
            <FaWifi className="text-yellow-600 text-xl lg:text-2xl" />
          </div>
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-1 lg:mb-3">
            Internet & Wi-Fi
          </h3>
          <ul className="lg:text-lg text-gray-600 lg:space-y-2 text-left">
            <li>→ Free Wi-Fi access</li>
            <li>→ Computer terminals available</li>
            <li>→ Online resource access</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-l-4 border-red-400">
          <div className="w-10 h-10 lg:w-16 lg:h-16 mx-auto mb-1 flex items-center border border-red-400 justify-center bg-red-100 rounded-full">
            <FaQuestionCircle className="text-red-500 text-xl lg:text-2xl" />
          </div>
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-1 lg:mb-3">
            Reference Assistance
          </h3>
          <ul className="lg:text-lg text-gray-600 lg:space-y-2 text-left">
            <li>→ Professional librarian support</li>
            <li>→ Research guidance</li>
            <li>→ Information literacy training</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LibraryServices;
