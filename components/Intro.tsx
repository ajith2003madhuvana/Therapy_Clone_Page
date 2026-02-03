import React from "react";

const Intro: React.FC = () => {
  return (
    <section className="relative bg-[#ECE8E1] px-6 md:px-12 py-20 border-t border-black/5 overflow-hidden">
      
      {/* Image – detached from layout */}
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2">
        <img
          src="/images/Intro.png"
          alt="Calm, neutral therapy office with natural light"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div className="space-y-10">
          <h2 className="text-[42px] md:text-[56px] leading-[1.15] text-[#24302A] font-normal">
            A supportive space to slow down, reflect, and heal
          </h2>

          <div className="space-y-8 text-[17px] leading-[1.7] text-[#5F6D64] max-w-xl">
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

          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full bg-[#6F8F7A] text-white uppercase tracking-[0.12em] text-xs font-medium hover:opacity-90 transition"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Empty column keeps grid balance */}
        <div />
      </div>
    </section>
  );
};

export default Intro;
