import { FaCheckCircle } from "react-icons/fa";

const ScholarshipProcess = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        How to Apply for Scholarships
      </h2>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto mb-12">
        {/* Step 1 */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
            1
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Check Eligibility
          </h3>
          <p className="text-gray-600 text-sm">
            Review scholarship criteria and ensure you meet all requirements
            before applying
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-600 text-white text-xl font-bold mb-4">
            2
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Gather Documents
          </h3>
          <p className="text-gray-600 text-sm">
            Collect all required certificates, income proof, and academic
            documents
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-600 text-white text-xl font-bold mb-4">
            3
          </div>
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Submit Application
          </h3>
          <p className="text-gray-600 text-sm">
            Fill online form on NSP or submit physical application to college
            office
          </p>
        </div>
      </div>

      {/* Documents Box */}
      <div className="max-w-5xl mx-auto bg-white border border-l-4 border-blue-500 shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-6">
          Required Documents:
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              College Bonafide Certificate
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Scholarship application form (duly filled)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Previous year mark sheets (attested)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Income certificate (within 6 months)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Caste/Category certificate (if applicable)
            </li>
          </ul>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Residential Certificate
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Bank account details (passbook copy)
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Aadhar card copy
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Passport size photographs
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-blue-600" />
              Admission receipt/Fee payment proof
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipProcess;
