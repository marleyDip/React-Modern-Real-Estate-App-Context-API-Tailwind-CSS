import React from "react";
import { assets } from "../assets/data";
import Title from "./Title";

const Faq = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqsData = [
    {
      question: "How do I schedule a property viewing?",
      answer:
        "You can schedule a viewing directly through our website by selecting your preferred time, or contact our agents for assistance.",
    },
    {
      question: "Do you assist with mortgage and financing?",
      answer:
        "Yes, we partner with trusted lenders to help you find the best mortgage and financing options that suit your budget.",
    },
    {
      question: "Are the property listings updated regularly?",
      answer:
        "Absolutely. Our listings are updated daily to ensure you have access to the latest available properties.",
    },
    {
      question: "What fees are involved in buying a property?",
      answer:
        "In addition to the property price, common fees include legal charges, registration fees, and agent commissions. Our team will guide you through all costs clearly.",
    },
    {
      question: "Can I list my property for sale or rent on your platform?",
      answer:
        "Yes, property owners can easily list their homes or rentals with us. Our agents will guide you through the process to ensure maximum visibility.",
    },
  ];

  return (
    <section className="max-padd-container py-16 xl:py-22">
      {/* container */}
      <div className="flex flex-col gap-y-12 xl:flex-row">
        {/* image - left side */}
        <div className="flex-1">
          <div className="relative rounded-3xl overflow-hidden inline-block">
            <img src={assets.faq} alt="faqImage" className="block w-full" />

            <div className="absolute top-5 left-5 right-5 bg-white p-3 rounded-2xl shadow-md flex items-center gap-4 z-10">
              <img src={assets.signature} alt="signImage" width={55} />

              <div>
                <h5 className="bold-16">Trusted Real Estate Experts</h5>

                <p className="font-medium text-justify text-neutral-500">
                  Trust, clarity and simplicity are at the care of everything we
                  do to make your property journey easy.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* image - left side */}

        {/* faqs - right side */}
        <div className="flex-1 flex flex-col justify-center">
          <Title
            title1={"Homes Made for Living"}
            title2={"Simplifying Your Property Search Every Step"}
            para={
              "From finding the right location to finalizing the deal, we ensure your real estate journey is smooth, efficient, and fulfilling."
            }
            titleStyles={"mb-10"}
          />

          <div className="max-w-xl w-full flex flex-col space-y-4 items-start text-left">
            {faqsData.map((faq, index) => (
              <div key={index} className="flex flex-col items-start w-full">
                <div
                  className="flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 p-4 rounded"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h2 className="text-sm">{faq.question}</h2>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      openIndex === index ? "rotate-180" : ""
                    } transition-all duration-500 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className={`text-sm text-justify text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                      : "opacity-0 max-h-0 -translate-y-2"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* faqs - right side */}
      </div>
      {/* container */}
    </section>
  );
};

export default Faq;
