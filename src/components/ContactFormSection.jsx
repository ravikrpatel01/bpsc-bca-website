import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setFormData({
            user_name: "",
            user_email: "",
            user_phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Failed to send message ❌");
        },
      );
  };

  return (
    <div className="bg-gray-100 py-4 lg:py-16 px-2 md:px-16">
      <div className="grid md:grid-cols-2 gap-4 lg:gap-10">
        {/* LEFT: FORM */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Send Us a Message
          </h2>

          <p className="mt-0 lg:mt-2 text-gray-600">
            Have questions about admissions, programs, or facilities? Fill out
            the form below and we’ll get back to you as soon as possible.
          </p>

          {/* Form */}
          <form
            className="mt-2 lg:mt-6 space-y-2 lg:space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1 p-2 lg:p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              <div>
                <label className="text-sm font-medium">Email Address *</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full mt-1 p-2 lg:p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full mt-1 p-2 lg:p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full mt-1 p-2 lg:p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option>Admission Inquiry</option>
                <option>Course Details</option>
                <option>General Query</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message here..."
                className="w-full mt-1 p-2 lg:p-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: MAP + ADDRESS */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
            Visit Our Campus
          </h2>

          <p className="mt-2 text-gray-600">
            We welcome prospective students and parents to visit our campus.
            Schedule an appointment for a campus tour and meet our faculty.
          </p>

          {/* Map */}
          <div className="mt-4 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Domchanch,Koderma,Jharkhand&output=embed"
              className="w-full h-64 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Address Card */}
          <div className="mt-4 bg-white p-5 rounded-xl shadow-md">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <FaMapMarkerAlt />
              College Address
            </div>

            <p className="mt-2 text-gray-700 font-medium">
              Baijnath Prasad Snehi College
            </p>
            <p className="text-gray-600">Jainagar Road, Domchanch, Jharkhand</p>
            <p className="text-gray-600">PIN: 825418</p>

            <p className="mt-3 text-blue-600 cursor-pointer">
              Get Directions →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
