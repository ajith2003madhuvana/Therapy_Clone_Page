import React from "react";
import { Link } from "react-router-dom";

const Intro: React.FC = () => {
  return (
    <section className="relative bg-[#ECE8E1] px-4 sm:px-6 md:px-12 py-16 sm:py-20 border-t border-black/5 overflow-hidden">
      
      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Mobile: Content first, then Image */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-center">
          
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-5xl md:text-[42px] lg:text-[56px] leading-tight md:leading-[1.15] text-[#24302A] font-normal">
            A supportive space to slow down, reflect, and heal
          </h2>

          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-[1.7] text-[#5F6D64] max-w-xl">
            <p>
              Many adults I work with appear capable and put-together on the
              outside, while internally feeling overwhelmed, tense, or emotionally
              exhausted.
            </p>

            <p>
              Therapy can be a place to pause, make sense of what you’re
              experiencing, and develop tools that help you feel more grounded
              and regulated — not just during sessions, but in everyday life.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-[#6F8F7A] text-white uppercase tracking-[0.12em] text-[10px] sm:text-xs md:text-xs font-medium hover:opacity-90 transition"
          >
            Schedule a Consultation
          </Link>
        </div>

          {/* Image - appears below text on mobile */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-auto md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full">
            <img
              src="/images/Intro.png"
              alt="Calm, neutral therapy office with natural light"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
