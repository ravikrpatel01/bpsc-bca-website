import { BiSolidSchool } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const bgImage = "/college_image.png";
  return (
    <div
      className="h-[80vh] bg-fit bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center px-10">
        <div className="text-white max-w-2xl">
          <h1 className="text-7xl font-bold text-yellow-400 leading-tight">
            <span className="text-white">Baijnath Prasad</span> Snehi College
          </h1>

          <p className="mt-4 text-2xl">
            Inspiring the next generation of IT professionals. <br />
            <span className="font-bold text-yellow-300">AICTE Approved</span>,
            Affiliated to{" "}
            <span className="font-bold text-yellow-300">
              Vinoba Bhave University
            </span>
            .
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/about-college"
              className="bg-emerald-700 hover:bg-emerald-600 flex items-center gap-1 px-3 py-2 cursor-pointer font-medium rounded"
            >
              <BiSolidSchool className="text-xl" />
              About Our College
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 flex items-center gap-2 px-3 py-2 cursor-pointer font-medium rounded"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
