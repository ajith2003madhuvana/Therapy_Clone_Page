import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-[#F6F8F5] px-6 md:px-12 py-32 md:py-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-12">
          <h2 className="text-5xl md:text-[5.5rem] leading-none">
            Hi, I’m Dr. Maya Reynolds.
          </h2>

          <div className="space-y-8 text-xl leading-relaxed text-lilac-dark/90">
            <p>
              I’m a licensed therapist dedicated to creating a safe, supportive
              space where you can openly explore your thoughts, emotions, and
              life experiences. Therapy with me is collaborative, compassionate,
              and centered around your unique needs.
            </p>

            <p>
              Using evidence-based approaches, I help individuals navigate
              anxiety, stress, and major life transitions—working together to
              build clarity, resilience, and emotional balance.
            </p>
          </div>

          <div className="pt-4">
            <button className="px-10 py-4 rounded-full bg-[#5F7C6B] text-white uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#4F6A5B] transition-colors">
  Schedule a Consultation
</button>

          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="/images/Maya.png"
              alt="Portrait of Dr. Maya Reynolds"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Circle (kept for Lilac fidelity) */}
          <div className="absolute -bottom-12 -right-6 w-1/2 aspect-square rounded-full overflow-hidden border-[12px] border-lilac-offwhite hidden lg:block shadow-sm">
            <img
              src="/images/office1.jpeg"
              alt="Therapy office detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
