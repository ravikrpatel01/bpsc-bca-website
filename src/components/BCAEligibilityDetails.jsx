import { FaCheckCircle, FaLaptopCode, FaUserGraduate } from "react-icons/fa";

const BCAEligibilityDetails = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-4 px-2 lg:px-6 md:px-16">
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

        <h4 className="font-semibold text-lg lg:text-xl text-gray-800 mt-2 lg:mt-6 mb-1 lg:mb-4">
          Educational Requirements:
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
          {/* Card 1 */}
          <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg hover:shadow-md transition-all">
            <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              10+2 Qualification
            </p>
            <p className="text-gray-600 lg:text-lg mt-0 lg:mt-2">
              Candidates must have passed{" "}
              <span className="font-bold">
                10+2 (Intermediate) in any stream (Science, Commerce, or Arts)
              </span>{" "}
              from a recognized board.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg hover:shadow-md transition-all">
            <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Minimum Marks
            </p>
            <p className="text-gray-600 lg:text-lg mt-0 lg:mt-2">
              Minimum <span className="font-bold">45%–50%</span> aggregate marks
              (as per university norms).
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg hover:shadow-md transition-all">
            <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Mandatory Subjects
            </p>
            <p className="text-gray-600 lg:text-lg mt-0 lg:mt-2">
              Must have passed in{" "}
              <span className="font-bold">
                Mathematics, Business Mathematics, Computer Science, or
                Information Practices (I.P.)
              </span>
              .
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 border border-gray-300 p-2 lg:p-4 rounded-lg hover:shadow-md transition-all">
            <p className="font-medium flex text-lg lg:text-xl items-center gap-2">
              <FaCheckCircle className="text-blue-600" />
              Reserved Categories
            </p>
            <p className="text-gray-600 lg:text-lg mt-0 lg:mt-2">
              Relaxation in marks for{" "}
              <span className="font-bold">SC/ST/OBC</span> candidates as per
              government rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCAEligibilityDetails;
