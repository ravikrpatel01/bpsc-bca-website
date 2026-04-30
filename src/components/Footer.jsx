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
        <div className="text-sm hidden lg:block px-2 lg:px-4 py-3 text-center sm:text-left">
          <p className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1">
            <span>Designed & Developed by</span>

            <span className="text-white flex items-center gap-1 font-semibold">
              BCA Department
              <FaHeart className="text-white heart" size={16} />
            </span>
          </p>

          <p className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-1 mt-2">
            <span className="font-bold">B. P. S. College,</span>

            <span className="flex items-center gap-1">
              Domchanch, Koderma
              <FaLaptopCode className="text-white" size={18} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
