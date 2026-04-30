import { Link } from "react-router-dom";

const ComputerLabInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-linear-to-r bg-blue-500 text-white px-2 py-4 lg:py-16 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-4">
          Computer Laboratory
        </h1>

        <p className="max-w-2xl mx-auto lg:text-lg">
          Advanced ICT infrastructure for digital literacy and
          technology-enabled learning
        </p>

        <div className="mt-2 lg:mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="font-semibold">Computer Lab</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 py-4 lg:py-16 px-2 lg:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-3 lg:gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-1 lg:mb-6">
              Digital Learning Hub
            </h2>

           <div>
             <p className="text-gray-700 lg:text-lg text-justify lg:leading-relaxed mb-1 lg:mb-4">
              Our{" "}
              <span className="font-semibold">
                state-of-the-art Computer Laboratory
              </span>{" "}
              is equipped with the latest technology to prepare students for the
              digital age. With high-performance computers, licensed software,
              and high-speed internet, students gain essential IT skills
              required in today’s world.
            </p>

            <p className="text-gray-600 lg:text-lg text-justify lg:leading-relaxed mb-1 lg:mb-4">
              The lab serves as a hub for learning programming, application
              development, multimedia content creation, online research, and
              practical implementation of concepts.
            </p>

            <p className="text-gray-600 lg:text-lg text-justify lg:leading-relaxed">
              From basic computer fundamentals to advanced software and web
              development, our lab supports comprehensive skill development for
              future IT professionals.
            </p>
           </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/computer_lab.svg"
              alt="Computer Lab"
              className="w-full h-50 lg:h-80 object-cover rounded-xl border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerLabInfo;
