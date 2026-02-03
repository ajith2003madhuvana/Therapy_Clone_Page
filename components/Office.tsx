import React from "react";

const Office: React.FC = () => {
  return (
    <section className="bg-[#ECE8E1] px-6 md:px-12 py-28 md:py-40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* TEXT */}
        <div className="space-y-10 max-w-2xl">
          <h2 className="text-5xl md:text-[5.5rem] leading-none text-[#24302A] font-normal">
            Our Office
          </h2>

          <div className="space-y-8 text-[18px] leading-[1.7] text-[#5F6D64]">
            <p>
              My office is designed to be a calm, welcoming space where you can
              feel comfortable, grounded, and at ease from the moment you arrive.
            </p>

            <p>
              Sessions take place in a quiet, thoughtfully arranged environment
              that supports reflection, privacy, and a sense of emotional safety.
              Whether you’re coming in for in-person therapy or a hybrid approach,
              the space is meant to help you slow down and focus on yourself.
            </p>

            <p className="italic text-[#6F8F7A]">
              Located in Santa Monica · In-person & hybrid sessions available
            </p>
          </div>
        </div>

        {/* IMAGES — NOW PROPERLY FILLED */}
        {/* IMAGES — STAGGERED PROPERLY */}
<div className="grid grid-cols-2 gap-8 items-start">
  {/* Primary image */}
  <div className="aspect-[4/5] rounded-3xl overflow-hidden">
    <img
      src="/images/office1.jpeg"
      alt="Therapy office seating area"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Secondary image — starts halfway down the first */}
  <div className="aspect-[4/5] rounded-3xl overflow-hidden mt-[50%]">
    <img
      src="/images/office2.jpeg"
      alt="Therapy office with natural light"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Office;
