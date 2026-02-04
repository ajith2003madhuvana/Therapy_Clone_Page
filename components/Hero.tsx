import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F6F8F5] min-h-screen flex items-center pt-24 md:pt-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[3.75vw] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Image */}
        <div className="order-2 md:order-1 flex justify-center md:justify-start mt-8 md:mt-0">
          <div className="w-full max-w-sm sm:max-w-md md:w-[431px] h-auto md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl md:-ml-6">
            <img
              src="/images/Hero_Calm.png"
              alt="Calm therapy space with natural light in Santa Monica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2 text-center md:text-left md:-translate-y-6 md:-ml-20">
          <h1 className="text-3xl sm:text-5xl md:text-[64px] leading-tight md:leading-[1.15] text-[#24302A] font-normal mb-4 sm:mb-6 md:mb-8">
            Anxiety & Trauma Therapy<br className="hidden sm:inline" />
            in Santa Monica, CA
          </h1>

          <p className="text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-[1.7] text-[#5F6D64] max-w-full md:max-w-[520px] mx-auto md:mx-0 mb-6 sm:mb-8 md:mb-12 px-2 sm:px-0">
            Thoughtful, evidence-based therapy for adults who feel overwhelmed,
            burnt out, or stuck in constant overthinking. In-person sessions in
            Santa Monica and secure online therapy across California.
          </p>

          <div className="mt-4 sm:mt-6 md:mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 justify-center md:justify-start px-2 sm:px-0">
            <Link
              to="/contact"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-[#5F7C6B] text-white uppercase tracking-[0.12em] text-[10px] sm:text-xs md:text-xs font-medium hover:opacity-90 transition"
            >
              Schedule a Consultation
            </Link>

            <Link
              to="/about"
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 border border-[#24302A] text-[#24302A] uppercase tracking-[0.12em] text-[10px] sm:text-xs md:text-xs font-medium hover:bg-[#24302A] hover:text-white transition"
            >
              Learn About My Approach
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
