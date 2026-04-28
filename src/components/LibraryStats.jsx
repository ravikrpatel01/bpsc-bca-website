import { FaBook, FaLaptop, FaNewspaper, FaUsers } from "react-icons/fa";

const LibraryStats = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-8 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-2 lg:mb-12">
        Library at a Glance
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-t-4 border-blue-500 hover:shadow-lg transition">
          <FaBook className="text-blue-500 text-2xl lg:text-4xl mx-auto mb-1 lg:mb-4" />
          <h3 className="lg:text-3xl text-2xl font-bold text-blue-900">
            10,000+
          </h3>
          <p className="text-gray-600 mt-0 lg:mt-2">Books</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-t-4 border-green-500 hover:shadow-lg transition">
          <FaNewspaper className="text-green-600 text-2xl lg:text-4xl mx-auto mb-1 lg:mb-4" />
          <h3 className="lg:text-3xl text-2xl font-bold text-blue-900">50+</h3>
          <p className="text-gray-600 mt-0 lg:mt-2">Journals & Magazines</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-t-4 border-yellow-500 hover:shadow-lg transition">
          <FaLaptop className="text-yellow-600 text-2xl lg:text-4xl mx-auto mb-1 lg:mb-4" />
          <h3 className="lg:text-3xl text-2xl font-bold text-blue-900">
            5,000+
          </h3>
          <p className="text-gray-600 mt-0 lg:mt-2">E-Books & E-Journals</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 text-center border-t-4 border-purple-500 hover:shadow-lg transition">
          <FaUsers className="text-purple-600 text-2xl lg:text-4xl mx-auto mb-1 lg:mb-4" />
          <h3 className="lg:text-3xl text-2xl font-bold text-blue-900">150+</h3>
          <p className="text-gray-600 mt-0 lg:mt-2">Seating Capacity</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryStats;
