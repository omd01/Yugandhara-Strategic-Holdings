import { useRef, useEffect } from "react";
import gsap from "gsap";
import Marquee from "./marquee/Marquee";
import MarqueeResponsive from "./marquee/MarqueeResponsive";
import { cards_one, cards_two, comp_icons } from "../../assets";
import { Link } from "react-router-dom";
import companies from "../../assets/company.json";

const Hero = () => {
  const containerRef = useRef(null);
  const images = comp_icons;
  const imageCount = images.length;

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll(".image");
    gsap.set(imageElements, { opacity: 0, scale: 0.7 });
    const animateImages = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(imageElements, { opacity: 0, scale: 0.7 });
          animateImages();
        },
      });

      images.forEach((image, index) => {
        const imageElement = imageElements[index];

        tl.to(imageElement, {
          duration: 1.1,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        }).to(imageElement, {
          duration: 0.3,
          opacity: 0,
          scale: 1.1,
          ease: "power3.in",
        });
      });
    };

    // Start the animation loop
    animateImages();
  }, [images]);

  return (
    <section className="hero-section flex flex-row max-xmlg:flex-col h-auto">
      {/* 70% Part */}
      <div
        className="w-[75%] flex flex-col items-center mt-16 max-sm:mt-12 text-center max-xmlg:w-full"
        ref={containerRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={{ zIndex: imageCount - index }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="image w-23 h-auto object-fill max-sm:w-16"
              style={{ zIndex: 1 }}
            />
          </div>
        ))}
        <div className="w-[70%] max-md:w-[100%]">
          <h1 className="relative text-7xl max-md:text-5xl font-gothicbold pt-32 max-sm:pt-24 tracking-[-0.04rem]">
            Yugandhara Strategic Holdings
          </h1>
        </div>
        <div className="pt-4 w-[60%] max-xmlg:w-full max-sm:px-3">
          <p className="font-gothicbook text-xl max-md:text-lg">
            Leading the way in event management, sustainable agriculture, luxury
            products, and digital solutions, delivering excellence across global
            industries.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 pt-4 max-sm:gap-2">
          <a href="">
            <button className="flex py-3 px-3 bg-[#111111] text-whiteo font-gothicdemi rounded-3xl max-sm:px-3 max-sm:text-sm">
              About Us
            </button>
          </a>
          <a href="/companies">
            <button className="flex flex-row py-3 px-2 bg-[#FFFFFF] font-gothicdemi rounded-3xl border max-sm:px-2 max-sm:text-sm">
              Products
              <svg
                className="ml-2 w-4 h-4 mt-1 max-sm:mt-0.5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" /> {/* Horizontal line */}
                <path d="M12 5l7 7-7 7" /> {/* Arrowhead */}
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* 30% Part */}
      <div className="w-[25%] overflow-y-hidden overflow-x-hidden max-xmlg:hidden">
        <Marquee cards={cards_one} cards2={cards_two} />
      </div>
      <div className="pt-16 xmlg:hidden">
        <MarqueeResponsive cards={cards_one} cards2={cards_two} />
      </div>
    </section>
  );
};

export default Hero;
