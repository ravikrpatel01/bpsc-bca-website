import { FaCheck, FaInfoCircle, FaLaptop, FaPrint } from "react-icons/fa";

const HardwareInfrastructure = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Hardware & Infrastructure
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="bg-white rounded-xl shadow-md py-2 px-5 border-t-4 border border-blue-500">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <FaLaptop className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">
              Computer Systems
            </h3>
          </div>

          {/* Specs Box */}
          <div className="bg-gray-50 border border-gray-200 px-3 py-1 text-lg rounded-md mb-4">
            <p className="font-semibold text-xl text-blue-900 mb-2">
              Technical Specifications:
            </p>

            <ul className="space-y-2 text-lg text-gray-700">
              <li className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>
                  <b>Processor:</b> Intel Core i5 (Latest Generation)
                </span>
              </li>
              <li className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>
                  <b>RAM:</b> 8GB DDR4
                </span>
              </li>
              <li className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>
                  <b>Storage:</b> 512GB SSD
                </span>
              </li>
              <li className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>
                  <b>Display:</b> 21.5" Full HD LED Monitors
                </span>
              </li>
              <li className="flex gap-2">
                <FaCheck className="text-blue-500 mt-1" />
                <span>
                  <b>OS:</b> Windows 10 Pro
                </span>
              </li>
            </ul>
          </div>

          {/* Info Box */}
          <div className="flex gap-2 bg-blue-100 border-l-4 text-blue-800 p-3 rounded-md text-sm">
            <FaInfoCircle className="mt-1 shrink-0" />
            <p>
              All systems regularly updated and maintained for optimal
              performance
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl shadow-md py-2 px-5 border-t-4 border border-emerald-500">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-500 text-white p-3 rounded-full">
              <FaPrint className="text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">
              Peripherals & Equipment
            </h3>
          </div>

          {/* Printing */}
          {/* <div className="bg-gray-50 p-4 rounded-md mb-4">
            <p className="font-semibold text-blue-900 mb-2">
              Printing & Scanning:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• High-speed laser printers (5 units)</li>
              <li>• Color printers for projects</li>
              <li>• Flatbed scanners</li>
            </ul>
          </div> */}

          {/* Networking */}
          <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-md mb-4">
            <p className="font-semibold text-xl text-blue-900 mb-2">
              Networking:
            </p>
            <ul className="text-lg text-gray-700 space-y-1">
              <li>• Managed network switches</li>
              <li>• High-speed Wi-Fi access points</li>
              <li>• Firewall and security systems</li>
            </ul>
          </div>

          {/* Multimedia */}
          <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-md">
            <p className="font-semibold text-xl text-blue-900 mb-2">
              Multimedia:
            </p>
            <ul className="text-lg text-gray-700 space-y-1">
              <li>• LCD projector and screen</li>
              <li>• Audio system for presentations</li>
              <li>• Webcams for video conferencing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareInfrastructure;
