import { Link } from "react-router-dom";

const LibraryInfo = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-linear-to-r bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Library</h1>

        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Your gateway to knowledge, research, and academic excellence
        </p>

        <div className="mt-6 text-sm flex justify-center gap-2 opacity-90">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/infrastructure">Infrastructure</Link>
          <span>/</span>
          <span className="font-semibold">Library</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              A World of Knowledge Awaits
            </h2>

            <p className="text-gray-700 text-lg text-justify mb-2">
              The{" "}
              <span className="font-medium">Baijnath Prasad Snehi College</span>{" "}
              library is the{" "}
              <span className="font-semibold">
                heart of our academic institution
              </span>
              , providing comprehensive resources to support teaching, learning,
              and research activities. Our library houses an extensive
              collection of books, journals, e-resources, and digital materials.
            </p>

            <p className="text-gray-600 text-lg text-justify mb-2">
              With modern facilities, quiet study spaces, and helpful staff, our
              library creates an ideal environment for academic pursuits and
              intellectual growth.
            </p>

            <p className="text-gray-600 text-lg">
              Whether you're preparing for exams, conducting research, or simply
              exploring new ideas, our library resources and services are
              designed to support your educational journey.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/library.jpg" // 👈 image path tum change kar lena
              alt="Library"
              className="w-full h-80 object-cover rounded-xl border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryInfo;
