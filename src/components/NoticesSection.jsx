import { useEffect, useRef } from "react";
import { FaBullhorn, FaFilePdf, FaUniversity } from "react-icons/fa";

const NoticesSection = () => {
  const collegeRef = useRef(null);
  const universityRef = useRef(null);

  const collegeInterval = useRef(null);
  const universityInterval = useRef(null);

  const startScroll = (ref, intervalRef) => {
    intervalRef.current = setInterval(() => {
      if (!ref.current) return;

      ref.current.scrollTop += 1;

      if (ref.current.scrollTop >= ref.current.scrollHeight / 2) {
        ref.current.scrollTop = 0;
      }
    }, 40);
  };

  const stopScroll = (intervalRef) => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startScroll(collegeRef, collegeInterval);
    startScroll(universityRef, universityInterval);

    return () => {
      stopScroll(collegeInterval);
      stopScroll(universityInterval);
    };
  }, []);

  // ✅ Data
  const college_notices = [
    {
      title: "Bonafide Certificate Issue Notice",
      date: "Date: 09-04-26",
      path: "/college_notices/bonafide_issue_notice.pdf",
    },
    {
      title: "Holiday Notice (Ram Navami)",
      date: "Date: 26-03-26",
      path: "/college_notices/ram_navami_notice.pdf",
    },
    {
      title: "Holiday Notice (Eid al-Fitr)",
      date: "Date: 20-03-26",
      path: "/college_notices/eid_al_fitr.pdf",
    },
    {
      title: "Examination Form Filling Notice",
      date: "Date: 19-03-26",
      path: "/college_notices/examination_form_fillup_notice.pdf",
    },
    {
      title: "Holiday Notice (Holi)",
      date: "Date: 28-02-26",
      path: "/college_notices/holi_notice.pdf",
    },
    {
      title: "Internal Examination Schedule Notice",
      date: "Date: 15-01-26",
      path: "/college_notices/examination_schedule.pdf",
    },
    {
      title: "Holiday Notice (Makar Sankranti)",
      date: "Date: 13-01-26",
      path: "/college_notices/makar_sankranti.pdf",
    },
    {
      title: "Holiday Notice (Christmas & Winter Vacation)",
      date: "Date: 24-12-25",
      path: "/college_notices/christmas_winter_vacation.pdf",
    },
  ];

  const university_notices = [
    {
      title: "Revised Exam Schedule Notice | BCA (2025-28) | Sem: 01",
      date: "Date: 16-04-26",
      path: "/university_notices/vbu_revised_examination_centre.pdf",
    },
    {
      title: "Examination Schedule Notice | BCA (2025-28) | Sem: 01",
      date: "Date: 09-04-26",
      path: "/university_notices/vbu_external_examination_schedule.pdf",
    },
    {
      title: "Examination Centre Notice | BCA (2025-28) | Sem: 01",
      date: "Date: 09-04-26",
      path: "/university_notices/vbu_examination_centre_notice.pdf",
    },
    {
      title: "VBU Revised Examination form fillup Notice",
      date: "Date: 30-03-26",
      path: "/university_notices/vbu_revised_examination_form_notice.pdf",
    },
    {
      title: "VBU Examination form fillup Notice",
      date: "Date: 12-03-26",
      path: "/university_notices/vbu_examination_form_notice.pdf",
    },
  ];

  const loopedCollege = [...college_notices, ...college_notices];
  const loopedUniversity = [...university_notices, ...university_notices];

  return (
    <div>
      <div className="bg-gray-100 py-3 lg:py-8 px-2 md:px-12">
        <div className="grid md:grid-cols-2 gap-5">
          {/* 🟦 College Notices */}
          <div className="bg-white rounded-xl shadow-md border-2 border-blue-700">
            <div className="bg-blue-700 rounded-t-lg text-white p-2 lg:p-4 flex items-center gap-2 font-semibold lg:text-lg">
              <FaBullhorn className="text-xl lg:text-2xl" />
              Our College Notices
            </div>

            <div
              ref={collegeRef}
              className="h-48 overflow-hidden"
              onMouseEnter={() => stopScroll(collegeInterval)}
              onMouseLeave={() => startScroll(collegeRef, collegeInterval)}
            >
              {loopedCollege.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-1 items-center px-2 lg:px-4 py-3 border-b border-gray-300 hover:bg-gray-50"
                >
                  <p>
                    <span className="font-medium lg:text-sm text-xs text-gray-900">
                      📢 {item.title}
                    </span>

                    <span className="hidden sm:inline"> {" | "} </span>

                    <span className="block sm:inline text-xs lg:text-sm text-gray-500">
                      {item.date}
                    </span>
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={item.path}
                      download
                      className="flex items-center gap-1 hover:bg-red-100 border border-gray-400 text-red-500 font-medium px-1 lg:px-2 py-1 rounded text-xs lg:text-sm"
                    >
                      <FaFilePdf className="text-red-600" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🟩 University Notices */}
          <div className="bg-white rounded-xl shadow-md border-2 border-emerald-700">
            <div className="bg-emerald-700 rounded-t-lg text-white p-2 lg:p-4 flex items-center gap-2 font-semibold lg:text-lg">
              <FaUniversity className="text-xl lg:text-2xl" />
              Vinoba Bhave University Notices
            </div>

            <div
              ref={universityRef}
              className="h-48 overflow-hidden"
              onMouseEnter={() => stopScroll(universityInterval)}
              onMouseLeave={() =>
                startScroll(universityRef, universityInterval)
              }
            >
              {loopedUniversity.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between gap-1 items-center px-2 lg:px-4 py-3 border-b border-gray-300 hover:bg-gray-50"
                >
                  <p>
                    <span className="font-medium lg:text-sm text-xs text-gray-900">
                      📢 {item.title}
                    </span>

                    <span className="hidden sm:inline"> {" | "} </span>

                    <span className="block sm:inline text-xs lg:text-sm text-gray-500">
                      {item.date}
                    </span>
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={item.path}
                      download
                      className="flex items-center gap-1 hover:bg-red-100 border border-gray-400 text-red-500 font-medium px-1 lg:px-2 py-1 rounded text-xs lg:text-sm"
                    >
                      <FaFilePdf className="text-red-600" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticesSection;
