import { FaBullseye, FaCheckCircle, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const VisionMission = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-linear-to-r bg-blue-500 text-white py-4 lg:py-16 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">
          Vision & Mission
        </h1>

        <p className="max-w-2xl mx-auto lg:text-lg opacity-90">
          Our guiding principles and commitment to excellence in computer
          education
        </p>

        <div className="mt-2 lg:mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="font-semibold">Vision & Mission</span>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-gray-100 py-4 lg:py-16 px-2 lg:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/vision.svg"
              alt="Vision"
              className="w-full h-40 lg:h-80 object-cover rounded-2xl border-5 border-blue-600"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-600 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full">
                <FaEye className="text-xl lg:text-2xl" />
              </div>
              <h2 className="lg:text-2xl text-xl font-bold text-blue-900">
                Our Vision
              </h2>
            </div>

            <div className="bg-white border lg:text-lg px-2 py-2 lg:px-5 lg:py-3 rounded-xl shadow-md border-l-4 border-blue-600">
              <p className="text-gray-700 mb-4">
                To become a{" "}
                <span className="font-semibold">center of excellence</span> in
                computer education, producing skilled IT professionals ready for
                the digital era.
              </p>

              <p className="text-gray-600 mb-4">
                We aim to nurture developers, innovators, and leaders who
                contribute to the growth of technology and society.
              </p>

              <p className="text-gray-600">
                Our vision is to provide industry-oriented learning and modern
                technical knowledge for future success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-gray-100 pb-10 px-2 lg:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 lg:gap-10 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-700 text-white w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full">
                <FaBullseye className="text-xl lg:text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-green-900">
                Our Mission
              </h2>
            </div>

            <div className="bg-white border px-2 py-2 lg:px-5 lg:py-3 rounded-xl shadow-md border-l-4 border-green-700 space-y-1">
              <p className="text-gray-700 mb-1 lg:text-lg text-justify font-medium">
                To provide quality computer education that equips students with
                technical knowledge, practical skills, and professional values.
              </p>

              {/* Points */}
              <div className="flex gap-2 lg:text-lg items-center">
                <FaCheckCircle className="text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  To develop strong programming and problem-solving skills
                </p>
              </div>

              <div className="flex gap-2 lg:text-lg items-center">
                <FaCheckCircle className="text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  To provide hands-on training through projects and labs
                </p>
              </div>

              <div className="flex gap-2 lg:text-lg">
                <FaCheckCircle className="text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  To integrate modern technologies like web, AI, and software
                  development
                </p>
              </div>

              <div className="flex gap-2 lg:text-lg items-center">
                <FaCheckCircle className="text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  To prepare students for placements and industry careers
                </p>
              </div>

              <div className="flex gap-2 lg:text-lg">
                <FaCheckCircle className="text-green-700 mt-1 shrink-0" />
                <p className="text-gray-600">
                  To encourage innovation, teamwork, and continuous learning
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-3 lg:mt-15">
            <img
              src="/mission.svg"
              alt="Mission"
              className="w-full h-40 lg:h-90 object-cover rounded-2xl border-5 border-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
