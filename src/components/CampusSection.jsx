import { FaBed, FaBook, FaFutbol, FaWifi } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";

const CampusSection = () => {
  return (
    <div className="bg-gray-100 py-6 lg:py-16 px-4 md:px-16">
      {/* Heading */}
      <h1 className="text-center text-2xl lg:text-3xl md:text-4xl font-semibold text-blue-800 lg:mb-12 mb-4">
        Campus & Learning Environment
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <ul className="lg:space-y-4 space-y-2 text-gray-700 lg:text-lg">
            <li className="flex items-center gap-3">
              <SiGoogleclassroom className="text-blue-600" />
              Smart classrooms with modern infrastructure
            </li>

            <li className="flex items-center gap-3">
              <FaBook className="text-purple-600" />
              Physical library resources
            </li>

            <li className="flex items-center gap-3">
              <FaComputer className="text-emerald-600" />
              Advanced computer & practical labs
            </li>
            <li className="flex items-center gap-3">
              <FaWifi className="text-indigo-600" />
              Wi-Fi enabled campus & computer labs
            </li>

            <li className="flex items-center gap-3">
              <FaFutbol className="text-yellow-600" />
              Sports & recreational facilities
            </li>

            <li className="flex items-center gap-3">
              <FaBed className="text-blue-500" />
              Separate hostels for students
            </li>
          </ul>

          {/* Button */}
          {/* <button className="mt-8 flex items-center gap-1 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md">
            <HiBuildingOffice2 size={20} />
            Explore Infrastructure
          </button> */}
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-2 lg:gap-4">
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
            className="rounded-lg shadow-md h-40 w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232"
            className="rounded-lg shadow-md h-40 w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
            className="rounded-lg shadow-md h-40 w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="rounded-lg shadow-md h-40 w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CampusSection;
