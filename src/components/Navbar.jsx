import { useEffect, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const importantLinks = [
  {
    name: "VBU Website",
    webLink: "https://www.vbu.ac.in/login",
  },
  {
    name: "VBU Results",
    webLink: "http://result.vbuuniv.in/vbuuniv/login",
  },
  {
    name: "VBU Notices",
    webLink: "https://www.vbu.ac.in/notice/Notice",
  },
  {
    name: "VBU: BCA PYQs",
    webLink:
      "https://drive.google.com/drive/folders/19pb41O_v1PXRi96sXSmEiiuOOMrUshZn?usp=sharing",
  },
  {
    name: "Chancellor Portal",
    webLink: "https://universities.jharkhand.gov.in/home",
  },
  {
    name: "DigiLocker",
    webLink: "https://www.digilocker.gov.in",
  },
  {
    name: "W3 Schools Notes",
    webLink: "https://www.w3schools.com/",
  },
  {
    name: "Ekalyan Scholarship",
    webLink: "https://ekalyan.cgg.gov.in/",
  },
  {
    name: "Image Size Reducer",
    webLink: "https://image.pi7.org/reduce-image-size-in-kb",
  },
  {
    name: "National Scholarship Portal",
    webLink: "https://scholarships.gov.in",
  },

  {
    name: "Aadhar Services (UIDAI)",
    webLink: "https://uidai.gov.in",
  },
  {
    name: "PDF Tools",
    webLink: "https://www.ilovepdf.com",
  },
];

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "About College", path: "/about-college" },
      { name: "Vision & Mission", path: "/about/vision-and-mission" },
      { name: "Principal's Message", path: "/about/principal-message" },
    ],
  },
  {
    name: "Academics",
    path: "/academics",
    dropdown: [
      {
        name: "Download Syllabus",
        path: "/BCA_Syllabus.pdf",
        isDownload: true,
      },
      // { name: "Academic Calendar", path: "/academics/calendar" },
    ],
  },
  {
    name: "Admissions",
    path: "/admissions",
    dropdown: [
      { name: "Admission Procedure", path: "/admissions/admission-procedure" },
      { name: "Eligibility", path: "/admissions/eligibility-criteria" },
      { name: "Scholarships", path: "/admissions/scholarships" },
    ],
  },
  { name: "Notices", path: "/notices", blink: true },
  {
    name: "Faculty",
    path: "/faculty",
    dropdown: [{ name: "Our Faculty & Staff", path: "/faculty/teaching" }],
  },
  {
    name: "Facilities",
    path: "/facilities",
    dropdown: [
      { name: "Library", path: "/facilities/library" },
      { name: "Computer Lab", path: "/facilities/lab" },
      { name: "Sports", path: "/facilities/sports" },
    ],
  },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef();

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="bg-blue-800 sticky border-b border-b-gray-300 z-50 top-0 w-full text-white px-4 py-2 flex justify-between items-center"
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/bpsc_logo.png" className="w-14" alt="logo" />
        </Link>

        <div>
          <h1 className="text-[1.6rem] font-bold text-yellow-300">
            Baijnath Prasad Snehi College
          </h1>
        </div>
      </div>

      {/* Middle */}
      <div className="flex gap-6 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => item.dropdown && setActiveMenu(index)}
          >
            {/* ✅ If dropdown exists */}
            {item.dropdown ? (
              <div
                onClick={() =>
                  setActiveMenu(activeMenu === index ? null : index)
                }
                className="flex items-center gap-1 cursor-pointer hover:text-yellow-300"
              >
                {item.name}
                <IoIosArrowDown />
              </div>
            ) : (
              /* ✅ Normal Link */
              <Link
                to={item.path}
                className={`hover:text-yellow-300 ${item.blink ? "blink" : ""}`}
              >
                {item.name}
              </Link>
            )}

            {/* Dropdown */}
            {item.dropdown && activeMenu === index && (
              <div className="absolute top-full left-0 bg-white text-black rounded shadow-md mt-2 w-48 z-50">
                {item.dropdown.map((subItem, subIndex) =>
                  subItem.isDownload ? (
                    <a
                      key={subIndex}
                      href={subItem.path}
                      download
                      onClick={() => setActiveMenu(null)}
                      className="block px-3 py-2 hover:bg-gray-100 hover:rounded"
                    >
                      {subItem.name}
                    </a>
                  ) : (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      onClick={() => setActiveMenu(null)}
                      className="block px-3 py-2 hover:bg-gray-100 hover:rounded"
                    >
                      {subItem.name}
                    </Link>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="relative">
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2"
        >
          <BsGlobe
            title="Important Links"
            className="text-2xl text-yellow-300 hover:scale-105 cursor-pointer"
          />

          <Link
            to="/contact"
            className="bg-emerald-500 hover:bg-emerald-400 px-4 py-1 rounded"
          >
            Contact Us
          </Link>
        </div>

        {/* ✅ Dropdown */}
        {showDropdown && (
          <div
            onMouseLeave={() => setShowDropdown(false)}
            className="absolute right-0 mt-2 w-106 bg-white text-black rounded shadow-md z-50 p-2"
          >
            <div className="grid grid-cols-3 gap-1">
              {importantLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-sm rounded border flex items-center justify-center hover:bg-gray-100 hover:font-medium hover:border border-gray-200 text-center"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
