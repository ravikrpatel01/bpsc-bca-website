import NoticesSection from "./NoticesSection";

const NewsSection = () => {
  return (
    <div className="bg-gray-100 py-4 lg:py-8 lg:px-16 md:px-5">
      {/* Heading */}
      <h1 className="text-xl md:text-3xl text-center font-bold text-blue-800">
        Latest Notices & Announcements
      </h1>

      {/* News Box */}
      <NoticesSection />
    </div>
  );
};

export default NewsSection;
