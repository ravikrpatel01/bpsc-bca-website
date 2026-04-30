import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLocation, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-blue-900 text-white text-sm flex justify-between px-3 lg:px-6 py-2">
      <div className="flex gap-6">
        <span className="flex items-center gap-1 font-medium">
          <FaPhoneAlt className="text-emerald-400" size={16} />
          +91-8340784927
        </span>
        <span className="hidden md:flex items-center gap-1 font-medium">
          <MdEmail size={20} /> ravikumarpatel2001@gmail.com
        </span>
        <span className="hidden md:flex items-center gap-1 font-medium">
          <IoLocation className="text-red-500" size={20} />
          Jainagar Road, Domchanch, Koderma, Jharkhand (825418)
        </span>
      </div>

      <div className="flex gap-2 lg:gap-4">
        <a
          href="https://www.linkedin.com/company/baijnath-prasad-snehi-college/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin
            className="cursor-pointer hover:scale-110"
            size={20}
          />
        </a>
        <span>
          <FaFacebook className="cursor-pointer hover:scale-110" size={20} />
        </span>
        <span>
          <FaXTwitter className="cursor-pointer hover:scale-110" size={20} />
        </span>
        <a
          href="https://www.instagram.com/bpscollegeofficial15/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:scale-110" size={20} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
