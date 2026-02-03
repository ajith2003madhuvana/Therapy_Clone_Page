import React, { useState } from "react";
import FadeIn from "../components/FadeIn";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#F6F8F5] pt-32 pb-40">
      <div className="max-w-xl mx-auto px-6">

        <FadeIn>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl text-[#24302A] mb-6">
              Schedule a Consultation
            </h1>

            <p className="text-[#5F6D64] leading-relaxed max-w-md mx-auto">
              Reaching out can feel like a big step. You’re welcome to share
              a little about what’s bringing you here, and we can take
              things from there.
            </p>
          </div>

          {/* Form / Confirmation */}
          <div className="bg-[#ECE8E1] rounded-2xl p-10">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="sr-only" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl border border-black/10
                               focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl border border-black/10
                               focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    What brings you here?
                  </label>
                  <textarea
                    id="message"
                    placeholder="What brings you here?"
                    className="w-full px-5 py-4 rounded-xl border border-black/10
                               h-36 focus:outline-none focus:ring-2 focus:ring-[#6F8F7A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#6F8F7A] py-4
                             text-white text-sm tracking-wide
                             hover:bg-[#5F7C6B] transition-colors"
                >
                  Request Consultation
                </button>

              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl text-[#24302A] mb-4">
                  Thank you for reaching out
                </h2>
                <p className="text-[#5F6D64] leading-relaxed">
                  Your message has been received. You can expect a response
                  soon, and we’ll take the next steps together at a pace
                  that feels comfortable.
                </p>
              </div>
            )}

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactPage;
