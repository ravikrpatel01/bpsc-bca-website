import {
  FaCheck,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";

const LibraryRules = () => {
  return (
    <div className="bg-gray-100 py-4 pb-10 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-3 lg:mb-12">
        Library Rules & Guidelines
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Do's */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 border-l-4 border-emerald-700">
          <div className="flex items-center gap-2 mb-1 lg:mb-4">
            <FaCheckCircle className="text-emerald-700 text-xl lg:text-2xl" />
            <h3 className="text-xl font-semibold text-emerald-900">Do’s</h3>
          </div>

          <ul className="lg:space-y-3 text-gray-700 lg:text-lg">
            {[
              "Maintain silence in the library",
              "Show library card for issuing books",
              "Return books on or before due date",
              "Handle books and resources with care",
              "Keep personal belongings in designated areas",
              "Switch mobile phones to silent mode",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheck className="text-emerald-700 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-white border rounded-xl shadow-md p-2 lg:p-6 border-l-4 border-red-500">
          <div className="flex items-center gap-2 mb-1 lg:mb-4">
            <FaTimesCircle className="text-red-500 text-xl lg:text-2xl" />
            <h3 className="text-xl font-semibold text-red-500">Don’ts</h3>
          </div>

          <ul className="lg:space-y-3 text-gray-700 lg:text-lg">
            {[
              "Do not make noise or disturb others",
              "Do not eat or drink inside the library",
              "Do not damage or deface books",
              "Do not remove books without proper issue",
              "Do not use mobile phones for calls",
              "Do not misplace or hide library materials",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaTimes className="text-red-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Note */}
      <div className="max-w-6xl mx-auto mt-2 lg:mt-8">
        <div className="flex gap-3 border items-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 p-2 lg:p-4 rounded-md text-sm">
          <FaExclamationTriangle className="shrink-0 text-2xl" />
          <p className="lg:text-lg">
            <span className="font-semibold">Note:</span> Late return of books
            will attract a fine of ₹5 per day. Lost or damaged books must be
            replaced or paid for at current market price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LibraryRules;
