import { Link } from "react-router-dom";

const FacultyPage = () => {
  return (
    <div>
      <div className="bg-linear-to-r bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Faculty & Staff</h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Experienced IT professionals and educators shaping future software
          developers
        </p>

        <div className="mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="font-semibold">Faculty & Staff</span>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Meet Our Expert BCA Faculty
        </h2>

        <p className="max-w-4xl text-justify text-xl mx-auto text-gray-700 leading-relaxed mb-6">
          At{" "}
          <span className="font-semibold">Baijnath Prasad Snehi College</span>,
          our strength lies in our{" "}
          <span className="font-semibold">
            highly skilled and experienced BCA faculty
          </span>
          . Our team consists of professionals with strong backgrounds in
          computer science, programming, and modern technologies, dedicated to
          preparing students for the IT industry.
        </p>

        <p className="max-w-4xl text-justify text-lg mx-auto text-gray-600 leading-relaxed">
          Our faculty members bring expertise in areas such as software
          development, database management, web technologies, and emerging
          technologies. They focus on practical learning, real-world projects,
          and industry-oriented skills to ensure students are job-ready and
          confident in their technical abilities.
        </p>
      </div>
    </div>
  );
};

export default FacultyPage;
