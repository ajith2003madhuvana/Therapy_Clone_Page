import React from "react";
import FadeIn from "../components/FadeIn";

const ServicesPage = () => {
  return (
    <main className="bg-[#ECE8E1] pt-32 pb-40">

      {/* PAGE INTRO */}
      <section className="mb-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl text-[#24302A] mb-6">
              Therapy Services
            </h1>

            <p className="text-lg text-[#5F6D64] leading-relaxed max-w-2xl mx-auto">
              Therapy is tailored to your needs, pace, and goals. Services are
              grounded in evidence-based care and offered in a calm, supportive
              environment.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES GRID */}
<section>
  <FadeIn>
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

    {/* Service 1 */}
    <div className="bg-[#5F6D64] rounded-2xl p-10">
      <h2 className="text-2xl text-white mb-4">
        Anxiety Therapy
      </h2>
      <p className="text-white/90 leading-relaxed">
        Support for ongoing anxiety, overthinking, panic, and chronic
        stress. Therapy focuses on helping you feel more grounded,
        regulated, and able to navigate daily challenges with greater
        ease.
      </p>
    </div>

    {/* Service 2 */}
    <div className="bg-[#5F6D64] rounded-2xl p-10">
      <h2 className="text-2xl text-white mb-4">
        Trauma & PTSD Therapy
      </h2>
      <p className="text-white/90 leading-relaxed">
        Trauma-informed therapy designed to support healing at a
        manageable pace. The focus is on safety, nervous system
        regulation, and building a stronger sense of stability and
        resilience over time.
      </p>
    </div>

    {/* Service 3 */}
    <div className="bg-[#5F6D64] rounded-2xl p-10">
      <h2 className="text-2xl text-white mb-4">
        Burnout Recovery
      </h2>
      <p className="text-white/90 leading-relaxed">
        Therapy for professionals and high-achieving individuals
        experiencing emotional exhaustion, disconnection, or loss of
        balance. Sessions support rest, clarity, and more sustainable
        ways of working and living.
      </p>
    </div>

    </div>
  </FadeIn>
</section>


    </main>
  );
};

export default ServicesPage;
