import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = ({ company }) => {
  const { themecolor, mission_mission, mission_commitment } = company;
  const boxRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);


  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const startValue = isMobile ? "top 80%" : "top 50%";

    // Box Animation
    gsap.fromTo(
      boxRef.current,
      {
        x: 20,
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
          trigger: "#mission",
          start: startValue,
        },
      }
    );

    gsap.fromTo(
      box1Ref.current,
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
          trigger: "#mission",
          start: startValue,
        },
      }
    );

    gsap.fromTo(
      box2Ref.current,
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
          trigger: "#mission",
          start: startValue,
        },
      }
    );

    gsap.fromTo(
      text1Ref.current,
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
          trigger: "#mission",
          start: startValue,
        },
      }
    );
    gsap.fromTo(
      text2Ref.current,
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
          trigger: "#mission",
          start: startValue,
        },
      }
    );
  }, []);
  return (
  
    <div className="w-full h-full bg-[#111111] py-10 overflow-hidden" id="mission">
      {/* changed the background color and font color*/}
      <div className="flex flex-col h-full">
        <div className="px-3 py-5 flex items-center justify-center">
          <h1 className=" text-7xl md:*:text-8xl font-gothicmedium text-[#FFFFFF]">Mission</h1>
          <div
            ref={boxRef}
            className="h-3 w-3 self-end mx-2 mb-4"
            style={{ background: themecolor }}
          ></div>
        </div>

        <div className="w-full h-1/2 flex flex-col md:flex-row px-4 md:px-10 ">
          <div className="right md:w-1/2 flex justify-center items-center md:border-b-4 border-slate-400 h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <h1 className=" text-3xl  md:text-5xl font-gothicmedium text-[#898989]">
            impact
              </h1>
              <div
              ref={box1Ref}
                className="h-2 w-2 self-end mx-2 mb-4"
                style={{ background: themecolor }}
              ></div>
            </div>
          </div>
          <div className="right md:w-1/2 flex justify-center border-b-4 md:border-slate-400 items-center h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <p 
              ref={text1Ref}
               className="text-xl md:text-3xl font-gothicmedium text-[#ffffff] ">
                {mission_mission}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 flex flex-col md:flex-row px-4 md:px-10 ">
          <div className="right md:w-1/2 flex justify-center items-center  h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <h1 className=" text-3xl  md:text-5xl font-gothicmedium text-[#898989]">
               commitment
              </h1>
              <div
              ref={box2Ref}
                className="h-2 w-2 self-end mx-2 mb-4"
                style={{ background: themecolor }}
              ></div>
            </div>
          </div>
          <div className="right md:w-1/2 flex justify-center  items-center h-full">
            <div className="px-3 py-5 flex items-center justify-center">
              <p
               ref={text2Ref}
               className="text-xl md:text-3xl font-gothicmedium text-[#ffffff]">
                {mission_commitment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
