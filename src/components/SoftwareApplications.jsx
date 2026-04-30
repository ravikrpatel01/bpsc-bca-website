import {
  FaChartBar,
  FaCheck,
  FaCode,
  FaFileWord,
  FaGraduationCap,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";

const SoftwareApplications = () => {
  return (
    <div className="bg-linear-to-b from-gray-100 to-gray-200 py-4 lg:py-10 px-2 lg:px-6">
      {/* Heading */}
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-3 lg:mb-12 relative inline-block left-1/2 -translate-x-1/2">
        Software & Applications
        <span className="absolute right-0 bottom-0 w-16 h-1 bg-yellow-400 rounded"></span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-2 lg:gap-8">
        {/* Office Suite */}
        <div className="bg-white/80 border-l-4 border-blue-500 backdrop-blur-md border  lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-blue-100 text-blue-600">
            <FaFileWord className="lg:text-3xl text-2xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Office Suite
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-blue-500" />
              Microsoft Office 365
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-blue-500" />
              Word, Excel, PowerPoint
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-blue-500" />
              Google Workspace
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-blue-500" />
              PDF creators and editors
            </li>
          </ul>
        </div>

        {/* Educational Tools */}
        <div className="bg-white/80 border-l-4 border-emerald-500 backdrop-blur-md border lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-green-100 text-emerald-600">
            <FaGraduationCap className="text-2xl lg:text-3xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Educational Tools
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-emerald-500" />
              SMART Notebook
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-emerald-500" />
              GeoGebra (Mathematics)
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-emerald-500" />
              NCERT e-content and apps
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-emerald-500" />
              Language learning software
            </li>
          </ul>
        </div>

        {/* Multimedia Suite */}
        <div className="bg-white/80 border-l-4 border-yellow-500 backdrop-blur-md border  lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-yellow-100 text-yellow-600">
            <FaPalette className="text-2xl lg:text-3xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Multimedia Suite
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-yellow-500" />
              Adobe Creative Cloud
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-yellow-500" />
              Canva Pro
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-yellow-500" />
              Video editing software
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-yellow-500" />
              Audio recording tools
            </li>
          </ul>
        </div>

        {/* Programming Tools */}
        <div className="bg-white/80 border-l-4 border-purple-500 backdrop-blur-md border  lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-purple-100 text-purple-600">
            <FaCode className="text-2xl lg:text-3xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Programming Tools
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-purple-500" />
              Python, Java, C++
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-purple-500" />
              Visual Studio Code
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-purple-500" />
              Scratch
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-purple-500" />
              Web development tools
            </li>
          </ul>
        </div>

        {/* Research Tools */}
        <div className="bg-white/80 border-l-4 border-red-500 backdrop-blur-md border lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-red-100 text-red-600">
            <FaChartBar className="text-2xl lg:text-3xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Research Tools
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-red-500" />
              SPSS (Statistics)
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-red-500" />
              Mendeley
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-red-500" />
              Google Forms
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-red-500" />
              Data analysis software
            </li>
          </ul>
        </div>

        {/* Security Software */}
        <div className="bg-white/80 border-l-4 border-indigo-500 backdrop-blur-md border lg:p-6 p-2 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
          <div className="lg:w-16 lg:h-16 w-10 h-10 border flex items-center justify-center rounded-full lg:mb-4 mx-auto bg-indigo-100 text-indigo-600">
            <FaShieldAlt className="text-2xl lg:text-3xl" />
          </div>
          <h3 className="font-semibold text-blue-900 text-xl lg:mb-4 text-center">
            Security Software
          </h3>
          <ul className="space-y-2 lg:text-lg text-gray-700">
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-indigo-500" />
              Licensed antivirus
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-indigo-500" />
              Firewall protection
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-indigo-500" />
              Content filtering
            </li>
            <li className="flex gap-2">
              <FaCheck className="mt-1 text-indigo-500" />
              Regular updates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareApplications;
