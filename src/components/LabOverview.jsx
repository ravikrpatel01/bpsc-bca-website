import { FaDesktop, FaUsers, FaWifi } from "react-icons/fa";

const LabOverview = () => {
  return (
    <div className="bg-gray-100 py-6 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Lab Overview
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md p-6 text-center border-t-4 border-blue-500 hover:shadow-lg transition">
          <FaDesktop className="text-blue-500 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-blue-900">50+</h3>
          <p className="text-gray-600 mt-2">Computer Systems</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md p-6 text-center border-t-4 border-green-500 hover:shadow-lg transition">
          <FaWifi className="text-green-600 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-blue-900">100 Mbps</h3>
          <p className="text-gray-600 mt-2">Internet Speed</p>
        </div>

        {/* Card 3 */}
        {/* <div className="bg-white border rounded-xl shadow-md p-6 text-center border-t-4 border-yellow-500 hover:shadow-lg transition">
          <FaSnowflake className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-blue-900">AC</h3>
          <p className="text-gray-600 mt-2">Climate Controlled</p>
        </div> */}

        {/* Card 4 */}
        <div className="bg-white border rounded-xl shadow-md p-6 text-center border-t-4 border-purple-500 hover:shadow-lg transition">
          <FaUsers className="text-purple-600 text-4xl mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-blue-900">50</h3>
          <p className="text-gray-600 mt-2">Student Capacity</p>
        </div>
      </div>
    </div>
  );
};

export default LabOverview;
