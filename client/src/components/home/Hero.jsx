import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import Marquee from "./marquee/Marquee";
import MarqueeResponsive from "./marquee/MarqueeResponsive";
import { cards_one, cards_two, comp_icons } from "../../assets";
import { setHoveredCard, clearHoveredCard } from "../../redux/hoverSlice";
import "../../styles/hero/hero.css";
import { Link } from "react-router-dom";
import companies from "../../assets/company.json";

const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const ishadow = useRef(null);
  const images = comp_icons;
  const hoveredCard = useSelector((state) => state.hover.hoveredCard);
  const dispatch = useDispatch();
  const imageCount = images.length;

  const [enterTimeout, setEnterTimeout] = useState(null);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = container.querySelectorAll(".image");
    const ishadowElement = ishadow.current;

    gsap.set(imageElements, { opacity: 0, scale: 0.7 });
    gsap.set(ishadowElement, { opacity: 0, y: 50 });

    const animateImages = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(imageElements, { opacity: 0, scale: 0.7 });
          gsap.set(ishadowElement, { opacity: 0 });
          animateImages();
        },
      });

      images.forEach((image, index) => {
        const imageElement = imageElements[index];

        tl.to(imageElement, {
          duration: 2,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        }).to(imageElement, {
          duration: 0.4,
          opacity: 0,
          scale: 1.1,
          ease: "power3.in",
        });

        tl.to(
          ishadowElement,
          {
            duration: 0.9,
            opacity: 1,
            y: 0, 
            ease: "power3.out",
          },
          `-=${0.85}` 
        ).to(
          ishadowElement,
          {
            duration: 0.3,
            opacity: 0,
            y: 20, 
            ease: "power3.in",
          },
          `-=${0.3}`
        );
      });
    };


    animateImages();
  }, [images]);

  useEffect(() => {
    const container = containerRef.current;
    const yugaText = document.querySelector(".yuga-text");
    const text = yugaText.textContent;
    yugaText.innerHTML = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");

    const chars = yugaText.querySelectorAll("span");
    const yugaSubtext = container.querySelector(".yuga-subtext");
    const yugaButtons = container.querySelectorAll(".yuga-btn, .yuga-btn2");
    const currentHref = window.location.pathname;

    if (currentHref === "/") {
      const tl = gsap.timeline();

      tl.fromTo(
        chars,
        {
          x: "-200%", 
          opacity: 0,
        },
        {
          x: "0%", 
          opacity: 1, 
          stagger: 0.05,
          duration: 0.6, 
          ease: "power3.out", 
        }
      )
        .fromTo(
          yugaSubtext,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.9" 
        )
        .fromTo(
          yugaButtons,
          { y: "250%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }
  }, []);

  useEffect(() => {
    if (hoveredCard) {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.5, x: 350, opacity: 0 }, 
        {
          scale: 1,
          x: 0,
          opacity: 1,
          duration: 0.5, 
          ease: "power2.out",
        }
      );
    }
  }, [hoveredCard]);

  const handleMouseEnter = (card) => {
    if (enterTimeout) {
      clearTimeout(enterTimeout);
    }

    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }

    const timeoutId = setTimeout(() => {
      dispatch(setHoveredCard(card));
    }, 100);

    setEnterTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    if (enterTimeout) {
      clearTimeout(enterTimeout);
    }

    const timeoutId = setTimeout(() => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          scale: 0.2,
          x: 350,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            dispatch(clearHoveredCard());
          },
        });
      } else {
        dispatch(clearHoveredCard());
      }
    }, 300); 
    setLeaveTimeout(timeoutId);
  };

  return (
    <section className="hero-section flex flex-row max-xmlg:flex-col h-auto">
      {/* 70% Part */}
      <div
        className="w-[75%] flex flex-col items-center mt-16 max-sm:mt-12 text-center max-xmlg:w-full"
        ref={containerRef}
      >
        <div className="w-23 h-23 bg-[#F2F2F2] absolute rounded-3xl top-[10rem] left-24 shadow-md z-[100]"></div>
        {hoveredCard && (
          <div
            ref={cardRef}
            className="absolute top-[8%] w-[55%] h-[80%] z-50 rounded-[2rem] bg-white/30 backdrop-blur-3xl shadow-lg ring-1 ring-black/5 p-4 flex flex-col justify-center items-center"
            onMouseEnter={() => handleMouseEnter(hoveredCard)} // Maintain hover state
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={hoveredCard.logo}
              alt="Hovered Card Logo"
              className="w-40 h-auto object-cover  "
            />

            {/* Content container with padding to accommodate logo */}
            <div className="">
              <div className="flex flex-col justify-center items-center text-center">
                {/* Other card content can go here, if needed */}
                <div className="text-4xl font-gothicmedium my-3">
                  <h1>{hoveredCard.title}</h1>
                </div>
                <div className=" text-lg px-16 font-gothicbook">
                  <p>
                    {hoveredCard.desc}
                  </p>
                </div>
              </div>
              {/* Read More button centered at the bottom */}
              <div className="">
              <a href={`/company/${hoveredCard.slug}`}>
                  <button className="py-2 px-6 my-4 bg-[#111111] text-white rounded-full hover:bg-[#333333]">
                    Explore
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        <div
          ref={ishadow}
          className="w-[3rem] h-[3rem] bg-[#F2F2F2] absolute flex top-[3.6rem] rounded-xl items-center justify-center  shadow-md"
        ></div>
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
          <h1 className="yuga-text relative text-7xl max-md:text-5xl font-gothicbold pt-32 max-sm:pt-24 tracking-[-0.05rem] p-2">
            Yugandhara Strategic Holdings
          </h1>
        </div>
        <div className="pt-4 w-[60%] max-xmlg:w-full max-sm:px-3">
          <p className="yuga-subtext font-gothicbook text-xl max-md:text-lg">
            Leading the way in event management, sustainable agriculture, luxury
            products, and digital solutions, delivering excellence across global
            industries.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 pt-4 max-sm:gap-2">
          <a href="">
            <button className="yuga-btn flex py-3 px-5 bg-[#111111] text-[#F2F2F2] font-gothicdemi rounded-3xl max-sm:px-3 max-sm:text-sm">
              About Us
            </button>
          </a>
          <a href="/companies">
            <button className="yuga-btn2 flex flex-row py-3 px-5  bg-[#FFFFFF] font-gothicdemi rounded-3xl border max-sm:px-2 max-sm:text-sm">
              Companies
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
        <Marquee cards={cards_one} cards2={cards_two} hoveredCard={cardRef} />
      </div>
      <div className="pt-16 xmlg:hidden">
        <MarqueeResponsive cards={cards_one} cards2={cards_two} />
      </div>
    </section>
  );
};

export default Hero;
