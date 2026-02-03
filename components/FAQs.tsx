import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Do you accept insurance?",
      answer:
        "I do not accept insurance directly. Many clients choose to self-pay, and I’m happy to provide documentation if you’d like to explore possible reimbursement with your insurance provider.",
    },
    {
      question: "What can I expect in the first session?",
      answer:
        "The first session is a gentle opportunity for us to get to know each other. We’ll talk about what brings you to therapy, your goals, and any questions you may have, at a pace that feels comfortable for you.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple. You can reach out through the contact form to schedule a consultation, and I’ll guide you through the next steps with care and clarity.",
    },
  ];

  return (
    <section className="bg-[#F6F8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

        {/* IMAGE — FULL HEIGHT */}
        <div className="relative hidden lg:block">
          <img
            src="/images/faq.png"
            alt="Calm therapy office space"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="px-6 md:px-12 py-24 md:py-31">
          <h2 className="text-5xl md:text-[5rem] mb-16 text-[#24302A] font-normal">
            FAQs
          </h2>

          <div className="border-b border-[#24302A]/20">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-t border-[#24302A]/20 py-8"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-2xl md:text-3xl text-[#24302A] font-normal">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#5F6D64]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQs;
