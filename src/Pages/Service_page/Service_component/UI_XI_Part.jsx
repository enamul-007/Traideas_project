import React, { useRef, useState, useEffect } from "react";
import Common_overlay from "../../../component/common_component/Common_overlay";
import { color } from "framer-motion";

const UI_XI_Part = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [1, 2, 3, 4];

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current.querySelectorAll(".stack-card");
      const trigger = window.innerHeight / 1;

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
      <div className="container pt-12">
        <Common_overlay title="UI UX" style={{ color: "white" }} />

        <div ref={containerRef} className="relative ">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`stack-card sticky top-32  transition-all duration-200
                    ${
                      index === activeIndex
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-100 scale-95 z-0"
                    }
                  `}
            >
              <div className="pt-12 pb-[108px]">
                <div className=" flex justify-between rounded-xl bg-gradient-to-l from-[#100f0f] to-[#333333] shadow-xl/30 w-[628px]">
                  <div className="pt-[108px] pb-[72px] px-12">
                    <h1 className="text-4xl font-bold font-open_sans text-white_text_color">
                      UI UX Design
                    </h1>
                    <p className="text-base font-medium font-open_sans text-white_text_color w-[532px] text-justify pt-12">
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

export default UI_XI_Part;
