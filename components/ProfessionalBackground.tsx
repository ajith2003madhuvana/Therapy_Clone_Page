import { useState } from "react";
import type { ReactNode } from "react";

interface BackgroundItemProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  children: ReactNode;
}

const BackgroundItem = ({
  label,
  isOpen,
  onClick,
  children,
}: BackgroundItemProps) => {
  return (
    <div className="border-b border-[#ECE8E1]">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left"
      >
        <span className="text-2xl md:text-3xl font-light text-[#24302A]">
          {label}
        </span>
        <span className="text-xl font-light text-[#5F6D64]">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-6 max-w-3xl text-[#5F6D64] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ProfessionalBackground = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setOpenItem(openItem === label ? null : label);
  };

  return (
    <section className="bg-[#F6F2EC] px-6 md:px-12 py-24 md:py-40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center text-[#24302A] mb-16">
          Professional Background
        </h2>

        <div className="border-t border-[#ECE8E1]">
          {/* EDUCATION */}
          <BackgroundItem
            label="Education"
            isOpen={openItem === "Education"}
            onClick={() => toggleItem("Education")}
          >
            <p>
              I earned my Doctor of Psychology (PsyD) in Clinical Psychology
              through an accredited graduate program, with focused training
              in evidence-based approaches for anxiety, trauma, and
              stress-related concerns.
            </p>
          </BackgroundItem>

          {/* LICENSURE */}
          <BackgroundItem
            label="Licensure"
            isOpen={openItem === "Licensure"}
            onClick={() => toggleItem("Licensure")}
          >
            <p>
              I am a licensed clinical psychologist in the state of
              California and practice in accordance with professional and
              ethical standards. Client care is approached with respect,
              confidentiality, and collaboration.
            </p>
          </BackgroundItem>

          {/* CERTIFICATIONS */}
          <BackgroundItem
            label="Certifications"
            isOpen={openItem === "Certifications"}
            onClick={() => toggleItem("Certifications")}
          >
            <p>
              My ongoing clinical training includes specialized education
              in trauma-informed care, Cognitive Behavioral Therapy (CBT),
              EMDR, and mindfulness-based approaches, allowing therapy to
              be tailored thoughtfully to each individual.
            </p>
          </BackgroundItem>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
