import {
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Why Choose Baijnath Prasad Snehi College?
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-blue-500 border-l-4 hover:shadow-lg transition">
          <FaChalkboardTeacher className="text-blue-600 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-blue-900">
            Expert Faculty
          </h3>
          <p className="text-gray-600 text-sm">
            Our experienced faculty members bring strong technical knowledge and
            practical industry experience to guide students effectively.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-600 border-l-4 hover:shadow-lg transition">
          <FaBuilding className="text-emerald-700 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-emerald-900">
            Modern Infrastructure
          </h3>
          <p className="text-gray-600 text-sm">
            Well-equipped computer labs, digital classrooms, and advanced
            facilities create a strong learning environment for students.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-yellow-500 border-l-4 hover:shadow-lg transition">
          <FaBookOpen className="text-yellow-500 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-yellow-700">
            Updated Curriculum
          </h3>
          <p className="text-gray-600 text-sm">
            Industry-oriented syllabus covering programming, web development,
            databases, and emerging technologies.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-purple-500 border-l-4 hover:shadow-lg transition">
          <FaLaptopCode className="text-purple-700 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-purple-900">
            Practical Training
          </h3>
          <p className="text-gray-600 text-sm">
            Hands-on projects, coding practice, and real-world assignments help
            students build strong technical skills.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-red-500 border-l-4 hover:shadow-lg transition">
          <FaBriefcase className="text-red-700 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-red-700">
            100% Placement Support
          </h3>
          <p className="text-gray-600 text-sm">
            Dedicated placement assistance, resume building, mock interviews,
            and career guidance for job readiness.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-500 border-l-4 hover:shadow-lg transition">
          <FaUsers className="text-indigo-700 text-3xl mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-indigo-900">
            Student-Centric Approach
          </h3>
          <p className="text-gray-600 text-sm">
            Personalized attention, mentorship, and a supportive environment to
            help students grow academically and professionally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
