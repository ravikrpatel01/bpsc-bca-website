import { useState } from "react";

const images = [
  {
    src: "/teachers_day_2025.jpg",
    title: "Teachers Day",
    date: "5th September 2025",
  },
  {
    src: "/secretary_sir_republicday_2026.jpeg",
    title: "Mr. Himanshu Kumar, Secretary",
    date: "26th January 2026",
  },
  {
    src: "/republic_day_2026.jpg",
    title: "Republic Day",
    date: "26th January 2026",
  },
  {
    src: "/republic_img_2.jpeg",
    title: "Republic Day",
    date: "26th January 2026",
  },
  {
    src: "/republic_img_1.jpeg",
    title: "Republic Day",
    date: "26th January 2026",
  },
  {
    src: "/webinar_img_1.jpeg",
    title: "Webinar on Cyber Security Awareness",
    date: "8th April 2026",
  },
  {
    src: "/webinar_img_2.jpeg",
    title: "Webinar on Cyber Security Awareness",
    date: "8th April 2026",
  },

  {
    src: "/republicday2026.jpeg",
    title: "All Faculties and Staffs",
    date: "26th January 2026",
  },
];

const ModernGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-100 py-3 lg:py-10 px-2 lg:px-6">
      <h2 className="text-2xl lg:text-4xl font-bold text-center text-blue-900 mb-3 lg:mb-12">
        Photo Gallery
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => setSelected(img)}
          >
            {/* Image */}
            <img
              src={img.src}
              alt=""
              className="w-full h-40 lg:h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{img.title}</h3>
              <p className="text-gray-300 text-sm">{img.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected.src}
            alt=""
            className="max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ModernGallery;
