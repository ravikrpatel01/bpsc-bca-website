import {
  FaBriefcase,
  FaChalkboardTeacher,
  FaGlobe,
  FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-16 px-3 flex flex-col items-center justify-center md:px-16 text-center">
      {/* Heading */}
      <h1 className="text-2xl lg:text-3xl md:text-4xl font-semibold text-blue-800">
        <span className="text-yellow-500">Baijnath Prasad Snehi College</span> –
        Shaping Future IT Professionals
      </h1>

      {/* Description */}
      <p className="mt-3 lg:mt-6 max-w-4xl mx-auto text-gray-700 lg:text-xl text-justify leading-relaxed">
        <span className="font-semibold text-gray-900">
          Baijnath Prasad Snehi College
        </span>{" "}
        is dedicated to developing skilled, innovative, and confident IT
        professionals for the digital world. Our industry-focused curriculum,
        experienced faculty, and emphasis on practical learning set us apart as
        a center of excellence in computer applications.
      </p>

      {/* Features */}
      <div className="mt-4 lg:mt-8 text-sm lg:text-lg flex flex-wrap justify-center gap-2 lg:gap-6 text-gray-700">
       

        <div className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-green-600" />
          <span>Experienced Faculty</span>
        </div>

        <div className="flex items-center gap-2">
          <FaGlobe className="text-yellow-500" />
          <span>Digital Learning Environment</span>
        </div>

         <div className="flex items-center gap-2">
          <FaLaptopCode className="text-blue-600" />
          <span>Industry-Oriented Curriculum</span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          <span>Placement Assistance</span>
        </div>
      </div>

      {/* Button */}
      <div className="mt-8">
        <Link
          to="about/vision-and-mission"
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 font-medium cursor-pointer rounded-lg shadow-md"
        >
          Our Vision & Mission
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
