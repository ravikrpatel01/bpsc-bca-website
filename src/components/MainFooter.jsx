import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

import {
  FaClock,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const links = [
  { name: "About College", path: "/about-college" },
  { name: "Vision & Mission", path: "/about/vision-and-mission" },
  { name: "Principal's Message", path: "/about/principal-message" },
  { name: "Our Faculty", path: "/faculty/teaching" },
  { name: "Admission Process", path: "/admissions/admission-procedure" },
  // { name: "Placements", path: "/placements" },
  { name: "Photo Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const programs = [
  {
    name: "Bachelor of Computer Application (BCA)",
    path: "/admissions/eligibility-criteria",
  },
  // {
  //   name: "Curriculum & Syllabus",
  //   path: "/curriculum",
  // },
  // {
  //   name: "Teaching Methodology",
  //   path: "/teaching-methodology",
  // },
  {
    name: "Library Facilities",
    path: "/facilities/library",
  },
  {
    name: "Laboratories",
    path: "/facilities/lab",
  },
  {
    name: "Sports & Recreation",
    path: "/facilities/sports",
  },
  {
    name: "Notices & Announcements",
    path: "/notices",
  },
];

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-linear-to-r from-[#0f172a] to-[#1e293b] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-3 border-2 rounded-full text-white text-xl">
              <RiGraduationCapFill size={26} />
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold">
                Baijnath Prasad Snehi
              </h2>
              <p className="text-sm text-blue-400">
                College, Domchanch, Koderma
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6">
            <span className="font-bold">Baijnath Prasad Snehi College</span> is
            a premier institution dedicated to excellence in higher education.
            We are approved by <span className="font-bold">AICTE</span> and
            affiliated with{" "}
            <span className="font-bold">Vinoba Bhave University</span>,
            committed to shaping future professionals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded-full text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 p-2 rounded-full text-white hover:scale-110 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/baijnath-prasad-snehi-college/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-2 rounded-full text-white hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/bpscollegeofficial15/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-2 rounded-full text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Quick Links
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            {links.map((item, i) => (
              <li
                key={i}
                onClick={() => navigate(item.path)}
                className="hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Our Programs */}
        <div>
          <h3 className="text-white text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Our Programs
          </h3>

          <ul className="mt-4 space-y-3 text-sm">
            {programs.map((item, i) => (
              <Link to={item.path} key={i}>
                <li className="hover:text-white flex items-center gap-2 cursor-pointer">
                  <MdOutlineKeyboardDoubleArrowRight className="text-2xl" />
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Contact Info
          </h3>

          <div className="mt-4 space-y-5 text-sm">
            {/* Address */}
            <div className="flex gap-3 items-start">
              <div className="bg-blue-600 p-2 rounded-md text-white h-9 w-9 flex items-center justify-center shrink-0">
                <FaLocationDot size={20} />
              </div>

              <div>
                <p className="text-white font-medium">Address</p>
                <p>Jainagar Road, Domchanch</p>
                <p>Koderma (825418)</p>
                <p>Jharkhand, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <div className="bg-green-600 p-2 rounded-md text-white h-9 w-9 flex items-center justify-center shrink-0">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p>1. +91-9102224044</p>
                <p>2. +91-8340784927</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 p-2 rounded-md text-white h-9 w-9 flex items-center justify-center shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p>1. skshekhar15@gmail.com</p>
                <p>2. ravikumarpatel2001@gmail.com</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-3 items-start">
              <div className="bg-purple-600 p-2 rounded-md text-white h-9 w-9 flex items-center justify-center shrink-0">
                <FaClock size={20} />
              </div>
              <div>
                <p className="text-white font-medium">Office Hours</p>
                <p>Day: Monday - Saturday</p>
                <p>Time: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
