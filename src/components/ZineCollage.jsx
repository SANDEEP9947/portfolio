import React, { useRef, useEffect } from "react";
import { collageImages } from "./collageImages";

const roughEdge =
  "polygon(5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%, 0 10%)";

export default function ZineCollage() {
  const containerRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      collageImages.forEach((img, i) => {
        const el = document.getElementById(`collage-img-${i}`);
        if (el) {
          el.style.transform = `translateY(${scrollY * img.speed}px) scale(${el.dataset.hovered === "true" ? 1.13 : 1})`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Floating animation
  useEffect(() => {
    collageImages.forEach((img, i) => {
      const el = document.getElementById(`collage-img-${i}`);
      if (el) {
        el.animate(
          [
            { transform: el.style.transform },
            { transform: `${el.style.transform} translateY(-8px)` },
            { transform: el.style.transform },
            { transform: `${el.style.transform} translateY(8px)` },
            { transform: el.style.transform },
          ],
          {
            duration: 6000 + i * 500,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
          }
        );
      }
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[600px] py-24 bg-[#242424] overflow-x-hidden overflow-y-visible z-10"
      ref={containerRef}
    >
      {/* Editorial SVG/Handwritten Text */}
      <svg
        className="absolute left-1/2 top-12 -translate-x-1/2 z-20 pointer-events-none select-none"
        width="600"
        height="120"
        viewBox="0 0 600 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="serif"
          fontSize="54"
          fill="#b3b3b3"
          opacity="0.18"
          style={{ fontStyle: "italic", letterSpacing: "-2px" }}
        >
          Side Projects Zine
        </text>
        <text
          x="50%"
          y="90%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="cursive"
          fontSize="32"
          fill="#b3b3b3"
          opacity="0.32"
          style={{ fontStyle: "italic" }}
        >
          experiments & explorations
        </text>
      </svg>
      {/* Collage Images */}
      <div className="relative w-full h-[520px] md:h-[520px] mx-auto" style={{ maxWidth: 700 }}>
        {collageImages.map((img, i) => (
          <img
            key={i}
            id={`collage-img-${i}`}
            src={img.src}
            alt="zine collage"
            data-hovered="false"
            style={{
              position: "absolute",
              top: img.top,
              left: img.left,
              width: img.style.width,
              height: img.style.height,
              objectFit: "cover",
              filter:
                "grayscale(1) contrast(1.2) brightness(0.95) drop-shadow(0 2px 8px #0008)",
              clipPath: roughEdge,
              zIndex: 10 + i,
              transition:
                "filter 0.5s cubic-bezier(.4,2,.6,1), box-shadow 0.5s, z-index 0.2s, transform 0.5s cubic-bezier(.4,2,.6,1)",
              boxShadow: "0 4px 24px 0 #0006",
              willChange: "transform, filter, box-shadow, z-index",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.filter =
                "grayscale(0) contrast(1.1) brightness(1.05) drop-shadow(0 4px 24px #fff6)";
              e.currentTarget.style.zIndex = 99;
              e.currentTarget.dataset.hovered = "true";
              e.currentTarget.style.boxShadow = "0 8px 40px 0 #fff8, 0 2px 8px #0008";
              e.currentTarget.style.transform += " scale(1.13)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.filter =
                "grayscale(1) contrast(1.2) brightness(0.95) drop-shadow(0 2px 8px #0008)";
              e.currentTarget.style.zIndex = 10 + i;
              e.currentTarget.dataset.hovered = "false";
              e.currentTarget.style.boxShadow = "0 4px 24px 0 #0006";
              e.currentTarget.style.transform = e.currentTarget.style.transform.replace(
                /scale\(1\.13\)/g,
                ""
              );
            }}
          />
        ))}
      </div>
    </section>
  );
}
