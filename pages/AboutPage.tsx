import React from "react";
import FadeIn from "../components/FadeIn";

const AboutPage = () => {
  return (
    <main className="bg-[#F6F8F5]">

      {/* SECTION 1 — IDENTITY */}
      <section className="pt-32 pb-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">

            {/* Image */}
            <div className="md:col-span-5">
              <img
                src="/images/Maya.png"
                alt="Dr. Maya Reynolds, PsyD – Licensed Clinical Psychologist in Santa Monica"
                className="rounded-3xl w-full max-h-[520px] object-cover"
              />

            </div>

            {/* Core Identity */}
            <div className="md:col-span-7">
              <span className="block text-xs uppercase tracking-[0.18em] text-[#5F6D64] mb-5">
                Licensed Clinical Psychologist
              </span>

              <h1 className="text-4xl md:text-5xl leading-tight text-[#24302A] mb-6">
                Dr. Maya Reynolds, PsyD
              </h1>

              <p className="text-[17px] leading-[1.75] text-[#5F6D64] max-w-xl">
                Based in Santa Monica, California, Dr. Maya Reynolds provides therapy
                for adults who feel overwhelmed by anxiety, emotional stress, or
                burnout. Her work focuses on creating a calm, grounded space where
                clients can slow down, feel understood, and begin making sense of
                what they’re experiencing—at a pace that feels supportive and
                manageable. Therapy is approached collaboratively, with an emphasis
                on helping clients feel more steady, present, and connected to
                themselves over time.
              </p>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* SECTION 2 — THERAPEUTIC STYLE */}
<section className="bg-[#ECE8E1] py-24">
  <FadeIn>
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl text-[#24302A] mb-6">
        What Working Together Can Feel Like
      </h2>

      <p className="text-[#5F6D64] leading-relaxed max-w-2xl mx-auto">
        Therapy is meant to feel supportive, steady, and collaborative.
        Sessions are guided with care and intention, while still leaving
        space for reflection, curiosity, and honesty. The focus is on
        helping you feel understood, grounded, and supported as you work
        through what’s been weighing on you.
      </p>
    </div>
  </FadeIn>
</section>


     {/* SECTION 3 — WHAT CLIENTS CAN EXPECT */}
{/* SECTION 3 — WHAT CLIENTS CAN EXPECT */}
<section className="bg-[#F6F8F5] py-28">
  <FadeIn>
    <div className="max-w-6xl mx-auto px-6">

      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl text-[#24302A] mb-4">
          What You Can Expect
        </h2>
        <p className="text-[#5F6D64] leading-relaxed">
          Therapy is designed to feel supportive and steady. While every
          person’s experience is unique, many clients share these common
          qualities in their work together.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="bg-[#5F6D64] rounded-2xl p-8">
          <h3 className="text-lg text-white mb-3">
            A Calm, Supportive Space
          </h3>
          <p className="text-white/90 leading-relaxed">
            Sessions are paced thoughtfully, creating an environment that
            feels respectful, steady, and emotionally safe.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#5F6D64] rounded-2xl p-8">
          <h3 className="text-lg text-white mb-3">
            Thoughtful, Evidence-Based Care
          </h3>
          <p className="text-white/90 leading-relaxed">
            Therapy is informed by established clinical approaches, while
            remaining flexible and responsive to your individual needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#5F6D64] rounded-2xl p-8">
          <h3 className="text-lg text-white mb-3">
            A Collaborative Process
          </h3>
          <p className="text-white/90 leading-relaxed">
            The work unfolds as a partnership, guided by your experiences,
            goals, and what feels most supportive for you.
          </p>
        </div>

      </div>
    </div>
  </FadeIn>
</section>

      {/* SECTION 4 — LOCATION & AVAILABILITY */}
<section className="bg-[#ECE8E1] py-24">
  <FadeIn>
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-2xl text-[#24302A] mb-6">
        Location & Session Options
      </h2>

      <p className="text-[#5F6D64] leading-relaxed">
        In-person therapy is offered from a quiet, private office in
        Santa Monica, California, as well as secure telehealth sessions
        for clients located throughout the state. The practice setting
        is intentionally designed to feel calm, grounded, and supportive.
      </p>
    </div>
  </FadeIn>
</section>

    </main>
  );
};

export default AboutPage;
