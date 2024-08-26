import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = ({ company }) => {
  const { name, slug, logo, video, aboutLogo, themecolor } = company;

  useEffect(() => {
    
    gsap.fromTo(
      '.hero-title', 
      { opacity: 0, y: 60 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' } 
    );
  }, []);

  return (
    <div className="h-screen bg-black" id="hero">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full opacity-40"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex  w-full h-full">
        <div className="h-full  flex-col border-r bg-white/50 backdrop-blur-3xl border-slate-400 hidden md:flex">
          {/* changed to justify-around */}
          <div className="h-1/2 border-b border-slate-400 flex flex-col justify-around">
            <div>
              <a href="/">
                {" "}
                <img src={logo} alt={name} className="w-52 px-3" />
              </a>
            </div>
            <div>
              {/* removed the my-8 due to problem in responsivity */}
              <ul className="font-gothicmedium text-lg px-2 text-center">
                <a href="#aboutus"></a>
                <li className="text-slate-900 p-1 underline cursor-pointer">
                  About Us
                </li>
                <a href="#services">
                  <li className="text-black p-1 cursor-pointer">Services</li>
                </a>
                <a href="#expertise">
                  <li className="text-black p-1 cursor-pointer">
                    Our Expertise
                  </li>
                </a>
                <a href="#mission">
                  {" "}
                  <li className="text-black p-1 cursor-pointer">Our Mission</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="h-1/2 py-6 flex items-center  flex-col">
            <p className="text-black p-1 cursor-pointer self-center mb-4">
              Our Socials
            </p>
            <div className="flex flex-col">
              <div className="w-14 h-14 cursor-pointer hover:bg-black text-black hover:text-white border border-black rounded-full mb-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </div>
              <div className="w-14 h-14 cursor-pointer hover:bg-black text-black hover:text-white border border-black  rounded-full mb-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a6 6 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.55.55 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-14 h-14 cursor-pointer hover:bg-black text-black hover:text-white border border-black rounded-full mb-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="1.8rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full font-gothicbold max-md:justify-center">
          <div className="md:h-1/2 border-b border-slate-400 flex flex-col justify-end p-4 md:p-11  relative">
            <div
              className="absolute h-6 w-6 -bottom-3 -left-3"
              style={{ background: themecolor }}
            ></div>
            <h1 className="max-sm:text-4xl text-7xl font-bold text-white drop-shadow-lg shadow-white">
              Welcome to,
            </h1>
            <h1
              className="hero-title max-sm:text-4xl text-7xl font-bold text-white drop-shadow-lg"
              style={{ color: themecolor }}
            >
              {name}
            </h1>
          </div>
          <div className=" max-md:flex py-6 hidden items-center flex-col">
            <p className="text-white p-1 text-lg cursor-pointer self-center mb-4">
              Our Socials
            </p>
            <div className="flex ">
              <div className="w-14 h-14 hover:bg-slate-100 text-slate-100 hover:text-black border rounded-full mx-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </div>
              <div className="w-14 h-14 hover:bg-slate-100 text-slate-100 hover:text-black border  rounded-full mx-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a6 6 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.55.55 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
                    />
                  </g>
                </svg>
              </div>
              <div className="w-14 h-14 hover:bg-slate-100 text-slate-100 hover:text-black border rounded-full mx-2 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="1.8rem"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
