import React from 'react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <section className="bg-[#F6F8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image */}
        <div className="h-[420px] lg:h-auto overflow-hidden">
          <img 
            src="/images/meditation.png"
            alt="Calm, supportive therapy environment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-[#ECE8E1] p-12 lg:p-20 flex flex-col justify-center">
          <h2 className="text-[42px] md:text-[56px] leading-[1.15] mb-10 text-[#24302A] font-normal">
            You don’t have to navigate this <span className="italic">on your own</span>.
          </h2>

          <p className="text-[18px] mb-10 text-[#5F6D64] max-w-lg leading-[1.7]">
            Many people seek therapy during seasons of feeling overwhelmed, disconnected,
            or unsure how to move forward. If any of these resonate, support is available.
          </p>

          <ul className="space-y-6 text-[17px] text-[#5F6D64] max-w-lg">
            {[
              "Feeling persistently anxious, low, or emotionally drained",
              "Difficulty focusing, resting, or making decisions",
              "Feeling disconnected in relationships or from yourself",
              "Ongoing stress, burnout, or loss of motivation",
              "A sense of carrying too much for too long"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 bg-[#6F8F7A] rounded-full shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-12 text-[17px] italic text-[#6F8F7A] max-w-lg leading-[1.7]">
            Therapy can be a steady, supportive place to slow down, feel understood,
            and begin finding clarity at a pace that feels right for you.
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full bg-[#6F8F7A] text-white uppercase tracking-[0.12em] text-xs font-medium hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Support;
