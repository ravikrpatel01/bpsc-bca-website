import { FaBook, FaBookmark, FaCloud, FaNewspaper } from "react-icons/fa";

const LibraryCollections = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-8 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-2 lg:mb-12">
        Library Collections
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 lg:gap-8">
        {/* Card 1 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <div className="flex items-center gap-3 mb-1 lg:mb-4">
            <FaBook className="text-blue-500 text-xl lg:text-2xl" />
            <h3 className="font-semibold text-lg lg:text-xl text-blue-900">
              Books Collection
            </h3>
          </div>

          <p className="text-gray-600 lg:text-lg mb-1 lg:mb-4">
            A wide range of books covering core computer science subjects,
            programming languages, and IT fundamentals.
          </p>

          <div className="bg-gray-50 px-2 lg:px-3 py-1 border lg:text-lg border-gray-200 rounded-md text-gray-700">
            <p className="font-semibold mb-0 lg:mb-2">Subject Categories:</p>
            <ul className="list-disc pl-5 lg:space-y-1">
              <li>Programming (Java, C++, Python)</li>
              <li>Data Structures & Algorithms</li>
              <li>Database Management Systems</li>
              <li>Web Development (HTML, CSS, JS, React)</li>
              <li>Computer Networks & Operating Systems</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-1 lg:mb-4">
            <FaNewspaper className="text-green-600 text-xl lg:text-2xl" />
            <h3 className="font-semibold text-lg lg:text-xl text-blue-900">
              Journals & Periodicals
            </h3>
          </div>

          <p className="text-gray-600 lg:text-xl mb-1 lg:mb-4">
            Access to technical journals and magazines to stay updated with
            latest IT trends and innovations.
          </p>

          <div className="bg-gray-50 px-2 lg:px-3 py-1 border lg:text-lg border-gray-200 rounded-md text-gray-700">
            <p className="font-semibold mb-0 lg:mb-2">Subscriptions Include:</p>
            <ul className="list-disc pl-5 lg:space-y-1">
              <li>Computer Science Journals</li>
              <li>Software Development Magazines</li>
              <li>Technology & Innovation Reports</li>
              <li>Industry News & IT Updates</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
          <div className="flex items-center gap-3 mb-1 lg:mb-4">
            <FaCloud className="text-yellow-600 text-xl lg:text-2xl" />
            <h3 className="font-semibold text-lg lg:text-xl text-blue-900">
              E-Resources & Digital Library
            </h3>
          </div>

          <p className="text-gray-600 lg:text-lg mb-1 lg:mb-4">
            Access digital learning resources including e-books, research
            papers, and coding platforms anytime.
          </p>

          <div className="bg-gray-50 px-2 lg:px-3 py-1 border lg:text-lg border-gray-200 rounded-md text-gray-700">
            <p className="font-semibold mb-0 lg:mb-2">Digital Access:</p>
            <ul className="list-disc pl-5 lg:space-y-1">
              <li>NPTEL & SWAYAM Courses</li>
              <li>Online Coding Platforms</li>
              <li>Research Papers & Case Studies</li>
              <li>E-books and Online Tutorials</li>
            </ul>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-purple-500">
          <div className="flex items-center gap-3 mb-1 lg:mb-4">
            <FaBookmark className="text-purple-600 text-xl lg:text-2xl" />
            <h3 className="font-semibold text-lg lg:text-xl text-blue-900">
              Reference Section
            </h3>
          </div>

          <p className="text-gray-600 lg:text-lg mb-1 lg:mb-4">
            Dedicated section with reference materials for quick learning and
            academic support.
          </p>

          <div className="bg-gray-50 px-2 lg:px-3 py-1 border lg:text-lg border-gray-200 rounded-md text-gray-700">
            <p className="font-semibold mb-0 lg:mb-2">Reference Materials:</p>
            <ul className="list-disc pl-5 lg:space-y-1">
              <li>Programming Guides & Documentation</li>
              <li>Technical Handbooks</li>
              <li>University Notes & Syllabus</li>
              <li>Project & Research References</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCollections;
