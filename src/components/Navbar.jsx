import { useEffect, useRef, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const importantLinks = [
  { name: "VBU Website", webLink: "https://www.vbu.ac.in/login" },
  { name: "VBU Results", webLink: "http://result.vbuuniv.in/vbuuniv/login" },
  { name: "VBU Notices", webLink: "https://www.vbu.ac.in/notice/Notice" },
  {
    name: "VBU: BCA PYQs",
    webLink:
      "https://drive.google.com/drive/folders/19pb41O_v1PXRi96sXSmEiiuOOMrUshZn?usp=sharing",
  },
  {
    name: "Chancellor Portal",
    webLink: "https://universities.jharkhand.gov.in/home",
  },
  { name: "DigiLocker", webLink: "https://www.digilocker.gov.in" },
  { name: "W3 Schools Notes", webLink: "https://www.w3schools.com/" },
  { name: "Ekalyan Scholarship", webLink: "https://ekalyan.cgg.gov.in/" },
  {
    name: "Image Size Reducer",
    webLink: "https://image.pi7.org/reduce-image-size-in-kb",
  },
  {
    name: "National Scholarship Portal",
    webLink: "https://scholarships.gov.in",
  },
  { name: "Aadhar Services (UIDAI)", webLink: "https://uidai.gov.in" },
  { name: "PDF Tools", webLink: "https://www.ilovepdf.com" },
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
        name: "Download BCA Syllabus",
        path: "/BCA_Syllabus.pdf",
        isDownload: true,
      },
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
  const mobileMenuRef = useRef();
  const barRef = useRef();

  // 🔥 FIXED STATES
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const dropdownRef = useRef();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const isDropdownOpen = hovered || clicked;

  // Outside click close (Important Links)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setClicked(false);
        setHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Outside click close (Navbar menu)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        barRef.current &&
        !barRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="bg-blue-800 sticky border-b border-b-gray-300 z-50 top-0 w-full text-white lg:px-4 px-1 py-1 lg:py-2 flex justify-between items-center"
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <Link to="/">
          <img src="/bpsc_logo.png" className="lg:w-14 w-12" alt="logo" />
        </Link>

        <div className="hidden sm:block">
          <h1 className="text-[1.6rem] font-bold text-yellow-300">
            Baijnath Prasad Snehi College
          </h1>
        </div>
      </div>

      {/* Middle */}
      <div className="hidden md:flex gap-6 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => item.dropdown && setActiveMenu(index)}
          >
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
              <Link
                to={item.path}
                className={`hover:text-yellow-300 ${item.blink ? "blink" : ""}`}
              >
                {item.name}
              </Link>
            )}

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
      <div className="relative" ref={dropdownRef}>
        <div className="hidden md:flex items-center gap-2">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setClicked(!clicked)}
          >
            <BsGlobe
              title="Important Links"
              className="text-2xl text-yellow-300 hover:scale-105 cursor-pointer"
            />
          </div>

          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-500 font-medium px-2 py-1 rounded"
          >
            Contact Us
          </Link>
        </div>

        {/* ✅ Dropdown */}
        {isDropdownOpen && (
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="absolute right-0 mt-2 w-106 bg-white text-black rounded shadow-md z-50 p-2"
          >
            <div className="grid grid-cols-3 gap-1">
              {importantLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-sm rounded border flex items-center justify-center hover:bg-gray-100 hover:font-medium border-gray-200 text-center"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="pr-1 md:hidden" ref={barRef}>
        <HiMiniBars3
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-4xl cursor-pointer"
        />
      </div>
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full mt-0.5 text-white left-0 w-full bg-blue-800 shadow-md z-50 md:hidden"
        >
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-400">
              {/* Main Item */}
              <div
                onClick={() =>
                  item.dropdown
                    ? setMobileDropdown(mobileDropdown === index ? null : index)
                    : setMobileMenuOpen(false)
                }
                className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-blue-700"
              >
                {item.dropdown ? (
                  <span className="">{item.name}</span>
                ) : (
                  <Link to={item.path}>{item.name}</Link>
                )}

                {/* Dropdown Icon */}
                {item.dropdown && (
                  <IoIosArrowDown
                    className={`transition ${
                      mobileDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Items */}
              {item.dropdown && mobileDropdown === index && (
                <div className="bg-blue-500">
                  {item.dropdown.map((subItem, subIndex) =>
                    subItem.isDownload ? (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        download
                        className="block px-5 py-2 text-sm hover:bg-blue-600"
                      >
                        {subItem.name}
                      </a>
                    ) : (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-5 border-b border-gray-300 py-2 text-sm hover:bg-blue-600"
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
      )}
    </div>
  );
};

export default Navbar;
