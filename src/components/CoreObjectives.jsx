import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const CoreObjectives = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-3">
        Our Core Objectives
      </h2>

      <p className="text-center text-lg text-gray-600 mb-8">
        Strategic goals that drive our commitment to excellence in computer
        education
      </p>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-blue-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full mb-4">
            <FaGraduationCap className="text-blue-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Academic Excellence
          </h3>
          <p className="text-gray-600 text-lg">
            To provide strong academic foundation in programming, data
            structures, and computer science fundamentals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-green-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-green-500 rounded-full mb-4">
            <FaLaptopCode className="text-green-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Practical Training
          </h3>
          <p className="text-gray-600 text-lg">
            To offer hands-on coding practice, real-world projects, and
            lab-based learning for skill development.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-yellow-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-yellow-500 rounded-full mb-4">
            <FaCode className="text-yellow-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Technology Integration
          </h3>
          <p className="text-gray-600 text-lg">
            To integrate modern technologies like web development, AI, and
            software engineering into the curriculum.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-purple-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-purple-500 rounded-full mb-4">
            <FaHeart className="text-purple-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Value Education
          </h3>
          <p className="text-gray-600 text-lg">
            To develop ethical values, teamwork, and professional responsibility
            among students.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-red-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-red-500 rounded-full mb-4">
            <FaUsers className="text-red-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Inclusive Learning
          </h3>
          <p className="text-gray-600 text-lg">
            To create a supportive environment where every student gets equal
            opportunity to learn and grow.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white border rounded-xl shadow-md px-4 py-3 border-t-4 border-indigo-500 hover:shadow-lg transition">
          <div className="w-12 h-12 flex items-center justify-center border-2 border-indigo-500 rounded-full mb-4">
            <FaBriefcase className="text-indigo-500 text-3xl" />
          </div>
          <h3 className="font-semibold text-xl text-blue-900 mb-2">
            Career Readiness
          </h3>
          <p className="text-gray-600 text-lg">
            To prepare students for placements with industry skills,
            internships, and career guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreObjectives;
