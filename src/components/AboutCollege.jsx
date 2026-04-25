import { FaBullseye } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutCollege = () => {
  return (
    <div>
      <div className="bg-linear-to-r bg-blue-500 text-white py-5 lg:py-16 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-4">
          About Our College
        </h1>

        <p className="max-w-2xl mx-auto text-sm lg:text-lg opacity-90">
          Committed to excellence in computer education and innovation. Shaping
          future IT professionals for a digital world.
        </p>

        <div className="mt-2 lg:mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="font-semibold">About Us</span>
        </div>
      </div>

      <div className="bg-gray-100 py-3 lg:py-16 px-2 lg:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-2 lg:gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-[1.9rem] text-center font-bold text-blue-900 mb-2">
              Welcome to{" "}
              <span className="text-yellow-500">
                Baijnath Prasad Snehi College
              </span>
            </h2>

            <p className="text-gray-700 text-lg text-justify lg:leading-relaxed mb-2">
              <span className="font-bold">Baijnath Prasad Snehi College</span>{" "}
              is a center of excellence in higher education, offering a strong
              foundation in computer applications through its{" "}
              <span className="font-bold">
                BCA (Bachelor of Computer Applications)
              </span>{" "}
              program. Our institution is committed to preparing students for
              the rapidly evolving IT industry by providing quality education
              and practical exposure.
            </p>

            <p className="text-gray-600 text-lg text-justify leading-relaxed mb-2">
              Our BCA program is designed to equip students with knowledge in
              <span className="font-bold ml-1">
                programming languages, database management, web development, and
                modern technologies
              </span>
              . We focus on building strong technical skills along with
              problem-solving abilities required in the professional world.
            </p>

            <p className="text-gray-600 text-lg text-justify leading-relaxed mb-6">
              With <span className="font-bold">experienced faculty</span> and{" "}
              <span className="font-bold">industry-oriented learning</span>, we
              aim to nurture
              <span className="font-bold ml-1">
                confident, skilled, and innovative IT professionals
              </span>{" "}
              who can contribute effectively to the digital transformation of
              society.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/about/vision-and-mission"
                className="flex font-medium items-center justify-center gap-2 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-500 transition"
              >
                <FaBullseye className="text-xl" />
                Vision & Mission
              </Link>

              <Link
                to="/contact"
                className="flex font-medium items-center justify-center gap-2 bg-green-600 text-white px-3 py-2 rounded hover:bg-green-500 transition"
              >
                <MdCall className="text-xl" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="/college_image.png"
              alt="College Building"
              className="w-full h-64 md:h-100 object-cover rounded-xl border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCollege;
