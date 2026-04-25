import { FaAward, FaUniversity } from "react-icons/fa";

const Accreditation = () => {
  return (
    <div className="px-2 max-w-6xl mx-auto md:px-16 py-4 lg:py-8 bg-white">
      <h2 className="text-center text-2xl lg:text-3xl text-blue-900 font-bold">
        Recognition and Affiliations
      </h2>
      <div className="grid md:grid-cols-2 gap-3 lg:gap-8 mt-5">
        {/* AICTE Card */}
        <div className="bg-gray-100 rounded-xl shadow-md p-3 lg:p-8 text-center hover:bg-emerald-50 border border-t-4 border-blue-600">
          <div className="text-blue-600 border bg-blue-200 p-2 text-3xl mb-4 inline-flex items-center justify-center rounded-md">
            <FaAward className="text-3xl lg:text-5xl" />
          </div>

          <h2 className="text-xl font-semibold text-blue-700">
            AICTE Approved
          </h2>

          <p className="mt-2 text-gray-600">
            All India Council for Technical Education
          </p>

          <p className="mt-2 text-sm text-blue-600">
            Ensuring Quality Technical Education
          </p>
        </div>

        {/* VBU Card */}
        <div className="bg-gray-100 rounded-xl shadow-md p-3 lg:p-8 text-center hover:bg-blue-50 border border-t-4 border-emerald-600">
          <div className="text-emerald-600 border bg-emerald-100 p-2 text-3xl mb-4 inline-flex items-center justify-center rounded-md">
            <FaUniversity className="text-3xl lg:text-5xl" />
          </div>

          <h2 className="text-xl font-semibold text-emerald-700">
            Vinoba Bhave University
          </h2>

          <p className="mt-2 text-gray-600">Affiliated for BCA Programmes</p>

          <p className="mt-2 text-sm text-emerald-600">
            Strong Academic Framework
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
