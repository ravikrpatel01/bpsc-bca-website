import { FaEnvelope, FaPhoneAlt, FaQuoteLeft } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GiNotebook, GiTeacher } from "react-icons/gi";

const PrincipalMsg = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-16 px-2 lg:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="bg-blue-50 rounded-xl shadow-md p-2 lg:p-6 border border-gray-400">
          <div className="w-full flex justify-center">
            <img
              src="/principal_image.jpeg"
              alt="Principal"
              className="w-30 h-30 lg:w-45 lg:h-45 bg-gray-200 object-center border-2 border-emerald-700 p-2 rounded-full mb-1"
            />
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold text-blue-900 text-center">
            Dr. Bhupendra Thakur
          </h3>
          <p className="text-center lg:text-lg text-green-800 mb-4 mt-1">
            <span className="px-1 rounded border font-medium bg-green-100">
              Principal
            </span>
          </p>

          <div className="bg-blue-50 text-lg rounded-md border border-gray-400 p-2 lg:p-3 text-gray-700 mb-2 lg:mb-4">
            <p className="flex items-center text-sm gap-1">
              <FaGraduationCap className="lg:text-lg" />
              Ph.D. in Education
            </p>
            <p className="flex items-center text-sm gap-1">
              <GiTeacher className="lg:text-lg" />
              25+ Years Experience
            </p>
            <p className="flex items-center text-sm gap-1">
              <GiNotebook className="lg:text-lg" />
              NCTE Expert Member
            </p>
          </div>

          <div className="text-lg text-gray-600 lg:space-y-2 border-t pt-1 lg:pt-3">
            <div className="flex items-center text-sm gap-2 font-medium">
              <FaEnvelope className="text-blue-600 lg:text-lg" />
              skshekhar15@gmail.com
            </div>
            <div className="flex items-center text-sm gap-2 font-medium">
              <FaPhoneAlt className="text-green-700 lg:text-lg" />
              +91-8340784927
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 bg-white border rounded-xl shadow-md p-2 lg:p-6 border-l-4 border-green-800">
          <h2 className="text-lg lg:text-xl font-semibold text-blue-900 mb-0 lg:mb-3">
            Dear Students, Faculty, and Well-wishers,
          </h2>

          <p className="text-gray-700 mb-2 lg:mb-4 lg:text-lg leading-relaxed">
            It gives me immense pleasure to welcome you to our college, an
            institution dedicated to nurturing future professionals in the field
            of computer applications. As Principal, I am honored to lead this
            vibrant community of learners and educators.
          </p>

          {/* Quote */}
          <div className="bg-gray-100 p-2 lg:p-4 rounded-md shadow-sm mb-2 lg:mb-4">
            <div className="flex gap-3">
              <FaQuoteLeft className="text-blue-500 text-4xl" />
              <p className="text-gray-700 lg:text-lg italic">
                Learning to code is not just a skill—it is the power to innovate
                and transform ideas into reality. We aim to develop future-ready
                IT professionals who can make a real impact in the digital
                world.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
            Our Educational Philosophy
          </h3>
          <p className="text-gray-600 lg:text-lg mb-2 lg:mb-4">
            Education is the most powerful tool for transformation. We believe
            in holistic development, combining technical knowledge, ethical
            values, and innovation to shape future leaders.
          </p>

          {/* Section 2 */}
          <h3 className="font-semibold text-lg lg:text-xl text-blue-900 mb-0 lg:mb-2">
            Why Choose Our College?
          </h3>
          <p className="text-gray-600 lg:text-lg">
            Our institution provides strong academic support, practical
            exposure, and career guidance. With experienced faculty and modern
            infrastructure, we ensure that students are industry-ready and
            confident to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMsg;
