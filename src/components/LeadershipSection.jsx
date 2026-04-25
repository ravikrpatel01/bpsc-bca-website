const LeadershipSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-2 md:px-8 text-center">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Principal Section */}
        <div>
          <img
            src="/principal_image.jpeg"
            alt="Principal"
            className="w-50 h-52 object-center mx-auto rounded-xl shadow-md border-4 border-blue-300"
          />

          <h2 className="mt-4 text-xl font-semibold text-blue-700">
            Principal's Message
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed lg:text-xl text-justify mx-auto">
            "At{" "}
            <span className="font-medium">Baijnath Prasad Snehi College</span>,
            we focus on building strong{" "}
            <span className="font-medium">technical foundations</span>,{" "}
            <span className="font-medium">critical thinking</span>, and{" "}
            <span className="font-medium">innovation</span> among students. Our
            goal is to prepare you not just for jobs, but for successful careers
            in the IT industry. Together, let’s create a future driven by
            knowledge and technology."
          </p>

          <p className="mt-4 font-semibold lg:text-xl text-blue-800">
            Dr. Bhupendra Thakur
          </p>
          <p className="text-gray-500 lg:text-lg">Principal</p>

          {/* <button className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm">
            Read Full Message
          </button> */}
        </div>

        {/* Secretary Section */}
        <div>
          <img
            src="/himanshu_sir_image.jpeg"
            alt="Secretary"
            className="w-50 h-52 object-center mx-auto rounded-xl shadow-md border-4 border-blue-300"
          />

          <h2 className="mt-4 text-xl font-semibold text-blue-700">
            Secretary's Message
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed lg:text-xl text-justify mx-auto">
            "We believe education in technology empowers individuals to shape
            the future.{" "}
            <span className="font-medium">Baijnath Prasad Snehi College</span>,
            we are committed to providing the{" "}
            <span className="font-medium">right guidance</span>,
            <span className="font-medium"> infrastructure</span>, and{" "}
            <span className="font-medium">opportunities</span> for students to
            excel in the field of computer applications and beyond."
          </p>

          <p className="mt-4 lg:text-xl font-semibold text-blue-800">
            Mr. Himanshu Shekhar
          </p>
          <p className="text-gray-500 lg:text-lg">Secretary & Founder</p>

          {/* <button className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md text-sm">
            More About Leadership
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
