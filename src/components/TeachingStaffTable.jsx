import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const staffData = [
  {
    name: "Dr. Bhupendra Thakur",
    designation: "Principal",
    image: "https://bpscollege.org/imgs/principal.jpeg",
    githubLink: "",
    linkedInLink: "",
    email: "",
  },
  {
    name: "Ravi Kumar Patel",
    designation: "Assistant Professor & HOD",
    subject: "Physical Science",
    image: "/ravi_kr_patel.jpeg",
    githubLink: "https://github.com/ravikrpatel01",
    linkedInLink: "https://www.linkedin.com/in/ravi-kumar-patel-01a9a8247/",
    email: "ravikumarpatel2001@gmail.com",
  },

  // {
  //   name: "Swati Priya",
  //   designation: "Assistant Professor",
  //   image: "/images.png",
  //   githubLink: "",
  //   linkedInLink: "",
  //   email: "",
  // },
  // {
  //   name: "Sanupa Kumari",
  //   designation: "Assistant Professor",
  //   image: "/images.png",
  //   githubLink: "",
  //   linkedInLink: "",
  //   email: "",
  // },
];

const TeachingStaffTable = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-10 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-blue-900 mb-3 lg:mb-10">
        Teaching Staff List
      </h2>

      <div className="overflow-x-auto">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden min-w-200">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-200 text-gray-700 font-semibold px-2 lg:px-6 py-2 lg:py-3 text-sm">
            <div className="whitespace-nowrap">STAFF MEMBER</div>
            <div className="whitespace-nowrap">DESIGNATION</div>
            <div className="whitespace-nowrap">PROFILE LINK</div>
          </div>

          {/* Rows */}
          {staffData.map((staff, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-3 items-center px-2 lg:px-6 py-2 lg:py-4 border-t border-t-gray-400 hover:bg-gray-50"
            >
              {/* Staff */}
              <div className="flex items-center gap-2 lg:gap-3">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium lg:text-lg text-sm whitespace-nowrap">
                  {staff.name}
                </span>
              </div>

              {/* Designation */}
              <div>
                <span className="bg-blue-100 text-xs lg:text-sm text-emerald-800 px-1 font-medium py-0.5 rounded border whitespace-nowrap">
                  {staff.designation.toUpperCase()}
                </span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 whitespace-nowrap">
                {/* GitHub */}
                <a
                  href={staff.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 border px-1 py-0.5 rounded text-xs lg:text-sm font-medium
              ${
                staff.githubLink
                  ? "text-gray-800 hover:bg-gray-200 border-gray-400"
                  : "text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none"
              }`}
                >
                  <FaGithubSquare className="text-2xl" />
                  GitHub
                </a>

                {/* LinkedIn */}
                <a
                  href={staff.linkedInLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 border px-1 py-0.5 rounded text-xs lg:text-sm font-medium
              ${
                staff.linkedInLink
                  ? "text-gray-800 hover:bg-gray-200 border-gray-400"
                  : "text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none"
              }`}
                >
                  <FaLinkedin className="text-2xl text-blue-800" />
                  LinkedIn
                </a>

                {/* Email */}
                <a
                  href={staff.email ? `mailto:${staff.email}` : "#"}
                  className={`flex items-center gap-1 border px-1 py-0.5 rounded text-xs lg:text-sm font-medium
              ${
                staff.email
                  ? "text-gray-800 hover:bg-gray-200 border-gray-400"
                  : "text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none"
              }`}
                >
                  <MdEmail className="text-2xl text-gray-800" />
                  Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingStaffTable;
