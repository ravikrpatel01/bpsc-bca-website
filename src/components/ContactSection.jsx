import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-blue-500 text-white text-center py-4 lg:py-16 px-2 lg:px-6">
        <h1 className="text-2xl md:text-4xl font-semibold">Contact Us</h1>

        <p className="mt-3 lg:text-lg text-gray-200">
          Get in touch with us for admissions, inquiries, or any assistance
        </p>

        <p className="mt-3 text-sm text-gray-300">
          <Link to="/">Home</Link> / <span className="text-white">Contact</span>
        </p>
      </div>

      {/* Contact Cards */}
      <div className="bg-gray-100 py-4 lg:py-16 px-2 md:px-16">
        <div className="grid md:grid-cols-4 gap-2 lg:gap-6">
          {/* Phone */}
          <div className="bg-white border rounded-xl border-l-4 border-blue-600 shadow-md p-2 lg:p-6 text-center">
            <div className="bg-blue-100 text-blue-600 w-10 h-10 lg:w-14 lg:h-14 mx-auto flex items-center border border-blue-400 justify-center rounded-full text-xl">
              <FaPhone />
            </div>
            <h3 className="mt-1 lg:mt-4 font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+91-91022 24044</p>
          </div>

          {/* Email */}
          <div className="bg-white border rounded-xl border-l-4 border-green-600 shadow-md p-2 lg:p-6 text-center">
            <div className="bg-green-100 text-green-600 w-10 h-10 lg:w-14 lg:h-14 mx-auto flex items-center border border-green-400 justify-center rounded-full text-xl">
              <FaEnvelope />
            </div>
            <h3 className="mt-1 lg:mt-4 font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">skshekhar15@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-white border rounded-xl border-l-4 border-yellow-600 shadow-md p-2 lg:p-6 text-center">
            <div className="bg-yellow-100 text-yellow-600 w-10 h-10 lg:w-14 lg:h-14 mx-auto flex items-center border border-yellow-400 justify-center rounded-full text-xl">
              <FaMapMarkerAlt />
            </div>
            <h3 className="mt-1 lg:mt-4 font-semibold text-gray-800">
              Address
            </h3>
            <p className="text-gray-600">Jainagar Road, Domchanch, Koderma</p>
          </div>

          {/* Office Hours */}
          <div className="bg-white border rounded-xl border-l-4 border-purple-600 shadow-md p-2 lg:p-6 text-center">
            <div className="bg-purple-100 text-purple-600 w-10 h-10 lg:w-14 lg:h-14 mx-auto flex items-center border border-purple-400 justify-center rounded-full text-xl">
              <FaClock />
            </div>
            <h3 className="mt-1 lg:mt-4 font-semibold text-gray-800">
              Office Hours
            </h3>
            <p className="text-gray-600">Mon-Sat: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
