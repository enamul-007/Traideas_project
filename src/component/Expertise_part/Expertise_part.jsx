import React, { useRef, useState, useEffect } from "react";
import Common_overlay from "../common_component/Common_overlay";
import Card_common from "../common_component/Card_common";

const Expertise_part = () => {
  const containerRef = useRef();
  const [activeIndex, setActiveIndex , ] = useState(0);
  

  const cards = [1, 2, 3, 4 , 5];

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current.querySelectorAll(".stack-card");
      const trigger = window.outerHeight / 5;

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
    <div>
      <div className="bg-expertise_bg_color">
        <div className="container">
          <div className="flex flex-col pb-[64px]">
            <div className="pt-6 pb-[63px]">
              <Common_overlay
                title={"Our Expertise"}
                style={{ color: "white" }}
              />
            </div>

            {/* ===== Scroll Stacking Cards ===== */}
            <div ref={containerRef} className="relative mt-20 ">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`stack-card sticky top-32  transition-all duration-500
                    ${
                      index === activeIndex
                        ? "opacity-100 scale-100  translate-x-0 "
                        : "opacity-100 scale-95  translate-x-1 ]  "
                    }
                  
                  `}
                >
                  <Card_common />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise_part;
