import {
  FaGraduationCap,
  FaUserGraduate,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

const GovernmentScholarships = () => {
  return (
    <div className="bg-gray-100 py-5 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Government Scholarship Schemes
      </h2>

      <div className="max-w-6xl mx-auto space-y-8">
        {/* Card 1 */}
        <div className="bg-white border rounded-xl shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <FaGraduationCap className="text-blue-500 text-2xl" />
            <h3 className="font-semibold text-xl text-blue-800">
              Post-Matric Scholarship for OBC/SC/ST Students (E-Kalyan,
              Jharkhand)
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-4">
            Scholarship for OBC/SC/ST students pursuing higher education to
            cover tuition fees and maintenance allowance.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg">Eligibility:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>OBC/SC/ST category certificate</li>
                <li>Family income below ₹2.5 lakh/year</li>
                <li>Enrolled in recognized institution</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg">Benefits:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>Full tuition fee reimbursement</li>
                <li>Maintenance allowance</li>
                <li>Study material support</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg">How to Apply:</h4>
              <p className="text-sm text-gray-600">
                Apply online through E-Kalyan Scholarship Portal{" "}
              </p>
              <h4 className="font-semibold text-lg mt-1">Website Link:</h4>
              <p className="text-sm text-gray-600">
                https://ekalyan.cgg.gov.in/
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-3">
            <FaUserGraduate className="text-emerald-700 text-2xl" />
            <h3 className="font-semibold text-xl text-emerald-700">
              OBC Scholarship Scheme
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-4">
            Financial assistance for students belonging to Other Backward
            Classes pursuing professional courses.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Eligibility:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>OBC (Non-Creamy Layer)</li>
                <li>Family income below ₹1 lakh/year</li>
                <li>Passed previous exam with 50%</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Benefits:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>Tuition fee assistance</li>
                <li>Maintenance allowance</li>
                <li>Book allowance</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">How to Apply:</h4>
              <p className="text-sm text-gray-600">
                Apply through NSP or State Scholarship Portal
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-center gap-3 mb-3">
            <FaWallet className="text-yellow-500 text-2xl" />
            <h3 className="font-semibold text-xl text-yellow-700">
              Economically Weaker Section (EWS) Scholarship
            </h3>
          </div>

          <p className="text-gray-600 text-xl mb-4">
            Financial support for students from economically weaker sections to
            pursue higher education.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Eligibility:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>EWS certificate</li>
                <li>Family income below ₹8 lakh/year</li>
                <li>Not availing other scholarships</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Benefits:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>Partial fee waiver</li>
                <li>₹10,000–₹50,000/year</li>
                <li>One-time book grant</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">How to Apply:</h4>
              <p className="text-sm text-gray-600">
                Submit application to college scholarship cell
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border rounded-xl shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-purple-500 text-2xl" />
            <h3 className="font-semibold text-xl text-purple-700">
              Minority Scholarship (Pre & Post Matric)
            </h3>
          </div>

          <p className="text-gray-600 text-lg mb-4">
            Scholarship for students belonging to minority communities (Muslim,
            Christian, Sikh, Buddhist, Jain, Parsi).
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Eligibility:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>Minority community certificate</li>
                <li>Family income below ₹2 lakh/year</li>
                <li>At least 50% marks in previous exam</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">Benefits:</h4>
              <ul className="text-sm text-gray-600 list-disc ml-4">
                <li>100% tuition fee reimbursement</li>
                <li>Maintenance allowance</li>
                <li>Additional allowances</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-3 rounded">
              <h4 className="font-semibold text-lg mb-1">How to Apply:</h4>
              <p className="text-sm text-gray-600">
                Apply through National Scholarship Portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentScholarships;
