import React, { useRef, useState, useEffect } from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";

const UI_UX_Part = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [1, 2, 3, 4];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll(".stack-card");
      const trigger = window.innerHeight / 1.5; // Adjusted trigger point

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < trigger) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black_color">
      <div className="container px-4 pt-8 mx-auto sm:px-6 lg:px-8 md:pt-12">
        <Common_overlay title="UI UX" style={{ color: "white" }} />

        <div ref={containerRef} className="relative">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`stack-card sticky top-20 md:top-32 transition-all duration-300
                ${
                  index === activeIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-70 scale-90 z-0"
                }
              `}
            >
              <div className="pt-8 md:pt-12 pb-16 md:pb-[108px]">
                <div className="flex flex-col lg:flex-row justify-between rounded-xl bg-gradient-to-l from-[#100f0f] to-[#333333] shadow-xl/30 w-full lg:w-[628px] mx-auto">
                  <div className="pt-12 md:pt-[108px] pb-8 md:pb-[72px] px-6 sm:px-8 md:px-12">
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl font-open_sans text-white_text_color">
                      UI UX Design
                    </h1>
                    <p className="text-sm sm:text-base font-medium font-open_sans text-white_text_color w-full lg:w-[532px] text-justify pt-6 md:pt-12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UI_UX_Part;