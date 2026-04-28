import { Link } from "react-router-dom";

const NoticesHeader = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white py-4 lg:py-16 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">Notices</h1>
        <p className="mt-2 lg:text-lg">
          Stay updated with the latest announcements and notices
        </p>
        <p className="mt-2 text-sm">
          <Link to="/" className="text-gray-200">
            Home
          </Link>{" "}
          / Notices
        </p>
      </div>
    </div>
  );
};

export default NoticesHeader;
