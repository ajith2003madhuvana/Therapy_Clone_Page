import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F6F8F5] min-h-screen flex items-center pt-24 md:pt-0">
      <div className="max-w-[1400px] mx-auto px-[3.75vw] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-[431px] h-[500px] overflow-hidden rounded-3xl md:-ml-6">
            <img
              src="/images/Hero_Calm.png"
              alt="Calm therapy space with natural light in Santa Monica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      {/* Text */}
<div className="text-center md:text-left md:-translate-y-6 md:-ml-20">
  <h1 className="text-[64px] leading-[1.15] text-[#24302A] font-normal mb-8">
    Anxiety & Trauma Therapy <br />
    in Santa Monica, CA
  </h1>

  <p className="text-[17px] leading-[1.7] text-[#5F6D64] max-w-[520px] mb-12">
    Thoughtful, evidence-based therapy for adults who feel overwhelmed,
    burnt out, or stuck in constant overthinking. In-person sessions in
    Santa Monica and secure online therapy across California.
  </p>

  <div className="mt-2 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center md:justify-start">
    <Link
      to="/contact"
      className="px-10 py-4 rounded-full bg-[#5F7C6B] text-white uppercase tracking-[0.12em] text-xs font-medium hover:opacity-90 transition"
    >
      Schedule a Consultation
    </Link>

    <Link
      to="/about"
      className="px-10 py-4 border border-[#24302A] text-[#24302A] uppercase tracking-[0.12em] text-xs font-medium hover:bg-[#24302A] hover:text-white transition"
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
