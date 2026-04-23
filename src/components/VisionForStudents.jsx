import { FaCheckCircle } from "react-icons/fa";

const VisionForStudents = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto bg-white border rounded-xl shadow-md border-l-4 border-blue-600 p-5">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          My Vision for Our Students
        </h2>

        <p className="text-gray-700 text-xl mb-6 leading-relaxed">
          As Principal, my vision is to see every student pursuing BCA emerge as
          a
          <span className="font-semibold">
            {" "}
            confident, skilled, and industry-ready IT professional
          </span>
          . I want you to be equipped not only with theoretical knowledge but
          also with practical coding skills, problem-solving ability, and a
          passion for technology.
        </p>

        {/* Highlight Box */}
        <div className="bg-gray-50 border-l-4 border-green-500 border rounded-md p-5 mb-6">
          <h3 className="font-semibold text-lg text-blue-900 mb-4">
            I encourage each of you to:
          </h3>

          <div className="space-y-2 text-lg">
            <div className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Be curious learners</span> –
                Keep exploring new technologies, tools, and programming concepts
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Embrace challenges</span> –
                Debugging and problem-solving are keys to becoming a great
                developer
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Practice consistently</span> –
                Regular coding and project work build real expertise
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Innovate and adapt</span> –
                Learn modern technologies like web development, AI, and software
                engineering
              </p>
            </div>

            <div className="flex gap-3">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Lead with integrity</span> –
                Follow ethical coding practices and professional values
              </p>
            </div>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-2 text-lg leading-relaxed">
          Remember, success in the IT field comes from continuous learning and
          practical application. Stay consistent, build projects, collaborate
          with peers, and make the most of every opportunity.
        </p>

        {/* Parents */}
        <h3 className="font-semibold text-lg text-blue-900 mb-1">
          To Parents and Guardians
        </h3>
        <p className="text-gray-600 text-lg mb-2">
          We ensure a supportive and growth-oriented environment where students
          develop strong technical skills, discipline, and confidence to succeed
          in the IT industry.
        </p>

        {/* Faculty */}
        <h3 className="font-semibold text-lg text-blue-900 mb-1">
          To Faculty and Staff
        </h3>
        <p className="text-gray-600 text-lg">
          I extend my gratitude to our dedicated faculty who continuously guide
          students with knowledge, mentorship, and industry insights, shaping
          future IT professionals.
        </p>
      </div>
    </div>
  );
};

export default VisionForStudents;
