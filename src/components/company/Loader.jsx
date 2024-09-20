import React, { useEffect } from "react";
import gsap from "gsap";

const Loader = ({color, onComplete }) => {
  useEffect(() => {
    console.log("Loader mounted");
    const rectangles = gsap.utils.toArray(".rectangle");

    gsap.fromTo(
      rectangles,
      { y: "100vh" },
      {
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(rectangles, {
            y: "-100vh",
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.in",
            onComplete: () => {
              onComplete();
            },
          });
        },
      }
    );
  }, [onComplete]);

  const rectangleStyle = {
    height: "100vh",
    backgroundColor: color,
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="rectangle flex-1" style={rectangleStyle}></div>
      ))}
    </div>
  );
};

export default Loader;
