import React from 'react';

const SpecialtyCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
}> = ({ title, description, imageUrl }) => (
  <div className="border border-[#24302A]/15 p-8 md:p-9 flex flex-col h-full bg-[#ECE8E1] rounded-2xl">
    <h3 className="text-3xl md:text-4xl mb-6 text-[#24302A] font-normal">
      {title}
    </h3>

    <div className="text-[16px] leading-[1.65] mb-8 flex-grow text-[#5F6D64]">
      <p>{description}</p>
    </div>

    <div className="mt-auto flex justify-center">
      <div className="w-full aspect-square max-w-[180px] rounded-full overflow-hidden border border-black/10">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Specialties: React.FC = () => {
  const specialties = [
    {
      title: "Anxiety Therapy",
      description:
        "Therapy for adults experiencing constant worry, panic, or physical tension—helping you feel calmer, more grounded, and more at ease in daily life.",
      imageUrl: "/images/anxiety.png",
    },
    {
      title: "Trauma-Informed Counseling",
      description:
        "Trauma-informed counseling for adults healing from past experiences, with a focus on safety, stabilization, and building emotional balance at your own pace.",
      imageUrl: "/images/trauma.png",
    },
    {
      title: "Burnout & Stress Therapy",
      description:
        "Support for professionals feeling overwhelmed or depleted, focused on recovery, healthier boundaries, and more sustainable ways of living and working.",
      imageUrl: "/images/heal.png",
    },
  ];

  return (
    <section className="bg-[#F6F8F5] px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-[#5F6D64] mb-4">
            Expertise
          </h2>
          <h3 className="text-5xl md:text-[4.5rem] text-[#24302A] leading-none font-normal">
            My Specialties
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {specialties.map((s, idx) => (
            <SpecialtyCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
