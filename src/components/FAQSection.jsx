import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What are the college admission timings?",
      answer:
        "The admission office is open Monday to Saturday from 9:00 AM to 5:00 PM. We recommend calling ahead for campus visits.",
    },
    {
      question: "How can I schedule a campus tour?",
      answer:
        "You can schedule a campus tour by calling our admission office or sending an email to the college administration.",
    },
    {
      question: "Is hostel accommodation available?",
      answer:
        "Yes, we have separate hostel facilities for boys and girls with modern amenities. Contact the hostel office for availability and booking.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-4 lg:py-16 px-2 md:px-16">
      {/* Heading */}
      <h1 className="text-center flex items-center justify-center gap-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-800 mb-3 lg:mb-12 px-2">
        <FaQuestionCircle className="shrink-0" />
        <span className="whitespace-nowrap">Frequently Asked Questions</span>
      </h1>

      <div className="max-w-5xl mx-auto space-y-2 lg:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-400"
          >
            {/* Question */}
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-2 lg:px-6 lg:py-4 cursor-pointer"
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>

              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-2 lg:px-6 pb-2 lg:pb-4 text-gray-600 border-t border-t-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
