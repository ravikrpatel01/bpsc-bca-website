import { FaInfoCircle } from "react-icons/fa";

const ScholarshipInfo = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Important Information
      </h2>

      <div className="max-w-5xl mx-auto bg-white border rounded-xl shadow-md p-6 border-l-4 border-yellow-500">
        <ul className="space-y-5 text-gray-700">
          <li className="flex gap-3">
            <FaInfoCircle className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Application Deadline:</span>{" "}
              Scholarship applications must be submitted within 30 days of
              admission confirmation.
            </p>
          </li>

          <li className="flex gap-3">
            <FaInfoCircle className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Renewal:</span> Most scholarships
              are renewable each year subject to maintaining required attendance
              and academic performance.
            </p>
          </li>

          <li className="flex gap-3">
            <FaInfoCircle className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Multiple Scholarships:</span>{" "}
              Students can apply for multiple scholarships but can avail only
              one government scholarship at a time.
            </p>
          </li>

          <li className="flex gap-3">
            <FaInfoCircle className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Verification:</span> All
              certificates and documents are subject to verification. False
              information leads to scholarship cancellation.
            </p>
          </li>

          <li className="flex gap-3">
            <FaInfoCircle className="text-yellow-500 mt-1" />
            <p>
              <span className="font-semibold">Contact:</span> For
              scholarship-related queries, contact the College Scholarship Cell
              during office hours (9 AM - 5 PM).
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScholarshipInfo;
