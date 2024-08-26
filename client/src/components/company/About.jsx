import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ company }) => {
  const { about_p_one, about_p_two, about_p_three, themecolor } = company;
  useEffect(() => {
   
    const isMobile = window.innerWidth <= 768;
    const startValue = isMobile ? "top 80%" : "top 40%";

    gsap.fromTo(
      ".about-text", 
      { opacity: 0, y: 60 }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#aboutus", 
          start: startValue, 
        },
      }
    );
  }, []);
  return (
    <div className="w-full h-full relative " id="aboutus">
      <div className=" h-2/3 w-full flex items-center justify-center flex-col">
        <div className="py-12">
          <span className="text-lg border rounded-full px-5 py-2 font-gothicdemi ">
            About Us
          </span>
        </div>
        <div className=" md:w-3/4 max-sm:px-2">
          <p className="text-center  text-4xl md:text-6xl font-gothicdemi md:leading-[3.7rem] about-text">
            <span className="">
              {about_p_one}
              <span style={{ color: themecolor }}>{about_p_two}</span>
              {about_p_three}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        
        <svg
          width="400"
          height="300"
          viewBox="0 0 310 185"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <g clip-path="url(#clip0_3_13)">
            <path
              d="M-127.58 232.79C12.4978 235.668 68.9647 176.382 123.68 118.933L123.676 118.93C181.723 57.9823 237.818 -0.915269 388.101 17.3314L387.774 20.7746C238.936 2.70368 183.356 61.0611 125.842 121.449L125.836 121.448C70.6646 179.377 13.7282 239.158 -127.625 236.254L-127.579 232.79L-127.58 232.79Z"
              fill="url(#paint0_linear_3_13)"
            />
            <path
              d="M-127.552 237.522C11.2543 248.465 70.0757 192.925 127.074 139.108C188.029 81.5533 246.935 25.934 396.419 52.9341L395.492 59.4658C248.728 32.9569 190.856 87.6003 130.971 144.145C73.0599 198.825 13.2962 255.254 -127.967 244.116L-127.552 237.523L-127.552 237.522Z"
              fill="url(#paint0_linear_3_13)"
            />
            <path
              d="M-127.404 242.274C10.1667 261.218 71.3311 209.393 130.599 159.176C194.479 105.05 256.213 52.7447 404.878 88.571L403.067 98.1174C258.362 63.2451 198.211 114.209 135.97 166.947C75.3071 218.346 12.7038 271.389 -128.43 251.954L-127.405 242.274L-127.404 242.274Z"
              fill="url(#paint0_linear_3_13)"
            />
            <path
              d="M-127.102 247.045C9.25186 273.927 72.7323 225.799 134.245 179.161C201.069 128.496 265.648 79.5343 413.5 124.266L410.479 136.712C267.835 93.5554 205.428 140.871 140.849 189.834C77.4088 237.933 11.9381 287.571 -129.048 259.775L-127.102 247.045Z"
              fill="url(#paint0_linear_3_13)"
            />
            <path
              d="M-126.63 251.868C8.49794 286.621 74.2731 242.16 138.009 199.079C207.809 151.897 275.263 106.302 422.247 160.001L417.768 175.265C277.13 123.884 212.495 167.574 145.612 212.784C79.3724 257.558 11.0139 303.765 -129.834 267.541L-126.63 251.867L-126.63 251.868Z"
              fill="url(#paint0_linear_3_13)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3_13"
              x1="179.62"
              y1="54.6745"
              x2="158.661"
              y2="202.762"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color={themecolor} />
              <stop offset="0.54902" stop-color={themecolor} />
              <stop offset="1" stop-color={themecolor} />
            </linearGradient>

            <clipPath id="clip0_3_13">
              <rect width="313" height="208" fill="white" />
            </clipPath>
          </defs>
        </svg> 
      </div>
    </div>
  );
};

export default About;
