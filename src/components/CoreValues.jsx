import {
  FaHandsHelping,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const CoreValues = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-10 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-4 lg:mb-12">
        Our Core Values
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 lg:gap-10">
        {/* Left Side */}
        <div className="lg:space-y-8 space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-blue-600 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaLightbulb className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in computer education, focusing on
                strong programming skills, problem-solving, and continuous
                learning.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-yellow-500 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaRocket className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                We encourage innovation through coding, real-world projects, and
                adoption of modern technologies like AI, web, and software
                development.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-red-500 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaUsers className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Inclusivity
              </h3>
              <p className="text-gray-600 text-sm">
                We promote an inclusive learning environment where every student
                gets equal opportunity to grow and succeed in the tech world.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="bg-green-600 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaShieldAlt className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We believe in honesty, ethical coding practices, and
                professional behavior as the foundation of successful IT
                careers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-purple-600 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaHandsHelping className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Social Responsibility
              </h3>
              <p className="text-gray-600 text-sm">
                We empower students to use technology for solving real-world
                problems and contributing positively to society.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-indigo-600 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-lg shrink-0">
              <FaTrophy className="text-2xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">
                Student Success
              </h3>
              <p className="text-gray-600 text-sm">
                Our focus is on building job-ready IT professionals through
                skill development, placements, and career guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
