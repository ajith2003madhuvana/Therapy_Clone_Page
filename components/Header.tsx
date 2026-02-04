import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const linkBase =
    "hover:opacity-70 transition-opacity";
  const activeLink =
    "opacity-100 border-b border-[#2F2F2F] pb-1";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[3.75vw] py-3 sm:py-5 flex items-center justify-between">

        <div className="flex flex-col leading-tight">
          <span className="text-sm sm:text-base md:text-[20px] font-medium tracking-tight text-[#24302A]">
            Dr. Maya Reynolds
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#5F6D64] mt-0.5 sm:mt-1">
            Licensed Clinical Psychologist
          </span>
        </div>

        {/* Navigation */}
        <nav
          className="flex items-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-[15px] font-medium text-[#2F2F2F]"
          aria-label="Primary navigation"
        >
          {(() => {
            const pages = [
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Schedule a Consultation", isCTA: true },
            ];

            // Normalize current path (strip trailing slash)
            const current = location.pathname.replace(/\/$/, "") || "/";

            return pages
              .filter((p) => p.path !== current)
              .map((p) => {
                if (p.isCTA) {
                  return (
                    <Link
                      key={p.path}
                      to={p.path}
                      aria-label="Schedule a consultation"
                      className="ml-1 sm:ml-2 rounded-full bg-[#5F7C6B] px-3 sm:px-5 md:px-7 py-2 sm:py-3 text-[10px] sm:text-xs md:text-sm font-medium text-white tracking-wide hover:bg-[#4F6A5B] transition-colors whitespace-nowrap"
                    >
                      {p.label}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={p.path}
                    to={p.path}
                    className={`${linkBase} ${
                      location.pathname === p.path ? activeLink : ""
                    }`}
                  >
                    {p.label}
                  </Link>
                );
              });
          })()}
        </nav>

      </div>
    </header>
  );
};

export default Header;
