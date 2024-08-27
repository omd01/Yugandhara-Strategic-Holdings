import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Expertise = ({ company }) => {
  const {
    expertise_p_one,
    expertise_p_two,
    expertise_p_three,
    themecolor,
    expertise_image,
    expertise_one,
    expertise_two,
    expertise_three,
  } = company;

  const paragraphRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const startValue = isMobile ? "top 50%" : "top 80%";
    console.log(isMobile);
    // Animate the paragraph
    gsap.fromTo(
      paragraphRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#expertise",
         
        },
      }
    );

    // Animate each card
    cardRefs.current.forEach((cardRef, index) => {
      gsap.fromTo(
        cardRef,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: "#expertise",
           
          
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-auto mt-10" id="expertise">
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="py-12">
          <span className="text-lg border rounded-full px-5 py-2 font-gothicdemi">
            Our Expertise
          </span>
        </div>
        <div className="md:w-3/4 max-sm:px-2 mb-10 flex justify-center items-center flex-col">
          <p
            ref={paragraphRef}
            className="text-center text-4xl md:text-6xl font-gothicdemi md:leading-[3.7rem]"
          >
            <span>
              {expertise_p_one}
              <span style={{ color: themecolor }}>{expertise_p_two}</span>
              {expertise_p_three}
            </span>
          </p>

          <div className="md:w-3/4 h-full my-5 md:my-10">
            <img src={expertise_image} alt="" className="h-full w-full" />
          </div>

          <div className="flex justify-around flex-col md:flex-row my-9 md:ml-28">
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="md:w-1/3 mx-2 border-b-4 border-[#F0F0F0]"
            >
              <div className="px-3 py-2 flex">
                <h1 className="text-4xl font-gothicmedium text-wrap">01</h1>
                <div
                  className="h-2 w-2 self-end mx-2 mb-2"
                  style={{ background: themecolor }}
                ></div>
              </div>
              <h2 className="text-4xl px-3 py-5 font-gothicmedium text-wrap">
                {expertise_one}
              </h2>
              <div
                className="h-10 w-10 mx-3 mb-10 flex justify-center items-center"
                style={{ background: themecolor }}
              >
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-2/3"
                />
              </div>
            </div>
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="md:w-1/3 mx-2 border-b-4 border-[#F0F0F0]"
            >
              <div className="px-3 py-2 flex">
                <h1 className="text-4xl font-gothicmedium text-wrap">02</h1>
                <div
                  className="h-2 w-2 self-end mx-2 mb-2"
                  style={{ background: themecolor }}
                ></div>
              </div>
              <h2 className="text-4xl px-3 py-5 font-gothicmedium">
                {expertise_two}
              </h2>
              <div
                className="h-10 w-10 mx-3 mb-10 flex justify-center items-center"
                style={{ background: themecolor }}
              >
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-2/3"
                />
              </div>
            </div>
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className="md:w-1/3 mx-2 border-b-4 border-[#F0F0F0]"
            >
              <div className="px-3 py-2 flex">
                <h1 className="text-4xl font-gothicmedium">03</h1>
                <div
                  className="h-2 w-2 self-end mx-2 mb-2"
                  style={{ background: themecolor }}
                ></div>
              </div>
              <h2 className="text-4xl px-3 py-5 font-gothicmedium">
                {expertise_three}
              </h2>
              <div
                className="h-10 w-10 mx-3 mb-10 flex justify-center items-center"
                style={{ background: themecolor }}
              >
                <img
                  src="https://res.cloudinary.com/dqbwa8i3y/image/upload/v1724594570/Yuga/right-arrow_pbnvnv.svg"
                  alt=""
                  className="w-2/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
