import { Link } from "react-router-dom";

const GalleryHeader = () => {
  return (
    <div>
      {/* Top Blue Section */}
      <div className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>

        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Capturing moments, memories, and milestones of our vibrant campus life
        </p>

        {/* Breadcrumb */}
        <div className="text-sm text-blue-200">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">Gallery</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">
          Explore Our Campus Life
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          Browse through our collection of photographs showcasing academic
          events, cultural activities, sports competitions, and daily campus
          life.
        </p>
      </div>
    </div>
  );
};

export default GalleryHeader;
