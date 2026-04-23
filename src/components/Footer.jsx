import { FaHeart, FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-4 relative">
      <div className="flex flex-col border-t border-t-gray-600 pt-2 md:flex-row justify-between items-center gap-4">
        {/* Left Content */}
        <div className="text-sm text-center md:text-left">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              | Baijnath Prasad Snehi College
            </span>
            . All Rights Reserved.
          </p>
          <p className="mt-1 text-gray-400">
            Shaping Future Coders | Learn, Build & Innovate in Technology
          </p>
        </div>

        {/* Right Content */}
        <div className="text-sm px-4 py-2">
          <p className="flex gap-1 items-center justify-center">
            Designed & Developed by
            <span className="text-white flex items-center gap-1 font-medium leading-none">
              RAVI KUMAR PATEL
              <FaHeart className="text-white align-middle heart" size={16} />
            </span>
          </p>

          <p className="flex items-center gap-1 justify-end">
            <span className="font-bold">Asst. Professor & HOD,</span> BCA
            Department
            <FaLaptopCode className="text-white align-middle" size={18} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
