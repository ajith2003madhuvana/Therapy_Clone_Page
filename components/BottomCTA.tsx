
import React from 'react';
import { Link } from 'react-router-dom';

const BottomCTA: React.FC = () => {
  return (
    <section className="bg-[#46685C] px-6 md:px-12 py-24 md:py-32 text-white">
      <div className="max-w-4xl mx-auto text-center">
         {/* Headline */}
        <h2 className="text-5xl md:text-[6.5rem] mb-12 leading-none font-light italic text-white/95 drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
          You’re not alone.
        </h2>

        {/* Supporting copy */}
        <p className="text-lg md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto font-light text-white/80">
          If you’re feeling overwhelmed, stuck, or simply ready for support, 
          therapy can be a gentle place to begin. I offer confidential, 
          compassionate care for individuals in Santa Monica.
        </p>

        {/* CTA */}
        <Link
          to="/contact"
          className="
  inline-block px-14 py-5
  bg-[#E7E1D6]
  text-[#3F5F55]
  uppercase tracking-[0.2em]
  text-xs font-semibold
  hover:bg-white
  transition
  rounded-sm
">
  Schedule a consultation
</Link>

      </div>
    </section>
  );
};

export default BottomCTA;
