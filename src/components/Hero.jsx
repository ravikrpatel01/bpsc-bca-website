import { useEffect, useState } from "react";
import { BiSolidSchool } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/college_img2.png",
    "/teachers_day_3-modified.jpeg",
    "/teachers_day_1.jpeg",
    "/teachers_day_4.jpeg",
    "/teachers_day_5.jpeg",
    "/teachers_day_2.jpeg",
    "/teachers_day_7.jpeg",
    "/teachers_day_10.jpeg",
    "/teachers_day_9.jpeg",
    "/teachers_day_11.jpeg",
  ];

  // First image ko end me duplicate kar diya
  const sliderImages = [...images, images[0]];

  const [currentImage, setCurrentImage] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Duplicate first image par pahunchne ke baad
  // silently original first image par reset
  useEffect(() => {
    if (currentImage === images.length) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setCurrentImage(0);
      }, 700); // transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentImage, images.length]);

  // Reset ke baad transition enable
  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  }, [enableTransition]);

  return (
    <div className="lg:h-[85vh] h-[50vh] relative overflow-hidden">
      {/* Background Slider */}
      <div
        className={`absolute inset-0 flex ${
          enableTransition
            ? "transition-transform duration-700 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="min-w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center px-4 lg:px-10">
        <div className="text-white max-w-2xl">
          <h1 className="lg:text-7xl text-4xl font-bold text-yellow-400 leading-tight">
            <span className="text-white">Baijnath Prasad</span> Snehi College
          </h1>

          <p className="mt-4 text-xl lg:text-2xl">
            Inspiring the next generation of IT professionals. <br />
            <span className="font-bold text-yellow-300">AICTE Approved</span>,
            Affiliated to{" "}
            <span className="font-bold text-yellow-300">
              Vinoba Bhave University
            </span>
            .
          </p>

          <div className="lg:mt-10 mt-6 flex gap-2 lg:gap-5">
            <Link
              to="/about-college"
              className="bg-emerald-700 hover:bg-emerald-600 flex items-center gap-1 px-2 lg:px-3 py-1 lg:py-2 cursor-pointer text-sm font-medium rounded"
            >
              <BiSolidSchool className="text-xl" />
              About Our College
            </Link>

            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 flex items-center gap-2 px-2 lg:px-3 py-1 lg:py-2 cursor-pointer text-sm font-medium rounded"
            >
              <FaPhoneAlt />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
