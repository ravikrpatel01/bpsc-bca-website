import { FaSpinner, FaTimes } from "react-icons/fa";

const FullPageLoader = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute cursor-pointer top-5 right-5 text-white text-4xl hover:text-red-400 transition"
      >
        <FaTimes />
      </button>

      {/* Loader Box */}
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <FaSpinner className="text-6xl text-blue-500 animate-spin" />

        {/* Text */}
        <p className="text-white text-2xl font-medium tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default FullPageLoader;
