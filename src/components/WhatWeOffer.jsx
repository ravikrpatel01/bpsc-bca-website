import {
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaLaptopCode,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const WhatWeOffer = () => {
  return (
    <div className="bg-gray-100 py-3 lg:py-5 px-2 lg:px-6">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-blue-900 mb-2 lg:mb-12">
        What We Offer Our Students
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 lg:gap-8">
        {/* Card 1 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center border border-blue-500 justify-center rounded-full bg-blue-100 shrink-0">
              <FaUserTie className="text-blue-500 text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Expert Faculty
              </h3>
              <p className="text-gray-600 lg:text-lg text-justify">
                Our experienced faculty members provide strong technical
                guidance and practical knowledge in programming, databases, and
                software development.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-green-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center border border-green-500 justify-center rounded-full bg-green-100 shrink-0">
              <FaBookOpen className="text-green-500 text-lg lg:text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Updated Curriculum
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Industry-oriented syllabus covering web development, data
                structures, databases, and emerging technologies like AI.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-yellow-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-yellow-500 rounded-full bg-yellow-100 shrink-0">
              <FaLaptopCode className="text-yellow-500 text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Practical Training
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Hands-on coding sessions, real-world projects, and internships
                to build strong development skills.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-purple-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center border border-purple-500 justify-center rounded-full bg-purple-100 shrink-0">
              <FaBuilding className="text-purple-500 text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Modern Infrastructure
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Well-equipped computer labs, smart classrooms, and digital
                resources for an enhanced learning experience.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-red-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center border border-red-500 justify-center rounded-full bg-red-100 shrink-0">
              <FaBriefcase className="text-red-500 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Placement Support
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Dedicated placement assistance, resume building, mock
                interviews, and internship opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white border p-2 lg:p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
          <div className="flex items-start gap-2 lg:gap-4">
            <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center border border-indigo-500 justify-center rounded-full bg-indigo-100 shrink-0">
              <FaUsers className="text-indigo-500 text-xl lg:text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
                Holistic Development
              </h3>
              <p className="text-gray-600 lg:text-lg">
                Focus on communication skills, teamwork, leadership, and
                personality development for overall growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
