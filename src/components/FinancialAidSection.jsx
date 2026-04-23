import { Link } from "react-router-dom";

const FinancialAidSection = () => {
  return (
    <div>
      <div className="bg-linear-to-r bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Scholarships & Financial Aid
        </h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Making quality education accessible through various scholarship
          programs and financial assistance
        </p>

        <div className="mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="font-semibold">Scholarships</span>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Financial Support for Your Education
        </h2>

        <p className="max-w-4xl text-xl mx-auto text-gray-700 leading-relaxed mb-6">
          At <span className="font-medium">Baijnath Prasad Snehi College</span>,
          we believe that financial constraints should never be a barrier to
          quality education. We offer various{" "}
          <span className="font-semibold">
            scholarships, fee concessions, and financial aid programs
          </span>{" "}
          to support deserving and needy students.
        </p>

        <p className="max-w-3xl text-xl mx-auto text-gray-600 leading-relaxed">
          Our scholarship programs include government schemes, merit-based
          awards, need-based assistance, and special category scholarships to
          ensure every qualified student can pursue their teaching dreams.
        </p>
      </div>
    </div>
  );
};

export default FinancialAidSection;
