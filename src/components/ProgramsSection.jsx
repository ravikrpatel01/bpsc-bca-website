const ProgramsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-16">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-blue-800 mb-12">
        Academic Programs & Advantages
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* BCA Program */}
        <div className="bg-white border rounded-xl shadow-md px-8 py-5 border-t-4 border-blue-600">
          <h2 className="text-xl font-semibold text-blue-700">
            BCA (Bachelor of Computer Applications)
          </h2>

          <p className="mt-4 text-gray-600">
            Three-year undergraduate program focused on software development,
            programming, and IT skills. Designed to build strong technical
            foundations for the digital world.
          </p>

          <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-1">
            <li>Programming ( C/C++, Java, Python)</li>
            <li>Web Development & Databases</li>
            <li>Project-based learning</li>
          </ul>

          {/* <p className="mt-6 text-blue-600 font-medium cursor-pointer">
            Learn More →
          </p> */}
        </div>

        {/* Skills & Learning */}
        <div className="bg-white border rounded-xl shadow-md px-8 py-5 border-t-4 border-yellow-500">
          <h2 className="text-xl font-semibold text-yellow-600">
            Practical Learning & Skills
          </h2>

          <p className="mt-4 text-gray-600">
            Industry-oriented curriculum with hands-on training, real-world
            projects, and exposure to modern technologies.
          </p>

          <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-1">
            <li>Live coding & lab sessions</li>
            <li>Mini & major projects</li>
            <li>Workshops & seminars/webinars</li>
          </ul>

          {/* <p className="mt-6 text-yellow-600 font-medium cursor-pointer">
            Explore Skills →
          </p> */}
        </div>

        {/* Placement */}
        <div className="bg-white border rounded-xl shadow-md px-8 py-5 border-t-4 border-emerald-600">
          <h2 className="text-xl font-semibold text-emerald-700">
            Placement & Career Support
          </h2>

          <p className="mt-4 text-gray-600">
            Dedicated support for internships and placements with training
            programs to make students industry-ready.
          </p>

          <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-1">
            <li>Resume & interview preparation</li>
            <li>Internship opportunities</li>
            <li>Campus recruitment drives</li>
          </ul>

          {/* <p className="mt-6 text-emerald-600 font-medium cursor-pointer">
            View Placement Data →
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
