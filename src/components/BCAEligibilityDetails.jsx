import { FaCheckCircle, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";

const BCAEligibilityDetails = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-8 px-2 lg:px-6 md:px-16">
      {/* Top Icon + Title */}
      <div className="text-center">
        <div className="bg-blue-600 w-12 h-12 lg:w-16 lg:h-16 mx-auto flex items-center border-2 border-emerald-400 justify-center rounded-full text-white text-4xl">
          <FaUserGraduate className="text-2xl" />
        </div>

        <h2 className="mt-0 lg:mt-4 text-xl md:text-3xl font-semibold text-blue-800">
          BCA Program Eligibility
        </h2>

        <p className="mt-2 text-gray-600 lg:text-xl">
          <span className="font-bold">Bachelor of Computer Applications</span> –
          Three Year Undergraduate Degree
        </p>
      </div>

      {/* Main Card */}
      <div className="mt-3 lg:mt-10 bg-white border rounded-xl shadow-md p-2 lg:p-8 border-t-4 border-blue-600">
        <h3 className="text-xl lg:text-2xl font-semibold text-blue-800 flex items-center gap-2">
          <FaLaptopCode />
          Academic Qualifications
        </h3>

        <div className="grid md:grid-cols-2 gap-3 lg:gap-8 mt-2 lg:mt-6">
          {/* Left Side */}
          <div>
            <h4 className="font-semibold text-lg lg:text-xl text-gray-800 mb-3">
              Educational Requirements:
            </h4>

            {/* Card 1 */}
            <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg mb-1 lg:mb-4">
              <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                10+2 Qualification:
              </p>
              <p className="text-gray-600 lg:text-lg mt-1">
                Candidates must have passed{" "}
                <span className="font-bold">10+2 (Intermediate)</span> from a
                recognized board.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg mb-1 lg:mb-4">
              <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Minimum Marks:
              </p>
              <p className="text-gray-600 lg:text-lg mt-1">
                Minimum <span className="font-bold">45%–50%</span> aggregate
                marks (as per university norms).
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg">
              <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Reserved Categories:
              </p>
              <p className="text-gray-600 lg:text-lg mt-1">
                Relaxation in marks for{" "}
                <span className="font-bold">SC/ST/OBC</span> candidates as per
                government rules.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h4 className="font-semibold text-lg lg:text-xl text-gray-800 mb-1 lg:mb-3">
              Subject Preferences:
            </h4>

            <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg">
              <p className="text-gray-600 lg:text-xl mb-2">
                Students from any stream can apply for BCA:
              </p>

              <ul className="space-y-2 text-[0.98rem] lg:text-lg text-gray-700">
                <li className="flex items-center whitespace-nowrap gap-2">
                  <FaLaptopCode className="text-xl lg:text-2xl text-blue-700" />
                  <span className="font-bold">Science:</span> Mathematics,
                  Computer Science
                </li>
                <li className="flex items-center gap-2">
                  <IoBarChartSharp className="text-xl lg:text-2xl text-emerald-700" />
                  <span className="font-bold">Commerce:</span> Accounts,
                  Business Studies
                </li>
                <li className="flex items-center gap-2">
                  <LuNotebookPen className="text-xl lg:text-2xl text-yellow-500" />
                  <span className="font-bold">Arts:</span> Open to all streams
                </li>
                <li className="flex items-center gap-2">
                  <FaDesktop className="text-xl lg:text-2xl text-purple-500" />
                  Basic Computer Knowledge is an added advantage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCAEligibilityDetails;
