import {
  FaHandHoldingHeart,
  FaTrophy,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const ScholarshipTypes = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-12">
        Types of Scholarships Available
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-xl shadow-md p-6 border-l-4 border-r-4 border-blue-500 hover:shadow-lg transition">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mx-auto mb-4 shadow-sm bg-white">
            <FaUniversity className="text-blue-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Government Scholarships
          </h3>
          <p className="text-gray-600 text-sm">State & Central Govt schemes</p>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-50 rounded-xl shadow-md p-6 border-r-4  border-l-4 border-orange-500 hover:shadow-lg transition">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mx-auto mb-4 bg-white shadow-sm">
            <FaTrophy className="text-orange-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Merit-Based</h3>
          <p className="text-gray-600 text-sm">For academic excellence</p>
        </div>

        {/* Card 3 */}
        <div className="bg-red-50 rounded-xl shadow-md p-6 border-l-4 border-r-4  border-red-500 hover:shadow-lg transition">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mx-auto mb-4 bg-white shadow-sm">
            <FaHandHoldingHeart className="text-red-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Need-Based</h3>
          <p className="text-gray-600 text-sm">
            For economically weaker students
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-emerald-50 rounded-xl shadow-md p-6 border-l-4 border-r-4 border-emerald-500 hover:shadow-lg transition">
          <div className="w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full mx-auto mb-4 bg-white shadow-sm">
            <FaUsers className="text-emerald-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Category-Based</h3>
          <p className="text-gray-600 text-sm">SC/ST/OBC/Minority schemes</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTypes;
