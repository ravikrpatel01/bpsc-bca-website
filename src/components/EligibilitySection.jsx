import { FaUserGraduate } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { Link } from "react-router-dom";

const EligibilitySection = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-linear-to-r bg-blue-500 text-white text-center py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Eligibility Criteria
        </h1>

        <p className="mt-3 text-xl text-gray-200">
          Check if you meet the requirements for our BCA program
        </p>

        <p className="mt-3 text-sm text-gray-300">
          <Link to="/">Home</Link> <span>/</span>
          <span className="text-white"> Eligibility</span>
        </p>
      </div>

      {/* Content */}
      <div className="bg-gray-100 py-16 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-semibold text-blue-800">
          Are You Eligible?
        </h2>

        <p className="mt-4 max-w-4xl text-xl mx-auto text-gray-600">
          Before applying, ensure you meet the eligibility criteria set by{" "}
          <b>AICTE </b>
          and <b>Vinoba Bhave University</b>. Below are the basic requirements
          for admission to the BCA program.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow-md font-medium cursor-pointer">
            <FaUserGraduate />
            BCA Eligibility
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg flex items-center gap-1 shadow-md font-medium cursor-pointer">
            Apply Now
            <GiClick />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;
