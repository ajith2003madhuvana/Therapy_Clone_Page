import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6F8F5] pt-24">

      {/* TOP FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32">

          {/* Brand / Contact */}
          <div>
            <h4 className="text-2xl md:text-3xl mb-8 font-semibold text-maya-dark">
              Dr. Maya Reynolds
            </h4>

            <div className="space-y-4 text-lg text-maya-dark/70 font-light">
              <p>
                123th Street 45 W<br />
                Santa Monica, CA 90401
              </p>

              <a
                href="mailto:maya@reynoldspsyd.com"
                className="underline underline-offset-4 decoration-maya-sage decoration-2 inline-block"
              >
                maya@reynoldspsyd.com
              </a>

              <p>(310) 555-0123</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold mb-8 text-maya-sage">
              Hours
            </h4>

            <div className="space-y-4 text-lg text-maya-dark/70 font-light">
              <p>Monday – Thursday</p>
              <p>9am – 5pm</p>
              <p className="italic text-sm">
                Telehealth & In-person available
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-semibold mb-8 text-maya-sage">
              Find
            </h4>

            <nav className="flex flex-col gap-4 text-lg text-maya-dark font-medium">
              <Link
                to="/"
                className="italic hover:text-maya-sage transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="italic hover:text-maya-sage transition-colors"
              >
                Practice Details
              </Link>

              <Link
                to="/services"
                className="italic hover:text-maya-sage transition-colors"
              >
                Clinical Services
              </Link>
            </nav>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#ECE8E1] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 border-t border-maya-sage/10 text-center text-xs uppercase tracking-widest text-maya-dark/50 space-y-4">

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <span className="hover:text-maya-sage transition-colors cursor-default">
              Privacy Policy
            </span>
            <span className="hover:text-maya-sage transition-colors cursor-default">
              Good Faith Estimate
            </span>
            <span className="hover:text-maya-sage transition-colors cursor-default">
              Terms & Conditions
            </span>
          </div>

          <p>
            All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD, LLC.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
