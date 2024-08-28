import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ company }) => {
  const {
    name,
    themecolor,
    card_one_title,
    card_one_content,
    card_one_image,
    card_two_title,
    card_two_content,
    card_two_image,
    card_three_title,
    card_three_content,
    card_three_image,
  } = company;

  const boxRef = useRef(null);
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const startValue = isMobile ? "top 80%" : "top 50%";

  
    gsap.fromTo(
      boxRef.current,
      {
        x: 300,
        rotate: 720,
        opacity: 0,
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#services",
          start: startValue,
        },
      }
    );

   
    gsap.fromTo(
      cardOneRef.current,
      {
        y: 200, 
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#services",
          start: startValue,
        },
      }
    );

    gsap.fromTo(
      cardTwoRef.current,
      {
        y: 200, 
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#services",
          start: startValue,
        },
      }
    );

    gsap.fromTo(
      cardThreeRef.current,
      {
        y: 200, 
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#services",
          start: startValue,
        },
      }
    );

   
  }, []);

  return (
    <div className="w-full h-auto overflow-hidden" id="services">
      <div className="flex flex-col h-full">
        <div className="px-3 md:px-16 py-5 bg-[#F0F0F0] flex">
          <h1 className=" text-7xl md:*:text-8xl font-gothicmedium">services</h1>
          <div
            ref={boxRef}
            className="h-3 w-3 self-end mx-2 mb-4"
            style={{ background: themecolor }}
          ></div>
        </div>
        <div className="flex flex-col md:flex-row h-full mt-1">
          {/* Card One */}
          <div
            className="h-full md:w-1/3 py-10 px-3 md:px-20 md:border-r-4 md:border-[#F0F0F0]"
            ref={cardOneRef} // Reference for the animation
          >
            <div className="h-1/2 md:border-none border-r-4 border-[#F0F0F0] sm:border-none animated-card">
              <h3 className="text-5xl font-gothicmedium text-wrap my-4">
                {card_one_title}
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                {card_one_content}
              </p>
            </div>
            <div className="h-80 max-sm:flex max-sm:justify-center max-sm:items-center mt-10 overflow-hidden">
              <img
                src={card_one_image}
                alt={card_one_title}
                className="h-full w-auto object-cover"
              />
            </div>
          </div>

          {/* Card Two */}
          <div
            className="h-full md:w-1/3 py-10 px-3 md:px-20 md:border-r-4 md:border-[#F0F0F0]"
            ref={cardTwoRef} // Add ref for card two
          >
            <div className="h-1/2 md:border-none border-r-4 border-[#F0F0F0] sm:border-none">
              <h3 className="text-5xl font-gothicmedium text-wrap my-4">
                {card_two_title}
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                {card_two_content}
              </p>
            </div>
            <div className="h-80 max-sm:flex max-sm:justify-center max-sm:items-center mt-10 overflow-hidden">
              <img
                src={card_two_image}
                alt={card_two_title}
                className="w-auto h-full object-cover"
              />
            </div>
          </div>

          {/* Card Three */}
          <div
            className="h-full md:w-1/3 py-10 px-3 md:px-20 md:border-r-4 md:border-[#F0F0F0]"
            ref={cardThreeRef} // Add ref for card three
          >
            <div className="h-1/2 md:border-none border-r-4 border-[#F0F0F0] sm:border-none">
              <h3 className="text-5xl font-gothicmedium text-wrap my-4">
                {card_three_title}
              </h3>
              <p className="text-xl text-slate-500 font-gothicdemi">
                {card_three_content}
              </p>
            </div>
            <div className="h-80 max-sm:flex max-sm:justify-center max-sm:items-center mt-10 overflow-hidden">
              <img
                src={card_three_image}
                alt={card_three_title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
